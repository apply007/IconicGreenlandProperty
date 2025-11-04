<?php

namespace App\Http\Controllers\roles;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
     public function store(Request $request)
    {
        $request->validate([
       
            'name' => 'required|string|max:255|unique:roles,name',
        ]);

        $role = Role::create([
       
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Role created successfully',
            'role' => $role
        ]);
    }

    public function destroy($id)
{
    $role = Role::find($id);

    if (!$role) {
        return response()->json(['message' => 'Role not found'], 404);
    }

    // ✅ Delete role from roles table
    $role->delete();

    // ✅ Optional: related pivot entries (company_user_role) will auto delete if foreign key cascade is set
    //  cascade
    // \DB::table('company_user_role')->where('role_id', $id)->delete();

    return response()->json([
        'message' => 'Role deleted successfully',
        'role_id' => $id
    ]);
}

}
