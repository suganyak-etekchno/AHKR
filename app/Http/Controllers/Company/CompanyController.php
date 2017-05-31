<?php

namespace App\Http\Controllers\Company;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Input;
use Session;
use Illuminate\Support\Facades\Auth;
use App\Company;
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
            'company_name'=>$name,
            'branch'=>$branch,           
            'status'=>$status
        );     
        $company =  DB::table('companies')->insert($data);
        return 1;
    }
   
    
    public function edit(request $request,$process='')
    {
        
    
       $company = Company::all();
       
         $id = $request->input('id');
        
        if($process == 'fetch'){
            $companies = DB::table('companies')->where('company_id', '=', $id)->get();
             return json_encode($companies[0],true);
        }
        
           
        if($process == 'edit'){            
            
            $id = $request->input('id');            
            $cname = $request->input('cname');
            $branch = $request->input('branch');
            $status = $request->input('status');
             $pro_id = $request->input('pro_id');
            $pro_name = $request->input('pro_name');
            $pro_status = $request->input('pro_status');            
            $key_pos = $request->input('key_pos');            
            $sales_date = date('Y-m-d',strtotime($request->input('sales_date')));
            $door_count = $request->input('door_count');   
            
            
            
            
            $updated = DB::table('companies')->where(array('company_id' => $id))->update(['company_name' => $cname,
                'branch' => $branch,'status' => $status]);
            
            
            
            if($pro_id){
                
              $update_product = DB::table('product')->where(array('product_id' => $pro_id))->update([
                'product_name' => $pro_name,
                'status' => $pro_status,
                'door_count' => $door_count
                  
                    ]);
            
                $update_sales = DB::table('sales')->where(array('product_id' => $pro_id))->update([
                    'keybox_position' => $key_pos
                ]);
            
            
            }
            
////            
            
            return $updated;
            exit;            
        }
         
        if($process == 'delete'){ 
            
            
           $id = $request->input('id');
            $pro_id= $request->input('pro_id');
          
            if($id){
                $deleted = DB::table('companies')->where('company_id', $id)->delete();
            }
            
             if($pro_id){
                DB::table('product')->where('product_id', $id)->delete();                
                DB::table('sales')->where('product_id', $id)->delete();
            }
            
            
            
            if($deleted == 1){
                $status[] = array('status'=>'deleted' );      
            }
              
            return json_encode($status);       
            exit;            
        }
        

        return view('Company.view')->with('company', $company);
       
         
    }
    
    
      public function view(request $request,$process='')
    {
       
        
        $company = Company::all();
        $data =array();
        
        foreach ($company as $key => $value){        
            $data[] = $value['company_id'];
       }
       
       
       $sql = DB::table("companies");           
            $fetch = $sql->select(
            'companies.company_id as company_id',
            'companies.company_name as company_name',
            'companies.branch as branch',
            'companies.status as company_status',
            'product.product_id as product_id',
            'product.product_name as product_name',
            'product.status as  product_status',   
            'product.door_count as  door_count',                      
            'sales.keybox_position as key',                        
            'sales.date as sales_date'
            )		
            ->leftJoin('sales', 'companies.company_id', '=', 'sales.company_id')
            ->leftJoin('product', 'sales.product_id', '=', 'product.product_id')
            ->orderBy('companies.company_id', 'ASC')
            ->whereIn('companies.company_id', $data)->get();                  
       
      
            
             return view('Company.view')->with('viewlist', $fetch);
            
    }
    
    
   
}
