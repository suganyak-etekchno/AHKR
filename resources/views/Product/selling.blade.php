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
                      <h2>Product Sale</h2>
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

                            <form id="sale_reg" class="form-horizontal form-label-left" role="form" method="POST" action="{{ route('sale') }}">
                                {{ csrf_field() }}
                                
                                <div class="form-group">
                                    <label for="sdate" class="col-md-4 col-sm-6 col-xs-12 control-label">DOS</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <fieldset>
                                            <div class="control-group">
                                              <div class="controls">
                                                <div class="col-md-11 xdisplay_inputx form-group has-feedback">
                                                  <input type="text" class="form-control has-feedback-left" name="sdate" id="sdate" placeholder="" aria-describedby="inputSuccess2Status4">
                                                  <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                                                  <span id="inputSuccess2Status4" class="sr-only">(success)</span>
                                                </div>
                                              </div>
                                            </div>
                                        </fieldset>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="pro_id" class="col-md-4 col-sm-6 col-xs-12 control-label">Product Name</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="pro_id" type="text" class="form-control" name="pro_id" value="{{ old('pro_id') }}" required autofocus>
                                        <span class="fa fa-building form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>
                                
                                  <div class="form-group">
                                    <label for="cmp_id" class="col-md-4 col-sm-6 col-xs-12 control-label">Company Name</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="cmp_id" type="text" class="form-control" name="cmp_id" value="{{ old('cmp_id') }}" required autofocus>
                                        <span class="fa fa-building form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="branch" class="col-md-4 col-sm-6 col-xs-12 control-label">Branch</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="branch" type="text" class="form-control" name="branch" value="{{ old('branch') }}" required autofocus>
                                        <span class="fa fa-building-o  form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>
                                
                                
                                
                                
                                
                               
                                <div class="form-group">
                                    <label for="key_position" class="col-md-4 col-sm-6 col-xs-12 control-label">Place of Keybox position</label>

                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input id="key_position" type="text" class="form-control" name="key_position" value="{{ old('key_position') }}" required autofocus>
                                        <span class="fa fa-building-o  form-control-feedback right" aria-hidden="true"></span>

                                    </div>
                                </div>
                                
                                <div class="ln_solid"></div>
                                <div class="form-group">
                                    <div class="col-md-6 col-md-offset-4">
                                        <button type="submit" class="btn btn-success">
                                            Submit
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