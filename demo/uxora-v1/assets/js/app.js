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
  UXORA HEADER STICKY MENU JS INIT
  UXORA MENU SIDEBAR JS INIT
  UXORA PROGRES CIRCLE JS INIT
  UXORA TSTIMONIAL SLIDER INIT
  UXORA PORTFOLIO MASONAY FILTER JS
  UXORA TAB CONTENT JS
  UXORA TOGGLE PASSOWRD JS INIT
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
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
  UXORA HEADER TRIGER JS INIT
  --------------------------------------------------------------*/
  $(".uxora-header-triger").on("click", function (e) {
    $(".uxora-sidemenu-column, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".uxora-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".uxora-sidemenu-column, .offcanvas-overlay").removeClass("active");
  });

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
    if ($(window).scrollTop() > 20) {
      $('#sticky-menu').addClass('sticky-menu');
    } else {
      $('#sticky-menu').removeClass('sticky-menu');
    }
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
  UXORA TESTIMONIAL SLIDER INIT
  --------------------------------------------------------------*/
  var T_slider = $('.uxora-t-slider-init');
  if (T_slider.is_exist()) {
    T_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true
    }, "slidesToScroll", 1), "infinite", true), "speed", 1500), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow uxora-t-slider-next"></button>'), "nextArrow", '<button class="slide-arrow uxora-t-slider-prev"></button>'));
  }

  /*--------------------------------------------------------------
  UXORA  PORTFOLIO SLIDER JS INIT
  --------------------------------------------------------------*/

  var p_slider_data = $('.uxora-p-slider-init');
  if (p_slider_data.is_exist()) {
    p_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
  var testimonial_slider_data = $('.uxora-p-slider-init2');
  if (testimonial_slider_data.is_exist()) {
    testimonial_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      arrows: false,
      rtl: true,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
  $(function () {}); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  /*--------------------------------------------------------------
  UXORA TAB CONTENT JS INIT
  --------------------------------------------------------------*/

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.uxora-tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  /*--------------------------------------------------------------
  UXORA PORTFOLIO MASONAY FILTER JS INIT
  ------------------------------------------------------------*/

  var uxora_filter_gallery = $('#uxora-portfolio-grid');
  if (uxora_filter_gallery.is_exist()) {
    var $container = $(uxora_filter_gallery),
      colWidth = function colWidth() {
        var w = $container.width(),
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum = 2;
        } else if (w > 900) {
          columnNum = 2;
        } else if (w > 1200) {
          columnNum = 1;
        } else if (w > 450) {
          columnNum = 1;
        } else if (w > 385) {
          columnNum = 1;
        }
        columnWidth = Math.floor(w / columnNum);
        $container.find('.collection-grid-item').each(function () {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css({
            width: width
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function isotope() {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.uxora-portfolio-menu .option-set'),
      $optionLinks = $optionSets.find('li');
    $optionLinks.click(function () {
      var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[key] = value;
      if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
        // changes in layout modes need extra logic
        changeLayoutMode($this, options);
      } else {
        // creativewise, apply new options
        $container.isotope(options);
      }
      return false;
    });
  }
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

  /*--------------------------------------------------------------
  FLOWTO PRICING TABLE JS INIT
  ------------------------------------------------------------*/
  // Table BTN Trigger
  $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
    console.log($(e.target).parent().parent().hasClass("monthly-active"));
    $(e.target).toggleClass("clicked");
    if ($(e.target).parent().parent().hasClass("monthly-active")) {
      $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
    } else {
      $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
    }
  });
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
})(jQuery);