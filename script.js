var displayString = "";

$(".input").click(function(){
  var val = $(this).val();
  if(val == "=") {
    displayString = eval(displayString);
  } else if(val == "CE"){
    displayString = "";
  } else {
    displayString += val;  
  }
    
  $("#display").text(displayString);
});