
//Creating Canvas 640 wide and 480 long
function setup () {
    createCanvas(600, 600); 
}


function draw(){

fill(180);
rect(250, 20, 100, 300);

circle(300, 80, 70);
circle(300, 170, 70);
circle(300, 260, 70);

if(mouseIsPressed) {
    if (mouseButton === LEFT) {
        fill("green");
        circle(300, 80, 70);
    } else if (mouseButton === RIGHT){
        fill("orange");
        circle(300, 170, 70);
    } else if (mouseButton === CENTER){
        fill("red");
        circle (300, 260, 70);
    }else {
        noFill();
    }  
}


mouseClicked();

function mouseClicked(){
    light = "green";

    if (light = "green"){
        console.log("light = green");
        light = "orange";
    } else if (light = "orange") {
        console.log("light =  orange");
        light = "red";
    } else if (light = "red"){
        console.log("light = Red");
    } else {
        noFill();
    }
}



//doesnt work yet :(
function keyTyped() {
    if (key === 'g') {
        fill("green");
        circle(300, 80, 70);
    } else if (key === 'o') {
        fill("orange");
        circle(300, 170, 70);
    }else if (key === 'r') {
        fill("red");
        circle (300, 260, 70);
    } else {
        noFill();
    }

}
}

