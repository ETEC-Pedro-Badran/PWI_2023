const canvas = document.getElementById("myCanvas"); //obter o canvas
const ctx = canvas.getContext("2d"); //obter o estado do canvas
var x = canvas.width/2;  // definir o ponto central do canvas para lançar a bolinha
var y = canvas.height-30; // definir a altura inicial da bolinha
let dx = 2; // deslocamento da bolinha na horizontal
let dy = -2;// deslocamento da bolinha na vertical

function desenharBola(){ // função que desenha a bolinha
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharBola();


}
setInterval(draw, 10);
  