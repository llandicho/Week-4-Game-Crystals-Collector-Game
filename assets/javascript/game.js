


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
  var targetNumber = 55;
	

  // Here we set the "number-to-guess" header to match the "targetNumber".
  // Eventually this will allow us to change the HTML to match the value in the JavaScript.
  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Here we created code that selects a number either 10 or 11.
	
  // We'll set this number at the start of the "game".
  var numberOptions = [10, 11];
  var increment = numberOptions[Math.round(Math.random())];


  $(".crystal-image").on("click", function() {

    // We'll then increment the counter each time by the randomly selected number.
    // If the number is 11, then users can win. (11 + 11 + 11 + 11 + 11 = 55)
    // If the number is 10, then there is no way for the user to win. (10 + 10 + 10 + 10 + 10 = 60)
    counter += increment;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

	
  });




	
