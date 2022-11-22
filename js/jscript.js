// html variables
var timer = document.querySelector("#timer")
var intro = document.querySelector("#intro")
var start = document.querySelector("#start")
var allQuestions = document.querySelector("#allQuestions")
var questions1 = document.querySelector("#questions1")
var questions2 = document.querySelector("#questions2")
var questions3 = document.querySelector("#questions3")
var questions4 = document.querySelector("#questions4")
var results = document.querySelector("#results")
var highscores = document.querySelector("#highscores")
var initialTime = 60;
var totalPoints =0;
var initials =document.querySelector("#initials")
var userInitials = ""
var qL1 = document.querySelector("#qL1")
var answers1 = document.querySelector("#answers1")
var answers2 = document.querySelector("#answers2")
var answers3 = document.querySelector("#answers3")
var answers4 = document.querySelector("#answers4")
var a2 = document.querySelector("#a2")
var qL2 = document.querySelector("#qL2")
var a8 = document.querySelector("#a8")
var qL3 = document.querySelector("#qL3")
var a11 = document.querySelector("#a11")
var qL4 = document.querySelector("#qL4")
var a16 = document.querySelector("#a16")


// display timer and intro
intro.style.display = "block";
function startTimer (){
    
    var interval = setInterval(function(){
        if (initialTime == 0){
            clearInterval(interval);
            console.log("TIME HAS RUN OUT!")

            
        }
        timer.innerHTML= initialTime + " seconds"
        initialTime--;
    },1000)
}

start.addEventListener("click", function(){
    startTimer();
    showQuestions1();
    intro.style.display = "none";

})
// display question 
function showQuestions1(){
    questions1.style.display = "block";
    qL1.innerHTML = "How many championships does Sir Lewis Hamilton have?"
    a1.innerHTML = "9";
    a1.setAttribute("isCorrect", false)
    a2.innerHTML = "7";
    a2.setAttribute("isCorrect", true)
    a3.innerHTML = "6";
    a3.setAttribute("isCorrect", false)
    a4.innerHTML = "8";
    a4.setAttribute("isCorrect", false)
}
function showQuestions2(){
    questions2.style.display = "block";
    qL2.innerHTML = "Where is the first race of the F1 season begin?"
    a5.innerHTML = "Japan";
    a5.setAttribute("isCorrect", false)
    a6.innerHTML = "Spain";
    a6.setAttribute("isCorrect", false)
    a7.innerHTML = "Brazil";
    a7.setAttribute("isCorrect", false)
    a8.innerHTML = "Abu Dhabi";
    a8.setAttribute("isCorrect", true)
}
function showQuestions3(){
    questions3.style.display = "block";
    qL3.innerHTML = "What race team does Sir Lewis Hamilton drive for?"
    a9.innerHTML = "Ferrari";
    a9.setAttribute("isCorrect", false)
    a10.innerHTML = "Redbull";
    a10.setAttribute("isCorrect", false)
    a11.innerHTML = "Mercedes";
    a11.setAttribute("isCorrect", true)
    a12.innerHTML = "Mclaren";
    a12.setAttribute("isCorrect", false)

}
function showQuestions4(){
    questions4.style.display = "block";
    qL4.innerHTML = "How many races were there in the 2022 F1 season?"
    a13.innerHTML = "25";
    a13.setAttribute("isCorrect", false)
    a14.innerHTML = "17";
    a14.setAttribute("isCorrect", false)
    a15.innerHTML = "20";
    a15.setAttribute("isCorrect", false)
    a16.innerHTML = "23";
    a16.setAttribute("isCorrect", true)
}


answers1.querySelectorAll("li").forEach(answer => {
    answer.addEventListener('click', event => {
    if(event.target == a2){
        console.log("true");
        // add points
        totalPoints += 10;
    }else {
        console.log("false");
        //deduct points
        totalPoints -= 10;
        initialTime -= 5;
    }
    questions1.style.display = "none";
    showQuestions2();
    });
});

answers2.querySelectorAll("li").forEach(answer => {
    answer.addEventListener('click', event => {
    
    if(event.target == a8){
        console.log("true");
        // add points
        totalPoints += 10;
    }else {
        console.log("false");
        //deduct points
        totalPoints -= 10;
        initialTime -= 5;
    }
    questions2.style.display = "none";
    showQuestions3();
    });
});

answers3.querySelectorAll("li").forEach(answer => {
    answer.addEventListener('click', event => {
    
    if(event.target == a11){
        console.log("true");
        // add points
        totalPoints += 10;
    }else {
        console.log("false");
        //deduct points
        totalPoints -= 10;
        initialTime -= 5;
    }
    questions3.style.display = "none";
    showQuestions4();
    });
});

answers4.querySelectorAll("li").forEach(answer => {
    answer.addEventListener('click', event => {
    
    if(event.target == a16){
        console.log("true");
        // add points
        totalPoints += 10;
    }else {
        console.log("false");
        //deduct points
        totalPoints -= 10;
        initialTime -= 5;
    }
    allQuestions.style.display = "none";
    //results.innerHTML = "Your results are: " + totalPoints;
    results.style.display = "block";
    
    
    });

});

submit.addEventListener("click", function(){
    userInitials = initials.value;

})



