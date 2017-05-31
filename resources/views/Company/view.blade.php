@extends('layouts.dashboard')

@section('content')
<?php

//echo "<pre>";
//
//print_r($users );
//echo "</pre>";
//
//exit;

?>
<div class="right_col" role="main">    
    <div class="row tile_count">
        <div class="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="tile-stats">
               <div class="icon"><i class="fa fa-user"></i></div>
               <div class="count">1</div>
               <h3>User Count</h3>
            </div>
        </div>
    </div>
    
    <div class="error"></div>
    
    
    <div class="">
        <div class="row">
                      
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>User List</h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <?php if(isset($company)){  ?>
                    <table id="datatable-buttons1" class="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Branch</th>
                          <th>Status</th>  
                          <th>Action</th>   
                        </tr>
                      </thead>
                      <tbody>                          
                           @foreach($company as $cmp)
                             <tr>
                                <td id="dt_cid{{ $cmp->company_id }}">{{ $cmp->company_id }}</td>
                                <td id="dt_cname{{ $cmp->company_id }}">{{ $cmp->company_name }}</td>
                                <td id="dt_branch{{ $cmp->company_id }}">{{ $cmp->branch }}</td>
                                <td id="dt_status{{ $cmp->company_id }}">{{ $cmp->status == 1 ? 'Active' : 'Deactive' }}</td>
                               
                                 <td class="actions">
                                   
                               
                                    <i id="{{$cmp['company_id']}}" data-target="#company_model" data-toggle="modal" data="edit_{{$cmp['company_id']}}" class="fa fa-pencil-square-o cedit-row" aria-hidden="true"></i>                                    
                                     <i id="{{$cmp['company_id']}}" data-target="#company_model" data-toggle="modal" data="delete_{{$cmp['company_id']}}" class="fa fa-trash-o  cdel-row" aria-hidden="true"></i>
                                     
                                     
                                  
                                  </td>
                              </tr>                              
                            @endforeach                        
                      </tbody>
                    </table>
                      
                      
                      
                     <?php } ?> 
                      
                      
                      
                      <?php if(isset($viewlist)){  ?>
                    <table id="datatable-buttons1" class="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Company Id</th>
                          <th>Name</th>
                          <th>Branch</th>
                          <th>Status</th>
                          <th>Product Id</th>
                          <th>Product Name</th>                          
                          <th>Product Status</th>
                          <th>Door Count</th>
                          
                          <th>Key Position</th>
                          <th>Sales Date</th>
                          
                          
                          <th>Action</th>   
                        </tr>
                      </thead>
                      <tbody>     
                          
                          
                          <?php  //print_r($viewlist); ?>
                           @foreach($viewlist as $cmp)
                             <tr>
                                <td id="dt_cid{{ $cmp->company_id }}">{{ $cmp->company_id }}</td>
                                <td id="dt_cname{{ $cmp->company_id }}">{{ $cmp->company_name }}</td>
                                <td id="dt_branch{{ $cmp->company_id }}">{{ $cmp->branch }}</td>
                                <td id="dt_cstatus{{ $cmp->company_id }}">{{ $cmp->company_status == 1 ? 'Active' : 'Deactive' }}</td>                                
                                <td id="dt_pid{{ $cmp->company_id }}">{{ ($cmp->product_id)? $cmp->product_id : '-' }}</td>                                
                                <td id="dt_pname{{ $cmp->company_id }}">{{ ($cmp->product_name)? $cmp->product_name : '-' }}</td>
                                <td id="dt_pstatus{{ $cmp->company_id }}">{{ $cmp->product_status == 1 ? 'Active' : ($cmp->product_status == 0 && $cmp->product_status != ''? 'Deactive' : '-') }}</td>
                                <td id="dt_doorcount{{ $cmp->door_count }}">{{ ($cmp->door_count)? $cmp->door_count : '-'}}</td>
                                <td id="dt_pkey{{ $cmp->company_id }}">{{ ($cmp->key)? $cmp->key : '-'}}</td>
                                <td id="dt_sdate{{ $cmp->company_id }}">{{ ($cmp->sales_date)? date('Y-m-d',strtotime($cmp->sales_date)) : '-' }}</td>
                                <td class="actions"> 
                                    <i id="{{$cmp->company_id}}" data-target="#company_model" data-toggle="modal" data="{{$cmp->product_id}}" class="fa fa-pencil-square-o cedit-row" aria-hidden="true"></i>                                    
                                    <i id="{{$cmp->company_id}}" data-target="#company_model" data-toggle="modal" data="{{$cmp->product_id}}" class="fa fa-trash-o  cdel-row" aria-hidden="true"></i>                                                                      
                                </td>
                                  
                                  
                              </tr>                              
                            @endforeach                        
                      </tbody>
                    </table>
                      
                      
                      
                     <?php } ?> 
                      
                      
                      
                      
                  </div>
                </div>
              </div>
      </div>
    </div>
</div>
<div class="modal fade example-modal-lg" id="company_model" aria-hidden="true" aria-labelledby="exampleOptionalLarge" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">*</span>
                    </button>
                    <h4 class="modal-title">
                        Edit Company Details
                        <span id="pop_invoice"></span>
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="example table-responsive">
                        <div id="examplePopoverTable" >
                         
                        </div>
                    </div>
                </div>
            </div>
	</div>
</div>

@endsection