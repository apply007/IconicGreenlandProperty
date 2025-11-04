<?php

namespace App\Http\Controllers\auth;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

use App\Mail\UserRegisteredMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Password;
use Twilio\Rest\Client;
class AuthController extends Controller
{


public function index()
{
    
}

// register with profile picture upload

    public function register(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:6',
        'mobile_number' => 'required|string|size:11|unique:users,mobile_number',
        'voter_id' => 'required|string|unique:users,voter_id',
        'profile_photo_path' => 'nullable|image|mimes:jpeg,png,jpg,gif',
    ]);

    $user = new User();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->mobile_number = $request->mobile_number;
    $user->voter_id = $request->voter_id;
    $user->password = bcrypt($request->password);

    $user->approval_status = 'pending';
    
    $user->approval_progress = 0;


   if ($request->hasFile('profile_photo_path')) {
        //  File rename logic
        $file = $request->file('profile_photo_path');
        $extension = $file->getClientOriginalExtension();

        // Unique filename: user_timestamp_randomstring.extension
        $filename = 'user_' . time() . '_' . uniqid() . '.' . $extension;

        // Save to storage/app/public/profile_pictures
        // $path = $file->storeAs('profile_pictures', $filename, 'public');

        // $user->profile_photo_path = $path;


        // new logic

        // Move to public/images folder
        $file->move(public_path('images'), $filename);
        
        // Store only the relative path
        $user->profile_photo_path = 'images/' . $filename;
    }

    $user->save();

    $token = $user->createToken('auth_token')->plainTextToken;
// Send mail
   try {
    Mail::to($user->email)->send(new UserRegisteredMail($user));
} catch (\Exception $e) {
    \Log::error('Mail send failed: '.$e->getMessage());
}
    
    return response()->json([
        'access_token' => $token,
        'token_type' => 'Bearer',
        'user' => $user
    ]);
}


    //  Login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

         $user = User::with(['companies', 'roles'])->where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        if (!$user->status) {
            return response()->json(['message' => 'Your account is inactive'], 403);
        }

        if ($user->approval_status !== 'approved') {
            return response()->json(['message' => 'Your account is not approved yet!'], 403);
        }
        
        $token = $user->createToken('API Token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token
        ]);
    }

    //  Logout
    public function logout(Request $request)
    {
        $user = $request->user();

        if ($user) {
            $user->currentAccessToken()->delete();
        }

        return response()->json(['message' => 'Logged out successfully']);
    }

   
   //  Forgot Password
public function forgotPassword(Request $request)
{
     $request->validate(['email' => 'required|email']);

    $user = \App\Models\User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'Email not found.'], 404);
    }

    // Generate reset token manually
    $token = Password::createToken($user);

    // Create custom reset URL for React frontend
    $resetUrl = "http://localhost:3000/reset-password/" . $token . "?email=" . urlencode($user->email);

    // Send mail manually
    Mail::raw("Click here to reset your password: {$resetUrl}", function ($message) use ($user) {
        $message->to($user->email)
                ->subject('Reset your password');
    });

    return response()->json(['message' => 'Reset link sent to your email.',"token"=>$token]);
}


    //  Reset Password
    public function resetPassword(Request $request)
    {
       $request->validate([
            'email' => 'required|email',
            'token' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->password = Hash::make($password);
                $user->save();
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return response()->json(['message' => 'Password reset successful!',"status"=>$status]);
        }

        return response()->json(['message' => 'Invalid token or email.'], 400);
    
    }


    public function sendOtp(Request $request)
    {
        $request->validate([
            'mobile_number' => 'required|regex:/^01[3-9]\d{8}$/'
        ]);

        $mobile_number = '+880' . substr($request->mobile_number, 1); // Bangladeshi number
        $otp = rand(100000, 999999);

        // Cache OTP for 5 minutes
        Cache::put('otp_'.$mobile_number, $otp, 300);

        $sid = env('TWILIO_SID');
        $token = env('TWILIO_AUTH_TOKEN');
        $from = env('TWILIO_FROM');

        try {
            $client = new Client($sid, $token);
            $client->messages->create($mobile_number, [
                'from' => $from,
                'body' => "Your OTP is: $otp"
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'OTP sent successfully'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to send OTP: ' . $e->getMessage()
            ], 500);
        }
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'mobile_number' => 'required|regex:/^01[3-9]\d{8}$/',
            'otp' => 'required|digits:6'
        ]);

        $mobile_number = '+88' . substr($request->mobile_number, 1);
        $cachedOtp = Cache::get('otp_'.$mobile_number);

        if($cachedOtp && $cachedOtp == $request->otp){
            Cache::forget('otp_'.$mobile_number); // OTP used
            return response()->json([
                'status' => 'success',
                'message' => 'OTP verified successfully'
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Invalid OTP'
        ], 400);
    }

    public function resetOtpPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required|confirmed|min:6'
        ]);

        $user = User::where('email', $request->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();

        // OTP delete after successful reset
        DB::table('password_resets')->where('email', $request->email)->delete();

        return response()->json(['message' => 'Password reset successfully.']);
    }
}
