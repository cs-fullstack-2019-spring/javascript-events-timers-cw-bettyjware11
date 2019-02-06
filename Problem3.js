function buttonClickedLiftoff()
{
    console.log("Lift Off");
    buttonElement.innerText = liftoffArray[i];
    i--;

    if (i>=liftoffArray.length)
        i = 10;
}

var i = 10;
var liftoffArray =  [10,9,8,7,6,5,4,3,2,1,0];
var buttonElement = document.getElementById("button");


buttonElement.onclick = buttonClickedLiftoff();

