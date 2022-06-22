let xbolinha=300;
let ybolinha=200;
let diametro=30;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
   background(0); 
   circle(xbolinha, ybolinha, diametro);
  xbolinha += velocidadeXBolinha;
  ybolinha += velocidadeYBolinha;
  
  if (xbolinha + raio > width ||
     xbolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
    if (ybolinha + raio > height ||
       ybolinha - raio < 0){
      velocidadeYBolinha *= -1;
    }
      
      
 if (xbolinha > width ||
      xbolinha < 0){
     velocidadeXBolinha *= -1;
  }

    

  
      }

  //variais da raquete
let xRaquete = 5;
let raqueteConprimento = 10;
let raqueteAltura = 90;

function mostreaRaquete () {
  rect ( xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}










