enum Direction {
    UP,
    DOWN,
    RIGHT, 
    LEFT
};

function doSomething(keyPressed: Direction) {
    if(keyPressed == 0) {
        console.log("Pressed UP button");
    } else if(keyPressed == 1) {
        console.log("Pressed DOWN button");
    } else if(keyPressed == 2) {
        console.log("Pressed RIGHT button");
    } else {
        console.log("Pressed LEFT button");
    }
}

doSomething(Direction.DOWN);
console.log(Direction.LEFT);