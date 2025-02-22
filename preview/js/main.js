(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]


-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){


/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(".uxora-preloader-wrap").fadeOut(500);


$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});


// progress top js

Splitting();

gsap.from(".char", {duration:0.5, opacity:0, stagger:0.02, y:30, ease:"power1.inOut"});


var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength / height);
  progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);	
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function() {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.progress-wrap').addClass('active-progress');
  } else {
    jQuery('.progress-wrap').removeClass('active-progress');
  }
});				
jQuery('.progress-wrap').on('click', function(event) {
  event.preventDefault();
  jQuery('html, body').animate({scrollTop: 0}, duration);
  return false;
})


// cursor js


const cursorBee = document.querySelector(".cursor-bee");
const cursorEye = document.querySelector(".cursor-eye");
let scale = 1;

function mousemoveHandler(e) {
  const target = e.target;
  const tl = gsap.timeline({
    defaults: {
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out"
    }
  });

  if (target.tagName.toLowerCase() === "img" && target.closest(".uxora-demos-wrap")) {
    // let liveText = document.querySelector('.cursor-live-text');
    // liveText.innerHTML = target.getAttribute('data-live-text');
    
    tl.to(cursorBee, {
      opacity: 0
    }).to(
      cursorEye,
      {
        opacity: 1
      },
      "-=0.5"
    );
  }
   else {
    if (target.classList.contains("line-animation")) {
      scale = 4;
    } else {
      scale = 1;
    }

    tl.to(cursorBee, {
      opacity: 1,
      scale: scale
    }).to(
      cursorEye,
      {
        opacity: 0
      },
      "-=0.5"
    );
  }
}



document.addEventListener("mousemove", mousemoveHandler);




});/*End document ready*/


$(window).on("resize", function(){
  

}); // end window resize


$(window).on("load" ,function(){
preloader();


}); // End window LODE

function preloader() {
  $('.preloader').delay(0).fadeOut();
};


})(jQuery);






