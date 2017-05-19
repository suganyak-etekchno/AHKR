<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Input;
use Session;
use Illuminate\Support\Facades\Auth;
use App\User;
class AdminController extends Controller
{
    
    public function __construct()
    {
        
      
        $this->middleware('auth');
    }

    
     public function page()
    {
          //Auth::user()->name ;
         // // author not admin else admin page return view('User.user');
            if (Auth::check()){
                $user_level = Auth::user()->user_level;
                if($user_level == 'super_admin' ){                   
                    return view('Admin.adminpage');
               }else{
                      return redirect('home');                   
               }
            }
              
              
               

        
         
    }
    public function add()
    {
  
         return view('Admin.register');
         
    }
    
    //insert
    public function insert()
    {
        $input = Input::all();
       
        $name = $input['name'];
        $email = $input['email'];
        $password = $input['password'];
        $status = $input['status'];        
        $user_level = $input['user_level'];
        $mobile = $input['mobile'];
        $created_by = 'super_admin';
        
        $data = array(
            'user_name'=>$name,
            'email'=>$email,
            'password'=>bcrypt($password),
            'status'=>$status,
            'user_level'=>$user_level,
            'mobile'=>$mobile,
            'created_by'=>$created_by
        );     
        
       
        $users =  DB::table('users')->insert($data);
        // Session::flash('message', 'This is a message!'); 
        return 1;


    }
    
    public function view()
    {
        $users = User::all();
//        echo "<pre>";
//        print_r($users);
//        echo "</pre>";
        return view('Admin.view')->with('users', $users);
       
         
    }
    
     public function edit()
    {
        $users = User::all();

      //  return view('Admin.view')->with('users', $users);
       
         
    }
    
}
