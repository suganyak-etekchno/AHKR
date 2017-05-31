<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlltableTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('companies', function(Blueprint $table) {
                    
                    $table->charset = 'utf8'; 
                    $table->collation = 'utf8_unicode_ci';
                    
                    $table->increments('id');
		    $table->integer('company_id')->unique();
		    $table->string('company_name', 250);
		    $table->string('branch', 250);
		    $table->string('status', 250);
                    $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->softDeletes();
                    $table->unique( array('company_name','branch') );
		
		});

		Schema::create('keyplace', function(Blueprint $table) {	
                    
                    $table->charset = 'utf8'; 
                    $table->collation = 'utf8_unicode_ci';
                    
                    
		    $table->increments('id');
		    $table->integer('product_id');
		    $table->integer('door_no');
		    $table->integer('row_no');
		    $table->string('mobile_no', 250);
		    $table->string('key_status', 250);
		    $table->dateTime('datetime');
                    $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->softDeletes();
                    
                    
		
		});
////
//
////
		Schema::create('products', function(Blueprint $table) {
                    $table->charset = 'utf8'; 
                    $table->collation = 'utf8_unicode_ci';
		    $table->increments('id');
		    $table->string('product_name', 250)->unique();
		    $table->integer('door_count');
		    $table->integer('row_count');
		    $table->dateTime('manufactured_date');
		    $table->string('status', 250);		
		    $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->softDeletes();
		
		});
////
		Schema::create('sales', function(Blueprint $table) {	
                    $table->charset = 'utf8'; 
                    $table->collation = 'utf8_unicode_ci';
		    $table->integer('id');
		    $table->integer('product_id');
		    $table->integer('company_id');
		    $table->string('branch', 250);
		    $table->dateTime('date');
		    $table->integer('keybox_position');		
		    $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->softDeletes();                    
                    $table->unique( array('product_id','company_id','branch') );
		
		});
//		
		Schema::create('users', function(Blueprint $table) {	
                    $table->charset = 'utf8'; 
                    $table->collation = 'utf8_unicode_ci';
                    
		    $table->increments('id');
		    $table->string('user_name', 250);
		    $table->string('password', 250);
	            $table->string('email', 250)->unique();
		    $table->string('mobile', 20);
		    $table->string('user_level', 20);
		    $table->string('created_by', 250);
		    $table->string('status', 250);
		    $table->string('remember_token', 100)->default(null);
		    $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                    $table->softDeletes();                    
                    $table->unique( array('user_name','email') );
		
		});
                
                DB::table('users')->insert([
                    'user_name' => 'admin',                   
                    'password' => bcrypt('test'),
                    'email' => 'admin@etekchnoservices.com',                    
                    'mobile' => '1234567895',
                    'user_level' => 'super_admin',
                    'created_by' => 'super_admin',
                    'status' => '1',
                    'remember_token' => ''
                    
                ]
                );


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
		Schema::drop('companies');
		Schema::drop('keyplace');		
		Schema::drop('products');
		Schema::drop('sales');		
		Schema::drop('users');

    }
}
