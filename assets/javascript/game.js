//The "game loop"
function startGame() {
    //When the "start" button is pushed the game starts from the beginning and the text of the button changes to "reset"
    document.querySelector(".startButton").innerHTML = "Reset Game";

    //create a variable that stores the random numbuer
    var gameNumber = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (5 - 2)) + 2;
    }



    //Updates the DOM by placing the random number as the "House Number" on the screen
    $(".currentNumber").text(gameNumber);

    console.log(gameNumber)
    //Updates the DOM by resetting the current score to 0
    var currentScore = 0;
    $(".roundScore").text(currentScore);

    //Creates a random number for the White Sox logo once start/reset button is hit.
    var soxRandom = Math.floor((Math.random() * 1) + 1);
    //clicking the White Sox Logo adds the random number to the score to the total score
    var soxLogo = document.querySelector("#whiteSoxLogo");
    soxLogo.onclick = function () {
        console.log("White Sox value: " + soxRandom)
        currentScore = currentScore + soxRandom;
        $(".roundScore").text(currentScore);
        if (currentScore === gameNumber) {
            alert("hello")
        }
    }

    //Creates a random number for the Bears logo once start/reset button is hit.
    var bearsRandom = Math.floor((Math.random() * 10) + 1);
    //clicking the Bears Logo adds the random number to the score to the total score
    var bearsLogo = document.querySelector("#daBearsLogo");
    bearsLogo.onclick = function () {
        console.log("Bears value: " + bearsRandom)
        currentScore = currentScore + bearsRandom;
        $(".roundScore").text(currentScore);
    }

    //Creates a random number for the Bulls logo once start/reset button is hit.
    var bullsRandom = Math.floor((Math.random() * 10) + 1);
    //clicking the Bulls Logo adds the random number to the score to the total score
    var bullsLogo = document.querySelector("#daBullsLogo");
    bullsLogo.onclick = function () {
        console.log("Bulls value: " + bullsRandom)
        currentScore = currentScore + bullsRandom;
        $(".roundScore").text(currentScore);
    }

    //Creates a random number for the Blackhawks logo once start/reset button is hit.
    var hawksRandom = Math.floor((Math.random() * 10) + 1);
    //clicking the Blackhawks Logo adds the random number to the score to the total score
    var hawksLogo = document.querySelector("#blackHawksLogo");
    hawksLogo.onclick = function () {
        console.log("Hawks value: " + hawksRandom)
        currentScore = currentScore + hawksRandom;
        $(".roundScore").text(currentScore);
    }
}