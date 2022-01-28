$(document).ready(function () {
    //select the POPUP FRAME and show it
    $('.popup').fadeIn(1000 * 2);

});

var a = 0;
$(window).scroll(function () {
    // header fixed
    if ($(this).scrollTop() > 60) {
        $('.fixedHeader').removeClass('d-none').addClass('affix');
    } else {
        $('.fixedHeader').addClass('d-none').removeClass('affix');
        // $('.header').removeClass('affix');
    }
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        // math animation
        $('.count').each(function () {
            $(this).prop('counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + '+');
                }
            });
        });
        a = 1;
    }

});


function parallax(e) {
    document.querySelectorAll('.object').forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
    });
}

    setTimeout(function(){
        $('.banner img').removeClass('popup1');
        $('.banner img').removeClass('popup2');
        $('.banner img').removeClass('popup3');
        $('.banner img').removeClass('popup4');
        $('.banner img').removeClass('popup5');
        $('.banner img').removeClass('popup6');
        $('.banner img').removeClass('popup7');
        $('.banner img').removeClass('popup8');
        $('.banner img').removeClass('popup9');

        // banner animation
        document.getElementById('banner').addEventListener('mousemove', parallax);
    }, 3700)




    // Sliders
    $(document).ready(function () {
		$('.testimonial-slider').slick({
			// normal options...
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			// the magic
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			}, {
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
					infinite: true,
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}, {
				breakpoint: 300,
				settings: "unslick" // destroys slick
			}]
		});

		$('.logos-slider').slick({
			dots: !1,
				draggable: !1,
				fade: !1,
				arrows: !1,
				speed: 4e3,
				autoplay: !0,
				autoplaySpeed: 0,
				cssEase: "linear",
				pauseOnDotsHover: !0,
				infinite: !0,
				slidesToShow: 8,
				slidesToScroll: 1,
				responsive: [{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						speed: 4e3,
						autoplay: !0,
						autoplaySpeed: 0
					}
				}]
		});
	});