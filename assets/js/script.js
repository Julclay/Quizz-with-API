
// set the question in an object


// variable questions is inisde an ARRAY and each question is gonna be an OBJECT
let questions = [

    //question 1
{
number: "one",
question: "What is the capital of UK?",
answers: ["London", "Milan", "Geneva", "New-York"],
correctAnswer: "London"
},

    //question 2
{
number: "two",
question: "What is the capital of Sweden?",
answers: ["Oslo", "Malmo", "Stockholm", "Copenhaguen"],
correctAnswer: "London"
},

    //question 3
{
number: "three",
question: "What is the capital of Italy?",
answers: ["Genebra", "Milan", "Florence", "Rome"],
correctAnswer: "Stockholm"
},


    //quesiton 4
{
number: "four",
question: "What is the capital of Switzerland?",
answers: ["Bern", "Geneva", "Zurich", "Basel"],
correctAnswer: "Rome"
},


    //question 5
{
number: "five",
question: "What is the capital of Romania?",
answers: ["Budapest", "Bucarest", "Zagreb", "Sofia"],
correctAnswer: "Bern"
},

//answer question 5
{correctAnser: "Bucarest"
}
]

let questionList = document.querySelector("#choices");
let divGeneral = document.querySelector("#start-screen"); //selector related to the first div for consignes
let questionDiv = document.querySelector("#questions"); // slelector for second div for questions
let questionTitle = document.querySelector("#question-title"); // selector for title question
let answerChoice = document.createElement("button");
let timerClock = document.querySelector("#time");
let endScore = document.querySelector("#end-screen");
let score = document.querySelector("#final-score");

let countDown = 0;

let timer = 90
timerClock.textContent = timer

// function for generate question and the multiple answer array

if(countDown <5){ //run this function only if countDown is less than the number of questions
    function questChoice(array) {
    
        
        countDown += 1;
        questionList.innerHTML = "";
    
        for (let i = 0; i < questions[array].answers.length; i++) { //loop to display all the questions form array on a list and in buttons
    
            let data = questions[array].number //get the value from the object in the array to make it in one value. To have the number of the question
            let dataAnswer = questions[array].answers[i]
    
            answerChoice = document.createElement("button"); //creat a button for each value in the array
            answerChoice.classList.add(data) // Add the number of the question into a class
            answerChoice.id = dataAnswer
            answerChoice.textContent = questions[array].answers[i]; // add the content with each answer in each button
            questionList.appendChild(answerChoice); //append it to the div with "id:choices"
        }
    }  
    }

divGeneral.addEventListener("click", function (event){ //function to make disapear first div and appear 2nd

    let element = event.target;

    if(element.matches("#start")) { //if click the button make it disapear

        divGeneral.classList.remove("start"); 
        divGeneral.classList.add("hide");
        questionDiv.classList.remove("hide");
        questionTitle.textContent = questions[0].question; //first question in array appear

        questChoice(0);

        timer = 90;     
       
       let  time = setInterval(function () {    //timer will start when first start button is pressed

            timer--;
            timerClock.textContent = timer    

            if(timer === 0){

                clearInterval(time);
            }
        }, 1000)       
    }
})

//called the function for each questions
quiz(".one", 1); 
quiz(".two", 2);
quiz(".three",3);
quiz(".four", 4);
quiz(".five", 5);

// quiz function to generate each question with its answers when clicked a button

function quiz(arQ, arr) {
        
let clicked = questionList; // to select the choice div as the click function

    clicked.addEventListener("click", function(event){ 

        answerChoice = event.target //targeting precisely the answerChoice inside the div
       
        let  rightAnswer = answerChoice.textContent
        let comparaison = questions[arr].correctAnswer
        
        
if(answerChoice.matches(arQ) && countDown === 5 && rightAnswer === "Bucarest" ){ // if the number of quesions is finished so the next screen appear

    // if(rightAnswer === comparaison){ //if last answer is right
    
    questionDiv.classList.add("hide");
    endScore.classList.remove("hide");

    }else if(answerChoice.matches(arQ) && countDown === 5 && rightAnswer !== comparaison ){ // if last answer is false
    
    timer = timer - 10;
    questionDiv.classList.add("hide");
    endScore.classList.remove("hide");
    
    }

    else if(answerChoice.matches(arQ) && rightAnswer === comparaison){ // if the class matches the parameter (number of the question) then :... 

        
        questionTitle.textContent = questions[arr].question; //... display the question from this object...
    
        questChoice(arr); //...with its answers
        
    }   else if(answerChoice.matches(arQ) && rightAnswer !== comparaison){
        console.log(comparaison)

        timer = timer - 10;
        questionTitle.textContent = questions[arr].question;
        questChoice(arr);
        
    } 

    score.textContent = timer;
})
}





