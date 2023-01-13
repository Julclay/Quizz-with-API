
// set the question in an object

// variable questions is inisde an ARRAY and each question is gonna be an OBJECT
let questions = [

    //question 1
{
question: "What is the capital of UK?",
answers: ["London", "Milan", "Geneva", "New-York"],
correctAnswer: 0
},

    //question 2
{
question: "What is the capital of Sweden?",
answers: ["Oslo", "Malmo", "Stockholm", "Copenhaguen"],
correctAnswer: 2
},

    //question 3
{
question: "What is the capital of Italy?",
answers: ["Genebra", "Milan", "Florence", "Rome"],
correctAnswer: 3
},


    //quesiton 4
{
question: "What is the capital of Switzerland?",
answers: ["Bern", "Geneva", "Zurich", "Basel"],
correctAnswer: 0
},


    //question 5
{
question: "What is the capital of Romania?",
answers: ["Budapest", "Budapest", "Zagreb", "Sofia"],
correctAnswer: 1
},
]


let divGeneral = document.querySelector("#start-screen"); //selector related to the first div for consignes
let questionDiv = document.querySelector("#questions"); // slelector for second div for questions
let questionTitle = document.querySelector("#question-title"); // selector for title question

divGeneral.addEventListener("click", function(event){ //function to make disapear first div and appear 2nd

    let element = event.target;

    if(element.matches("#start")) { //if click the button make it disapear

        divGeneral.classList.remove("start"); 
        divGeneral.classList.add("hide");
        questionDiv.classList.remove("hide");
        questionTitle.textContent = questions[0].question; //first question in array appear

        for (let i = 0; i < questions[0].answers.length; i++) { //loop to display all the questions form array on a list and in buttons

            let answerChoice = document.createElement("button");

            answerChoice.textContent = questions[0].answers[i]

            document.querySelector(".choices").appendChild(answerChoice);
          
        }
    }
})






