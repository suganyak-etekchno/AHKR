<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="all,follow">
    <meta name="googlebot" content="index,follow,snippet,archive">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Kamakshi-Giftshop">
    <meta name="author" content="Ondrej Svestka | ondrejsvestka.cz">
    <meta name="keywords" content="">
    <title>
        Pondicherry | Co-operative
    </title>
    <meta name="keywords" content="">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100' rel='stylesheet' type='text/css'>
    <!-- styles -->
    <link href="<?php echo base_url(); ?>assets/css/font-awesome.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/animate.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/owl.carousel.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/owl.theme.css" rel="stylesheet">
    <!-- theme stylesheet -->
    <link href="<?php echo base_url(); ?>assets/css/style.default.css" rel="stylesheet">
    <!-- your stylesheet with modifications -->
    <link href="<?php echo base_url(); ?>assets/css/custom.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/main.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/addSlider.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/nouislider.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/thumbs2.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/thumbnail-slider.css" rel="stylesheet">
    <script src="<?php echo base_url(); ?>assets/js/respond.min.js"></script>
    <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/admin/img/favicon.ico">
    <script type="text/javascript">var switchTo5x=true;</script>
<!-- <script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "dd95200b-4b94-4ef1-a537-c65ad9d21ec8", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script> -->
</head>
<body>
  <!-- *** TOPBAR *** -->
    <!-- Ajax loader added by siva -->
    <div class="loading" style="display: none;">
        <div class="ajax_loader">
            <img src="<?php echo base_url().'assets/img/ajax-loader.gif'; ?>"/>
        </div>
    </div> 
    <!-- Ajax loader ended by siva -->
    <div id="top">
        <div class="container">
            <div class="col-md-6 offer" data-animate="fadeInDown">
                <a href="#" class="btn btn-success btn-sm" style="display: none;" data-animate-hover="shake"></a>  <a href="#"></a>
            </div>
            <div class="col-md-6 adjt_cmn_cls_width" data-animate="fadeInDown">
                <ul class="menu">
                    <?php 
                    $user_session = $this->session->userdata("login_status");
                    if(!empty($user_session)):
                        $session_data = $this->session->userdata("login_session");
                        // $facebook_session_data = $this->session->userdata("facebook_login_session");
                    ?>
                        <li class="login_menu"> Welcome <?php echo $session_data['user_name']; ?>
                        <!-- <li class="login_menu"> Welcome <?php echo $facebook_session_data['user_name']; ?> -->
                        	<span class="caret dropdown-toggle drpdwn-icon" data-toggle="dropdown"></span>
							    <ul class="dropdown-menu users-dropdown">
							      <li><a href="<?php echo base_url(); ?>index.php/profile/">Profile</a></li>
							      <li class="divider"></li>
							      <li><a href="<?php echo base_url(); ?>index.php/index/logout/">Logout</a></li>
							    </ul>
                        </li>
                        <!-- <li class="login_menu"> <a href="<?php echo base_url(); ?>index.php/profile/"> Profile </a>
                        </li> -->
                        <!-- <li> <a href="<?php echo base_url(); ?>index.php/index/logout"> Logout </a>
                        </li> -->
                    <?php else : ?>
                        <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a>
                        </li>
                        <li><a href="<?php echo base_url(); ?>index.php/register/">Register</a>
                        </li>
                    <?php endif; ?>
                    <!-- <li><a href="<?php //echo base_url(); ?>index.php/customer_orders/">Profile</a>
                    </li> -->
                    <!-- <li><a href="<?php echo base_url(); ?>index.php/contact/">Contact</a>
                    </li> -->
                    <li>
                        <a href="#" class="track_order_status_icon"> Track Order</a>
                        <form method="POST" class="track_order_form" action="<?php echo base_url(); ?>index.php/track_order"> 
                            <div class="input-group">
                                <input type="text" placeholder="Order Id" name="track_order_id" class="form-control">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="submit"><i class="fa fa-search"></i></button>
                                </span>
                            </div>
                        </form>
                    </li>
                    <!-- <li><a href="#">Recently viewed</a>
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="Login">Customer login</h4>
                    </div>
                    <div class="modal-body">
                        <form action="<?php echo base_url(); ?>index.php/ajax_controller/popup_login" id="login" class="front-end_form" method="post">
                            <div class="registeration_status">
                            </div>
                            <div class="form-group"> 
                                <input type="text" class="form-control" id="email-modal" name="popup_email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password-modal" name="popup_password" placeholder="Password">
                            </div>
                           <div class="form_actions">
                            <p class="text-center login_button">
                                <button class="btn btn-primary"><i class="fa fa-sign-in"></i> Log in</button>
                            </p>
                            <a href="#" class="forgot_pwd frgt_pwd"><strong>Forgot Password?</strong></a>
                            <div class="cb"> </div> 
                          </div>
                        </form>
                        <form action="<?php echo base_url(); ?>index.php/ajax_controller/popup_forgot_pwd" id="forget_password" class="front-end_form" method="post">
                            <div class="registeration_status">
                            </div>        
                            <!-- <a href="#" class="forgot_pwd frgt_pwd_2"><strong>Forgot Password?</strong></a> -->                                                  
                            <div class="form-group forgot_pwd-modal"> 
                            	<label class="email_id">Email</label>
                                <input type="text" class="form-control" id="email-modal" name="popup_forgot_email" placeholder="Email" style="top: 3px;">
                               <div class="form2_actions">
                               	<a href="#"><span class="cancel">Cancel</span></a>
                                <p class="text-center">
                                <button class="btn btn-primary retrive_pwd"><i class="fa fa-sign-in"></i>Retrieve Password</button>
                               </p>
                               <div class="cb"> </div> 
                              </div>
                            </div>
                        </form>
                          </div>                 
                           <div id="facebook_login">
							<ul class="social_icons">
								<a href="<?php echo $login_url; ?>">
                                <img class="fb" src="<?php echo base_url(); ?>assets/img/fb.png">
                                </a>							
								<a href="<?php echo $authUrl; ?>">
                                <img class="fb" src="<?php echo base_url(); ?>assets/img/google.png">
                                </a>							
							</ul>
							</div>  
                        <p class="text-center text-muted">Not registered yet?</p>
                        <p class="text-center text-muted registeration_instructions"><a href="<?php echo base_url(); ?>index.php/register/"><strong>Register now</strong></a>! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>                                                           
                    </div>                       
            </div>
        </div>
    </div>
    <!-- *** TOP BAR END *** -->
    <!-- *** NAVBAR *** -->
    <div class="navbar navbar-default yamm" role="navigation" id="navbar">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand home animated bounce" href="http://kamakshi-gifts.com/index.php/" data-animate-hover="bounce" style="opacity: 1;">
                    <img src="" alt="" class="hidden-xs"><span class="brand_name">Kamakshi <br>Gifts</span>
                    <img src="" alt="" class="visible-xs">
                </a>
                <div class="navbar-buttons">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation">
                        <span class="sr-only">Toggle navigation</span>
                        <i class="fa fa-align-justify"></i>
                    </button>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#search">
                        <span class="sr-only">Toggle search</span>
                        <i class="fa fa-search"></i>
                    </button>
                    <a class="btn btn-default navbar-toggle" href="http://kamakshi-gifts.com/index.php/basket/">
                        <i class="fa fa-shopping-cart"></i>  <span class="hidden-xs"> <span class="add_to_cart"> 0 </span> items in cart</span>
                    </a>
                </div>
            </div>
            <!--/.navbar-header -->
            <div class="navbar-collapse collapse" id="navigation">
                <ul class="nav navbar-nav navbar-left">
                    <li class="kamakshi_header_menu active" id="kamakshi_header_menu_home"><a href="http://kamakshi-gifts.com/index.php/">Home</a>
                    </li>
                    <li class="kamakshi_header_menu dropdown yamm-fw" id="kamakshi_header_menu_category">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Gift By Categories<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="yamm-content">
                                    <div class="row">
                                    <h5>Category</h5>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/1">Plants</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/2">Pots and Planters</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/3">Pubbles and Stone</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/4">Fertilizers and Manures</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/5">Rental of plants</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/6">Accesories</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/7">Birthday</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/8">Wedding</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                            <div class="col-sm-3">                                
                                            <ul>
                                                <li><a href="http://kamakshi-gifts.com/index.php/category/9">Parties</a>
                                                </li>
                                            </ul>
                                        </div>
                                                                        </div>
                                </div>                                
                                <!-- /.yamm-content -->
                            </li>
                        </ul>
                    </li>
                    <li class="kamakshi_header_menu dropdown yamm-fw" id="kamakshi_header_menu_recipient">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Gift By Recipient<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="yamm-content">
                                    <div class="row">
                                    	<h5>Recipient</h5>
                                    	                                        <div class="col-sm-3">                                            
                                            <ul>                                              
                                                    <li>
                                                        <a href="http://kamakshi-gifts.com/index.php/recipient_category/11"> Men</a>
                                                    </li>                                                
                                            </ul>
                                        </div>
                                                                                <div class="col-sm-3">                                            
                                            <ul>                                              
                                                    <li>
                                                        <a href="http://kamakshi-gifts.com/index.php/recipient_category/12"> Women</a>
                                                    </li>                                                
                                            </ul>
                                        </div>
                                                                            </div>
                                </div>
                                <!-- /.yamm-content -->
                            </li>
                        </ul>
                    </li>
                    <li class="kamakshi_header_menu about-us" id="kamakshi_header_menu_about"><a href="http://kamakshi-gifts.com/index.php/about">About Us</a>
                    </li>
                    <li class="kamakshi_header_menu contact-us" id="kamakshi_header_menu_contact"><a href="http://kamakshi-gifts.com/index.php/contact/">Contact US</a>
                    </li>
                     </ul>
                    
                

            </div>
            <!--/.nav-collapse -->
            <div class="navbar-buttons">
                <div class="navbar-collapse collapse right" id="basket-overview">
                    <a href="http://kamakshi-gifts.com/index.php/basket/" class="btn btn-primary navbar-btn"><i class="fa fa-shopping-cart"></i><span class="hidden-sm"> <span class="add_to_cart"> 0 </span>  items in cart</span></a>
                </div>
                <!--/.nav-collapse -->
                <div class="navbar-collapse collapse right" id="search-not-mobile">
                    <button type="button" class="btn navbar-btn btn-primary" data-toggle="collapse" data-target="#search">
                        <span class="sr-only">Toggle search</span>
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="collapse clearfix" id="search">
                <form class="navbar-form" role="search" action="http://kamakshi-gifts.com/index.php/search_section" method="POST">
                    <div class="input-group">
                        <input type="text" class="form-control" name="search_keyword" placeholder="Search by product name" required="">
                        <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                       </span>
                    </div>
                </form>
            </div>
                        <input type="hidden" value="http://kamakshi-gifts.com/" class="full_site_url">
            <!--/.nav-collapse -->
        </div>
        <!-- /.container -->
    </div>
    <!-- /#navbar -->
<!-- *** NAVBAR END *** -->
