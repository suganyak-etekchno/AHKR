<?php

namespace App\Http\Controllers\Product;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Input;
use Session;
use Illuminate\Support\Facades\Auth;
class ProductController extends Controller
{
    
//    public function __construct()
//    {
//        
//      
//        $this->middleware('auth');
//    }

    
     public function add()
    {         
            if (Auth::check()){
                $user_level = Auth::user()->user_level;
                if($user_level == 'super_admin' ){                   
                     return view('Product.register');
               }else{
                      return redirect('home');                   
               }
            }
    }
    public function sale()
    {         
            if (Auth::check()){
                $user_level = Auth::user()->user_level;
                if($user_level == 'super_admin' ){                   
                     return view('Product.selling');
               }else{
                      return redirect('home');                   
               }
            }
    }
    
    public function insert()
    {         
        $input = Input::all();   
        $name = $input['name'];
        $door = $input['door_count'];
        $row = $input['row_count'];
        $mdate = date('Y-m-d',strtotime($input['mdate']));        
        $status = $input['status'];         
        
        $data = array(
            'name'=>$name,
            'door_count'=>$door,           
            'row_count'=>$row, 
            'manufactured_date'=>$mdate, 
            'status'=>$status
        );     
        $product =  DB::table('product')->insert($data);
        return 1;
    }
    
   public function selling()
    {         
        $input = Input::all();  
        $sdate = date('Y-m-d',strtotime($input['sdate'])); 
        $pro_id = $input['pro_id'];
        $cmp_id = $input['cmp_id'];
        $branch = $input['branch'];               
        $position = $input['key_position'];         
        
        $data = array(
            'product_id'=>$pro_id,
            'company_id'=>$cmp_id,           
            'branch'=>$branch, 
            'sales_on'=>$sdate, 
            'keybox_position'=>$position
        );     
        $sales =  DB::table('sales')->insert($data);
        return 1;
    }
   
}
