<?php

namespace App\Http\Controllers\Keyplace;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Input;
use Session;
use Illuminate\Support\Facades\Auth;
use App\Keyplace;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Redirect;
class KeyplaceController extends Controller
{
    
    public function index()
    {         
          //Get method
         ///localhost/api/Keyplace
        $Keyplace = Keyplace::all();
        
        return view('Keyplace.view')->with('Keyplace', $Keyplace);
        
    }
    //{product}/{door}/{row}/{mobile}/{position}
    public function show(request $request,$product='',$door='',$row='',$mobile='',$position='')
    
    {         
        //Get method
         //localhost/api/Keyplace/{Keyplace}
	
        
        
        $Key_Ins = new Keyplace;
        $Key_Ins->product_id = $product;
        $Key_Ins->door_no = $door;
        $Key_Ins->row_no = $row;
        $Key_Ins->mobile_no = $mobile;
        $Key_Ins->key_status = $position;        
        $Key_Ins->save();
        exit;  
                
    }
    
    public function update()
    {      
        //put method
        // localhost/api/Keyplace/{Keyplace}
        
        
           echo "update";  //$input = $request->all(); 
    }
    
    public function destroy()
    {         
        //Destroy method
        //localhost/api/Keyplace/{Keyplace}
           echo "destroy";  
    }
   
}
