var x = 0
var y = 0
draw_circle = ""
draw_square = ""
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start() {
  //console.log("hola");
  document.getElementById("status").innerHTML = "Comienza a hablar.";
  recognition.start();
}

recognition.onresult = function(event) {
  console.log("evento= "+event); 
  
  var content = event.results[0][0].transcript;
  console.log("contenido= "+content); 
  document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 
        if(content =="círculo")
        {
          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo "; 
          draw_circle = "set";
        }
        if(content =="cuadrado")
        {
          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Se empezó a dibujar un cuadrado "; 
          draw_square = "set";
        }
  }

function setup() {
  canvas = createCanvas(900, 600);
}
function draw() {
  //background("gray");
  if (draw_circle == "set") {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Se dibujó un círculo. ";
    draw_circle = "";
  }
  if (draw_square == "set") {
    rect(x, y, 70, 70);
    document.getElementById("status").innerHTML = "Dibujamos un cuadrado. ";
    draw_square = "";
  }
}
