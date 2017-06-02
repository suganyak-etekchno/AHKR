<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keyplace extends Model
{
    public $timestamps = false;
    
    
    protected $table = 'keyplace';
      
      
    protected $fillable = [
        'product_id','door_no','row_no','mobile_no','	key_status'
    ];
}
