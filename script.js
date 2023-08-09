// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:false,
    //   autoplayTimeout:3000,
    //   autoplayHoverPause:true,
      center: true,
      navText: [

          "<i class='fa fa-angle-left py-0 px-4' style = 'background-color: rgba(50,50,50,0.7); color: rgba(250,250,250,0.7); border-radius: 10px;'></i>",

          "<i class='fa fa-angle-right py-0 px-4' style = 'background-color: rgba(50,50,50,0.7); color: rgba(250,250,250,0.7); border-radius: 10px; '></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          770:{
              items:1
          },
          1000:{
              items:5
          },
          1400:{
              items:5
          }
      }
    });
  });