<?php

namespace App\Models;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $guarded = [];
        public function users()
    {
        return $this->belongsToMany(User::class)
                    ->withPivot('role_id')
                    ->withTimestamps();
    }

    
    // 🧩 Relation: Company ↔ Roles
public function roles()
{
    return $this->belongsToMany(Role::class, 'company_user_role')
                
                ->withPivot('user_id')
                ->withTimestamps();
}
}
