$('document').ready(function() {

	$(".fancybox").fancybox();

	$('#slideshow #pictures').cycle({
		prev:   '#slideshow #navigation #prev a',
		next:   '#slideshow #navigation #next a'
	});

	$('#slideshow').hover
	(
		function() { $('#navigation').stop().show() },
		function() { $('#navigation').stop().hide(); }
	);
});
