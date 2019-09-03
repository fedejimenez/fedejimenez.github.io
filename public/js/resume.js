(function($) {  
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //   }
  // });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Image transparency when hover on cards
  $('.card').mouseover(function(){
    let name = this.className.split(/\s+/).slice(-1).pop();
    console.log(name)
    $("."+name + " > .container > .image").css({ opacity: 0.1 });
    $("."+name + " > .container > .middle").css({ opacity: 1 });
  });
  $('.card').mouseleave(function(){
    let name = this.className.split(/\s+/).slice(-1).pop();
    $("."+name + " > .container > .image").css({ opacity: 1 });
    $("."+name + " > .container > .middle").css({ opacity: 0 });
  });

})(jQuery); // End of use strict
