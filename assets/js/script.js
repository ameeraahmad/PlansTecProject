// slider javascript 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    'use strict';
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    'use strict';
    showSlides(slideIndex = n);
}

function showSlides(n) {
    'use strict';
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    //  var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" _active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " _active";
    //    captionText.innerHTML = dots[slideIndex - 1].alt;
}

$(function () {
    'use strict';

    $(".load_screen .load_img").fadeOut(2000,
        function () {
            $('body').css("overflow", "hidden");
            $(this).parent().fadeOut(2000,
                function () {
                    $(this).remove();
                    $(".load_screen").remove();
                    $('body').css("overflow-x", "hidden");
                    $('body').css("overflow-y", "visible");
                });
        });

    // Magnific Popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        //		disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // Swiper JS
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // trigger nice scroll
    $('html').niceScroll({
        cursorcolor: '#96b9ff',
        cursorwidth: '15px',
        cursorheght: '86px',
        cursorborder: '0',
        cursorborderradius: '5px'
    });

    /*---------------------------------
            castum cod jquery
    -----------------------------------*/

    // scroll to top 
    $('.btn_top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });

    $('#father a').click(function () {
        $('body,html').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        });
    });

    // link active class
    $('#father li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    //  mobile menu
    $(".close-btn").click(function () {
        $("#father").toggleClass("menu-open");
        $(this).toggleClass("open-btn");
        $('.menu').toggleClass('nav_menu');
        $('.close-btn').toggleClass('toggle');

    });

    // hide placeholder 
    $('[placeholder]').focus(function () {
        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).attr('data-text'));
    });


    //
});

/*---------------------------------
castum cod javascript
-----------------------------------*/
// fade the scroll btn top
$(window).scroll(function () {
    'use strict';
    var sc = $(this).scrollTop();
    if (sc > 500) {
        $('.btn_top').fadeIn();

    } else {
        $('.btn_top').fadeOut();
    }

});
