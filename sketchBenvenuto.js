
let logoIcon, benvenuto;
let pag=0;
let button;
let w, h, xBarra, logor, freccia;

/////////////////////////////////////////////////////////////////////////

function preload() {
  logoIcon = loadImage("./assets/logo.png");
  benvenuto = loadImage("./assets/benvenuto.png"); //trombetta chiara
  logor = loadImage("./assets/logopiccolo.png"); //logo ridotto
freccia = loadImage("./assets/freccia.png");
}

/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#887b86');//scuro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon,  width/2 , height / 2, logoIcon.width/7, logoIcon.height/7);
  }

/////////////////////////////////////////////////////////////////////////
function draw() {
  w = width / 20;
  h = height / 50;

  if (mouseIsPressed) {}else{
    background('#F9F9F9'); //chiaro
    image(benvenuto, width / 2, height / 50*28, benvenuto.width / 6, benvenuto.height / 6);
  //testo caratteristiche
  textFont('quicksand');
  textAlign(CENTER, TOP);
  textStyle(BOLD);

  //testo centrale
  textSize(27);
  fill('#877B85'); //4° colore PALETTE
  text('Benvenuto,', w*10, h *13);
  fill('#B7AEB5'); //3° PALETTE
  text('Dodicesimo Uomo',w*10,  h *15);

///////// BOTTONE //////////////////////////////////////////
  textSize(13);
    text('IL VERO TIFO',w*10,  h *18);
  button= createButton('inizia');
  button.position(width/20*9,  h*44);
  button.mousePressed();

  //BARRA COORDINAZIONE
  fill('#D5D0D3'); //barra grigia
  rectMode(CENTER);
  noStroke();
  rect(w*10, h*6, width / 3.5, 15, 20); //rect(x,y,w,h,[tl])
  //xBarra = ((width / 3.5) / 100) * p_coord; //altezza barra %, xTot= 439 = width / 3.5
  xBarra = ((width / 3.5) / 100) * 25; //25%
  push();
  rectMode(CORNER);
  fill('#877B85'); //barra viola
  //width/7 è la metà della barra, che è lunga width/3.5
  rect(w*10 - width / 7, h*6-7.5 , xBarra, 15, 20);
  pop();
  }
  //logo a destra
    image(logor, w * 18.5, h*6, logor.width / 4.5, logor.height / 4.5);
    //freccia
    image(freccia, w, h*6, freccia.width / 6, freccia.height / 6);


  }
  ///////////// FINE DRAW ////////////////////////////////////////////////////////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#887b86');//scuro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon,  width/2 , height / 2, logoIcon.width/7, logoIcon.height/7);
}
