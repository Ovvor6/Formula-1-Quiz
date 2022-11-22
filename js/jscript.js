// html variables
var timer = document.querySelector("#timer")
var intro = document.querySelector("#intro")
var start = document.querySelector("#start")
var questions1 = document.querySelector("#questions1")
var questions2 = document.querySelector("#questions2")
var questions3 = document.querySelector("#questions3")
var questions4 = document.querySelector("#questions4")
var results = document.querySelector("#results")
var highscores = document.querySelector("#highscores")
initialTime = 60;
var totalPoints =0;
var qL1 = document.querySelector("#qL1")
var q1 = document.querySelector("#q1")
var q2 = document.querySelector("#q2")
var q3 = document.querySelector("#q3")
var q4 = document.querySelector("#q4")
var q5 = document.querySelector("#q5")
var q6 = document.querySelector("#q6")
var q7 = document.querySelector("#q7")
var q8 = document.querySelector("#q8")
var q9 = document.querySelector("#q9")
var q10 = document.querySelector("#q10")
var q11 = document.querySelector("#q11")
var q12 = document.querySelector("#q12")
var q13 = document.querySelector("#q13")
var q14 = document.querySelector("#q14")
var q15 = document.querySelector("#q15")
var q16 = document.querySelector("#q16")


// display timer and intro
function startTimer (){
    setInterval(function(){
        timer.innerHTML= time +"seconds"
        initialTime--;
        intro.style.display = "none";
    },1000)
}
// display question 
function showQuestions1(){
    questions1.style.display = "block";
    qL1.innerHTML = "How many championships does Sir Lewis Hamilton have?"
    q1.innerHTML = "9";
    q1.setAttribute("isCorrect", false)
    q2.innerHTML = "7";
    q2.setAttribute("isCorrect", true)
    q3.innerHTML = "6";
    q3.setAttribute("isCorrect", false)
    q4.innerHTML = "8";
    q4.setAttribute("isCorrect", false)
}
function showQuestions2(){
    questions2.style.display = "block";
    qL2.innerHTML = "Where is the first race of the F1 season begin?"
    q5.innerHTML = "Japan";
    q5.setAttribute("isCorrect", false)
    q6.innerHTML = "Spain";
    q6.setAttribute("isCorrect", false)
    q7.innerHTML = "Brazil";
    q7.setAttribute("isCorrect", false)
    q8.innerHTML = "Abu Dhabi";
    q8.setAttribute("isCorrect", true)
}
function showQuestions3(){
    questions3.style.display = "block";
    qL3.innerHTML = "What race team does Sir Lewis Hamilton drive for?"
    q9.innerHTML = "Ferrari";
    q9.setAttribute("isCorrect", false)
    q10.innerHTML = "Redbull";
    q10.setAttribute("isCorrect", false)
    q11.innerHTML = "Mercedes";
    q11.setAttribute("isCorrect", true)
    q12.innerHTML = "Mclaren";
    q12.setAttribute("isCorrect", false)

}
function showQuestions4(){
    questions4.style.display = "block";
    qL4.innerHTML = "How many races were there in the 2022 F1 season?"
    q13.innerHTML = "25";
    q13.setAttribute("isCorrect", false)
    q14.innerHTML = "17";
    q14.setAttribute("isCorrect", false)
    q15.innerHTML = "20";
    q15.setAttribute("isCorrect", false)
    q16.innerHTML = "23";
    q16.setAttribute("isCorrect", true)

}

intro.style.display = "block";
start.addEventListener("click", function(){
    startTimer();
    showQuestions1();

})

// questions events qL1
q1.addEventListener("click", function(){
    console.log(q1.getAttribute("isCorrect"))
})
questions2.addEventListener("click", function(){
    console.log(q2.getAttribute("isCorrect"))
    var answerValue = q2.getAttribute("isCorrect")
    if (answerValue){
        // add points
        totalPoints += 10
    }else {
        //deduct points
        totalPoints -= 10
    

    }
})
q3.addEventListener("click", function(){
    console.log(q3.getAttribute("isCorrect"))
})
q4.addEventListener("click", function(){
    console.log(q4.getAttribute("isCorrect"))
})

