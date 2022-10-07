const questions = [
  {id : 0,
   q : "What is the name of Nadja's reincarnated lover?",
   a: [ {text : "Jeff", isCorrect : true},
       { text: "Mike", isCorrect : false},
       { text: "William", isCorrect : false},
       { text: "Lazslo", isCorrect : false}]
   },{
    id : 1,
    q : "Which famous murderer does Lazslo claim to be?",
    a : [{ text: "The Zodiac Killer", isCorrect : false},
         {text : "Jeffry Dahmer", isCorrect: false},
        {text: "Jack the Ripper", isCorrect: true},
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
    a : [{text: "A Doll", isCorrect : true},
        { text : "A Robot", isCorrect : false},
        {text : "A Horse", isCorrect : false},
        {text : "A Computer", isCorrect : false}]},
    {id : 4 ,
    q : "What item of cursed clothing does Lazslo own?",
    a : [{text : "A Belt", isCorrect : false},
        {text : "An Odd Sock", isCorrect : false},
        {text : "A Hat", isCorrect : true},
        {text : "A Tie", isCorrect : false}]},
    {id : 5 ,
    q : "Which one of These Songs do Lazslo and Nadja claim to have written?",
    a : [{text : "Kokomo", isCorrect : true},
        {text : "Wouldn't it be nice", isCorrect : false},
        {text : "Surfin' USA", isCorrect : false},
        {text : "Good Vibrations", isCorrect : false}]},
    {id :  6,
    q : "What is the name of the werewolf Nandor falls in love with?",
    a : [{text : "Grace", isCorrect : false},
        {text : "Gwendoline", isCorrect : false},
        {text : "Gertrude", isCorrect : false},
        {text : "Gail", isCorrect : true}]},
    {id : 7 ,
    q : "Who is Nandor's favourite 'The Big Bang Theory' character?",
    a : [{text : "Sheldon", isCorrect : true},
        {text : "Penny", isCorrect : false},
        {text : "Leonard", isCorrect : false},
        {text : "Raj", isCorrect : false}]},
    {id : 8,
    q : "What city do Nadja and Guillermo move to?",
    a :[{text:"Ontario ", isCorrect: false},
        {text:"Mexico City", isCorrect: false},
        {text:"Sacramento", isCorrect:false},
        {text:"London", isCorrect: true}]},
    {id : 9,
    q : "Which of Nandor's wives does he decide to remarry?",
    a : [{text:"Ahmed", isCorrect:false},
     {text:"Nasrin", isCorrect: false},
     {text:"Marwa", isCorrect: true},
     {text:"Kublai", isCorrect: false}]},
    {id : 10,
    q : "Who helps with Baby Colin's private school application?",
    a : [{text:"The neighbour, Sean ", isCorrect: true},
        {text:"The Pope", isCorrect: false},
        {text:"The Baron", isCorrect: false},
        {text:"The sound guy, Kevin", isCorrect: false }]},
    {id : 11,
    q : "Bran Daltry is the alter ego of which vampire? ",
    a : [{text:"Elvis", isCorrect: false},
        {text:"Ritchie Suck", isCorrect: false},
        {text:"Simon the Devious", isCorrect: true},
        {text:"Count Rapula", isCorrect: false}]}]


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
localStorage.setItem('score', "");
let correctArea = document.getElementById('correct-zone');
let correctAnswer = document.getElementById('correct-answer');


/**
 * Function takes the id and displays relevant questions and options.
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
    scoreBox.innerText = score;
    localStorage.score = score;
    correctArea.style.display = 'none';
    for (let option of options){
        option.addEventListener('click', checkAnswer);
    }; 
}
/**
 * Checks the value of isCorrect in in the buttons.
 * If isCorrect is true, it adds to the score and changes the button colour.
 * If isCorrect is false it displays the correct answer and changes the button colour.
 */
function checkAnswer(event){
    selected = event.target.value;
    if (selected === 'true' || selected == 'true'){
       scoreBox.innerText = ++score;
       swal('Correct','' ,'success');
       nextQuestion(id);
    }
    else{
        correctArea.style.display = 'block';
        swal('Incorrect','', 'error');
        displayCorrect(id);
        }
    };
/**
 * Starts a new question loop.
 * Changes the id so that the correct questions are displayed.
 */
function nextQuestion(){
    //if the id is higher than the length of the array, add one to the id, otherwise end quiz
    score = scoreBox.innerText
    if (id === 0){
        displayQuestion(++id);
    }
    else{
        id < questions.length ? displayQuestion(++id): endQuiz(score);
    }
};
/**
 * Takes the user's score and transfers it through local data to the results page
 */
function endQuiz(score){
   window.location.replace('results.html');
   localStorage.getItem('score')
   let finalScore = document.getElementById('final-score');
   finalScore.innerText = score;
};
/**
 *This function checks the id currently being displayed, and then checks all possible answers in the object to then display the correct answer in a box.
 */
function displayCorrect(id){
    op1.removeEventListener('click', checkAnswer);
    op2.removeEventListener('click',checkAnswer);
    op3.removeEventListener('click', checkAnswer);
    op4.removeEventListener('click',checkAnswer);
    if (questions[id].a[0].isCorrect === true){
    document.getElementById('correct-answer').innerText = questions[id].a[0].text;
    }
    else if (questions[id].a[1].isCorrect === true){
        document.getElementById('correct-answer').innerText = questions[id].a[1].text;
    }
    else if (questions[id].a[2].isCorrect === true){
        document.getElementById('correct-answer').innerText = questions[id].a[2].text;
    }
    else if (questions[id].a[3].isCorrect === true){
        document.getElementById('correct-answer').innerText = questions[id].a[3].text;
    }
    else{
        alert('error');
    };
    for(let option of options){
        options.removeEventListener('click', checkAnswer);
    };
}
//document load
document.addEventListener('onLoad', displayQuestion(id));
document.getElementById('next-question').addEventListener('click', nextQuestion );
