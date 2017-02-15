// Java Script Document

//page scroll javascript 
(function() {
    "use strict"
    console.log("javascript loaded");
    
    var nav = document.querySelector("#mainNav");
    var links = nav.querySelectorAll("a");
    console.log(links);
   
    function scrollit(e){
       // console.log("Click...")
        var idNum = e.currentTarget.id; // taking id from particular section and store in idNum var
        console.log(idNum);
        TweenMax.to(window, 1,{scrollTo:{y:"#section"+idNum, offsetY:140}}); //scrooling to content
		console.log("content scrolled");
    }
    
    
    for (var i=0; i<links.length; i++){
        links[i].addEventListener("click",scrollit,false);
		  console.log("listner scroll working");
    }
}
)();