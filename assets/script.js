// getting a handle of the elements
var input = document.querySelector(".USERPROMPT");
var start = document.querySelector("#start");
var board = document.querySelector("#Scores");
var aa = document.querySelector("#aa");
var questions = document.querySelector(".questions");
var title = document.querySelector("h1");
var presentation = document.querySelector("#presentation");
var buttons = document.querySelector(".bottoms");
var body = document.querySelector("body");
var goback = document.querySelector(".refresh");
var clear = document.querySelector(".clear")

// setting up the questions and possible answers for each one of them

var setquestions = [" Inside which HTML element do we put the JavaScript? ",  // question 1
   "How do you create a function in JavaScript?",                             // question 2
   "How do you call a function named “myFunction”?",                          // question 3
    "How do you start an IF statement in JavaScript?",                        // question 4
    "How do you start a FOR loop in JavaScript?",                             // question 5
    "How can you add a comment in JavaScript?",                               // question 6
    "What is the correct way to write a JavaScript array?",                   // question 7
      "How do you round the number 7.25, to the nearest integer?",            // question 8
      "What event occurs when the user clicks on an HTML element?",           // // question 9
      "How do you declare a JavaScript variable?", ];                         // question 10

      var answersA = ["<script>", "function myFunction()", "myFunction","if i = 5","for i = 1 to 5","This is a comment",
      "var colors = (1:”red”, 2:”green”, 3:”blue”)","round (7.25)", "onmouseclick","v carName;"];

      var answersb = ["<javascript>", "function:myFunction()", "myFunction()","if i == 5 then","for (i =0; i <= 5; i++)","<!--This is a comment -->",
      "var colors = 1 = (“red”), 2 = (“green”)","Math.rnd(7.25)", "onchange","var carName", ];

      var answersc = ["<js>", "function = myFunction()", "call myFunction()","if i = 5 then","for (i <= 5; i++)","//This is a comment",
      "3 = (blue, red, white ) var colors", "Math.round(7.25)","onmouseover","variable carName;", ];

      var answersd = ["<scripting>", "func myFunction()", "call function myFunction()","if (i == 5)","for (i = 0; i <= 5)","**This is a comment**",
      "var colors = [“red”, “green”, “blue”]","rnd(7.25)", "onclick","v (carName);", ];

var scores = JSON.parse(localStorage.getItem("player: ")) || [];
var questionumber = 1;
var currentscore = 0;
var stopTimer = false;
clear.addEventListener("click", function (){

    localStorage.clear();
})

// this is the code that is gonna start running when the user clicks on the "let's start button"
function test () {

      // this code present the first question and creates the buttons for the possible answers
       title.textContent = setquestions[0]
         presentation.textContent = "Keep in mind buddy.....Each time you fail a question, the time left will be penalized.....     ";

         var optionA = document.createElement("button");
         optionA.classList.add("optionA");
             optionA.textContent = answersA[0];
             questions.appendChild(optionA);  
         
             var optionB = document.createElement("button");
             optionB.classList.add("optionB");
             optionB.textContent = answersb[0];
             questions.appendChild(optionB);  
         
             var optionC = document.createElement("button");
             optionC.classList.add("optionC");
             optionC.textContent = answersc[0];
             questions.appendChild(optionC);  

             var optionD = document.createElement("button");
             optionD.classList.add("optionD");
             optionD.textContent = answersd[0];
             questions.appendChild(optionD);  

             var tracker = document.createElement("p");
             questions.appendChild(tracker);  

                          // following code creates the timer
                          var timer = document.createElement("h3");
                          body.appendChild(timer);
                          var timeleft = 60;
             
                          function seTime() {
                             var timeinterval = setInterval(() => {
                                if (!stopTimer) {
                                 timeleft--;
                                 timer.textContent= timeleft + " secs till your are done!!!!";
             
                                 if (timeleft === 0 ) {
                                     clearInterval(timeinterval);
                                     final();
                                 }
                                }
                             }, 1000);
                             
                          }
             
                          seTime();
                          buttons.setAttribute("style", "display: none");

            // this code will present the total score of the user, remove the button elements created before and will present the form list 
            // to the user so they can save their scores

             function final () {

                title.textContent = "  Game Over";
                tracker.textContent = "Your final score is ....." + currentscore;
                optionA.setAttribute("style", "display: none;");
                optionB.setAttribute("style", "display: none;");
                optionC.setAttribute("style", "display: none;");
                optionD.setAttribute("style", "display: none;");
                input.setAttribute("style", "display: inline;" );
                aa.setAttribute("style", "display: inline;" );
                presentation.textContent = "Please provide your name to be added to the scoreboard ";
                timer.textContent= " Thank you for participating";

                var submision = document.createElement("ol");
                    submision.classList.add("leaderboard");
                    submision.textContent = "Top-Scores"
                    tracker.appendChild(submision);

                    function save() {
                        localStorage.setItem("player: ", JSON.stringify(scores));
                    }

                    function render() {
                        var lastry = JSON.parse(localStorage.getItem("player: "));
                        if (lastry !== null ) {
                            var submision = document.querySelector(".leaderboard");
                            submision.innerHTML = "";
                            for (var i = 0; i < lastry.length; i++) {
                                var attempt = document.createElement("li");
                                attempt.textContent = lastry[i];
                                submision.appendChild(attempt);
                              }
                        }
                    }

                 render();


                 goback.addEventListener("click", function () {
                    location.reload()
                 })

                aa.addEventListener("click", function  (event) {

                    event.preventDefault();
                    var playerScore = input.value + " ( " + currentscore + " )";
                    scores.push(playerScore);
                    console.log(scores);
                    save();
                    render();
                    input.setAttribute("style", "display: none;")
                    aa.setAttribute("style", "display: none;");
                    goback.setAttribute("style", "visibility: visible")
                    clear.setAttribute("style", "visibility: visible")

                })
            }

            // The following array, function & for loop of code will present to the user
            // a new question & answers every time they click on a button
             var Answers = [optionA, optionB, optionC, optionD];
             var correctanswer = [
                "optionA", // Correct answer for question 1
                "optionA", // Correct answer for question 2
                "optionB", // Correct answer for question 3
                "optionD", // Correct answer for question 4
                "optionB", // Correct answer for question 5
                "optionC", // Correct answer for question 6
                "optionD", // Correct answer for question 7
                "optionC", // Correct answer for question 8
                "optionD", // Correct answer for question 9
                "optionB"  // Correct answer for question 10
              ];


             function change() {
                if (questionumber < setquestions.length) {
                    optionA.textContent = answersA[questionumber];
                    optionB.textContent = answersb[questionumber];
                    optionC.textContent = answersc[questionumber];
                    optionD.textContent = answersd[questionumber];
                    title.textContent = setquestions[questionumber];
                    questionumber++;
                } else if (questionumber = 9 ){
                final();
                } 
            }

                
             for (let i = 0; i < Answers.length; i++) {
                // Answers[i].addEventListener("click", change)
                Answers[i].addEventListener("click", function inputracker (event){
                    // console.log(event.currentTarget.className);
                    if (event.currentTarget.className == correctanswer[questionumber - 1]) {
                        console.log(correctanswer[i]);
                        // console.log(optionA.className);
                         currentscore = currentscore + 1;
                         tracker.textContent = "your current score is " + currentscore;

                        } else {
                                timeleft = timeleft - 10; 
                        }
                        
                        if (questionumber < setquestions.length) {
                            change();
                        } else {
                            // If all questions are answered, stop the timer and show the final results
                            stopTimer = true;
                            final();
                          }
                        if (timeleft <= 0 ) {
                            stopTimer = true;
                            final();

                          }
                });
                
             }
}

// this code will deploy and present the leaderboard to the user
function scoreboard() {

     title.textContent = "Top-Scores";
    presentation.textContent = "";
    goback.setAttribute("style", "visibility: visible");
    buttons.setAttribute("style", "visibility: hidden;"); 
    clear.setAttribute("style", "visibility: visible")

    var submision = document.createElement("ol");
    submision.classList.add("leaderboard");
    questions.appendChild(submision);

    function render() {
        var lastry = JSON.parse(localStorage.getItem("player: ")) || [];
        if (lastry !== null) {
            for (var i = 0; i < lastry.length; i++) {
                var attempt = document.createElement("li");
                attempt.textContent = lastry[i];
                submision.appendChild(attempt);
            }
        }
    }

    render();
}
                   
// this are the event listeners, depending of which button the user clicks, a different block of code will deploy
start.addEventListener("click", function () {
    userScore = 0; 
    test(); 
  });
board.addEventListener("click", scoreboard);















