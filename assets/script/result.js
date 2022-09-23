const results =[
    { i : 0,
    title : "Regular Human Guy",
    text : "You got several questions wrong. You might be due a rewatch of the show!"},
    { i: 1,
    title : "Novice Vampire Hunter",
    text : "You got quite a few questions right! But you can never do too much research on vampires; maybe you should rewatch the show?" },
    {i : 2,
    title : "Familiar",
    text : "You got an almost perfect score! You still haven't earned your unholy after life yet, but you have the rest of your life to try! "},
    {i : 3,
    title : "Vampiric Council Member",
    text : "Perfect score! You'll be called before the council to organise the next party any time soon!"}
]

//global
let resultTitle = document.getElementById('result-title');
let resultPara = document.getElementById('result-text');
let finalScore = document.getElementById('final-score');

finalScore.innerText = localStorage.getItem('score');
score = finalScore.innerHTML
/**
 * Checks the score the user and assigns them a value based on their score 
 */
function assignResult(score){
    if(score == "0" || "1" || "2" || "3" || "4" ){
        resultTitle.innerHTML = results[0].title;
        resultPara.innerHTML = results[0].text;
    }
    else if (score == "5" || "6" || "7" ){
        resultTitle.innerHTML = results[1].title;
        resultPara.innerHTML = results[1].text;
    }
    else if (score == "8" || "9"){
        resultTitle.innerHTML = results[2].title;
        resultPara.innerHTML = results[2].text;   
    }
    else{
        resultTitle.innerHTML = results[3].title;
        resultPara.innerHTML = results[3].text;        
    }

}
document.addEventListener('onLoad', assignResult(score));