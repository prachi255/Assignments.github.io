
$(document).ready(function(){
  $(".numBtn").click(function(){
	var value1 = $( this ).val();
	var value2 = $( "#input" ).val();
    $( "#input" ).val( value2+value1);
  });
  
  $(".clrBtn").click(function(){
	$( "#input" ).val("");
  });
  
  $(".opBtn").click(function(){
	var value1 = $( this ).val();
	var value2 = $( "#input" ).val();
    $( "#input" ).val( value2+value1);
  });
	$(".calBtn").click(function(){
		var value2 = eval($( "#input" ).val());
		$( "#input" ).val( value2);
	  });
});
