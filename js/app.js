$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show()
		.animate( {'left': '300px'},500,
			function() {
				$(this).hide();
			$(this).css('left','-212px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

	$(document).keydown(function(x) {
		playEmanon();
			$('.ryu-still').hide();
	$('.ryu-cool').show();
	})
	.keyup(function(x) {
	$('.ryu-still').hide();
	$('.ryu-cool').show();
		
	});



});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
function playEmanon () {
	$('#emanon')[0].volume = 0.5;
	$('#emanon')[0].load();
	$('#emanon')[0].play();
}