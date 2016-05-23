$( document ).ready(function(){
	$.each($('nav.menu > ul ul'), function(i, e){
		var ul = $(e), a = ul.prev(), li = $(a).parent(), span;
		$(a).html($(a).html() + '<span class="dropdown">_</span>');
		span = $(a).find('span.dropdown');
		//a.first().after('<span class="dropdown">_</span>');
		$(li).hover(function(){
				$(a).find('span.dropdown').toggleClass('show');
				$(ul).show('slow', function(){
					$(ul).css('display', 'flex');
				});
			},
			function(){
				$(a).find('span.dropdown').toggleClass('show');
				$(ul).hide('slow', function(){
					$(ul).css('display', 'none');
				});
			});
		$(ul).css('display', 'none');

		//hover(function() { $( this ).fadeOut( 100 ); $( this ).fadeIn( 500 ); });
	});
});
