



  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-image").on("click", function() {

    // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");

  });

  // Here we created a counter, we'll be using this to track the user's total.
  var counter = 0;
  $(".crystal-image").on("click", function() {

    // Each time the user clicks the crystal the counter goes up by 1.
    counter += 1;

    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + counter + " times!");

	
  });


  var counter = 0;
  $(".crystal-image").on("click", function() {

    // This time we increase the counter by *10* each time the user clicks.
    counter += 10;

    // We then output the new counter value each time the crystal is clicked.
    alert("Your new score is: " + counter);

	
  });

  // Here we establish the "targetNumber" (set to 50 in this example).
  var targetNumber = 50;
	

  // Here we set the "number-to-guess" header to match the "targetNumber".
  // Eventually this will allow us to change the HTML to match the value in the JavaScript.
  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Here we created code that selects a number either 10 or 11.
	
  // We'll set this number at the start of the "game".
  var numberOptions = [10, 5, 3, 7];


  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");



    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/crystal-"+ (i+1) + ".jpg");




    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // add counter here - per drew
  $( ".crystals").html( "<p>All new content. <em>You bet!</em></p>" );


  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

	
  });



	
