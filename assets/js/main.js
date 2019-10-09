/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function init(){
	document.getElementById('result').style.display = "none";
	document.getElementById('London').style.display = "none";
	document.getElementById('Edinburgh').style.display = "none";
	document.getElementById('Liverpool').style.display = "none";
	document.getElementById('Glasgow').style.display = "none";
	document.getElementById('Birmingham').style.display = "none";
}

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

var London = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1243887.884213581!2d-2.4020883577669476!3d52.488758032782044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!3m2!1d51.5073509!2d-0.1277583!5e0!3m2!1sen!2sfr!4v1570607026294!5m2!1sen!2sfr";
var Edinburgh = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2360226.5367167257!2d-4.634071718628425!3d54.711228945217194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2sEdinburgh%2C%20UK!3m2!1d55.953252!2d-3.1882669999999997!5e0!3m2!1sen!2sfr!4v1570627839983!5m2!1sen!2sfr";
var Liverpool = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d304329.85683445336!2d-2.8910912643326294!3d53.42239067518613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x487adf8a647060b7%3A0x42dc046f3f176e01!2sLiverpool%2C%20UK!3m2!1d53.4083714!2d-2.9915726!5e0!3m2!1sen!2sfr!4v1570628082609!5m2!1sen!2sfr";
var Glasgow = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2360566.672341109!2d-5.488419435100438!3d54.705384897950026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!3m2!1d55.864236999999996!2d-4.251806!5e0!3m2!1sen!2sfr!4v1570628168789!5m2!1sen!2sfr";
var Birmingham = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d615003.4205259995!2d-2.6293097352410957!3d52.977978599644075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!3m2!1d52.486242999999995!2d-1.890401!5e0!3m2!1sen!2sfr!4v1570628331315!5m2!1sen!2sfr";

function Result(){
	init();
	var result = document.getElementById('destination').value.toUpperCase();
	if (result.includes("LONDON")){
		document.getElementById('map').src = London;
		document.getElementById('London').style.display = "block";
	}
	else if (result.includes("EDINBURGH")) {
		document.getElementById('map').src = Edinburgh;
		document.getElementById('Edinburgh').style.display = "block";

	}
	else if (result.includes("LIVERPOOL")) {
		document.getElementById('map').src = Liverpool;
		document.getElementById('Liverpool').style.display = "block";

	}
	else if (result.includes("GLASGOW")) {
		document.getElementById('map').src = Glasgow;
		document.getElementById('Glasgow').style.display = "block";

	}
	else {
		document.getElementById('map').src = Birmingham;
		document.getElementById('Birmingham').style.display = "block";

	}
	document.getElementById('result').style.display = "block";
}
