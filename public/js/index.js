$(document).ready(function() {
  $(".header button").click(function() {
    $(".main-nav").slideToggle(300);
  });

  $(window).resize(function() {
  if ($(this).width() < 1024) {
    $('.main-nav').hide();
  } else {
    $('.main-nav').show();
    }
  });
});
