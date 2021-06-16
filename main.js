import Button from "./Button.js";
import Screen from "./Screen.js";
import TimeGame from "./TimeGame";

state = "timeGame";

let test = new Screen();
let buttonTest = new Button (100, 100, 100, 100);
let firstGame = new TimeGame();



function draw () {
    test.display();
    firstGame.animationBasedOnCounter();
    buttonTest.display();
    foodButton.display();

    if (foodButton.hitTest()){
        foodButton.movement = 0;
    }
}

function mouseClicked(){
    if (buttonTest.hitTest()){
        console.log("thank you");
    }
}

