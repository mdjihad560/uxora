"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
  UXORA BRAND SLIDER INIT
  UXORA COUNTER JS INIT
  UXORA TSTIMONIAL SLIDER INIT
  UXORA MAP JS INIT
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
    UXORA SIDEBAR TRIGER JS INIT
    --------------------------------------------------------------*/
    $(".menu-bar").on("click", function () {
      $(".uxora-offcanves-sidebar, .offcanvas-overlay").addClass("active");
    });
    $(".close, .offcanvas-overlay").on("click", function () {
      $(".uxora-offcanves-sidebar, .offcanvas-overlay").removeClass("active");
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
      if ($(window).scrollTop() > 530) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
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
          breakpoint: 1799,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 1399,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 991,
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
    var T_slider = $('.uxora-t-slider-init');
    if (T_slider.is_exist()) {
      T_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow uxora-t-slider-next"></button>'), "nextArrow", '<button class="slide-arrow uxora-t-slider-prev"></button>'));
    }

    /*--------------------------------------------------------------
    UXORA COUNTER JS INIT
    --------------------------------------------------------------*/

    var stats = document.querySelectorAll(".uxora-counter-data");
    stats.forEach(function (stat) {
      // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
      var patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
      var time = 1000;
      var result = _toConsumableArray(patt.exec(stat.textContent));
      var fresh = true;
      var ticks;

      // Remove first full match from result array (we dont need the full match, just the individual match groups).
      result.shift();
      // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
      result = result.filter(function (res) {
        return res != null;
      });
      while (stat.firstChild) {
        stat.removeChild(stat.firstChild);
      }
      var _iterator = _createForOfIteratorHelper(result),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var res = _step.value;
          if (isNaN(res)) {
            stat.insertAdjacentHTML("beforeend", "<span>".concat(res, "</span>"));
          } else {
            for (var i = 0; i < res.length; i++) {
              stat.insertAdjacentHTML("beforeend", "<span data-value=\"".concat(res[i], "\">\n\t\t\t\t\t\t<span>&ndash;</span>\n\t\t\t\t\t\t").concat(Array(parseInt(res[i]) + 1).join(0).split(0).map(function (x, j) {
                return "\n\t\t\t\t\t\t\t<span>".concat(j, "</span>\n\t\t\t\t\t\t");
              }).join(""), "\n\t\t\t\t\t</span>"));
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ticks = _toConsumableArray(stat.querySelectorAll("span[data-value]"));
      var _activate = function activate() {
        var top = stat.getBoundingClientRect().top;
        var offset = window.innerHeight * 0.8;
        setTimeout(function () {
          fresh = false;
        }, time);
        if (top < offset) {
          setTimeout(function () {
            var _iterator2 = _createForOfIteratorHelper(ticks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var tick = _step2.value;
                var dist = parseInt(tick.getAttribute("data-value")) + 1;
                tick.style.transform = "translateY(-".concat(dist * 100, "%)");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, fresh ? time : 0);
          window.removeEventListener("scroll", _activate);
        }
      };
      window.addEventListener("scroll", _activate);
      _activate();
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  /*--------------------------------------------------------------
  UXORA MAP JS INIT
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'uxora'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>uxora' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }
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
        columnNum = 2;
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
$('ul.tabs li').click(function () {
  var tab_id = $(this).attr('data-tab');
  $('ul.tabs li').removeClass('current');
  $('.uxora-tab-content').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
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
    =        Wow Active         =
=============================================*/
function wowAnimation() {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  });
  wow.init();
}

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
      } else if (w > 600) {
        columnNum = 2;
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
$(function () {
  var link = $('#scroll-btn a.questions');

  // Move to specific section when click on menu link
  link.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on('scroll', function () {
    scrNav();
  });

  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function () {
      var id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#scroll-btn').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});