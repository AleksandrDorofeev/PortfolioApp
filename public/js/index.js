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
    $("body").addClass("no-scroll");
    $(".overlay").fadeIn(400,
      function() {
        $(".modal")
          .css("display", "block")
          .animate({opacity: 1}, 200);
    });
  });
	$('.close, .overlay').click(function(event) {
    event.preventDefault();
    $('.modal')
      .animate({opacity: 0, scrollTop: 0}, "fast",
        function() {
        $(this).css('display', 'none');
        $('.overlay').fadeOut(400);
        $("body").removeClass("no-scroll");
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
