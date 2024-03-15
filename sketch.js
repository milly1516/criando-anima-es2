let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
   background(color(10,0,0));
  cor = color(random(0,155), random(0,155), random(0,155));
  posicaoHorizontal = 300;
  posicaoVertical = 300;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,10);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,265), random(0,265), random(0,265), random(0,160));
  }
   
}
