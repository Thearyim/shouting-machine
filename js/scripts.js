$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#userInput").val();
    var response = userInput.toUpperCase();
    $("#response").append(response);
    $("#responseContainer").show();
    event.preventDefault();
  });
});
