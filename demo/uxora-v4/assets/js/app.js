"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  UXORA PRELOADER JS INIT
  UXORA HEADER TRIGER JS INIT
  UXORA MENU SIDEBAR JS INIT
  UXORA PROGRES CIRCLE JS INIT
  UXORA MAGNIFIC PUPOP JS INIT
  UXORA TSTIMONIAL SLIDER INIT
  UXORA TOGGLE PASSOWRD JS INIT
  UXORA HEADER ACTIVE JS INIT
  
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    UXORA PRELOADER JS INIT
    --------------------------------------------------------------*/
    // $(".uxora-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    UXORA SIDEBAR TRIGER JS INIT
    --------------------------------------------------------------*/
    $(".menu-bar").on("click", function () {
      $(".uxora-offcanves-sidebar, .offcanvas-overlay").addClass("active");
    });
    $(".close, .offcanvas-overlay").on("click", function () {
      $(".uxora-offcanves-sidebar, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    UXORA MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".uxora-header-triger").on("click", function (e) {
      $(".uxora-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".uxora-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".uxora-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    UXORA PROGRES CIRCLE JS INIT
    --------------------------------------------------------------*/

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function updateProgress() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });

    /*--------------------------------------------------------------
    UXORA MAGNIFIC PUPOP JS INIT
    --------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

    /*--------------------------------------------------------------
      UXORA STICKY MENU JS INIT
    --------------------------------------------------------------*/

    var lastScroll = 0;
    function sticky_header() {
      var header_hegith = $('header').innerHeight();
      var scroll = $(window).scrollTop();
      if (scroll > header_hegith && scroll > lastScroll) {
        $('header').addClass('hide-header');
      } else if (scroll < lastScroll) {
        $('header').removeClass('hide-header');
      }
      lastScroll = scroll;
    }
    $(function () {
      sticky_header();
    });
    window.onload = function () {
      sticky_header();
    };
    window.onscroll = function () {
      sticky_header();
    };
    window.onresize = function (event) {
      sticky_header();
    };
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    UXORA BRAND JS INIT
    --------------------------------------------------------------*/

    var brand_slider = $('.uxora-brand-slider-init');
    if (brand_slider.is_exist()) {
      brand_slider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    UXORA  TESTIMONIAL SLIDER JS INIT
    --------------------------------------------------------------*/
    var T_slider = $('.uxora-team-slider-init');
    if (T_slider.is_exist()) {
      T_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "prevArrow", '<button class="slide-arrow uxora-team-slider-next"></button>'), "nextArrow", '<button class="slide-arrow uxora-team-slider-prev"></button>'), "responsive", [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]));
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize
})(jQuery);

/*--------------------------------------------------------------
TECHIN TOOGLE BUTTON JS INIT
--------------------------------------------------------------*/

$(document).ready(function () {
  $(".toggle-button").change(function () {
    toggle(this.checked);
  });

  // Uncomment this to disaplay monthly on page load
  toggle(false);
  function toggle(checked) {
    $(".toggle-button").prop('checked', checked);
    if (checked) {
      $('.coreMonthlyPrice, .proMonthlyPrice').show();
      $('.coreAnnuallyText, .coreAnnuallyPrice, .proAnnuallyPrice').hide();
    } else {
      $('.coreMonthlyPrice,.proMonthlyPrice').hide();
      $('.coreAnnuallyText,.coreAnnuallyPrice, .proAnnuallyPrice').show();
    }
  }
});

// // Add the active class to the correct link based on the current page

// jihad

var currentURL = window.location.href;
$('.main-menu ul li a').each(function () {
  if (this.href === currentURL) {
    $('.main-menu ul li a').removeClass("active");
    $(this).addClass('active');
  }
});

/*--------------------------------------------------------------
UXORA TOGGLE PASSOWRD JS INIT
------------------------------------------------------------*/

$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
$(".toggle-password2").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

/*===========================================
    =    On Load Function      =
=============================================*/
$(window).on("load", function () {
  preloader();
});

/*===========================================
    =    Preloader      =
=============================================*/
function preloader() {
  $('.preloader').delay(0).fadeOut();
}
;

/*===========================================
    =    TOOGLE BUTTON      =
=============================================*/
$("#l5-pricing-btn .toggle-btn").on("click", function (e) {
  console.log($(e.target).parent().parent().hasClass("monthly-active"));
  $(e.target).toggleClass("clicked");
  if ($(e.target).parent().parent().hasClass("monthly-active")) {
    $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
  } else {
    $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
  }
});

/*===========================================
    =    HEADER ACTIVE      =
=============================================*/

$("[data-pricing-trigger]").on("click", function (e) {
  $(e.target).addClass("active").siblings().removeClass("active");
  var target = $(e.target).attr("data-target");
  console.log($(target).attr("data-value-active") == "monthly");
  if ($(target).attr("data-value-active") == "monthly") {
    $(target).attr("data-value-active", "yearly");
  } else {
    $(target).attr("data-value-active", "monthly");
  }
});