// Sweetpea Slider
var sweetpeaSlider = new Swiper('.sweetpea-slider', {
  pagination: {
    el: '.sweetpea-pagination',
    clickable: true,
  },
});


//Swiper: men's best sellers section slider
var bestSellersSwiper = new Swiper(".best_sellers_slider--men", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 0,
  speed: 600,
  watchSlidesVisibility: true,
  pagination: {
    el: ".best_sellers_slider--pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      noSwiping: false,
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },

  //if only 3 slide logic
  autoplay: $("#best_sellers_slider_men .swiper-slide").length > 3 ? true : false,
  loop: $("#best_sellers_slider_men .swiper-slide").length > 3 ? true : false
});

//Swiper: best sellers section slider ---- if only 3 slide logic CONTINUED ----
if ($("#best_sellers_slider_men .swiper-slide").length <= 3) {
  $("#best_sellers_slider_men .best_sellers_slider--pagination").addClass(
    "invisible"
  );
  $("#best_sellers_slider_men .best_sellers_slider--navigation").addClass(
    "invisible"
  );
}

//Swiper: women's best sellers section slider
var bestSellersSwiper = new Swiper(".best_sellers_slider--women", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 0,
  speed: 600,
  watchSlidesVisibility: true,
  pagination: {
    el: ".best_sellers_slider--pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      noSwiping: false,
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },

  //if only 3 slide logic
  autoplay: $("#best_sellers_slider_women .swiper-slide").length > 3 ? true : false,
  loop: $("#best_sellers_slider_women .swiper-slide").length > 3 ? true : false
});

//Swiper: best sellers section slider ---- if only 3 slide logic CONTINUED ----
if ($("#best_sellers_slider_women .swiper-slide").length <= 3) {
  $("#best_sellers_slider_women .best_sellers_slider--pagination").addClass(
    "invisible"
  );
  $("#best_sellers_slider_women .best_sellers_slider--navigation").addClass(
    "invisible"
  );
}
//Swiper: Mosaic section slider
var bestSellersSwiper = new Swiper(".best_sellers_slider--mosaic", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 0,
  speed: 600,
  watchSlidesVisibility: true,
  pagination: {
    el: ".best_sellers_slider--pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      noSwiping: false,
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },

  //if only 3 slide logic
  autoplay: $("#best_sellers_slider_mosaic .swiper-slide").length > 4 ? true : false,
  loop: $("#best_sellers_slider_mosaic .swiper-slide").length > 4 ? true : false
});

//Swiper: best sellers section slider ---- if only 3 slide logic CONTINUED ----
if ($("#best_sellers_slider_mosaic .swiper-slide").length <= 3) {
  $("#best_sellers_slider_mosaic .best_sellers_slider--pagination").addClass(
    "invisible"
  );
  // $("#best_sellers_slider_mosaic .best_sellers_slider--navigation").addClass(
  //   "invisible"
  // );
}
$(document).ready(function () {

  //Add a minus icon to the collapse element that is open by default
  $('.collapse.show').each(function () {
    $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
  });

  //Toggle plus/minus icon on show/hide of collapse element
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });

  //Video Modal
  var $videoSrc;
  var $videoFormat;
  var $videoEnd;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
    // console.log($videoSrc);
    // Get the video format
    $videoFormat = $(this).data("format");
    $videoEnd = $(this).data("end");
  });

  // when the modal is opened autoplay it
  $("#videoModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video.
    if ($videoEnd) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;loop=1&amp;modestbranding=1&amp;muted=false;showinfo=0"
      );
    } else {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;muted=false;showinfo=0"
      );
    }

    // Add a 'video is square' hook
    if ($videoFormat) {
      if ($videoFormat == 'square-video') {
        $("#videoModal").addClass("square-video");
        $(".embed-responsive").addClass("embed-responsive-1by1");
      } else {
        $("#videoModal").addClass("square-video");
        $(".embed-responsive").addClass("embed-responsive-detail");
      }

    } else {
      $(".embed-responsive").addClass("embed-responsive-16by9");
    }
  });


  // stop playing the youtube video when I close the modal
  $("#videoModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);

    // remove a 'video is square' hook
    $("#videoModal").removeClass("square-video");
    $("#videoModal").removeClass("detail-video");
    $(".embed-responsive").removeClass("embed-responsive-1by1");
    $(".embed-responsive").removeClass("embed-responsive-16by9");
  });

  // Auto Play Video Modal Based on URL Parameters

  // break down passed params
  $.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    if (results == null) {
      // console.log("Params return null for: ", name);
      return null;
    } else {
      // console.log("Params return = ", name , "-", results[1] || 0);
      return results[1] || 0;
    }
  };

  //set variables
  var param = $.urlParam("video");
  // convert param to lowercase
  if (param !== null) {
    param = param.toLowerCase();
    // console.log("param to lowercase");
    // $.videoRun();    // Need to figure out how to wrap this in a function
  }

  // //set variables
  // var param = $.urlParam('video');
  // // convert param to lowercase
  // if (param !== null){
  //   param = param.toLowerCase();
  //   console.log("param to lowercase");
  // }
  var dataIds = [];
  // console.log("create dataIds");

  // loop through all the videos on the page
  $('.video-btn[data-target="#videoModal"]').each(function () {
    dataIds.push($(this).data("id"));
    // console.log("search for video modals");
  });

  // compare the param to the dataIds to see if there is a match
  var exist = jQuery.inArray(param, dataIds);

  // If there is a video parameter and it matches a dataId on the page run the script
  if (param !== null && exist >= 0) {
    //-1 means no match in array
    // build videoSrc based on Param passed
    var $videoSrc = $('.video-btn[data-id="' + param + '"]').data("src");
    // console.log("create videoSrc");
    // Show modal
    $("#videoModal").modal("show");

    // Can we also have the swiper switch to the slide (on detail view)
    // if ($(".swiper-container").hasClass("detail-view__slides")) {
    //   // variable for the gallery
    //   slider = galleryTop.slides;
    //   // console.log("Doing stuff to the slider");
    //   // Add play-video class
    //   $(slider)
    //     .find("[data-id='" + param + "']")
    //     .parent()
    //     .addClass("play-video");
    //   // counter variable (probably a better way to do this)
    //   slideNumber = -1;
    //   // cycle through the slides until you get to the slide with the .play-video class
    //   $(slider).each(function() {
    //     slideNumber++;
    //     if ($(this).hasClass("play-video")) {
    //       return false;
    //     }
    //   });

    //   // have it slide to the slide with the class .play-video
    //   galleryTop.slideTo(slideNumber);
    //   // console.log("Sliding slider");
    // }

    // Should write a function that handles the above for any slider
    // Causing the slider to slide to the slide that has the video link.
  }
  // END+++++++++++++++ // Auto Play Video Modal Based on URL Parameters

  // Anchor script  --- Not needed for now

  // var paramAnchor = $.urlParam('anchor');
  //   if (paramAnchor !== null){
  //     console.log("working");
  //   }
}); // END document ready function