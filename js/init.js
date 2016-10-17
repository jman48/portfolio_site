$(document).ready(function () {
	$(".typed").typed({
		strings: ["Software Engineer", "Web Developer", "Programmer"],

		// typing speed
		typeSpeed: 100,

		// time before typing starts
		startDelay: 500,

		// backspacing speed
		backSpeed: 20,

		// time before backspacing
		backDelay: 2000,

		// loop
		loop: true,

		// false = infinite
		loopCount: false,

		// show cursor
		showCursor: true,

		// character for cursor
		cursorChar: "",

		// attribute to type (null == text)
		attr: null,

		// either html or text
		contentType: 'html'
	});

	$('.skills').slick({
		variableWidth: true,
		slidesToShow: 1,
		swipeToSlide: true,
		appendArrows: $('.arrows'),
		prevArrow: '<button class="prev-button"><i class="material-icons md-48">arrow_back</i></button>',
		nextArrow: '<button class="next-button"><i class="material-icons md-48">arrow_forward</i></button>'
	});

	//Hide the menu and overlay when user clicks a navigation item
	$('.mdl-layout__drawer .mdl-navigation__link').click(function(){
		$('.mdl-layout__drawer').toggleClass('is-visible');
		$('.mdl-layout__obfuscator').toggleClass('is-visible')
	});
});