$(function() {
  $(".back-top-btn").hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-top-btn").fadeIn();
    } else {
      $(".back-top-btn").fadeOut();
    }
  });

  $(".back-top-btn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    $("header li").removeClass("nav_active");
  });

  $("header a").click(function() {
    var id = $(this).attr("href");
    var position = $(id).offset().top;

    $("html,body").animate(
      {
        scrollTop: position - 50
      },
      500
    );
    $("header li").removeClass("nav_active");
    $(this)
      .parent()
      .addClass("nav_active");
  });

  $(".header_sp-label").click(function() {
    $(".scroll").addClass("scroll_active");
  });
  $(".header_sp-label-bg").click(function() {
    $(".scroll").removeClass("scroll_active");
  });

  $(".header_sp-item").click(function() {
    $(".scroll").removeClass("scroll_active");
    $(".header_sp-check").prop("checked", false);
  });
});
