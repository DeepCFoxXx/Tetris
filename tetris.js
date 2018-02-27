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

Piece.prototype.undraw = function(ctx) {
  this._fill("black");
};

Piece.prototype.draw = function(ctx) {
  this._fill(this.color);
};

Piece.prototype.rotate = function() {
  var nextpat = this.patterns[(this.patterni + 1) % this.patterns.length];
  if (!this.collides(0,0, nextpat)) {
    this.undraw();
    this.patterni = (this.patterni + 1) % this.patterns.length;
    this.pattern = this.patterns[this.patterni];
    this.draw();
  }
};

Piece.prototype.down = function() {
  if (this._collides(0, 1, this.pattern)) {
    // Piece hits something and should be locked in place
    // A new piece should be spawned
  } else {
    this.undraw();
    this.y++;
    this.draw();
  }
};

Piece.prototype.moveRight = function() {
  if (!this._collides(1, 0, this.pattern)) {
    this.undraw();
    this.x++;
    this.undraw();
  }
};

Piece.prototype.moveLeft = function() {
  if (!this._collides(-1, 0, this.pattern)) {
    this.undraw();
    this.x--;
    this.draw();
  }
};

Piece.prototype._collides = function() {
  for (var ix = 0; ix < pat.length; ix++) {
    for (var iy = 0; iy < pat.length; iy++) {
      if (!pat[ix][iy]) {
        continue;
      }

      var x = this.x + ix dx;
      var y = this.y + iy dy;
      if  (y >= height || x < 0 || x >= width) {
        return true;
      }
      if (y < 0) {
        continue;
      }
      if (board[x][y]) {
        return true;
      }

    }
  }
  return false;
};

var dropStart = Date.now();
document.body.addEventListener("keypress", function (e) {
  if (e.keycode == 38) {
    piece.rotate();
    dropStart = Date.now();
  }
  if (e.keycode == 40) {
    piece.down();
  }
  if (e.keycode == 37) {
    piece.moveLeft();
    dropStart = Date.now();
  }
  if (e.keycode == 39) {
    piece.moveRight();
    dropStart = Date.now();
  }
},false);

var done = false;
function main() {
  var now = Date.now();
  var delta = now - dropStart ;

  if (delta > 1000) {
    piece.down();
    dropStart = now;
  }

  if (!done) {
    requestAnimationFrame(main);
  }
}
main();
