$(function() {
  $("form#rate").submit(function(event) {
    var rating1 = parseInt($("input#rating1").val());
    var rating2 = parseInt($("input#rating2").val());
    var rating3 = parseInt($("input#rating3").val());

    var totalRating = rating1 + rating2 + rating3;

    if (totalRating >= 20) {
      $("#rating").text("Conservative");
    }
    else if (totalRating > 10 && totalRating < 20) {
      $("#rating").text("Moderate");
    }

    else if (totalRating > 3 && totalRating <= 10) {
      $("#rating").text("Liberal");
    }

    else {
      console.log("stuff");
      $(".form-control").addClass(".has-error");
    }

      event.preventDefault();
  });
});
