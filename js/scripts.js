$(document).ready(function(){
  var age =parseInt(prompt("How old are you?"));
  if (age > 18){
    $("#ofage").show();
  } else if (age === 18) {
    alert("Dont vote all crazy bud!");
    $("#ofage").show();
  } else {
    $("#notofage").show();
  }
});
