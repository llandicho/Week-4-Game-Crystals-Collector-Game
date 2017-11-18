
$(document).ready(function() {

  var counter = 0;
  var win = 0;
  var loss = 0;
  var targetNumber = 55;
  $("#number-to-guess").text(targetNumber);

  var numberOptions = [10, 5, 3, 7];


  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "assets/images/crystal-"+ (i+1) + ".jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
    }




    $(".crystal-image").on("click", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);


    if (counter === targetNumber) {
      alert("You win!");
      win ++;
      $("#win").text(win);
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      loss ++;
      $("#loss").text(loss);
    }
  });

  });

