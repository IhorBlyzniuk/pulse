
$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: true
              }
            },
            
          ]
    });
  });