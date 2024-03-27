
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let btnScrollTop = document.getElementById("btn-scroll");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scroll to home
document.getElementById("btn-home").addEventListener("click", function() {
    console.log("home click");
    document.getElementById("home").scrollIntoView();
});

// scroll to our package
document.getElementById("btn-package").addEventListener("click", function() {
    console.log("package click");
    document.getElementById("our-package").scrollIntoView();
});

// scroll to action
document.getElementById("btn-action").addEventListener("click", function() {
    console.log("package click");
    document.getElementById("call-action").scrollIntoView();
});

function kirim() {
    let inputNama = document.forms["contact-form"]["nama"].value;
    let inputEmail = document.forms["contact-form"]["email"].value;
    let inputInterest = document.forms["contact-form"]["interest"].value;
    let message = document.getElementById("message-success");

    if (inputNama !== '' && inputEmail !== '' && inputInterest !== '') {
        message.innerHTML = "Terimakasih pesan anda sudah terkirim.";
    }

    return false;
}

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }

    slides[slideIndex-1].style.display = "block";

}

function plusSlides(n) {
    showSlides(slideIndex += n);
}