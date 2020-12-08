let logoIcon, benvenuto, imm_condizioni;
let b1, b2, button_text, testo_privacy;
let imm1, imm2, imm3, imm4;
let w, h, s, xBarra, logor, freccia;
let i = 0;
let pag = 0;
let h1, h2;

let divieto = 'ELOGIA IL CONTENIMENTO';
let sotto_divieto1 = 'Mantenere gesti e volume controllati: non sarà necessario'
let sotto_divieto2 = 'sbracciarsi o fare schiamazzi di alcun tipo.'
let step = 'step 1/4';
/////////////////////////////////////////////////////////////////////////

function preload() {
  logoIcon = loadImage("./assets/logo.png");
  benvenuto = loadImage("./assets/benvenuto.png"); //trombetta chiara
  logor = loadImage("./assets/logopiccolo.png"); //logo ridotto
  freccia = loadImage("./assets/freccia.png");
  imm1 = loadImage("./assets/esuberanza.png");
  imm2 = loadImage("./assets/spontaneità.png");
  imm3 = loadImage("./assets/avversione.png");
  imm4 = loadImage("./assets/scaramanzia.png");
  testo_privacy = loadImage("./assets/testo.png");
}

/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15); //rallenta
  background('#887b86'); //scuro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon, width / 2, height / 2, logoIcon.width / 7, logoIcon.height / 7);
  h1 = 'Leggi e accetta';
  h2 = 'i termini e le condizioni';
}

/////////////////////////////////////////////////////////////////////////
function draw() {
  //CONTATORE i DEL TEMPO
  if (frameCount % 5 == 0) { //multiplo di 50 incrementa i
    i++;
  }

  w = width / 20;
  h = height / 50;

  if (i > 1 && pag == 0) {
    background('#F9F9F9'); //chiaro
    button_text = 'Inizia';
    image(benvenuto, w * 10, height / 50 * 28, benvenuto.width / 6, benvenuto.height / 6);
    //testo caratteristiche
    textFont('quicksand');
    textAlign(CENTER, TOP);
    textStyle(BOLD);

    textSize(15);
    text('IL VERO TIFO', w * 10, h * 19.3);
    //testo centrale
    textSize(30);
    fill('#B7AEB5'); //3° PALETTE
    text('Dodicesimo Uomo', w * 10, h * 13);
    fill('#877B85'); //4° colore PALETTE
    text('Benvenuto,', w * 10, h * 11);
  }
  if (i > 1) {
    ///////// BOTTONE //////////////////////////////////////////

    b1 = createButton(button_text);
    b1.position(w* 9, h * 42);
    b1.mousePressed(p);
  }

  if (pag > 0) {
    background('#F9F9F9'); //chiaro
    //freccia
    image(freccia, w, h * 6, freccia.width / 6, freccia.height / 6);
    b2 = createButton('');
    b2.position(w, h * 6);
    b2.mousePressed(back);

    //logo a destra
    image(logor, w * 18.5, h * 6, logor.width / 4.5, logor.height / 4.5);
    //testo titolo
    push();
    fill('#877B85'); //4° colore PALETTE
    textSize(25);
    text(h1, w * 10, h * 13);
    fill('#B7AEB5'); //3° PALETTE
    text( h2, w * 10, h * 15);
    pop();

    //BARRA COORDINAZIONE
    fill('#D5D0D3'); //barra grigia
    rectMode(CENTER);
    noStroke();
    rect(w * 10, h * 6, width / 3.5, 15, 20); //rect(x,y,w,h,[tl])
    //xBarra = ((width / 3.5) / 100) * p_coord; //altezza barra %, xTot= 439 = width / 3.5
    xBarra = ((width / 3.5) / 100) * 25; //25%
    push();
    rectMode(CORNER);
    fill('#877B85'); //barra viola
    //width/7 è la metà della barra, che è lunga width/3.5
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    pop();
  }

  console.log(pag);

  if (pag == 1) {
    button_text = 'Avanti';
    push();
    fill('#877B85'); //4° colore PALETTE
    textSize(12);
    text(step, w * 10, h * 10);
    text(divieto, w * 10, h * 33); //ELOGIA IL CONTENIMENTO //NESSUNA ESUBERANZA
    text(sotto_divieto1, w * 10, h * 35);
    text(sotto_divieto2, w * 10, h * 36);
    pop();
    imm_condizioni = imm1;
    //immagine centrale
    image(imm_condizioni, w * 10, h * 25, imm_condizioni.width / 6, imm_condizioni.height / 6);
    //menu puntini
    noStroke();
    for (let i = 0; i < 4; i++) {
      fill('#d6d1d3');
      ellipse(w * 9.6 + s, h * 39, 10);
      fill('#877B85');
      ellipse(w * 9.6 , h * 39, 10);
      s = 20 * i;
    }

  } else if (pag == 2) {
    let divieto = 'NESSUNA SPONTANEITÀ';
    let sotto_divieto1 = 'Per ottenere risultati ottimali è necessario coordinarsi con'
    let sotto_divieto2 = 'gli altri utenti seguendo le istruzioni del display.'
    push();
    fill('#877B85'); //4° colore PALETTE
    textSize(12);
    text(step, w * 10, h * 10);
    text(divieto, w * 10, h * 33); //ELOGIA IL CONTENIMENTO //NESSUNA ESUBERANZA
    text(sotto_divieto1, w * 10, h * 35);
    text(sotto_divieto2, w * 10, h * 36);
    pop();
    imm_condizioni = imm2;
    //immagine centrale
    image(imm_condizioni, w * 10, h * 25, imm_condizioni.width / 6, imm_condizioni.height / 6);
    //menu puntini
    noStroke();
    fill('#d6d1d3');
    for (let i = 0; i < 4; i++) {
      fill('#d6d1d3');
      ellipse(w * 9.6 + s, h * 39, 10);
      fill('#877B85');
      ellipse(w * 9.6 + 20, h * 39, 10);
      s = 20 * i;
    }

  } else if (pag == 3) {
    let divieto = "SCONFIGGI L'AVVERSIONE";
    let sotto_divieto1 = 'Sono ammesse unicamente critiche di tipo costruttivo'
    let sotto_divieto2 = 'con il fine di migliorare le performance.'
    push();
    fill('#877B85'); //4° colore PALETTE
    textSize(12);
    text(step, w * 10, h * 10);
    text(divieto, w * 10, h * 33); //ELOGIA IL CONTENIMENTO //NESSUNA ESUBERANZA
    text(sotto_divieto1, w * 10, h * 35);
    text(sotto_divieto2, w * 10, h * 36);
    pop();
    imm_condizioni = imm3;
    //immagine centrale
    image(imm_condizioni, w * 10, h * 25, imm_condizioni.width / 6, imm_condizioni.height / 6);
    //menu puntini
    noStroke();
    fill('#d6d1d3');
    for (let i = 0; i < 4; i++) {
      fill('#d6d1d3');
      ellipse(w * 9.6 + s, h * 39, 10);
      fill('#877B85');
      ellipse(w * 9.6 + 40, h * 39, 10);
      s = 20 * i;
    }
    button_text = 'Avanti';

  } else if (pag == 4) { /////////////////////////////////////////////////////// ULTIMA CONDIZIONE
    button_text = 'Accetto';
    let divieto = 'SCONFIGGI LA SCARAMANZIA';
    let sotto_divieto1 = 'Non sarà richiesto nessun gesto irrazionale o scaramantico.'
    let sotto_divieto2 = 'Il successo è pura razionalità.'
    push();
    fill('#877B85'); //4° colore PALETTE
    textSize(12);
    text(step, w * 10, h * 10);
    text(divieto, w * 10, h * 33); //ELOGIA IL CONTENIMENTO //NESSUNA ESUBERANZA
    text(sotto_divieto1, w * 10, h * 35);
    text(sotto_divieto2, w * 10, h * 36);
    pop();
    imm_condizioni = imm4;
    //immagine centrale
    image(imm_condizioni, w * 10, h * 25, imm_condizioni.width / 6, imm_condizioni.height / 6);
    //menu puntini
    noStroke();
    for (let i = 0; i < 4; i++) {
      fill('#d6d1d3');
      ellipse(w * 9.6 + s, h * 39, 10);
      fill('#877B85');
      ellipse(w * 9.6+60 , h * 39, 10);
      s = 20 * i;
    }
    h1 = 'Leggi e accetta';
    h2 = 'i termini e le condizioni';
    step=' step 1/4';

  }else if( pag == 5){ //////////////////////////////////////////////// PRIVACY FINALE

    h1 = 'Informativa sulla';
    h2 = 'privacy';
    image(testo_privacy, w * 10, height / 50 * 28, testo_privacy.width / 1.9, testo_privacy.height / 1.9);
    step=' step 2/4';
    xBarra = ((width / 3.5) / 100) * 50;
    push();
    rectMode(CORNER);
    fill('#877B85'); //4° colore PALETTE
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    textSize(12);
    text(step, w * 10, h * 10);
    text('HO LETTO E ACCETTATO L’INFORMATIVA PRIVACY', w * 10, h * 38);
    fill('#D5D0D3'); // grigia
    rect(w * 7, h * 38-3 , 15, 15, 5);
    pop();
  }else if( pag == 6){ //////////////////////////////////////////////// STRUMENTI DEL TIFO

    button_text = 'Avanti';
    h1 = 'Ecco gli strumenti';
    h2 = 'per tifare';
    step=' step 3/4';
    xBarra = ((width / 3.5) / 100) * 75;
    push();
    rectMode(CORNER);
    fill('#877B85'); //4° colore PALETTE
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    textSize(12);
    text(step, w * 10, h * 10);
    pop();

  }else if( pag == 7){/////////////////////////////////////////////////// CODICE PARTITA
    button_text = 'Inizia';
    h1 = 'Inserisci il codice';
    h2 = 'per accedere allo stadio';
    step=' step 4/4';
    xBarra = ((width / 3.5) / 100) * 100;
    push();
    rectMode(CORNER);
    fill('#877B85'); //4° colore PALETTE
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    textSize(12);
    text(step, w * 10, h * 10);
    pop();
  }else if( pag == 8){
    //stadio////////////////////////////////////////////////// STADIO INGRESSO
    button_text = 'Inizia';
    h1 = 'Unisciti';
    h2 = 'agli altri tifosi';
    step='';
    xBarra = ((width / 3.5) / 100) * 100;
    push();
    rectMode(CORNER);
    fill('#F9F9F9'); //4° colore PALETTE
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    fill('#877B85');
    textSize(12);
    text(step, w * 10, h * 10);
    pop();
  }
}
///////////// FINE DRAW ////////////////////////////////////////////////////////


function p() {
  pag++;
}

function back() {
  pag--;
}

//function pagina(){ pag++;}

/////////////////////////////////////////////////////////////////////////////
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#887b86'); //scuro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon, width / 2, height / 2, logoIcon.width / 7, logoIcon.height / 7);
}

// h1= createP('Benvenuto,');
// h1.position( 0 ,  h * 11 );
// h1.style('color','#877B85');
// h2= createP('Dodicesimo Uomo');
// h2.position( 0,  h * 13);
// h2.style('color','#B7AEB5')
