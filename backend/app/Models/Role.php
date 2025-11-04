<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    protected $guarded = [];
   public function users()
    {
        return $this->belongsToMany(User::class, 'company_user_role')
                    ->withPivot('company_id')
                    ->withTimestamps();
    }

       // 🔹 Relation: Role ↔ Companies (through same pivot)
    public function companies()
    {
        return $this->belongsToMany(Company::class, 'company_user_role')
                    ->withPivot('user_id')
                    ->withTimestamps();
    }
}
