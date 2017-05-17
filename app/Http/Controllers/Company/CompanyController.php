<?php

namespace App\Http\Controllers\Company;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Input;
use Session;
use Illuminate\Support\Facades\Auth;
class CompanyController extends Controller
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
                     return view('Company.register');
               }else{
                      return redirect('home');                   
               }
            }
    }
    
    public function insert()
    {         
        $input = Input::all();       
        $name = $input['name'];
        $branch = $input['branch'];
        $status = $input['status'];          
        $data = array(
            'name'=>$name,
            'branch'=>$branch,           
            'status'=>$status
        );     
        $company =  DB::table('company')->insert($data);
        return 1;
    }
    //insert
   
}
