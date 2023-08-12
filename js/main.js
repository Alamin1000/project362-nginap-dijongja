(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".wbx-slider").owlCarousel({
    loop: true,
    margin: 25,
    autoWidth: true,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });

  $(".cl-c-item__body").on("show.bs.collapse", function () {
    let thisIs = $(this);
    thisIs.parents(".cl-c-item").addClass("a-active");
  });
  $(".cl-c-item__body").on("hide.bs.collapse", function () {
    let thisIs = $(this);
    thisIs.parents(".cl-c-item").removeClass("a-active");
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
