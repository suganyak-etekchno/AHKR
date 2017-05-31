<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    
    protected $table = 'companies';
    
    
     protected $fillable = [
        'company_name', 'branch', 'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
//    protected $hidden = [
//        'password', 'remember_token',
//    ];
}
