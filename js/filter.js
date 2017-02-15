//page scroll javascript 
(function() {
    "use strict"
    console.log("javascript loaded");
	
	
	
	
	var portNav1 = document.querySelector("#uxui");
	var portNav2 = document.querySelector("#web");
	var portNav3 = document.querySelector("#motion");
	var portNav4 = document.querySelector("#branding");
	var clickUXUI = document.querySelector("#filterUXUI");
	var clickWeb = document.querySelector("#filterWeb");
	var clickMotion = document.querySelector("#filterMotion");
	var clickBranding = document.querySelector("#filterBranding");
	var openNav = document.querySelector("#navMobile");
	var sectionLeft = document.querySelector(".pagered");
	var sectionRight = document.querySelector(".pagegreen");
	var middle = document.querySelector(".pageblue");
	var logo = document.querySelector("#logoanim");
    var disResume = document.querySelector("#btnResume");
	var mainMenu = document.querySelector("#menuBg");
    var returnB = document.querySelector("#back");
    var fadeResumeVar = document.querySelector("#fadeResume");//innerdatapage
    var clickdb = document.querySelector("#imageDB1");
    var innerGetwellVar = document.querySelector("#innerGetwell");//innerdatapage
    var fadeDbeginsVar = document.querySelector("#innerDbegins");//innerdatapage
    var clickGet = document.querySelector("#imageget");
    var clickcar = document.querySelector("#imagecar");
    var fadeCarVar = document.querySelector("#innercar");//innerdatapage
    var nav1 = document.querySelector("#click1");
    var nav3 = document.querySelector("#click3");
    var nav4 = document.querySelector("#click4");
    var nav5 = document.querySelector("#click5");
    var filterAbout = document.querySelector("#filterAbout");
    var filterResume = document.querySelector("#filterResume");
    var filterPort = document.querySelector("#filterPort");
    var filterContact = document.querySelector("#filterContact");
    var filterSkills = document.querySelector("#filterSkills");
    
	//var t1 = new TimelineLite();
	
	
	
	var t1 = new TimelineLite();
	
    
 
	
	 function d1(){
		 
		 // t1.to(leftChange, 1,{left:"100%"}); //scrooling to content
		 portNav1.style.display="block";
		 portNav2.style.display="none";
		 portNav3.style.display="none";
		 portNav4.style.display="none";
		 
        //console.log("Click...")
      
    	//  t1.to(leftChange, 1,{left:"100%"}); //scrooling to content
	   	console.log("Click s1 working...");
    }
	
	function d2(){
		 portNav1.style.display="none";
		 portNav2.style.display="block";
		 portNav3.style.display="none";
		 portNav4.style.display="none";
		 
        //console.log("Click...")
      
    	//  t1.to(leftChange, 1,{left:"100%"}); //scrooling to content
	   	console.log("Click s1 working...");
    }
	
	function d3(){
		 portNav1.style.display="none";
		 portNav2.style.display="none";
		 portNav3.style.display="block";
		 portNav4.style.display="none";
		 
        //console.log("Click...")
      
    	//  t1.to(leftChange, 1,{left:"100%"}); //scrooling to content
	   	console.log("Click s1 working...");
    }
	
	function d4(){
		 portNav1.style.display="none";
		 portNav2.style.display="none";
		 portNav3.style.display="none";
		 portNav4.style.display="block";
		 
        //console.log("Click...")
      
    	//  t1.to(leftChange, 1,{left:"100%"}); //scrooling to content
	   	console.log("Click s1 working...");
    }
	
	function navOpen(){
		
		t1.to(sectionLeft, 1,{left:"0%"}); //scrooling to content
		
    }
	
	
	function logoAnimation(){
		
		t1.to(logo, 0.5,{marginTop:"28%",opacity:"1"}); //scrooling to content
		
    }
    
    
    function disResumeFn(){
		
		t1.to(sectionRight, 1,{left:"0%"}); //scrooling to content
		mainMenu.style.display="none";
        t1.to(fadeResumeVar, 0.8,{left:"0%",opacity:"1"});
        fadeDbeginsVar.style.display="none";
        
    }
    function returnBFn(){
		
		t1.to(sectionRight, 1,{left:"100%"}); //scrooling to content
		mainMenu.style.display="block";
        //fadeDbeginsVar.style.display="none";
        fadeResumeVar.style.display="none";
        innerGetwellVar.style.display="none";
        fadeDbeginsVar.style.display="none";
        fadeCarVar.style.display="none";
    }
    function clickdbFn(){
		
		//t1.to(sectionRight, 1,{left:"100%"}); //scrooling to content
		fadeDbeginsVar.style.display="block";
        fadeResumeVar.style.display="none";
        mainMenu.style.display="none";
        t1.to(sectionRight, 1,{left:"0%"}); //scrooling to content
         innerGetwellVar.style.display="none";
        fadeCarVar.style.display="none";
    }
    function clickGetFn(){
		
		//t1.to(sectionRight, 1,{left:"100%"}); //scrooling to content
        
		fadeDbeginsVar.style.display="none";
        innerGetwellVar.style.display="block";
        fadeResumeVar.style.display="none";
        mainMenu.style.display="none";
        t1.to(sectionRight, 1,{left:"0%"}); //scrooling to content
        fadeCarVar.style.display="none";
    }
    function clickcarFn(){
		
		//t1.to(sectionRight, 1,{left:"100%"}); //scrooling to content
        fadeCarVar.style.display="block";
		fadeDbeginsVar.style.display="none";
        innerGetwellVar.style.display="none";
        fadeResumeVar.style.display="none";
        mainMenu.style.display="none";
        t1.to(sectionRight, 1,{left:"0%"}); //scrooling to content
    }
   function navAbout(){
		
		t1.to(sectionLeft, 1,{left:"-100%"}); //scrooling to content
		filterAbout.style.display="block";
		 filterResume.style.display="none";
		 filterPort.style.display="none";
		 filterContact.style.display="none";
       filterSkills.style.display="none";
       
    }
    function navResume(){
		
		t1.to(sectionLeft, 1,{left:"-100%"}); //scrooling to content
        filterAbout.style.display="none";
		 filterResume.style.display="block";
		 filterPort.style.display="none";
		 filterContact.style.display="none";
        filterSkills.style.display="none";
		
    }
    function navPortfolio(){
		
		t1.to(sectionLeft, 1,{left:"-100%"}); //scrooling to content
		filterAbout.style.display="none";
		 filterResume.style.display="none";
		 filterPort.style.display="block";
		 filterContact.style.display="none";
        filterSkills.style.display="none";
    }
    function navContact(){
		
		t1.to(sectionLeft, 1,{left:"-100%"}); //scrooling to content
		filterAbout.style.display="none";
		 filterResume.style.display="none";
		 filterPort.style.display="none";
		 filterContact.style.display="block";
        filterSkills.style.display="none";
    }
    
	clickUXUI.addEventListener("click",d1 , false);
	clickWeb.addEventListener("click",d2 , false);
clickMotion.addEventListener("click",d3 , false);
	clickBranding.addEventListener("click",d4 , false);
	openNav.addEventListener("click",navOpen , false);
	disResume.addEventListener("click",disResumeFn , false);
    returnB.addEventListener("click",returnBFn , false);
    clickdb.addEventListener("click",clickdbFn , false);
    clickGet.addEventListener("click",clickGetFn , false);
    clickcar.addEventListener("click",clickcarFn , false);
    nav1.addEventListener("click",navAbout , false);
    nav3.addEventListener("click",navResume , false);
    nav4.addEventListener("click",navPortfolio , false);
    nav5.addEventListener("click",navContact , false);
   
    
	//window.addEventListener("load", logoAnimation, false);
	
	
	console.log("listner Click...");
	
	
	

}
)();// JavaScript Document