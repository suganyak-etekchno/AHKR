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
   //     return view('Admin.view')->with('users', $users);
       
         
    }
    
     public function edit(request $request,$process='')
    {
        $users = User::all();
         $id = $request->input('id');
        
        if($process == 'fetch'){
            $user = DB::table('users')->where('id', '=', $id)->get();
             return json_encode($user[0],true);
        }
        
           
        if($process == 'edit'){            
            $username = $request->input('username');
            $email = $request->input('email');
            $mobile = $request->input('mobile');
            $user_level = $request->input('user_level');
            $updated = DB::table('users')->where(array('id' => $id))->update(['user_name' => $username,
                'email' => $email,'mobile' => $mobile,'user_level' => $user_level]);
            return $updated;
            exit;            
        }
        
        
//        if($process == 'delete'){            
//            $username = $request->input('username');
//            $email = $request->input('email');
//            $mobile = $request->input('mobile');
//            $user_level = $request->input('user_level');
//            $updated = DB::table('users')->where(array('id' => $id))->update(['user_name' => $username,
//                'email' => $email,'mobile' => $mobile,'user_level' => $user_level]);
//            return $updated;
//            exit;            
//        }
        

        return view('Admin.view')->with('users', $users);
       
         
    }
    
    public function delete(request $request,$process='')
    {
        $status = array();
        
        
        if($process == 'delete'){            
            $id = $request->input('id');
            $deleted = DB::table('users')->where('id', $id)->delete();
            if($deleted == 1){
                $status[] = array('status'=>'deleted' );      
            }
              
            return json_encode($status);            
        }
        
        
       
        
        
    }
    
}
