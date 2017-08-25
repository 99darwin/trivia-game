// ========================================================
// RULES
// 1. 10 Questions are displayed
// 2. Press start and timer counts down from 120s
//   a. At 0, show "time up"
//   b. Hit reset and timer restarts
// 3. If answer correct increase correct answer count
// 4. If incorrect increase incorrect count
// 4. Final screen shows # of incorrect / correct answers
// and option to restart (without refreshing page)
// ========================================================

// ========================================================
// OBJECTS & VARIABLES

// ---- TIMER VARIABLES ----
// Number we'll count to
var number = 60;
// Keep the clock from running until button is pressed
var clockRunning = false;
// Variable to hold interval Id once we press start button
var intervalId;

// ---- QUIZ VARIABLES ----
// Correct answer count
var score = 0;
// Incorrect answer count
var scoreless = 0;

// ========================================================

// ========================================================
// FUNCTIONS

// True 
function quizAnswer() {
    $('input[value=true]').on('click', function() {
        score++;

        console.log(score);
    });

}
// False
function falseAnswer() {
    $('input[value=false]').on('click', function() {
        scoreless++;
        console.log(scoreless);
    });
}

// Start the game with #start button
$('#start').on('click', function() {
    $('#start').hide();
    $('#quiz').show();
    questionTimer();
    quizAnswer();
    falseAnswer();
    return false;
});

// Reset button
$('#tryAgain').on('click', function() {
    $('#tryAgain').hide();
    score = 0;
    scoreless = 0;
    number = 60;    
    $('#correct').html("");
    $('#incorrect').html("");
    // Reset radio buttons
    $('input[type=radio]').prop('checked', function() {
        return this.getAttribute('checked') == 'checked';
    });
    resetTimer();
    questionTimer();
});

// Submit answers, stop timer
$('#submitThat').on('click', function() {
    $('#tryAgain').show();
    clearInterval(intervalId);
    $('#incorrect').html(scoreless);
    console.log(score);
    $('#correct').html(score);
    return false;
});

// ---- START TIMER FUNCTION ----
// Timer decreases by 1 second until it hits 30
function questionTimer() {
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
    }
}

// Decrement function
function decrement() {
    // Decrease number by 1
    number--;

    // Show countdown in #countdown
    $('#countdown').html(number);

    // Timer runs out of time
    if (number === 0) {
        // Display 'out of time' message
        $('#countdown').html('OUT OF TIME');
        // Set timer to 0
        resetTimer();
        $('#tryAgain').show();
        score = 0;
        scoreless = 0;
    }
}

// Reset timer
function resetTimer() {
    clearInterval(intervalId);
}
// ---- END TIMER FUNCTION ----


// ========================================================