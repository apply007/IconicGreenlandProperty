<?php

namespace App\Http\Controllers\Auth;

use App\Models\Role;
use App\Models\User;
use App\Models\Company;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;
// use Google_Client;

class GoogleAuthController extends Controller
{
    // // Step 1: Redirect user to Google
    // public function redirectToGoogle()
    // {
    //     return Socialite::driver('google')->stateless()->redirect();
    // }

    // // Step 2: Handle callback from Google
    // public function handleGoogleCallback()
    // {
    //     try {
    //         $googleUser = Socialite::driver('google')->stateless()->user();

    //         $user = User::updateOrCreate(
    //             ['email' => $googleUser->getEmail()],
    //             [
    //                 'name' => $googleUser->getName(),
    //                 'google_id' => $googleUser->getId(),
    //                 'password' => bcrypt(Str::random(16)),
    //             ]
    //         );

    //         $token = $user->createToken('auth_token')->plainTextToken;

    //         return response()->json([
    //             'status' => true,
    //             'token' => $token,
    //             'user' => $user,
    //         ]);
    //     } catch (\Exception $e) {
    //         return response()->json([
    //             'status' => false,
    //             'message' => 'Google login failed: '.$e->getMessage(),
    //         ], 500);
    //     }
    // }

   public function handleGoogleToken(Request $request)
{
    $token = $request->input('token');

    if (!$token) {
        return response()->json(['status' => false, 'message' => 'Token is required'], 400);
    }

    $client = new \Google_Client(['client_id' => env('GOOGLE_CLIENT_ID')]);
    $payload = $client->verifyIdToken($token);

    if (!$payload) {
        return response()->json(['status' => false, 'message' => 'Invalid Google token'], 400);
    }

    // Create or update user
    $user = User::updateOrCreate(
        ['email' => $payload['email']],
        [
            'name' => $payload['name'],
            'google_id' => $payload['sub'],
            'password' => bcrypt(Str::random(16)),
            'mobile_number' => '017' . rand(10000000, 99999999),
            'voter_id' => 'V' . rand(100000000, 999999999),
        ]
    );

    // if user  approval_status dont have then set pending
    if (!$user->approval_status) {
        $user->approval_status = 'pending';
        $user->save();
    }

    // Optional: default role set from roles() relation 
if ($user->roles()->count() === 0) {
    $defaultRole = Role::where('name', 'user')->first();
    $defaultCompany = Company::where('name', 'Iconic Unity')->first(); //  default company

    if ($defaultRole && $defaultCompany) {
        $user->roles()->attach($defaultRole->id, [
            'company_id' => $defaultCompany->id, // ✅ Required field
        ]);
    }
}

    // Google profile photo save
    if (isset($payload['picture'])) {
        try {
            $response = Http::get($payload['picture']);
            if ($response->successful()) {
                $filename = 'profile_pictures/google_' . uniqid() . '.jpg';
                Storage::disk('public')->put($filename, $response->body());
                $user->profile_photo_path = 'storage/' . $filename;
                $user->save();
            }
        } catch (\Exception $e) {
            // silently fail
        }
    }

    // 🔍 Approval check
    if ($user->approval_status !== 'approved') {
        return response()->json([
            'status' => true,
            'message' => 'Your account is not approved yet!',
            'user' => $user
        ], 200);
    }

    // ✅ Approved হলে token create করে দাও
    $authToken = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'status' => true,
        'user' => $user->load('roles'),
        'token' => $authToken,
    ], 200);
}

}
