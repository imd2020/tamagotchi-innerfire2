import Button from "./Button.js";

let startScreen = loadImage("assets/startScreen.png");
let mainScreen = loadImage("assets/mainScreen.png");

let state = "main";

function screens(){
    
    if (state === "main"){
        image (mainScreen, 0, 0, 400, 400);    
    }  

    if (state === "start"){
        image (startScreen, 0, 0, 400, 400);
    }
}

let buttonTest = new Button (100, 100, 100, 100);



function draw () {
    screens();
    buttonTest.display();
}

function mouseClicked(){
    if (buttonTest.hitTest()){
        console.log("thank you");
    }
}

