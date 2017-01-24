window.onload = function () {
    var touchForward = document.getElementById("touchEventForward");
    var touchBack = document.getElementById("touchEventBack");
    var touchRight = document.getElementById("touchEventRight");
    var touchLeft = document.getElementById("touchEventLeft");
    var touchStop = document.getElementById("touchEventStop");
    
    alert("start");
    
    webiopi().ready(function(){
	webiopi().callMacro("controlMortor", 5);
    });
    
    touchForward.addEventListener("touchstart", function(){
	webiopi().callMacro("controlMortor", 1);
    });
    
    touchForward.addEventListener("touchend", function(){
	webiopi().callMacro("controlMortor", 0);
    });
    
    touchBack.addEventListener("touchstart", function(){
	webiopi().callMacro("controlMortor", 2);
    });
    
    touchBack.addEventListener("touchend", function(){
	webiopi().callMacro("controlMortor", 0);
    });
    
    touchRight.addEventListener("touchstart", function(){
	webiopi().callMacro("controlMortor", 3);
    });
    
    touchRight.addEventListener("touchend", function(){
	webiopi().callMacro("controlMortor", 0);
    });
    
    touchLeft.addEventListener("touchstart", function(){
	webiopi().callMacro("controlMortor", 4);
    });
    
    touchLeft.addEventListener("touchend", function(){
	webiopi().callMacro("controlMortor", 0);
    });
    
    touchStop.addEventListener("touchstart", function(){
	webiopi().callMacro("controlMortor", 0);
    });
    
    touchStop.addEventListener("touchend", function(){
	webiopi().callMacro("controlMortor", 0);
    });


    var imgs = "";
    var imgUrl = window.location.href;

    imgUrl = imgUrl.substr(0,imgUrl.length - 6) + ":8080/?action=stream";
    imgs += "<img src=" + imgUrl + ">";
    document.getElementById("a").innerHTML = imgs;

};

window.onbeforeunload = function() {
    webiopi().callMacro("controlMortor", 6);
}
