<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   // public $timestamps = false;
    
    
    protected $table = 'products';
      
      
    protected $fillable = [
        'product_name', 'door_count','manufactured_date', 'status'
        //row_count
    ];
    
    // protected $guarded = ['id', 'password'];
}
