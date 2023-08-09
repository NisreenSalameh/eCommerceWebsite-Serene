//Hamburger Menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

//if anyone clicks on the bar, the bar variable is activated
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

//activating the close button
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//single product script
document.addEventListener("DOMContentLoaded", function() {
    const smallimg = Array.from(document.getElementsByClassName("small-img"));
    const MainImg = document.getElementById("MainImg");

    for (let i = 0; i < smallimg.length; i++) {
        smallimg[i].onclick = function() {
            MainImg.src = smallimg[i].src;
        };
    }
});