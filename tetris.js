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

function Piece(patterns, color) {
  this.pattern = patterns[0];
  this.patterns = patterns;
  this.patterni = 0;

  this.color = color;

  this.x = 0;
  this.y = -2;
}

Piece.prototype.draw = function() {
  fs = ctx.fillStyle;
  ctx.fillStyle = this.color;
  for (var ix = 0; ix < this.pattern.length; ix++) {
    for (var iy = 0; iy < this.pattern.length; iy++) {
      if (this.pattern[ix][iy]) {
        drawSquare(this.x + ix, this.y + iy);
      }
    }
  }
  ctx.fillStyle = fs;
};

Piece.prototype.down = function() {
  this.undraw();
  this.y++;
  this.draw();
};

Piece.prototype.moveRight = function() {
  this.undraw();
  this.x++;
  this.draw();
};

Piece.prototype.moveLeft = function() {
  this.undraw();
  this.x--;
  this.draw();
};

Piece.prototype.rotate = function() {
  this.undraw();
  this.patterni = (this.patterni + 1) % this.patterns.length;
  this.pattern = this.patterns[this.patterni];
  this.draw();
};

Piece.prototype._fill = function(color) {
  fs = ctx.fillstyle = color;
  ctx.fillStyle;
  var x = this.x;
  var y = this.y;
  for (var ix = 0, ix < this.pattern.length; ix++) {
    for (var iy = 0; iy < this.pattern.length; iy++) {
      if (this.pattern[ix][iy]) {
        drawSquare(x + ix, y + iy);
      }
    }
  }
  ctx.fillStyle = fs;
};
