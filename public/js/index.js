$(document).ready(function() {

  // Dropdown
  $(".header button").click(function() {
    $(".main-nav").slideToggle(300);
  });

  // Menu smooth scroll
  $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

  // Actions with a modal window
	$("a#cabin").click(function(event) {
    event.preventDefault();
    $(".overlay").fadeIn(400,
      function() {
        $(".content")
          .css("display", "block")
          .animate({opacity: 1, top: "10%"}, 200);
    });
  });
	$('.close, .overlay').click(function(event) {
    event.preventDefault();
    $('.content')
      .animate({opacity: 0, top: "5%"}, 200,
        function(event) {
        $(this).css('display', 'none');
        $('.overlay').fadeOut(400);
      }
    );
  });

  // Scrollup btn
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
