$(document).ready(function() {
  $(".header button").click(function() {
    $(".main-nav").slideToggle(300);
  });

  //$(window).resize(function() {
  if (screen.width > 1024) {
    $('.main-nav').show();
  } else {
    $('.main-nav').hide();
    }
  //});
});
