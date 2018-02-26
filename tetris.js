var canvas = document .getElementById('board');
var ctx = canvas.getContext('2d');

var width = 10;
var height = 20;
var tilez = 24;

canvas.width = width * tilez;
canvas.height = height * tilez;


function drawBoard() {
  fs = ctxfillstyle;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      ctxfillstyle = board[y][x] ? 'red' : 'white';
      drawSquare(x, y, tilez, tilez);
    }
  }
  ctxfillstyle = fs;
}
