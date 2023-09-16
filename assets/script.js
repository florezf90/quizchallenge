// getting a handle of the elements

var start = document.querySelector("#start");
var board = document.querySelector("#Scores");
var aa = document.querySelector("#aa");
var questions = document.querySelector(".questions");
var title = document.querySelector("h1");
var presentation = document.querySelector("#presentation");
var buttons = document.querySelector(".bottoms");
var body = document.querySelector("body");

// setting up the questions and possible answers for each one of them

var setquestions = [" question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7",
      "question 8", "question 9", "question 10", ];

      var answersA = ["question 1", "question 2","question 3","question 4","question 5","question 6","question 7","question 8",
      "question 9","question 10", ];

      var answersb = ["question 1", "question 2","question 3","question 4","question 5","question 6","question 7","question 8",
      "question 9","question 10", ];

      var answersc = ["question 1", "question 2","question 3","question 4","question 5","question 6","question 7","question 8",
      "question 9","question 10", ];

      var answersd = ["question 1", "question 2","question 3","question 4","question 5","question 6","question 7","question 8",
      "question 9","question 10", ];


var questionumber = 1;
var currentscore = 0;

// this is the code that is gonna start running when the user clicks on the "let's start button"


function test () {

      // this code present the first question and creates the buttons for the possible answers
    
    
       title.textContent = setquestions[0]
         presentation.textContent = "Keep in mind buddy.....Each time you fail a question, the time left will be penalized.....     ";

         var optionA = document.createElement("button");
             optionA.textContent = "option A";
             questions.appendChild(optionA);  
         
             var optionB = document.createElement("button");
             optionB.textContent = "option B";
             questions.appendChild(optionB);  
         
             var optionC = document.createElement("button");
             optionC.textContent = "option C";
             questions.appendChild(optionC);  

             var optionD = document.createElement("button");
             optionD.textContent = "option D";
             questions.appendChild(optionD);  

             var tracker = document.createElement("p");
             questions.appendChild(tracker);  

             var input = document.createElement("input");
             questions.appendChild(input);

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
                            
            }

            // The following array, function & for loop of code will present to the user
            // a new question & answers every time they click on a button
             var Answers = [optionA, optionB, optionC, optionD];
             var correctanswer = ["question 1", "question 2", "question 2", "question 4","question 1", "question 2", "question 2", "question 1", "question 2", "question 2"];
             var buttonsclicked = [];


             function change() {
                if (questionumber < setquestions.length || questionumber < answersA.length || questionumber < answersb.length  || 
                    questionumber < answersc.length || questionumber < answersd.length || questionumber < correctanswer.lenght) {
                    optionA.textContent = answersA[questionumber];
                    optionB.textContent = answersb[questionumber];
                    optionC.textContent = answersc[questionumber];
                    optionD.textContent = answersd[questionumber];
                    title.textContent = setquestions[questionumber];
                    questionumber++;
                } else if (questionumber = 10 ){
                final();
                } 
            }

                
             for (let i = 0; i < Answers.length; i++) {
                Answers[i].addEventListener("click", change)
                Answers[i].addEventListener("click", function inputracker (event){
                    buttonsclicked.push(event.target.textContent);
                    if (buttonsclicked.textContent === correctanswer.textContent) {
                        console.log("working");
                        console.log(buttonsclicked);
                         currentscore = currentscore + 1;
                         tracker.textContent = "your current score is " + currentscore;

                        }

                    
                })
                
             }

             // following code creates the timer
             

             var timer = document.createElement("h3");
             body.appendChild(timer);
             var timeleft = 10;

             function seTime() {
                var timeinterval = setInterval(() => {
                    timeleft--;
                    timer.textContent= timeleft + " secs till your are done!!!!";

                    if (timeleft === 0 ) {
                        clearInterval(timeinterval);
                        final();
                    }
                }, 1000);
                
             }

             seTime();
             buttons.setAttribute("style", "display: none");

}

// this code will deploy and present the leaderboard to the user
function scoreboard() {
     title.textContent = "Top-Scores";
    presentation.textContent = "";
    buttons.setAttribute("style", "visibility: hidden;"); 
}


// this are the event listeners, depending of which button the user clicks, a different block of code will deploy
start.addEventListener("click", test);
board.addEventListener("click", scoreboard);















