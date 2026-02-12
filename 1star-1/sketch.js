let myInput;

function setup(){
    createCanvas(400,400);
    let modeButton;
modeButton = createButton("submit");
const mainContainer = select("main");
modeButton.parent(mainContainer);
modeButton.position(200,300);
myInput = createInput();
myInput.position(200,300,20)
}

function draw(){
background(255);
let msg = myInput.value();
text(msg, 80, 55)
}

function mouseClicked(){
    modeButton = createButton("submit");
    modeButton.mouseClicked();

}
