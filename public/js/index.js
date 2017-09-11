$(document).ready(function() {

  /* Dropdown */
  $(".header button").click(function() {
    $(".main-nav").slideToggle(300);
  });

  /*Scroll Up */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
  });
  
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
