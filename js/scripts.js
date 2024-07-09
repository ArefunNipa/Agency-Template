
$(function(){
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50){  
			$('#header_part').addClass("scrolled");
		}
		else{
			$('#header_part').removeClass("scrolled");
		}
	});


	
	$(".ftxt").hide();
	$(".ftxt_one").hide();
	$(".ftxt_two").hide();
	$(".ftxt_three").hide();

	$("#three").click(function(){
		$(".ftxt_two").toggle(1000);
	});
	$("#one").click(function(){
		$(".ftxt").slideToggle(1000);
	});
	$("#two").click(function(){
		$(".ftxt_one").fadeToggle(1000);
	});
	$("#four").click(function(){
		$(".ftxt_three").animate({height: 'toggle'});
		$(".ftxt_three").addClass("bgcolor");
	});
	
	
  
  });

