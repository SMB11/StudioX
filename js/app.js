$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".topBar").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $(".topBar").removeClass("active");
  }
});