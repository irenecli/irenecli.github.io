$(document).ready(function() {

  $("#cover-pic, #pic-description").hide();

  $("#hover-prompt").hover(function() {
    $("#cover-pic").fadeIn();
    $("#cover-pic").animate({
    	'left': "30%"
    });
    $("#cover-pic").animate({
    	'opacity': "1"
    });
    $("#pic-description").delay(800).fadeIn();
    // $(this).fadeOut();
    $("#cover-trace").fadeOut();
    $("#intro").fadeOut();
  }, function() {
  	$("#pic-description").fadeOut();
    $("#cover-pic").delay(400).animate({
    	'left': "20%"
    });
    $("#cover-pic").fadeOut();
    // $(this).fadeIn();
    $("#cover-trace").delay(1000).fadeIn();
    $("#intro").delay(1000).fadeIn();
  });

  $("#sidebar-button").click(function() {
    if ($(".sidebar-wrapper").hasClass("sidebar-active") == true) {
      setTimeout(function() {
        $('body').removeClass('no-scroll');
      }, 300);
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    } else {
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-wrapper").addClass("sidebar-active");
    }
  });

  $(".page-wrapper").click(function() {
    if ($(".sidebar-wrapper").hasClass("sidebar-active") == true) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    }
  });

  $("a").click(function() {
    $("body").removeClass("no-scroll");
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 500);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    }, 500);
    return false
  });

})