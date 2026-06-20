var box = document.getElementById('box');


box.addEventListener('animationstart', animationReset);



function animationReset() {
    setInterval(function() {
        box.classList.remove('ring');
    setTimeout(function() {
        box.classList.add('ring');
    }, 2000);
}, 2000);
}