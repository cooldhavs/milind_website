<?php
	require_once("admin/phpscripts/init.php");
    $errors = array();
	if(isset($_POST['submit'])){
		//echo "Thanks, {$_POST['name']}";
		$name = trim($_POST['name']);
		$email = trim($_POST['email']);
		$phone = trim($_POST['phone']);
		$msg = trim($_POST['msg']);
		$required = array("name","email","phone","msg");
        
        $direct = "thankyou.php";
		if($honeyPot===""){
			echo "Email Sent";
sendMessage($name, $email, $phone, $msg, $direct);
		
	}else{
		foreach($required as $require){
			$value = trim($_POST[$require]);
			if(!has_value($value)) {
				$errors[$require] = $require."Inserted Data is empty or invalid";
				}
			}
	}
	}
		
	
?>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Milind Parkara</title>
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/menu.css">
    <script src="greensock/src/minified/TweenMax.min.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="js/ScrollToPlugin.min.js"></script>
  </head>
  <body>
  <h1 class="hidden">Milind Parkara Portfolio Website</h1> 
  
   
   
   
 <div id="wrapper">
  	<div class="wholePage">
  			<div class="pagered">
            
            <div class="left2">
					<div  class="top-bar navTopBar">
							<nav class="top-bar-left navDP"><h2 class="hidden">Top Nav Bar</h2>
								<ul class="menu">
									<li><a href="#"><img src="image/profile-512_1.jpg" class="profilePic" alt="imageProfilePic" style="margin-left:65%;"></a></li>
					
								</ul>
							</nav>
                      
				  			<div class="top-bar-right navLogo">
								<ul class="menu">
									
									<li><a ><img src="image/logo.svg" alt="imageLogo" class="logoClass" style="margin-left:215%;"></a></li>
								</ul>
							</div>
				</div>
            
               
                <nav class="navvertica"><h2 class="hidden">Mobile Social Media Icons Version 2</h2>
                    <ul class="menu vertical">
                       <!-- <li class="borderBottom"><a href="#" class="linka" id="menu1"><img src="image/icon-home.png" alt="navIcon" class="nevIconSet">Home</a><br></li> -->
                        <li class="borderBottom">
                            <a href="http://mparkara.com/" class="linka" >
                                <img src="image/icon-home.svg" alt="navIcon" class="nevIconSet">Home
                            </a>
                        </li>
                        <li class="borderBottom">
                            <a href="#" class="linka" id="click1">
                                <img src="image/icon-abt.svg" alt="navIcon" class="nevIconSet">About Me
                            </a>
                        </li>
                        <li class="borderBottom">
                            <a href="#" class="linka" id="click3">
                                <img src="image/icon-res.svg" alt="navIcon" class="nevIconSet">
                                Resume
                            </a>
                        </li>
                        <li class="borderBottom">
                            <a href="#" class="linka" id="click4">
                                <img src="image/icon-port.svg" alt="navIcon" class="nevIconSet">
                                Portfolio
                            </a>
                        </li>
                       
                        <li class="borderBottom">
                            <a href="#" class="linka" id="click5">
                                <img src="image/icon-call.svg"  alt="navIcon" class="nevIconSet">
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </nav>
                
               
                <div class="row large-4 columns large-offset-4 columns topal">
                  <section style="display:inline;"><h3 class="hidden">Social Media Icons</h3>
                      <a href="https://www.facebook.com/milindparkara">  <img alt="image" src="image/Facebook2.svg" width="36" class="mbnavSocial"></a>
                      <a href="https://twitter.com/milind58995434">    <img alt="image" src="image/Twitter2.svg" width="36" class="mbnavSocial"></a>
                      <a href="https://www.youtube.com/user/impmilind"><img alt="image" src="image/Youtube2.svg" width="36" class="mbnavSocial"></a>
                      <a href="https://www.linkedin.com/in/milind-parkara-411b775a?trk=nav_responsive_tab_profile" ><img alt="image" src="image/Linkedin2.svg" width="36" class="mbnavSocial"></a>
                      <a href="https://www.pinterest.com/impmilind/"><img alt="image" src="image/Pintrest2.svg" width="36" class="mbnavSocial"></a>
                  </section>
              </div>
                </div> 
            
            </div>
   			
            
            
             <!-- ========================================================
                      Header Starts Here
   ======================================================== */ -->
<div class="pageblue">
    
     <div class="row large-1 columns">
                            <img src="image/icon_menu.svg" width="35" id="navMobile" style="position:fixed;" alt="imageHAMMENU">
                            </div>
 <?php
	include("includes/header.php");
?>
   <!-- ========================================================
                      Header Ends Here
   ======================================================== */ -->

<!-- ==============================================================================
						About Me Section Starts
============================================================================= -->


<?php
	include("includes/aboutme.php");
?>


	
    
    
    
    <!-- ==============================================================================
						About Me Section Ends
============================================================================= -->
      
      
      <!-- ==============================================================================
						Skills Starts
============================================================================= -->
<div id="filterSkills">
	<?php
	include("includes/skills.php");
?>
    </div>
    
    
    <!-- ==============================================================================
						Skills Ends
============================================================================= -->
      
       <!-- ==============================================================================
						My Resume Starts
============================================================================= -->

	<?php
	include("includes/resume.php");
?>
  
    
    
    <!-- ==============================================================================
						My Resume Ends
============================================================================= -->

      <!-- ==============================================================================
						Portfolio Starts
============================================================================= -->
<div id="filterPort">
	<?php
	include("includes/portfolio.php");
?>
    </div>
    
     
    <!-- ==============================================================================
						Portfolio Ends
============================================================================= -->
    <!-- ==============================================================================
						Contact Area
============================================================================= -->
     <div id="filterContact">
      <?php
	include("includes/contactArea.php");
?>
      </div>
       <!-- ==============================================================================
						Contact Area
============================================================================= -->
      <!-- ==============================================================================
						Footer Area
============================================================================= -->
   <?php
	include("includes/footer.php");
?>

<!-- ==============================================================================
						Footer Area
============================================================================= -->
    
  </div>
     
            
           
<section class="pagegreen"><h2 class="hidden">Menu Nav Mobile</h2>
    
    <div class="top-bar">
    <div class="top-bar-left" style="position:fixed;">
        <ul class="menu">
            <li>
                <a href="#">
                    <img src="image/back_btn.svg" alt="btn_image" width="40" class="backBtn" id="back">
                </a>
            </li>

        </ul>
    </div>
</div>
    
      <!-- ==============================================================================
						Inner Resume
============================================================================= -->
       <?php
	include("includes/innerResume.php");
?>
	
    
    <!-- ==============================================================================
						Inner Resume
============================================================================= -->
     <!-- ==============================================================================
						Inner Dbegins
============================================================================= -->
        
    
    
    <?php
	include("includes/innerDebegins.php");
?>
    
 		   <!-- ==============================================================================
						Inner Dbegins
============================================================================= -->
    
    
     <!-- ==============================================================================
						Inner Getwell
============================================================================= -->
       
    
     <?php
	include("includes/innerGetwell.php");
?>
    
    
 		   <!-- ==============================================================================
						Inner Getwell
============================================================================= -->
           <!-- ==============================================================================
						Inner Car
============================================================================= -->
        
    
     <?php
	include("includes/innerCar.php");
?>
    
    
    
 		   <!-- ==============================================================================
						Inner car
============================================================================= -->  
            
</section>
    </div>
    
    
 </div>



        <script src="js/main.js"></script>
      <script src="js/filter.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
