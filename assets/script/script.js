const questions = [
  {id : 0,
   q : "What is the name of Nadja's reincarnated lover?",
   a: [ {text : "Jeff", isCorrect : 'true'},
       { text: "Michael", isCorrect : 'false'},
       { text: "Jesk", isCorrect : 'false'},
       { text: "Ryan", isCorrect : 'false'}]
   },{
    id : 1,
    q : "Which famous murderer does Lazslo claim to be?",
    a : [{ text: "The Zodiac Killer", isCorrect : false},
         {text : "Jeffry Dahmer", isCorrect: false},
        {text: "Jack the Ripper", isCorrect:true},
        {text : "The Golden State Killer", isCorrect: false}]
   },
    {id : 2,
    q: "What family does Guillermo find out he belongs to?",
    a: [{ text: "The Habsburgs", isCorrect: false},
        {text : "The Van Helsings", isCorrect : true},
        {text : "The Kardashians", isCorrect : false},
        {text : "The Jacksons", isCorrect : false}]
    },
    {id: 3,
    q : "What form does Nadja's ghost inhabit?",
    a: [{text: "A Doll", isCorrect : true},
        { text : "A Robot", isCorrect : false},
        {text : "A Horse", isCorrect : false},
        {text : "A Computer", isCorrect : false}]},
    {id: 4 ,
    q: "",
    a: [{text : "", isCorrect : ""},
        {text : "", isCorrect : ""},
        {text : "", isCorrect : ""},
        {text : "", isCorrect : ""}]}]
//assignments 
let order = document.getElementById('number');
let scoreBox = document.getElementById('score');
let score = 0;
let id = 0;      
let question = document.getElementById('question');
var op1 = document.getElementById('option-1');
var op2 = document.getElementById('option-2');
var op3 = document.getElementById('option-3');
var op4 = document.getElementById('option-4');
let options = document.getElementsByClassName('answer');
let correctBox = document.getElementsByClassName('correct');
let correctArea = document.getElementById('correct-answer');

/**
 * Function takes the id and displays relavant questions and options.
 * Sets the question and the question number using the id.
 * Assigns each answer an 
 */
function displayQuestion(id){ 
    //check id and display the relevant question
    question.innerHTML = questions[id].q;
    //sets the question buttons
    op1.innerText = questions[id].a[0].text;
    op2.innerText = questions[id].a[1].text;
    op3.innerText = questions[id].a[2].text;
    op4.innerText = questions[id].a[3].text;
    //assigns the isCorrect value to buttons
    op1.value = questions[id].a[0].isCorrect;
    op2.value = questions[id].a[1].isCorrect;
    op3.value = questions[id].a[2].isCorrect;
    op4.value = questions[id].a[3].isCorrect;
    //displays the correct question number for the users
    order.innerText = ++id;
    order.value = id;
    scoreBox.innerText = 0;
};
/**
 * Checks the value of isCorrect in in the buttons.
 * If isCorrect is true, it adds to the score and changes the button colour.
 * If isCorrect is false it displays the correct answer and changes the button colour.
 */
function checkAnswer(selected){
//read the value of the button pressed; 
    if (selected == 'true'){
       scoreBox.innerText = ++score;
       alert('correct');
    }
    else{
        alert('incorrect');
        displayCorrect();
    }
};
/**
 * Starts a new question loop.
 * Changes the id so that the correct questions are displayed.
 */
function nextQuestion(){
    //if the id is higher than the length of the array, add one to the id, otherwise end quiz
    id < questions.length ? displayQuestion(id++): endQuiz();
};
/**
 * This function checks the correct answer and displays it in the event that a user enters the incorrect answer.
 * Iterates through the questions and answer responses to check the correct answer
 * Displays or hides the correct answer area for the user
 */
function displayCorrect(){};
function endQuiz(){};
document.getElementById('next-question').addEventListener('click',function() {nextQuestion()});
document.addEventListener('onLoad', displayQuestion(id));
for (let option of options){
     option.addEventListener('click', function loadAnalysis(){
        let selected = option.value;
        checkAnswer(selected);
    });
};
