<?php

namespace App\Http\Controllers\auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Role;


class AdminController extends Controller
{
    
public function approveByRole($userId, $roleName)
{
    $user = User::findOrFail($userId);

    $parts = explode('_', $roleName);
    if (count($parts) < 2) {
        return response()->json(['error' => 'Invalid role format'], 400);
    }

    $companyKey = strtolower($parts[0]);
    $pureRole = strtolower(implode(' ', array_slice($parts, 1)));

    $company = Company::whereRaw('LOWER(name) LIKE ?', ['%' . $companyKey . '%'])->first();
    $role = Role::whereRaw('LOWER(name) = ?', [$pureRole])->first();

    if (!$company || !$role) {
        return response()->json(['error' => 'Company or Role not found'], 404);
    }

    //  JSON data
    $approvalByRole = $user->approval_progress_by_role
        ? json_decode($user->approval_progress_by_role, true)
        : [
            'greenland' => [
                'finance manager' => false,
                'md' => false,
                'chairman' => false,
            ],
            'iconic' => [
                'md' => false,
                'chairman' => false,
            ],
        ];

    // if  role  approved →  update  
    if (isset($approvalByRole[$companyKey][$pureRole]) && $approvalByRole[$companyKey][$pureRole] === true) {
        return response()->json([
            'message' => 'Role already approved',
            'progress' => $user->approval_progress,
            'status' => $user->approval_status,
            'approval_progress_by_role' => $approvalByRole,
        ]);
    }

    //  Role approve mark 
    $approvalByRole[$companyKey][$pureRole] = true;

    //  Progress update (+20% per new role)
    $user->approval_progress = min(100, $user->approval_progress + 20);

    //   role approved then status update
    $allRolesApproved = collect($approvalByRole)
        ->flatMap(fn($roles) => $roles)
        ->filter(fn($v) => $v === false)
        ->isEmpty();

    $user->approval_status = $allRolesApproved ? 'approved' : 'pending';

    //  JSON column update
    $user->approval_progress_by_role = json_encode($approvalByRole);
    $user->save();

    return response()->json([
        'message' => 'Approval updated successfully',
        'progress' => $user->approval_progress,
        'status' => $user->approval_status,
        'approval_progress_by_role' => $approvalByRole,
    ]);
}



   public function pendingUsers()
{
    $users = User::where('approval_status', '!=', 'approved')
    ->where('approval_status', '!=', 'rejected')->get();

    foreach ($users as $usr) {
        $usr->approval_progress_by_role = $usr->approval_progress_by_role
            ? json_decode($usr->approval_progress_by_role, true)
            : [
                'finance manager' => false,
                'md' => false,
                'chairman' => false,
            ];
    }

    return response()->json(['users' => $users]);
}


    public function approvedUsers()
    {
     $users   = User::where('approval_status', 'approved')->get();
         return  response()->json(['message'=>'Pending Users','users' => $users]);
    }

    public function rejectUser($userId)
    {
        $user = User::findOrFail($userId);
        $user->approval_status = 'rejected';
        $user->approval_progress = 0;
        $user->save();

        return response()->json(['message' => 'User has been rejected']);
    }
}
