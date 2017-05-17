@extends('layouts.dashboard')

@section('content')

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
    <div class="">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                      <h2>Add New Company </h2>
                      <ul class="nav navbar-right panel_toolbox">
                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </li>                        
                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <br />
                        
                       
                        <div class="error"></div>

                            <form id="cmp_reg" class="form-horizontal form-label-left" role="form" method="POST" action="{{ route('company') }}">
                                {{ csrf_field() }}

                                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                    <label for="name" class="col-md-4 col-sm-6 col-xs-12 control-label">Name</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>
                                        <span class="fa fa-building form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>

                                <div class="form-group{{ $errors->has('branch') ? ' has-error' : '' }}">
                                    <label for="branch" class="col-md-4 col-sm-6 col-xs-12 control-label">Branch</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="branch" type="text" class="form-control" name="branch" value="{{ old('branch') }}" required autofocus>
                                        <span class="fa fa-building-o  form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>
                                
                                
                                <div class="form-group">
                                    <label class="control-label col-md-4 col-sm-4 col-xs-12">Status</label>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div id="gender" class="btn-group" data-toggle="buttons">
                                          <label class="btn btn-default" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                            <input type="radio" name="status" value="1"> &nbsp; Active &nbsp;
                                          </label>
                                          <label class="btn btn-primary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                            <input type="radio" name="status" value="0"> Deactive
                                          </label>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div class="ln_solid"></div>
                                <div class="form-group">
                                    <div class="col-md-6 col-md-offset-4">
                                        <button type="submit" class="btn btn-success">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
      </div>
    </div>
</div>
@endsection