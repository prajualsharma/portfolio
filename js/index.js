

jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});

	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');

		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});

			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}

	$(window).on('resize', adjustNav);

	adjustNav();
});





$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});


var counter = function() {

  $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function(direction) {

    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
      $('.number').each(function() {
        var $this = $(this),
          num = $this.data('number');
        console.log(num);
        $this.animateNumber({
          number: num,
          numberStep: comma_separator_number_step
        }, 7000);
      });

    }

  }, {
    offset: '95%'
  });

}
counter();




// loader
var loader = function() {
  setTimeout(function() {
    if($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show');
    }
  }, 1);
};
loader();


// Scrollax
 $.Scrollax();




 	var contentWayPoint = function() {
 		var i = 0;
 		$('.ftco-animate').waypoint( function( direction ) {

 			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

 				i++;

 				$(this.element).addClass('item-animate');
 				setTimeout(function(){

 					$('body .ftco-animate.item-animate').each(function(k){
 						var el = $(this);
 						setTimeout( function () {
 							var effect = el.data('animate-effect');
 							if ( effect === 'fadeIn') {
 								el.addClass('fadeIn ftco-animated');
 							} else if ( effect === 'fadeInLeft') {
 								el.addClass('fadeInLeft ftco-animated');
 							} else if ( effect === 'fadeInRight') {
 								el.addClass('fadeInRight ftco-animated');
 							} else {
 								el.addClass('fadeInUp ftco-animated');
 							}
 							el.removeClass('item-animate');
 						},  k * 50, 'easeInOutExpo' );
 					});

 				}, 100);

 			}

 		} , { offset: '95%' } );
 	};
 	contentWayPoint();


  $(window).on("load", function() {
    $(".projects_fillter ul li").on("click", function() {
      $(".projects_fillter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data
      });
    });

    if (document.getElementById("work")) {
      var $workGrid = $(".projects_inner").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        }
      });
    }
  });


  function validateContactForm() {
      var valid = true;

      $(".info").html("");
      $(".input-field").css('border', '#e0dfdf 1px solid');
      var userName = $("#userName").val();
      var userEmail = $("#userEmail").val();
      var subject = $("#subject").val();
      var content = $("#content").val();

      if (userName == "") {
          $("#userName-info").html("Required.");
          $("#userName").css('border', '#e66262 1px solid');
          valid = false;
      }
      if (userEmail == "") {
          $("#userEmail-info").html("Required.");
          $("#userEmail").css('border', '#e66262 1px solid');
          valid = false;
      }
      if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
      {
          $("#userEmail-info").html("Invalid Email Address.");
          $("#userEmail").css('border', '#e66262 1px solid');
          valid = false;
      }

      if (subject == "") {
          $("#subject-info").html("Required.");
          $("#subject").css('border', '#e66262 1px solid');
          valid = false;
      }
      if (content == "") {
          $("#userMessage-info").html("Required.");
          $("#content").css('border', '#e66262 1px solid');
          valid = false;
      }
      return valid;
  }
