// JavaScript Document
(function (){
	"use strict";
	
	var vidCon = document.querySelector("#vid");
	var appCon = document.querySelector("#webApp");
	var screenPos; // to make screenPos variable globally accessible
	var vid; // to make vid variable globally accessible
	
	function runVideo(){
		screenPos = window.scrollY; 
		// screenPos means screen position 
		// scroll Y is giveing height of window
		vid = vidCon.offsetTop;
		console.log(screenPos);
	console.log(vid);
		
		if(screenPos+1000>vid){
           // console.log("start video");
		   vidCon.play();
            //document.querySelector("body").style.backgroundColor = "red";
            //window.removeEventListener("scroll",activate,false);
        }
		}
		
		function vidFinished(){
			//console.log("All done");
			//vidCon.pause();
			vidCon.classList.remove("show");
			vidCon.classList.add("hide2");
			appCon.classList.toggle("hide2");
			//appCon.classList.add("show");
			window.removeEventListener("scroll",runVideo, false);
			
		}
		function runIt(){
			console.log("thanks for watching video")
		}
	
	window.addEventListener("load",runVideo,false);
	vidCon.addEventListener("ended",vidFinished,false);
	vidCon.addEventListener("click",runIt,false);
})();