export default class Screen {
    constructor (){
        this.startScreen = loadImage("assets/startScreen.png");
        this.mainScreen = loadImage("assets/mainScreen.png");
        this.timeGame = loadImage("assets/timeGame.png");
        this.winScreen = loadImage("assets/winScreen.png");
        this.loseScreen = loadImage("assets/loseScreen.png");
    }

    display(){
        if (state === "main"){
            image (this.mainScreen, 0, 0, 400, 400);
            friendship.display();    
        } else if (state === "start"){
            image (this.startScreen, 0, 0, 400, 400);
        } else if (state === "timeGame"){
            image (this.timeGame, 0, 0, 400, 400);
            gameOne.display();
            gameOne.reset();
        } else if (state === "winScreen"){
            image (this.winScreen, 0, 0, 400, 400);
        } else if (state === "loseScreen"){
            image (this.loseScreen, 0, 0, 400, 400);
        }
    }
}