<?php

namespace App\Http\Controllers\Keyplace;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Input;
use Session;
use Illuminate\Support\Facades\Auth;
class KeyplaceController extends Controller
{
    
    public function index()
    {         
          //Get method
         ///localhost/api/Keyplace
           echo "index"; 
    }
    
    public function show()
    {         
        //Get method
           echo "show"; //localhost/api/Keyplace/{Keyplace}
          
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
