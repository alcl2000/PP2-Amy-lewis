const questions = [
  {id : 0,
   q : "What is the name of Nadja's reincarnated lover?",
   a: [{ text : "Jeff", isCorrect : true},
       { text: "Michael", isCorrect : false},
       { text: "Jesk", isCorrect : false},
       { text: "Ryan", isCorrect : false}]
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
        {text : "A Computer", isCorrect : false}]}]
//assignments 
let score = document.getElementById('score');        
let question = document.getElementById('question');
var op1 = document.getElementById('option-1');
var op2 = document.getElementById('option-2');
var op3 = document.getElementById('option-3');
var op4 = document.getElementById('option-4');
let buttons = document.getElementsByClassName('answer');

/**
 * Function takes the id and displays relavant questions and options.
 * Sets the question and the question number using the id.
 * Assigns each answer an 
 */
function displayQuestion(id){
    //sets id for question and displays correct question number for the users
    let order = document.getElementById('number');
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
    order.innerText = ++id;
};
/**
 * Checks the value of isCorrect in in the buttons.
 * If isCorrect is true, it adds to the score and changes the button colour.
 * If isCorrect is false it displays the correct answer and changes the button colour.
 */
function checkAnswer(event){
//read the value of the button pressed; 
    let selected = document.getElementById('selected');
    if (selected.value == true){
       ++score;
       alert('correct');
    }
    else{
        alert('incorrect');
        displayCorrect();
    }
    nextQuestion();
};
/**
 * Starts a new question loop.
 * Changes the id so that the correct questions are displayed.
 */
function nextQuestion(){
    let id = document.getElementById('question').innerText;
    id >= questions.length ? id++ : endQuiz();
};
function displayCorrect(){};
function endQuiz(){};
//function loadAnalysis(event){
//    op1.addEventListener('click',checkAnswer(),[once]);
//    op2.addEventListener('click',checkAnswer(),[once]);
//    op3.addEventListener('click',checkAnswer(),[once]);
//    op4.addEventListener('click',checkAnswer(),[once]);
//};
// page load 
document.addEventListener('onLoad', displayQuestion(0), loadAnalysis(event));

for (let button of buttons){
    button.addEventListener(click, loadAnalysis());
    break;
}