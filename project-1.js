// <!--TOP MENU SCRIPT -- >
//=================================

// let menuitem = '<div class="menu-item"><a class="menu-item__link" href="';
// let menuitem2 = '.html">';
// let menuitemend = '</a></div>';
// let menuarray = ['home', 'helpful FAQs', 'princess parties', 'superheroes parties', 'packages', 'make a booking / contacts', 'reviews'];
// let menuarrayLinks = ['index', 'helpful-faqs', 'princess-parties', 'superheroes-parties', 'packages', 'make-a-booking', 'reviews'];
// let sum = '';
// for (let links = 0; links < menuarrayLinks.length; links++) {
//     sum = sum + menuitem + menuarrayLinks[links] + menuitem2 + menuarray[links] + menuitemend;

// }

// document.getElementById('top-menu').innerHTML = sum;




// <!--SLIDESHOW SCRIPT IMAGES -- >
//=================================

let slideshowitem = '<div class="slideshow-image-wrapper" style="background-image:url(slideshowimages/';
let slideshowarray = ['kidsparty1', 'kidsparty2', 'kidsparty3', 'kidsparty4', 'kidsparty5'];
let slideshowitemend = '.jpg)"></div>';
let slidessum = '';
for (let j = 0; j < slideshowarray.length; j++) {

    slidessum = slidessum + slideshowitem + slideshowarray[j] + slideshowitemend + '<br>';

}
document.getElementById('slideshow-container').innerHTML = slidessum;


//   <!--SLIDESHOW SCRIPT AUTOSLIDE-- >
//=====================================


let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName('slideshow-image-wrapper');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].style.justifyContent = "center";
    slides[slideIndex - 1].style.height = "250px";
    slides[slideIndex - 1].style.width = "1328px";



    setTimeout(showSlides, 3000); // Change image every 4 seconds
}

//HIDE MENU (3 BUTTONS FOR DIFFERENT AGES)
//========================================

// $(document).ready(function () {
//     $('.menu-icon').click(function () { 
//         $('#top-menu').toggle('slow');
//     })
// });

$('.bottom-button__description').hide();
$(document).ready(function () {
    $('.bottom-button__item').click(function () {
        $(this).next().slideToggle();
    })
});

//ANIMATED MENU BAR (X-SHAPED)
//===========================

function myFunction(x) {
    x.classList.toggle("change");

    $('#top-menu').slideToggle();
}

//ANIMATED MENU BAR SCREENS 415-768px
//===================================

function openNav() {
    document.getElementById("top-menu").style.left = "0";
}
function closeNav() {
    document.getElementById("top-menu").style.left = "-100%";
}


//Chaining mediaqueries and javascript

// const mq = window.matchMedia('(max-width: 1025px) and (min-width: 415px)');
// if (mq.matches) {
//     alert('Hey');
// } else (alert('NO'));


//PAGE STYLES
//===========
function button1() { 
    $('#page-style__button1').click(() => {
        if ($(window).width() > 767) {
            $('#top-menu').css('backgroundColor', 'darkred');
        } else { }
        $('.header').css('color', 'purple');
        $('#top-menu').css('color', 'darkred');
        $('.bottom-button__item').css('backgroundColor', 'yellow');
    })
}
button1();
function button2() { }
$('#page-style__button2').click(() => { 
    $('.bar1, .bar2, .bar3').css('backgroundColor','#4c2759');
    $('.bottom-button__item').css('backgroundColor','#9f58b6');
    $('.header').css('color', 'red');
})
button2();
function button3() {
    $('#page-style__button3').click(() => {
        $('.bar1, .bar2, .bar3').css('backgroundColor', '#4c2759');
        $('.bottom-button__item').css('backgroundColor', '#B1D730');
        $('.header').css('color', '#F0F7D4');
    });
    $('#page-style__button3').hover(function() { 
        $('.bottom-button__item').css('backgroundColor', '#B1D730');
    });
}
button3();
function initialStyle() { 
    $('initial').click(() => {
        $('.bar1, .bar2, .bar3').css('backgroundColor', 'initial');
        $('.bottom-button__item').css('backgroundColor', 'initial');
        $('.header').css('color', 'initial');
    });
}