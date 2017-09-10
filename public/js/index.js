$(document).ready(function() {

  /* Dropdown */
  $(".header button").click(function() {
    $(".main-nav").slideToggle(300);
  });

  /*Scroll Up */
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
