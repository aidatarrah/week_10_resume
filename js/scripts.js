
jQuery(function() {

let my_switch = false;

	$('.container-fluid').hover(function () {

	if (my_switch == false) {
		my_switch = true;
	$('.resume').css('color','#F8D400', 1000);
} else {
	my_switch = false;
	$('.resume').css('color','white', 1000);
}
  });


$(".container-fluid").hover(function(){
					 $("#overlay").animate({
							 width: "toggle"
					 });
			 });


});
