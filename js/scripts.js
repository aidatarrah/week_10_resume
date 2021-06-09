/*
$(document).ready(function() {
			$("body").hover(function(){
			$("#overlay").toggle('slow');
      $(".resume").css('color','#141517');
			});
	});


  $(document).ready(function(){
    $("body").hover(function(){
      $(this).css("background-image", "url(img/landing_page_main_hover.jpg)");
    }, function(){
      $(this).css("background-image", "url(img/landing_page_main.jpg)");
    });
  });
*/



jQuery(function() {

let my_switch = false;

	$('body').hover(function () {

	if (my_switch == false) {
		my_switch = true;
	$('.resume').css('color','#F8D400', 1000);
} else {
	my_switch = false;
	$('.resume').css('color','white', 1000);
}
  });


$("body").hover(function(){
					 $("#overlay").animate({
							 width: "toggle"
					 });
			 });


});
