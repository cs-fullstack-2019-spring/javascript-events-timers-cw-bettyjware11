
function startTyping()
{
    console.log("clicked button")
}

let allowTyping = false;

let mybtn = document.getElementById("allowtyping");
let myta = document.getElementById("textarea");

mybtn.addEventListener("click", clickTheButtonFunction(e));
{
    console.log("clicked button");
//booleans can only return true or false and determine whether the code will run beneath it...
    if (allowTyping)
    {
        myta.setAttribute("disabled", "");
        allowTyping = false;
    }
    else
        myta.removeAttribute("disabled");
        allowTyping = "true";
}






// //This function runs when the button is clicked, displays hidden message and enables typing...
// function clickTheButtonFunction()
// {
//     console.log("clicked button");
//
//
// }
//
// var buttonElement = document.getElementById("allowtyping");
// buttonElement.onclick = clickTheButtonFunction;





