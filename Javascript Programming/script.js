
//Selecing Elements 

var inputBox = document.getElementById("inputBox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess = 3

//Generate Random Number from 1 to 5 

var randomnumber = Math.floor(Math.random()*10)+1
if (randomnumber>5)
{
    randomnumber=randomnumber -5
}

//Event handler function 

function checktheNumber()
{

if(inputBox.value == randomnumber)

{
    alert("You Got it Right, Congrats")
    result.textContent = "You are Right!"
}

else{

    noofguess=noofguess-1
    if(noofguess==0)
    {
        alert("You lost, Generated Random Number is:"+randomnumber)
  
    }

    guesscount.textContent = "Available Guesses:"+noofguess
    result.textContent = "You are Wrong!"

}

}