<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>AHKR</title>

    <!-- Bootstrap -->
    <link href="/dashboard/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/dashboard/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/dashboard/nprogress/nprogress.css" rel="stylesheet">
    <!-- bootstrap-wysiwyg -->
    <link href="/dashboard/google-code-prettify/bin/prettify.min.css" rel="stylesheet">
    <!-- bootstrap-daterangepicker -->
    <link href="/dashboard/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
    <!-- Ion.RangeSlider -->
    <link href="/dashboard/normalize-css/normalize.css" rel="stylesheet">
    <link href="/dashboard/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="/dashboard/ion.rangeSlider/css/ion.rangeSlider.skinFlat.css" rel="stylesheet">
    <!-- Bootstrap Colorpicker -->
    <link href="/dashboard/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css" rel="stylesheet">

    <link href="/dashboard/cropper/dist/cropper.min.css" rel="stylesheet">
    
    <!-- iCheck -->
    <link href="/dashboard/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- Datatables -->
    <link href="/dashboard/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="/dashboard/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">
    <link href="/dashboard/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">
    <link href="/dashboard/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">
    <link href="/dashboard/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">
    
    
<!--<link href="/dashboard/jquery.dataTables.min.css" rel="stylesheet">
<link href="/dashboard/buttons.dataTables.min.css" rel="stylesheet">
<link href="/dashboard/select.dataTables.min.css" rel="stylesheet">
<link href="/dashboard/editor.dataTables.min.css" rel="stylesheet">-->


    <!-- Custom styling plus plugins -->
    <link href="/build/css/custom.css" rel="stylesheet">
    
    
    <!-- here is for editable -->
    
    
    <link rel="stylesheet" href="global/css/bootstrap-extend.min.css">
    <link rel="stylesheet" href="center/assets/css/site.min.css">
    <!-- Plugins -->
    <link rel="stylesheet" href="global/vendor/animsition/animsition.css">
    <link rel="stylesheet" href="global/vendor/asscrollable/asScrollable.css">
    <link rel="stylesheet" href="global/vendor/switchery/switchery.css">
    <link rel="stylesheet" href="global/vendor/intro-js/introjs.css">
    <link rel="stylesheet" href="global/vendor/slidepanel/slidePanel.css">
    <link rel="stylesheet" href="global/vendor/flag-icon-css/flag-icon.css">
    <link rel="stylesheet" href="global/vendor/waves/waves.css">


     <link rel="stylesheet" href="center/assets/examples/css/charts/chartjs.css">
    <link rel="stylesheet" href="center/assets/examples/css/forms/layouts.css">
      <link rel="stylesheet" href="global/vendor/formvalidation/formValidation.css">
    <link rel="stylesheet" href="center/assets/examples/css/forms/validation.css">
    <link rel="stylesheet" href="global/vendor/select2/select2.css">
    <link rel="stylesheet" href="global/vendor/bootstrap-tokenfield/bootstrap-tokenfield.css">
    <link rel="stylesheet" href="global/vendor/bootstrap-tagsinput/bootstrap-tagsinput.css">
    <link rel="stylesheet" href="global/vendor/bootstrap-select/bootstrap-select.css">
    <link rel="stylesheet" href="global/vendor/icheck/icheck.css">
    <link rel="stylesheet" href="global/vendor/switchery/switchery.css">
    <link rel="stylesheet" href="global/vendor/asrange/asRange.css">
    <link rel="stylesheet" href="global/vendor/ionrangeslider/ionrangeslider.min.css">
    <link rel="stylesheet" href="global/vendor/asspinner/asSpinner.css">
    <link rel="stylesheet" href="global/vendor/clockpicker/clockpicker.css">
    <link rel="stylesheet" href="global/vendor/ascolorpicker/asColorPicker.css">
    <link rel="stylesheet" href="global/vendor/bootstrap-touchspin/bootstrap-touchspin.css">
    <link rel="stylesheet" href="global/vendor/jquery-labelauty/jquery-labelauty.css">
    <link rel="stylesheet" href="global/vendor/bootstrap-datepicker/bootstrap-datepicker.css">
    <link rel="stylesheet" href="global/vendor/bootstrap-maxlength/bootstrap-maxlength.css">
    <link rel="stylesheet" href="global/vendor/jt-timepicker/jquery-timepicker.css">
    <link rel="stylesheet" href="global/vendor/jquery-strength/jquery-strength.css">
    <link rel="stylesheet" href="global/vendor/multi-select/multi-select.css">
    <link rel="stylesheet" href="global/vendor/typeahead-js/typeahead.css">
    <link rel="stylesheet" href="center/assets/examples/css/forms/advanced.css">
    <link rel="stylesheet" href="center/assets/examples/css/uikit/modals.css">
     <!--table-->
    <link rel="stylesheet" href="global/vendor/datatables-bootstrap/dataTables.bootstrap.css">
    <link rel="stylesheet" href="global/vendor/datatables-fixedheader/dataTables.fixedHeader.css">
    <link rel="stylesheet" href="global/vendor/datatables-responsive/dataTables.responsive.css">
    <link rel="stylesheet" href="center/assets/examples/css/tables/datatable.css">
    <!--table-->

    <!--grid-->
      <link rel="stylesheet" href="global/vendor/jsgrid/jsgrid.css">
      <link rel="stylesheet" href="center/assets/examples/css/tables/jsgrid.css">
      <!--grid-->
 <link rel="stylesheet" href="global/vendor/alertify/alertify.css">
    <link rel="stylesheet" href="center/assets/examples/css/advanced/alertify.css">

    <link rel="stylesheet" href="center/assets/css/custom.css">
    
    
    <link rel="stylesheet" href="global/vendor/blueimp-file-upload/jquery.fileupload.css">
    <link rel="stylesheet" href="global/vendor/dropify/dropify.css">
    <link rel="stylesheet" href="global/fonts/material-design/material-design.min.css">
    <link rel="stylesheet" href="global/fonts/brand-icons/brand-icons.min.css">
     <link rel="stylesheet" href="global/fonts/web-icons/web-icons.min.css">
    <link rel="stylesheet" href="global/fonts/font-awesome/font-awesome.min.css">
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>
  <link rel="stylesheet" href="center/assets/css/style.css">
    
    
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>AHKR</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="images/img.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome,</span>
             <?php   if (Auth::check()) {  ?>
                <h2>{{ Auth::user()->user_name }}</h2>
            <?php } ?>
               
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-user"></i> User <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="user">Add User</a></li>
                       <li><a href="edit">Edit User</a></li>
                      <li><a href="list">View User</a></li>
                      
                    </ul>
                  </li>                  
                </ul>
                
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-building"></i> Company <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="company">Add Company</a></li>
                      
                    </ul>
                  </li>                  
                </ul>
                
                
                 <ul class="nav side-menu">
                  <li><a><i class="fa fa-product-hunt"></i> Product <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="product">Add Product</a></li>
                       <li><a href="sale">Sales</a></li>
                      
                    </ul>
                  </li>                  
                </ul>
                
             
                
                
              </div>
            </div>
            <!-- /sidebar menu -->

      
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="images/img.jpg" alt=""> 
                    <?php   if (Auth::check()) {  ?>
                        <h2>{{ Auth::user()->user_name }}</h2>
                    <?php } ?>
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> Profile</a></li>
                   
                     @if (Auth::guest())
                            <!-- li><a href="{{ route('login') }}">Login</a></li>
                            < li><a href="{{ route('register') }}">Register</a></li -->
                        @else
                             <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                        @endif
                  </ul>
                </li>

              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
      @yield('content')
        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            Etekchno Services
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

      
 
    <!-- jQuery -->
    <script src="/dashboard/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/dashboard/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/dashboard/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/dashboard/nprogress/nprogress.js"></script>
    <!-- bootstrap-wysiwyg -->
    <script src="/dashboard/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js"></script>
    <script src="/dashboard/jquery.hotkeys/jquery.hotkeys.js"></script>
    <script src="/dashboard/google-code-prettify/src/prettify.js"></script>
    
    
    
     <!-- bootstrap-daterangepicker -->
    <script src="/dashboard/moment/min/moment.min.js"></script>
    <script src="/dashboard/bootstrap-daterangepicker/daterangepicker.js"></script>
    <!-- Ion.RangeSlider -->
    <script src="/dashboard/ion.rangeSlider/js/ion.rangeSlider.min.js"></script>
    <!-- Bootstrap Colorpicker -->
    <script src="/dashboard/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js"></script>
    <!-- jquery.inputmask -->
    <script src="/dashboard/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js"></script>
    <!-- jQuery Knob -->
    <script src="/dashboard/jquery-knob/dist/jquery.knob.min.js"></script>
    <!-- Cropper -->
    <!-- script src="/dashboard/cropper/dist/cropper.min.js"></script -->
    
    <script src="/dashboard/iCheck/icheck.min.js"></script>
    <!-- Datatables -->
    <script src="/dashboard/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="/dashboard/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
    <script src="/dashboard/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="/dashboard/datatables.net-buttons-bs/js/buttons.bootstrap.min.js"></script>
    <script src="/dashboard/datatables.net-buttons/js/buttons.flash.min.js"></script>
    <script src="/dashboard/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="/dashboard/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="/dashboard/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js"></script>
    <script src="/dashboard/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
    <script src="/dashboard/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="/dashboard/datatables.net-responsive-bs/js/responsive.bootstrap.js"></script>
    <script src="/dashboard/datatables.net-scroller/js/dataTables.scroller.min.js"></script>
    <script src="/dashboard/jszip/dist/jszip.min.js"></script>
    <script src="/dashboard/pdfmake/build/pdfmake.min.js"></script>
    <script src="/dashboard/pdfmake/build/vfs_fonts.js"></script>
<!--<script src="/dashboard/select/dataTables.select.min"></script>
<script src="/editor/select/dataTables.editor.min"></script>-->
    <!-- Custom Theme Scripts -->
    <script src="/build/js/custom.js"></script>


<script src="{{asset('js/user.js')}}"></script>


    <!-- here is for editable -->
    
     <script src="global/vendor/babel-external-helpers/babel-external-helpers.js"></script>
   <script src="global/vendor/jquery/jquery.js"></script>
   <script src="global/vendor/tether/tether.js"></script>
   <script src="global/vendor/bootstrap/bootstrap.js"></script>
   <script src="global/vendor/animsition/animsition.js"></script>
   <script src="global/vendor/mousewheel/jquery.mousewheel.js"></script>
   <script src="global/vendor/asscrollbar/jquery-asScrollbar.js"></script>
   <script src="global/vendor/asscrollable/jquery-asScrollable.js"></script>
   <script src="global/vendor/waves/waves.js"></script>
    <!--grid-->
    <script src="global/vendor/jsgrid/jsgrid.js"></script>
    <script src="global/vendor/jquery-ui/jquery-ui.min.js"></script>
    <!--grid-->
   <!-- Plugins -->
   <script src="global/vendor/switchery/switchery.min.js"></script>
   <script src="global/vendor/intro-js/intro.js"></script>
   <script src="global/vendor/screenfull/screenfull.js"></script>
   <script src="global/vendor/slidepanel/jquery-slidePanel.js"></script>
   <script src="global/vendor/formvalidation/formValidation.min.js"></script>
   <script src="global/vendor/formvalidation/framework/bootstrap4.min.js"></script>
   <script src="global/vendor/jquery-placeholder/jquery.placeholder.js"></script>
   <script src="global/vendor/select2/select2.full.min.js"></script>
   <script src="global/vendor/bootstrap-tokenfield/bootstrap-tokenfield.min.js"></script>
   <script src="global/vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js"></script>
   <script src="global/vendor/bootstrap-select/bootstrap-select.js"></script>
   <script src="global/vendor/icheck/icheck.min.js"></script>
   <script src="global/vendor/switchery/switchery.min.js"></script>
   <script src="global/vendor/asrange/jquery-asRange.min.js"></script>
   <script src="global/vendor/ionrangeslider/ion.rangeSlider.min.js"></script>
   <script src="global/vendor/asspinner/jquery-asSpinner.min.js"></script>
   <script src="global/vendor/clockpicker/bootstrap-clockpicker.min.js"></script>
   <script src="global/vendor/ascolor/jquery-asColor.min.js"></script>
   <script src="global/vendor/asgradient/jquery-asGradient.min.js"></script>
   <script src="global/vendor/ascolorpicker/jquery-asColorPicker.min.js"></script>
   <script src="global/vendor/bootstrap-maxlength/bootstrap-maxlength.js"></script>
   <script src="global/vendor/jquery-knob/jquery.knob.js"></script>
   <script src="global/vendor/bootstrap-touchspin/bootstrap-touchspin.min.js"></script>
   <script src="global/vendor/jquery-labelauty/jquery-labelauty.js"></script>
   <script src="global/vendor/bootstrap-datepicker/bootstrap-datepicker.js"></script>
   <script src="global/vendor/jt-timepicker/jquery.timepicker.min.js"></script>
   <script src="global/vendor/datepair/datepair.min.js"></script>
   <script src="global/vendor/datepair/jquery.datepair.min.js"></script>
   <script src="global/vendor/jquery-strength/password_strength.js"></script>
   <script src="global/vendor/jquery-strength/jquery-strength.min.js"></script>
   <script src="global/vendor/multi-select/jquery.multi-select.js"></script>
   <script src="global/vendor/typeahead-js/bloodhound.min.js"></script>
   <script src="global/vendor/typeahead-js/typeahead.jquery.min.js"></script>
   <script src="global/vendor/jquery-placeholder/jquery.placeholder.js"></script>
   <!--table-->
   <script src="global/vendor/datatables/jquery.dataTables.js"></script>
   <script src="global/vendor/datatables-fixedheader/dataTables.fixedHeader.js"></script>
   <script src="global/vendor/datatables-bootstrap/dataTables.bootstrap.js"></script>
   <script src="global/vendor/datatables-responsive/dataTables.responsive.js"></script>
   <script src="global/vendor/datatables-tabletools/dataTables.tableTools.js"></script>
   <script src="global/vendor/asrange/jquery-asRange.min.js"></script>
   <script src="global/vendor/bootbox/bootbox.js"></script>
   <!--table-->

  <!--upload-->
  <script src="global/vendor/blueimp-tmpl/tmpl.js"></script>
  <script src="global/vendor/blueimp-canvas-to-blob/canvas-to-blob.js"></script>
  <script src="global/vendor/blueimp-load-image/load-image.all.min.js"></script>
  <script src="global/vendor/blueimp-file-upload/jquery.fileupload.js"></script>
  <script src="global/vendor/blueimp-file-upload/jquery.fileupload-process.js"></script>
  <script src="global/vendor/blueimp-file-upload/jquery.fileupload-image.js"></script>
  <script src="global/vendor/blueimp-file-upload/jquery.fileupload-audio.js"></script>
  <script src="global/vendor/blueimp-file-upload/jquery.fileupload-video.js"></script>
  <script src="global/vendor/blueimp-file-upload/jquery.fileupload-validate.js"></script>
  <script src="global/vendor/blueimp-file-upload/jquery.fileupload-ui.js"></script>
  <script src="global/vendor/dropify/dropify.min.js"></script>

   <!-- Scripts -->
   <script src="global/js/State.js"></script>
   <script src="global/js/Component.js"></script>
   <script src="global/js/Plugin.js"></script>
   <script src="global/js/Base.js"></script>
   <script src="global/js/Config.js"></script>
   <script src="center/assets/js/Section/Menubar.js"></script>
   <script src="center/assets/js/Section/Sidebar.js"></script>
   <script src="center/assets/js/Section/PageAside.js"></script>
   <script src="center/assets/js/Plugin/menu.js"></script>
   <!-- Config -->
   <script src="global/js/config/colors.js"></script>
   <script src="center/assets/js/config/tour.js"></script>
   <script>
  Config.set('assets', 'center/assets');
  </script>
    <!-- Page -->
    <script src="center/assets/js/Site.js"></script>
    <script src="global/js/Plugin/asscrollable.js"></script>
    <script src="global/js/Plugin/slidepanel.js"></script>
    <script src="global/js/Plugin/switchery.js"></script>
    <script src="global/js/Plugin/select2.js"></script>
    <script src="global/js/Plugin/bootstrap-tokenfield.js"></script>
    <script src="global/js/Plugin/bootstrap-tagsinput.js"></script>
    <script src="global/js/Plugin/bootstrap-select.js"></script>
    <script src="global/js/Plugin/icheck.js"></script>
    <script src="global/js/Plugin/switchery.js"></script>
    <script src="global/js/Plugin/asrange.js"></script>
    <script src="global/js/Plugin/ionrangeslider.js"></script>
    <script src="global/js/Plugin/asspinner.js"></script>
    <script src="global/js/Plugin/clockpicker.js"></script>
    <script src="global/js/Plugin/ascolorpicker.js"></script>
    <script src="global/js/Plugin/bootstrap-maxlength.js"></script>
    <script src="global/js/Plugin/jquery-knob.js"></script>
    <script src="global/js/Plugin/bootstrap-touchspin.js"></script>
    <script src="global/js/Plugin/card.js"></script>
    <script src="global/js/Plugin/jquery-labelauty.js"></script>
    <script src="global/js/Plugin/bootstrap-datepicker.js"></script>
    <script src="global/js/Plugin/jt-timepicker.js"></script>
    <script src="global/js/Plugin/datepair.js"></script>
    <script src="global/js/Plugin/jquery-strength.js"></script>
    <script src="global/js/Plugin/multi-select.js"></script>
    <script src="global/js/Plugin/jquery-placeholder.js"></script>
    <script src="center/assets/examples/js/forms/validation.js"></script>
    <script src="center/assets/examples/js/forms/advanced.js"></script>
    <!--table-->
    <script src="global/js/Plugin/datatables.js"></script>
    <script src="center/assets/examples/js/tables/datatable.js"></script>
    <script src="center/assets/examples/js/tables/exdatatable.js"></script>
    <script src="center/assets/examples/js/tables/shipdatatable.js"></script>
    <script src="center/assets/examples/js/tables/status.js"></script>

    <script src="center/assets/examples/js/uikit/icon.js"></script>
     <script src="global/vendor/alertify/alertify.js"></script>
  <script src="global/js/Plugin/alertify.js"></script>
  </body>
</html>