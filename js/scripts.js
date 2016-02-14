$(function() {
  $("form#rate").submit(function(event) {
    var rating1 = parseInt($("input#rating1").val());
    var rating2 = parseInt($("input#rating2").val());
    var rating3 = parseInt($("input#rating3").val());

    var totalRating = rating1 + rating2 + rating3;
<<<<<<< HEAD

    if (totalRating >= 20) {
      $('#conservative').show();
    }
    else if ((totalRating > 10) && (totalRating < 20)) {
      $('#moderate').show();
    }
    else if (totalRating <= 10) {
      $('#liberal').show();
=======
    console.log("Hello World");

    if (totalRating >= 20) {
      $("#rating").text("Conservative");
    }
    else if ((totalRating > 10) && (totalRating < 20)) {
      $("#rating").text("Moderate");
    }
    else (totalRating <= 10) {
      $("#rating").text("Liberal");
>>>>>>> 478c3c33c155cabfb2a73271e91f1fc4c349d868
    }

      event.preventDefault();
  });
});
