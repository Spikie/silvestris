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
	
	$('#box').hide();
	
	$('a#hide').click(function(){
		$('#slideshow').hide();
		$('#box').show();
	})
		
	$('a#show').click(function(){
		$('#slideshow').show();
		$('#box').hide();
	})

});
