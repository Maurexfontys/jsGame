document.addEventListener("keydown", drawPipe);
x = 900;

function drawPipe() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  var rect = ctx.fillRect(x, 250, 10, 300);
  ctx.closePath();
  x = x - 1.2;
}
