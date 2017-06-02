<?php

namespace App\Http\Controllers\Product;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Input;
use Session;
use Illuminate\Support\Facades\Auth;
use App\Product;
use App\Sale;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Redirect;
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
        
        
        $Product_Ins = new Product;
        $Product_Ins->product_name = $name;
        $Product_Ins->door_count = $door;
        $Product_Ins->row_count = $row;
        $Product_Ins->manufactured_date = $mdate;
        $Product_Ins->status = $status;
        $Product_Ins->save();
        return 1;
    }
    
   public function selling(request $request)
    {         
        $input = Input::all();  
        
        $sdate = date('Y-m-d',strtotime($input['sdate'])); 
        $pro_id =  Input::get('pro_id'); 
        $cmp_id = Input::get('cmp_id'); 
        $branch = Input::get('branch');               
        $position =Input::get('key_position'); 
        
       
        
        
//        $rules = array(
//			'pro_id'       => 'required|numeric',
//			'cmp_id'      => 'required|numeric',
//			'branch' => 'required',
//                        'key_position' => 'required|numeric'
//		);
	//	$validator = Validator::make(Input::all(), $rules);
                
                
             $validator = Validator::make(
            array(
                'pro_id'       => Input::get('pro_id'),
                'cmp_id'      => Input::get('cmp_id'),
                'branch' => Input::get('branch'),
                'key_position' => Input::get('key_position')
            ),
            array(
                'pro_id'       => 'required|numeric',
                'cmp_id'      => 'required|numeric',
                'branch' => 'required',
                'key_position' => 'required|numeric'
            )
        );
                
                
                

		// process the login
		if ($validator->fails()) {
                    return response()->json($validator->errors()->all());
                    exit;
		} else {
			
			// Insert..
                        $Sales_Ins = new Sale;
                        $Sales_Ins->product_id = $pro_id;
                        $Sales_Ins->company_id = $cmp_id;
                        $Sales_Ins->branch = $branch;
                        $Sales_Ins->date = $sdate;
                        $Sales_Ins->keybox_position = $position;        
                        $Sales_Ins->save();
                     //   Session::flash('message', 'Success');			
			return 1;
                        exit;
		}
                
                
                
      
        
        

        
        
        
    }
    
    
    public function dev(request $request,$process='')
    {
        
        // view..
        $Products = Product::all();
        
        if($process == 'edit'){ 
            $pro_id = $request->input('pro_id');
            $pro_name = $request->input('pro_name');
            $door_count = $request->input('door_count');  
            $row_count = $request->input('row_count');  
            $pro_date = date('Y-m-d',strtotime($request->input('pro_date')));
            $pro_status = $request->input('pro_status');
            
            // update..
            $Update_pro = Product::find($pro_id);
            $Update_pro->product_name = $pro_name;
            $Update_pro->door_count = $door_count;
            $Update_pro->row_count = $row_count;
            $Update_pro->manufactured_date = $pro_date;
            $Update_pro->status = $pro_status;
            // $Update_pro->touch();  //simply update the timestamps 
            $Update_pro->save();
            
             return 1;
            exit;
        }
        
        
        if($process == 'delete'){            
            
            $id = $request->input('id');
            if($id){
                // delete..
                $Del_pro = Product::find($id);
                $delpro = $Del_pro->delete();
                
                if($delpro){
                    $deleted = Sale::where('product_id', '=', $id)->delete(); 
                }
                if($deleted == 1){
                     $status[] = array('status'=>'deleted' );      
                }
            } 
            return json_encode($status);       
            exit;            
        }
     
        

        return view('Product.view')->with('products', $Products);
       
         
    }
    
    
    
   
}
