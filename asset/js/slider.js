
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        dots:false,
        prevArrow:`<button class = "slider-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9L9 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`,
        nextArrow:`<button class = "slider-next">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 9L1 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`

    });


    $('.slider-job').slick({
        infinite: false,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 9,
        arrows:true,
        dots:false,
        prevArrow:`<button class = "slider-prev1"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9L9 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`,
        nextArrow:`<button class = "slider-next1">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 9L1 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              // centerMode: true,
              // variableWidth: true,
              arrows:true,
              dots:false,
              prevArrow:`<button class = "slider-prev1"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9L9 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></button>`,
              nextArrow:`<button class = "slider-next1">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 9L1 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></button>`,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              // centerMode: true,
              // variableWidth: true,
              arrows:true,
              dots:false,
              prevArrow:`<button class = "slider-prev1"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9L9 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></button>`,
              nextArrow:`<button class = "slider-next1">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 9L1 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></button>`,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              // variableWidth: true,

              arrows:false,
              dots:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              // variableWidth: true,
              
              arrows:false,
              dots:false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('.slider-news').slick({
        infinite: true,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:true,
        dots:false,
        prevArrow:`<button class = "slider-prev1"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9L9 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`,
        nextArrow:`<button class = "slider-next1">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 9L1 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              arrows:true,
              dots:false,
              prevArrow:`<button class = "slider-prev1"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9L9 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></button>`,
              nextArrow:`<button class = "slider-next1">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 9L1 17" stroke="#454749" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></button>`,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows:false,
              dots:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots:false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });

  