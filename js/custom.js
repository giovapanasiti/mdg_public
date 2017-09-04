$(window).ready(function(){
  // $('#logo-slider').bxSlider({
  //   ticker: true,
  //   speed: 6000
  // });
  $("#logo-slider-x").owlCarousel({
   autoPlay: 900, //Set AutoPlay to 3 seconds
   itemsDesktopSmall: [990, 4],
   itemsTablet: [768, 2],
   itemsMobile: [480, 1],
   stopOnHover: true,
   dots: false,
   pagination: false,
   margin: 30,
   items : 6,
   infiniteLoop:true //**Change this property
  });
});
