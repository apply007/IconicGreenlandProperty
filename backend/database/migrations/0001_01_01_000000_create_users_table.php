<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();    
            $table->string('password');
         
            $table->string('role')->default('user');
            $table->string('department')->default('It');
            $table->string('designation')->default('Developer');
            $table->string('address')->nullable();
          
    // Bangladesh mobile string(11) & voter id string(17)
    $table->string('mobile_number', 11)->unique()->comment('Bangladesh 11 digit mobile number, e.g. 017XXXXXXXX')->default('01700000000');
    $table->string('voter_id', 17)->unique()->comment('Voter/NID (10-17 digits)')->default('00000000000000000');

            $table->string('password_changed_at')->nullable();
       
            // for approval
            $table->string('approval_status')->default('pending'); // pending, partial, approved
            $table->integer('approval_progress')->default(0); // 0 to 100 percentage
 $table->json('approval_progress_by_role')->nullable();
            $table->string('status')->default('active');    
            $table->text('profile_photo_path')->nullable();
             $table->string('google_id')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
