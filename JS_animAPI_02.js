// JS_animAPI_02.js
let square = document.getElementById("square"); 
let squareAnim = square.animate(
    [
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0,0,0)' },
        { backgroundColor: '#440000', opacity: 0.3 },
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0,0,0)'  }
    ],
    {
        duration: 1000, 
        iterations: Infinity, 
        easing: 'ease-in-out'
    }
);
