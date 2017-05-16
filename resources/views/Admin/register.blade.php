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
                      <h2>New User Form</h2>
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

                            <form id="user_reg" class="form-horizontal form-label-left" role="form" method="POST" action="{{ route('user') }}">
                                {{ csrf_field() }}

                                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                    <label for="name" class="col-md-4 col-sm-6 col-xs-12 control-label">Name</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>
                                        <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>

                                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <label for="email" class="col-md-4 col-sm-6 col-xs-12 control-label">E-Mail Address</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>
                                        <span class="fa fa-envelope form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>

                                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password" class="col-md-4  col-sm-6 col-xs-12 control-label">Password</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="password" type="password" class="form-control" name="password" required>
                                        <span class="fa fa-key form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div> 

                                <div class="form-group">
                                    <label class="control-label col-md-4 col-sm-4 col-xs-12">Mobile</label>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                      <input name="mobile" type="text" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                                      <span class="fa fa-phone  form-control-feedback right" aria-hidden="true"></span>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-md-4 col-sm-4 col-xs-12">User Level</label>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <select name="user_level" class="form-control">
                                            <option value="">Choose User</option>
                                            <!-- option value="super_admin">Super Admin</option -->
                                            <option value="admin">Admin</option>
                                            <option value="manager">Manager</option>
                                            <option value="user">User</option>
                                        </select>

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