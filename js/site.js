var items = $('[data-toggle=tab]');
var i = parseInt(Math.floor(Math.random()*items.length));
$('#tabs a:eq(' + i + ') ').tab('show');

$(function(){
    $('.btn-anchor').click(function(){

		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 750);

		return false;
	});
});

AOS.init();
