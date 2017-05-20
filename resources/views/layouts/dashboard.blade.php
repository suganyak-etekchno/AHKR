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
        
    <link rel="stylesheet" href="global/css/bootstrap-extend.min.css">      
    <link rel="stylesheet" href="global/fonts/material-design/material-design.min.css">
    
    
    
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
 <script src="/build/js/dashboard.js"></script>

<script src="{{asset('js/user.js')}}"></script>
  </body>
</html>