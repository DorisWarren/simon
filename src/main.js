import './styles.css';
import { Simon } from './simon.js';
var simon  = new Simon();

$(document).ready(function() {

  $(".start").on("click", function(){
    simon.addToPattern();
  });

  $(".block").click(function(){
    var userColor = $(this).attr("id");
    simon.userPattern.push(userColor);
    if(!simon.checkPattern()) {
      simon.gameReset();
      console.log("game over");
    } else if (simon.userPattern.length === simon.gamePattern.length ) {
          simon.addToPattern();
          simon.userPattern = [];
    }
    console.log("user " + simon.userPattern);
    console.log("game " + simon.gamePattern);
  });

});
