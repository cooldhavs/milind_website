 <div class="top-bar aboutmeBg">
    
		<section class="row column text-center" id="section2">
			<h3 class="titleWeb">CONTACT ME</h3>
			<p class="lead subtitleWeb">Like what you see? Keen on enlisting me? <br>
                Possibly you simply need to get an espresso and discuss making a trip to far away<br>
                removed grounds - how about we do it. Give me a message about whatever you'd like! <br>
                I guarantee I'll hit you up as quickly as time permits.</p>
			<hr>
        </section>
 	


	<?php 
     echo form_errors($errors);
     ?>

    
    
    
    
  <h2 class="hidden">My Contact Details</h2> 
  
   <div class="row ">
          <section  class="row"><h2 class="hidden">MILIND  Contact Info </h2>
              <section class="medium-6  columns " style="text-align: left;"><h3 class="hidden">My Contact Form </h3>
                  <form action="<?php echo htmlspecialchars ($_SERVER['PHP_SELF']);?>" method="post">
                       <input name="name" type="text" placeholder="Enter Your Name">
                  
                      <?php if(!empty($name)){echo $name;}?>
                  <input name="email" type="text" placeholder="Enter Your Email Address">
                      <?php if(!empty($email)){echo $email;}?>
                  <input name="phone" type="text" value="" placeholder="Enter Your Phone">
                      <?php if(!empty($phone)){echo $phone;}?>
                  <input  name="message" type="text" value="" class="heightP" placeholder="Enter Your Message">
                      <?php if(!empty($msg)){echo $msg;}?>
                      <button class="btnBG2" name="submit" type="submit" value="SUBMIT">SUBMIT</button>
                  </form>
              </section>
              <section class="medium-6 columns "><h3 class="hidden">MILIND Contact Information </h3><br>
                  <img src="image/logo_black.svg" width="125" alt="image" class="logoFooter"><br><br>
                  <p class="contact"><b>Contact Me:</b> 226 238 8284<br>
                      <b>Email Me:</b> m_parkara@fanshaweonline.ca<br><br>
                      <b>Follow Us:</b> 
                      <a href="https://www.facebook.com/milindparkara" class="contact" style="color:#000;">Facebook</a> / 
                      <a href="https://twitter.com/milind58995434" class="contact" style="color:#000;">Twiiter</a> / 
                      <a href="https://www.pinterest.com/impmilind/" class="contact" style="color:#000;">Pintrest</a> / 
                      <a href="https://www.linkedin.com/in/milind-parkara-411b775a?trk=nav_responsive_tab_profile" class="contact" style="color:#000;">Linkedin</a></p>
              </section>
          </section>
      </div></div>