$(document).ready(function(){
	
	$('#password').focus(function(){
		$('#pass-clicked').slideDown();
	});
	
	$('#phone').focus(function(){
		
		$('#call-rates').show();
		$('#phone-clicked').show();
		$('#phone-blur').hide();
	});
	
	$('#phone').blur(function(){
		
		$('#phone-clicked').hide();
		$('#call-rates').hide();
		$('#phone-blur').show();
	});
	
	$('#password').blur(function(){
		$('#pass-clicked').css({"color" : "#eb3432"});
	});
	
	
});