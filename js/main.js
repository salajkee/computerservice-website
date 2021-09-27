$(function () {
    $('.products__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 
    });

    $('.testimonials__wrapper').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            }
          ]
    });

    //Smooth scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // Modal

    $('[data-modal=request]').on('click', function() {
        $('.overlay, #request').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #request').fadeOut('slow');
    });
    


    // Hamburger
    const menu = document.querySelector('.header__menu-list');
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');

    hamburger.onclick = ()=>{
        menu.classList.add("active");
        hamburger.classList.add("hide");

    };

    close.onclick = ()=>{
        menu.classList.remove("active");
        hamburger.classList.remove("hide");
    };
});