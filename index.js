let guess=document.querySelector(".guess");
//take out the value/number writen in it 
let randomNumber=Math.trunc(Math.random()*20)+1;
let checkbutton=document.getElementById("check");
//checking button click is event handeling means when you doing something
let topa=document.querySelector(".top");
let score=document.querySelector(".score");
let highscore=document.querySelector(".highscore");
let number=document.querySelector(".number");
let again=document.querySelector(".again");
let next=document.querySelector(".next");

console.log("randomNumber",randomNumber);

//console.log("guess value:", guess);
//out sideguess is empty in number if we check thats why it show too low
let scores=5;

function checkNumber(){
//1 step we need input where no is typed=guess

let guessValue=Number(guess.value);
//number it take only number value no any words .value take any mnumber 

console.log("guess value:", guessValue);


if(guessValue == randomNumber){
    document.querySelector("body").style.backgroundColor="green";
    console.log("correct answer");
    topa.textContent="correct number"
scores++;
highscore.textContent=scores;
score.textContent=scores;
number.textContent=randomNumber;
}else if(guessValue<randomNumber){



    if(scores>0){
        scores--;
        score.textContent=scores;
    }else{
        topa.textContent="youlost the game"
    }
 
 
 
 
    document.querySelector("body").style.backgroundColor="red";
    console.log("too low");
    
    topa.textContent="too low"
}else{



    if(scores>0){
        scores--;
       score.textContent=scores;
    }else{
        topa.textContent="youlost the game"
    }



    document.querySelector("body").style.backgroundColor="red";
    console.log("to high");
    topa.textContent="too high"
}

}

checkbutton.addEventListener("click",checkNumber);
//click on button writen no. and random number are same or not thats ehy we create a function

again.addEventListener("click",ressetGame);
function ressetGame() {
    scores=5;
    document.querySelector("body").style.backgroundColor="white";
    score.textContent=scores;
    topa.textContent="guess the number";
    number.textContent="?";
    guess.value="";
    randomNumber=Math.trunc(Math.random()*20)+1;
    console.log("randomnumber",randomNumber);
    highscore.textContent=0;
}

next.addEventListener("click",nextnumber);
function nextnumber(){
    randomNumber=Math.trunc(Math.random()*20)+1;
    console.log("randomnumber",randomNumber);
    topa.textContent="guess the number";
    document.querySelector("body").style.backgroundColor="white";
    number.textContent="?";
    guess.value="";
}


