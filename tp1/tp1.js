//Gomez Lucia
//com1
//https://youtu.be/TLpukLScY1Y

let imgtp3;
let modo = 0;  //Modo 0 (Grilla blanca y negra) , Modo 1 (Grilla roja y verde) , Modo 2 (Ellipses rosas y violetas)
let filas = 15;
function preload () {
  imgtp3 = loadImage('data/imgtp3.jpeg');
}
function setup() {
  createCanvas(800, 400);
}


//funcion propia que retorna un valor
function calcularTam(distX, maxDist) {
  return map(distX, 0, maxDist, 3, 40);
}

function draw() {
  background(255);
  image(imgtp3, 0, 0, width / 2, height);

  alto = height /
  (filas);

  centroX = width * 0.75;
  maxDist = width / 2;

  let columna = 0;

  //for anidado
  for ( posX = width / 2; posX < width; columna++) {
    distX = dist(posX, 0, centroX, 0);
    tam = calcularTam(distX, maxDist);
    for (let fila = 0; fila < filas; fila++) {
      posY = fila * alto;

      //Colores/forma segun el modo

      let colorActual;
      if ((columna + fila) % 2 === 0) {
        if (modo === 2) {
          colorActual = color(150, 0, 255);
        } else if (modo === 1) {
          colorActual = color(255, 0, 0);
        } else {
          colorActual = 0;
        }
      } else {
        if (modo === 2) {
          colorActual = color(255, 100, 200);
        } else if (modo === 1) {
          colorActual = color(0, 255, 0);
        } else {
          colorActual = 255;
        }
      }

      fill(colorActual);
      noStroke();
      dibujarForma(posX, posY, tam, alto, modo);
    }

    posX += tam;
  }
}

// Función propia que no retorna valor
// Dibuja círculos o rectángulos según el modo
function dibujarForma( posX, posY, tam, alto, modoActual) {
  if (modoActual === 2) {
    ellipse(posX + tam / 2, posY + alto / 2, tam, alto);
  } else {
    rect(posX, posY, tam, alto);
  }
}

//cada click es un cambio
function mousePressed() {
  modo++;
  if (modo > 2) {
    modo = 0;
  }
}

//reinicio con v
function keyPressed() {
  if (key === 'v' || key === 'V') {
    modo = 0;
  }
}
