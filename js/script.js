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

	$('#menu a').click( function(e)
	{
		e.preventDefault();
		var link = $(this).attr('href');

		load(link);

		return false;
	});

});


function load(link)
{
	$.ajax({
		url: link,
		type: 'GET',
		dataType: 'html',
		cache: false,
		success: function(data)
		{
			$('#content').html(data);
			$('#container #box').show();
			$('#container #slideshow').hide();

			content();
		},
		error: function()
		{
			alert('Unknown error occured');
		}
	});

}

function content()
{
	// ----- PRIHLASOVACI FORMULAR ------

	$('#prihlasit form').submit(function(e)
	{
		e.preventDefault();

		$.ajax({
			url: $(this).attr('action'),
			type: $(this).attr('method'),
			dataType: 'text',
			data: $(this).serialize(),
			success: function(data)
			{
				if(data == '1')
				{
					load('/pages/dokumenty.html');
				}
				else
					$('#prihlasit .error').show();
			},
			error: function()
			{
				alert('Unknown error occured');
			}
		});

		return false;
	});

	// ----- GALERIA ------

	$('#galeria a').fancybox();


	// ----- FORMULAR ------
	$('#dokumenty form').submit(function(e)
	{
		e.preventDefault();

		$.ajax({
			url: $(this).attr('action'),
			type: $(this).attr('method'),
			dataType: 'json',
			data: $(this).serialize(),
			success: function(data)
			{
				if(data.error != '')
					$('#dokumenty .error').html(data.error).show();
				else if(data.success == true)
				{
					$('#dokumenty form').hide();
					$('#dokumenty .success').show();
				}
				else
					alert('Unknown error occured #2');
			},
			error: function()
			{
				alert('Unknown error occured #1');
			}
		});

		return false;
	});

}