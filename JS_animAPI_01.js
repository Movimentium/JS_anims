// JS_animAPI_01.js
let square = document.getElementById("square"); 
square.animate(
    [
        { backgroundColor: '#000000' },
        { backgroundColor: '#440000' },
        { backgroundColor: '#000000' }
    ],
    {
        duration: 1000, 
        iterations: 7
    }
);
