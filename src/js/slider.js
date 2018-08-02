var indexSlider = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    indexSlider++;
    if (indexSlider > x.length) {
        indexSlider = 1
    }
    x[indexSlider - 1].classList.add("fadeInLeft");
    x[indexSlider - 1].style.display = "block";
    setTimeout(carousel, 4000);
}