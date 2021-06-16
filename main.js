import Button from "./Button.js";
import Screen from "./Screen.js";
import TimeGame from "./TimeGame";
import Hearts from "./Hearts";

state = "timeGame";

let background = new Screen();

//timeGame objects
let foodButton = new Button();
let gameOne = new TimeGame();
let friendship = new Hearts();


function draw () {
    clear();
    background.display();
    console.log(state);

    //connecting timeGame with Hearts and Screens through variable state
    if (gameOne.winning()){
        state = "winScreen";
        friendship.addingHearts();
    } else if (gameOne.noMoreLifePoints()){
        state = "loseScreen";
        friendship.destroyingHearts();
    }
}


