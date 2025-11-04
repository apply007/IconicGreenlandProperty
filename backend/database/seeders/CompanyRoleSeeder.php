<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Company;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CompanyRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // //  Fixed Companies
        $fixedCompanies = [
            ['id' => 1, 'name' => 'Iconic Unity'],
            ['id' => 2, 'name' => 'Iconic Greenland Property Ltd'],
            ['id' => 3, 'name' => 'Iconic Express Ltd'],
            ['id' => 4, 'name' => 'Iconic Holidays'],
            ['id' => 5, 'name' => 'Iconic Furniture Ltd'],
            ['id' => 6, 'name' => 'Iconic Digital Solutions'],
            ['id' => 7, 'name' => 'Iconic Soft'],
            ['id' => 8, 'name' => 'Iconic Hajj'],
            ['id' => 9, 'name' => 'Iconic Shikhon'],
            ['id' => 10, 'name' => 'Iconic Motors'],
        ];

        foreach ($fixedCompanies as $company) {
            Company::updateOrCreate(
                ['id' => $company['id']],
                ['name' => $company['name']]
            );
        }

        // Fixed Roles per company
        $fixedRoles = [
            'Iconic Unity' => [
                'Chairman', 'MD', 'Investor', 'Share Holder', 'Director', 'User','Admin'
            ],
            'Iconic Greenland Property Ltd' => [
                'Chairman', 'MD', 'Investor', 'Share Holder', 'Director', 'User','Admin'
            ],
        ];

        foreach ($fixedRoles as $companyName => $roleNames) {
            $companyId = Company::where('name', $companyName)->value('id');
            if (!$companyId) continue;

            foreach ($roleNames as $index => $roleName) {
                Role::updateOrCreate(
                    [
                    
                        'name' => $roleName
                    ],
                    []
                );
            }
        }

        // ✅ Optionally, you can seed roles for other DB companies if needed
        // Example: Role::create(['company_id'=>..., 'name'=>'Custom Role']);
    
    }
}
