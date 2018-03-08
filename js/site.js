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

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.pop').fadeIn();
  } else {
    $('.pop').fadeOut();
  }
});

AOS.init();
