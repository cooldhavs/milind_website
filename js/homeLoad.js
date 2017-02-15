//page scroll javascript 
(function() {
    "use strict"
    console.log("javascript loaded");
	
	
	
	
	
	var logo = document.querySelector("#logoanim");
	var name = document.querySelector("#milind");
	var lines = document.querySelector("#myRol");
	var linesbtn = document.querySelector("#btnarrow");
	
	
	
	//var t1 = new TimelineLite();
	
	
	
	var t1 = new TimelineLite();
	
    
 
	
	
	function logoAnimation(){
		
		t1.to(logo, 1,{opacity:"1",left:"0%"}); //scrooling to content
		t1.to(name, 1,{opacity:"1",left:"0%"}); //scrooling to content
		t1.to(lines, 1,{opacity:"1",left:"0%"}); //scrooling to content
		t1.to(linesbtn, 1,{opacity:"1"}); //scrooling to content
		
    }
	
	window.addEventListener("load", logoAnimation, false);
	
	
	console.log("listner Click...");
	
	
	

}
)();// JavaScript Document