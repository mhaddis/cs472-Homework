
"use strict";

(function() {
    
    var timeInterval = 250;
    var loopVariable = 0;
    var timerID = null;
    var frames = null;
    var animationStarted = false;
    
    window.onload = function() {
        var startElem = document.getElementById("start");
        var stopElem = document.getElementById("stop");
        var animationElem = document.getElementById("animation");
        var fontElem = document.getElementById("size");
        var turboElem = document.getElementById("turbo");
        startElem.onclick = start;
        stopElem.onclick = stop;
        fontElem.onchange = changeFontSize;
        turboElem.onclick = changeSpeed;
        animationElem.onchange = setAnimation;
        stopElem.disabled = true;
    };

    function start() {

        var animationElem = document.getElementById("animation");
        var mytextarea = document.getElementById("text-area");
        var startElem = document.getElementById("start");
        var stopElem = document.getElementById("stop");
        frames = mytextarea.value.split("=====\n");
        timerID = setInterval(displayFrames, timeInterval);
        startElem.disabled = true;
		animationElem.disabled = true;
        stopElem.disabled = false;
    }

    function displayFrames() {
        var mytextarea = document.getElementById("text-area");
        mytextarea.value = frames[loopVariable];
        loopVariable = (loopVariable + 1) % (frames.length);
    }

    function stop() {
		var animationElem = document.getElementById("animation");
        var startElem = document.getElementById("start");
        var stopElem = document.getElementById("stop");
        var mytextarea = document.getElementById("text-area");
        clearInterval(timerID);
        loopVariable = 0;
        
        mytextarea.value = frames.join("=====\n");
        startElem.disabled = false;
        stopElem.disabled = true;
		animationElem.disabled = false;
    }

    function setAnimation() {
        var animationElem = document.getElementById("animation");
        var mytextarea = document.getElementById("text-area");
        var selectedAnimation = animationElem.options[animationElem.selectedIndex].text;
        if (selectedAnimation != "Custom"){
            mytextarea.value = ANIMATIONS[selectedAnimation];
        }
    }

    function changeFontSize() {
        var mytextarea = document.getElementById("text-area");
        var fontElem = document.getElementById("size");
        mytextarea.style.fontSize = fontElem.value;
    }

    function changeSpeed() {
        var turboElem = document.getElementById("turbo");
        var startElem = document.getElementById("start");
        
        if (turboElem.checked) {
            timeInterval = 50;
        } else {
            timeInterval = 250;
        }

        clearInterval(timerID);
        if (startElem.disabled) {
            timerID = setInterval(displayFrames, timeInterval);
        } else {
           // start();
        }
    }
})();
