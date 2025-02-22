"use strict";

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
  UXORA TSTIMONIAL SLIDER INIT
  UXORA TOOGLE BUTTON JS INIT
  UXORA PORTFOLIO MASONAY FILTER JS
  UXORA TOGGLE PASSOWRD JS INIT
  
  
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
      if ($(window).scrollTop() > 50) {
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
        }]
      });
    }

    /*--------------------------------------------------------------
    UXORA  TESTIMONIAL SLIDER JS INIT
    --------------------------------------------------------------*/
    var t_slider = $('.uxora-t-slider-init');
    if (t_slider.is_exist()) {
      t_slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        centerPadding: '180px',
        lazyLoad: 'progressive',
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize
})(jQuery);

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