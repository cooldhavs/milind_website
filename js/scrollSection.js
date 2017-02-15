//page scroll javascript 
(function() {
    "use strict"
    console.log("javascript loaded");
	
	var click1 = document.querySelector("#aboutView");
	var click2 = document.querySelector("#homeView");
	var click3 = document.querySelector("#portView");
    var click31 = document.querySelector("#portView1");
	var click4 = document.querySelector("#portDataView");
	var leftChange = document.querySelector("#landing.page");
	var rightChange = document.querySelector("#about.page");
	var classclick = document.querySelectorAll(".thumbnail");
	
	
	var t1 = new TimelineLite();
	
    
 
	
	 function s1(){
        //console.log("Click...")
        click3.style.display = "block";
	    click4.style.display = "none";
      t1.to(leftChange, 1,{left:"50%"}); //scrooling to content
	   console.log("Click s1 working...");
    }
	
	 function s2(){
       // console.log("Click...")
       click3.style.display = "block";
       t1.to(leftChange, 1,{left:"50%"}); //scrooling to content
		 console.log("Click s2 working...");
    }
	 function s3(){
       // console.log("Click...")
	   click3.style.display = "none";
	    click4.style.display = "none";
       t1.to(rightChange, 0.1,{left:"50%"}); //scrooling to content
         t1.to(leftChange, 1,{left:"50%"}); //scrooling to content
		 
		 console.log("Click s3 working...");
    }
    
    function s31(){
       // console.log("Click...")
	   t1.to(rightChange, 0.1,{left:"50%"}); //scrooling to content
         t1.to(leftChange, 1,{left:"100%"}); //scrooling to content
		 
		 console.log("Click s31 working...");
    }
    
    
	 function s4(){
       // console.log("Click...")
       
        t1.to(leftChange, 1,{left:"0px"}); //scrooling to content
		 console.log("Click s4 working...");
		 click3.style.display = "block";
    }
	
	function myFunction(){
       // console.log("Click...")
       
        t1.to(leftChange, 1,{left:"0px"}); //scrooling to content
		 t1.to(click3, 1,{opacity:"1", delay:0.5}); //scrooling to content
		 console.log("Click s4 working...");
		// click3.style.display = "block";
    }
	
	click1.addEventListener("click",s1 , false);
	click2.addEventListener("click",s2 , false);
	click3.addEventListener("click",s3 , false);
    click31.addEventListener("click",s31 , false);
	click4.addEventListener("click",s4 , false);
	
	for (var i = 0; i < classclick.length; i++) {
    classclick[i].addEventListener("click", myFunction, false);
}
}
)();