<?php

namespace App\Http\Controllers\roles;

use App\Models\Role;
use App\Models\User;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
         public function users(Request $request)
    {
         // user shown (default 5)
    $perPage = $request->get('per_page', 5); 

    // paginate() 
    $users = User::paginate($perPage);

        //  user 
        // $users = User::all();
        return response()->json($users);
    }




  public function companies()
    {
        return response()->json(Company::all());
    }

   
public function roles(Request $request)
{
     $companyName = $request->query('company'); // ?company=Iconic Unity

    // company id find
    $companyId = Company::where('name', $companyName)->value('id');

    if (!$companyId) {
        // company not found, return all roles
        return response()->json(Role::all());
    }

    // ✅ condition-wise default roles
    // if ($companyName === 'Iconic Unity Group') {
        $roles = [];
    // }

   // ✅ fetch newly added roles from roles table which are not in default hard-coded
    $defaultRoleIds = array_column($roles, 'id');

    $newRoles = Role::whereNotIn('id', $defaultRoleIds)->get(['id', 'name'])->toArray();

    $roles = array_merge($roles, $newRoles);

    return response()->json($roles);


}


    // Save user companies + roles
    public function store(Request $request)
{
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'companies' => 'required|array',
        'companies.*.company_id' => 'required|exists:companies,id',
        'companies.*.roles' => 'required|array',
        'companies.*.roles.*' => 'exists:roles,id'
    ]);

    $user = User::findOrFail($request->user_id);

    // Clear old roles
    $user->roles()->detach();

    $autoApproveRoleNames = ['md', 'chairman', 'finance manager'];
    $shouldApprove = false;

    // Attach new roles
    foreach ($request->companies as $company) {
        $companyId = $company['company_id'];
        foreach ($company['roles'] as $roleId) {
            $role = Role::find($roleId);

            if ($role && in_array(strtolower($role->name), $autoApproveRoleNames)) {
                $shouldApprove = true;
            }

            $user->roles()->attach($roleId, ['company_id' => $companyId]);
        }
    }

    // ✅ Auto approve logic
    if ($shouldApprove) {
        $user->approval_status = 'approved';
        $user->approval_progress = 100;
    } else {
        $user->approval_status = 'pending';
        $user->approval_progress = 0;
    }

    $user->save();

    return response()->json([
        'message' => 'User roles saved successfully',
        'user' => $user
    ]);
}

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
$email = $request->email;
        // $id = User::where('email', $email)->value('id');
     $user = User::where('email', $email)->first();
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     */
public function update(Request $request, string $id)
{ 
    \Log::info('Incoming file:', ['file' => $request->file('profile_photo_path')]);
    $user = User::find($id);
    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email,' . $user->id,
        'mobile_number' => 'required|regex:/^01[3-9]\d{8}$/',
        'voter_id' => 'required|digits_between:10,17',
        'department' => 'nullable|string|max:255',
        'designation' => 'nullable|string|max:255',
        'profile_photo_path' => 'nullable|image|mimes:jpeg,png,jpg,gif',
    ]);

    // ✅ Update basic info first
    $user->fill($validated);

    // ✅ Handle profile photo if new uploaded
    if ($request->hasFile('profile_photo_path')) {
        $file = $request->file('profile_photo_path');
        $filename = time() . '_' . $file->getClientOriginalName();

        // Delete old photo if exists
        if ($user->profile_photo_path && file_exists(public_path($user->profile_photo_path))) {
            unlink(public_path($user->profile_photo_path));
        }

        $file->move(public_path('images'), $filename);
        $user->profile_photo_path = 'images/' . $filename;
    }

    $user->save();

    return response()->json([
        'message' => 'User updated successfully',
        'user' => $user
    ]);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json([
            'message' => 'User not found'
        ], 404);
    }

    try {
        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully'
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Failed to delete user',
            'error' => $e->getMessage()
        ], 500);
    }
}









}
