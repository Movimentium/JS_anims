// JS_canvas01.js
let canvas = document.getElementById('myCanvas'); 
let ctx = canvas.getContext('2d'); 
var theInterval = requestAnimationFrame(animCircle);  // <--
var xCircle = 60; 

function animCircle() {
    xCircle += 1; 
    if (xCircle > canvas.width) {
        xCircle = 0; 
    }
    clearCanvas(); 
    drawCircle(xCircle, canvas.height / 2, 25); 
    theInterval = requestAnimationFrame(animCircle);  // <--
}

function drawCircle(x, y, rad) {
    ctx.fillStyle = "red"; 
    ctx.beginPath(); 
    ctx.arc(x, y, rad, 0, 2 * Math.PI); 
    ctx.fill(); 
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}