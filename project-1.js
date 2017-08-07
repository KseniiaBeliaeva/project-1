



      // <!--TOP MENU SCRIPT -- >

    let menuitem = '<div class="menu-item"><a href="';
    let menuitemend = '</a></div>';
    let menuarray = ['Home', 'Helpful FAQs', 'Princess parties', 'Superheroes parties', 'Packages', 'Make a booking / Contacts', 'Reviews'];
    let sum = '';
        for (let links = 0; links < menuarrayLinks.length; links++) {
            sum = sum + menuitem + menuarrayLinks[links] + menuitem2 + menuarray[links] + menuitemend;

        }

    document.getElementById('top-menu').innerHTML = sum;
    



    // <!--SLIDESHOW SCRIPT IMAGES -- >
    
            let slideshowitem = '<div class="slideshow-image-wrapper" style="background-image:url(slideshowimages/';
                let slideshowarray= ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
            let slideshowitemend = '.jpeg)"></div>';
let slidessum = '';
for (let j = 0; j < slideshowarray.length; j++) {

    slidessum = slidessum + slideshowitem + slideshowarray[j] + slideshowitemend + '<br>';

}
document.getElementById('slideshow-container').innerHTML = slidessum;

//   <!--SLIDESHOW SCRIPT AUTOSLIDE-- >


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



      setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

//   HIDE MENU

    $(document).ready(function () {
        $('.menu-icon').click(function () { 
            $('.container').toggle('slow');
        })
    });