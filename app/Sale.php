<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
     public $timestamps = false;
    
    
    protected $table = 'sales';
      
      
    protected $fillable = [
        'product_id','company_id','date','branch','keybox_position'
    ];
}
