//this function is to check when the game is won

function checkIfGameIsWon (first,second,third) {
    if(display.textContent.includes("won the game"))  {
        return;
    }

    if(buttons[first].textContent==="X"&&
    buttons[second].textContent==="X"&&
    buttons[third].textContent==="X"
    ) {
        disableButtonsWhenGameIsWon ("player 1😊");
        return
}else if(
    buttons[first].textContent==="O"&&
    buttons[second].textContent==="O"&&
    buttons[third].textContent==="O"
) {
disableButtonsWhenGameIsWon ("player 2😊");
return;
}else {
    Checkdraw();
}
}

function checkStatus (){
    //check if the game have been won horizontally
    checkIfGameIsWon (0,1,2);
    checkIfGameIsWon (3,4,5);
    checkIfGameIsWon (6,7,8);

     //check if the game have been won vertically
     checkIfGameIsWon (0,3,6);
     checkIfGameIsWon (1,4,7);
     checkIfGameIsWon (2,5,8);
 
      //check if the game have been won diagonally
    checkIfGameIsWon (0,4,8);
    checkIfGameIsWon (2,4,6);
}

function disableButtonsWhenGameIsWon(player){
    for(let button of buttons){
        if (button.textContent===""){
            button.toggleAttribute("disabled");
        }
    }
    display.textContent =player+"won the game";
}

// it is to show when the whole boxes ia full and thereis no winner
function Checkdraw(){
    for(let button of buttons){
        if (button.textContent==="") {
            return;
        }
    }
    display.textContent="It is a Draw Game😜😜";
}