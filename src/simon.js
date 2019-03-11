export function Simon() {
  this.color = ["red", "yellow", "blue", "green"];
  this.gamePattern = [];
  this.userPattern = [];
  this.activePlayer = false;

}

Simon.prototype.randomColor = function() {
  var randomNum = Math.floor((Math.random() * 4));
  return this.color[randomNum];
  //will return random Simon color as string
};


Simon.prototype.checkPattern = function() {
  for(let i = 0; i < this.userPattern.length; i++) {
    if(this.userPattern[i] !== this.gamePattern[i]) {
      return false
    }
  }
  return true
};

Simon.prototype.addToPattern = function (){
  var randomColor = this.randomColor();
  this.gamePattern.push(randomColor);
  console.log(this.gamePattern);
};

Simon.prototype.gameReset = function () {
  this.gamePattern = [];
  this.userPattern = [];
};
