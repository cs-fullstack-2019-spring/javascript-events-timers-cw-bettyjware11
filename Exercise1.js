//This function runs when the box is checked and tells the user I told you not to click this...
function dontCheckThisBoxFunction()
{
    console.log("I TOLD YOU NOT TO CLICK THIS!!!");


}

var buttonElement = document.getElementById("checkbox");
buttonElement.onclick = dontCheckThisBoxFunction;