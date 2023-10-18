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

  // atWindow
  function atWindow(selector, actionClass, sTrigger, eTrigger) {
    //selector, action(toggle)class, startTriggerByWindowPosition, endTriggerByWindowPosition
    document.addEventListener("scroll", function () {
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windPos = window.scrollY;
          const windHeight = window.innerHeight;
          const selectorS = document.querySelectorAll(selector);
          function actionScroll() {
            selectorS.forEach((elmN) => {
              let thisIs = elmN;
              let thisHeight = thisIs.offsetHeight;
              let check =
                windPos > thisIs.offsetTop - windHeight * (sTrigger / 100);
              let check2 =
                windPos + windHeight * (eTrigger / 100) <
                thisIs.offsetTop + thisHeight;
              let checkEnd =
                windPos + windHeight * (sTrigger / 100) >
                thisIs.offsetTop + thisHeight;
              let checkEnd2 =
                windPos < thisIs.offsetTop - windHeight * (eTrigger / 100);
              if (checkEnd || checkEnd2) {
                thisIs.classList.remove(actionClass); //remove-first
              }
              if (check && check2) {
                thisIs.classList.add(actionClass); //then-add
              }
            });
          }
          if (selectorS.length) {
            actionScroll();
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
  atWindow(".pv-mr__section", "wa-visible", 100, 100);
  document.addEventListener("scroll", function (e) {
    let sections = document.querySelectorAll(".pv-mr__section");
    sections.forEach((eachSection) => {
      if (eachSection.classList.contains("wa-visible")) {
        let navElmAll = document.querySelectorAll(`.pv-mr-nav ul li a`);
        let navElmTarget = document.querySelector(
          `.pv-mr-nav ul li a[href="#${eachSection.id}"]`
        );
        if (!navElmTarget.classList.contains("active")) {
          navElmAll.forEach((navElm) => {
            navElm.classList.remove("active");
          });
          navElmTarget.classList.add("active");
        }
      }
    });
  });

  //
  //
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
      0: { margin: 15, nav: false },
      600: {},
      1000: {},
    },
  });
  var owlGallery = $(".pvm-gallery-slider-active");
  owlGallery.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    responsiveClass: true,
    nav: false,
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
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
  });
  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#Gcounter").html(+item + "/" + items);
  }

  //
  //
  //
  $(".cl-c-item__body").on("show.bs.collapse", function () {
    let thisIs = $(this);
    thisIs.parents(".cl-c-item").addClass("a-active");
  });
  $(".cl-c-item__body").on("hide.bs.collapse", function () {
    let thisIs = $(this);
    thisIs.parents(".cl-c-item").removeClass("a-active");
  });

  // magnific-popup
  //magnificPopup
  $(".popup-img").magnificPopup({
    type: "image",
  });
  $(".popup-video").magnificPopup({
    type: "iframe",
  });
  // magnific-popup-img-gallery
  $(".album-img a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //multiple-img-gallery
  $(".image-gallery").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: ".img-item", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});

//========== CLONE MANU TO SIDEBAR ==========>
const mainmenu = document.querySelectorAll(".main-menu");
mainmenu.forEach((wrap) => {
  let linkUl = wrap.querySelector("ul");
  let sidebarMenu = document.querySelector(".sidebar-menu");
  sidebarMenu.appendChild(linkUl.cloneNode(true));
});

// sidebar menu clicking event
const resBar = document.querySelectorAll(
  ".humberger-bar, .sidebar-slide-overlay"
);
resBar.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebarMenuAction();
  });
});
function sidebarMenuAction() {
  for (let i = 0; i < resBar.length; i++) {
    resBar[i].classList.toggle("active");
  }
  document.querySelector(".sidebar-slide").classList.toggle("active");
}
//========== CLONE MANU TO SIDEBAR ==========>
