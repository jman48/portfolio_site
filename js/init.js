$( document ).ready(function() {
		$(".typed").typed({
			strings: ["Software Engineer", "Web Developer", "Programmer"], // ^{number} denotes time in ms to wait

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
			contentType: 'html',
		});
});