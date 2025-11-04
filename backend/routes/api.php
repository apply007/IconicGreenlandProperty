<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\auth\AdminController;
use App\Http\Controllers\roles\RoleController;
use App\Http\Controllers\roles\UserRoleController;
use App\Http\Controllers\Auth\GoogleAuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'getDashboardData']);
// });

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Forgot and reset password(Mail)
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);

// OTP Verification

Route::post('/send-otp', [AuthController::class, 'sendOtp']);
Route::post('/verify-otp', [AuthController::class, 'verifyOtp']);
Route::post('/reset-otp-password', [AuthController::class, 'resetOtpPassword']);



// approval
// Approve user by specific role
Route::post('/approve/{userId}/{role}', [AdminController::class, 'approveByRole'])->middleware('auth:sanctum');
Route::get('/users/pending', [AdminController::class, 'pendingUsers'])->middleware('auth:sanctum');
Route::get('/users/approved', [AdminController::class, 'approvedUsers'])->middleware('auth:sanctum');
Route::post('/reject/{userId}', [AdminController::class, 'rejectUser'])->middleware('auth:sanctum');
// for testing
Route::get('/users/test', function() {
    return \App\Models\User::where('approval_status', 'pending')->get();
});


// User Role Management
Route::apiResource('/user-roles', UserRoleController::class)->middleware('auth:sanctum');
Route::get('/companies', [UserRoleController::class, 'companies'])->middleware('auth:sanctum') ; // React dropdown
Route::get('/roles', [UserRoleController::class, 'roles'])->middleware('auth:sanctum'); // React roles
Route::get('/users', [UserRoleController::class, 'users'])->middleware('auth:sanctum');// Get all users
Route::get('/users/{email}', [UserRoleController::class, 'show']);// Get all users


// User update route (for Edit User Info modal)
Route::put('/users/{id}', [UserRoleController::class, 'update'])->middleware('auth:sanctum');
// Delete user
Route::delete('/users/{id}', [UserRoleController::class, 'destroy'])->middleware('auth:sanctum');

Route::post('/users/{userId}/roles', [UserRoleController::class, 'addRoles']);
Route::post('/users/{userId}/companies', [UserRoleController::class, 'addCompanies']);


// Role Management
Route::post('/roles', [RoleController::class, 'store'])->middleware('auth:sanctum');
Route::delete('/roles/{id}', [RoleController::class, 'destroy'])->middleware('auth:sanctum');


// google Route

// Route::get('/auth/google', [GoogleAuthController::class, 'redirectToGoogle']);
// Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);

Route::post('/auth/google-token', [GoogleAuthController::class, 'handleGoogleToken']);

// for clear cache
Route::get('/clear-cache', function() {
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    return 'Cache cleared!';
});


