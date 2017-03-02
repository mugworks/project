'use strict';

var comments = ['You got everything wrong! Grandma level!', 'Only one right. You need to unplug your ears.', 'Half right. Still need to increase your knowledge', 'Almost perfect. Maybe add a few albums to your collection', 'You are audiofile skills are strong', 'Wow! Perfect Score! You are a music junkie!'];

var score = 5;

if(score === 0){
    // tableCell.setAttribute('id', '');
  var zeroComment = document.getElementById('zero_score_text');
  zeroComment.textContent = ('You got zero correct answers. Come to r&d immediately!');
}
else{
  for (var i = 1; i <= score; i++) {
    var tableCell = document.getElementById('score' + [i]);
    tableCell.setAttribute('id', 'filledIn');
  }
  var tableComment = document.getElementById('status' + [score]);
  tableComment.textContent = comments[score];

  if (score === 5) {
    var paraText = document.getElementById('congrats');
    paraText.textContent = ('Congratulations! You get a free record voucher!');
  } else {
    var paraOther = document.getElementById('results_text');
    paraOther.textContent = ('Thanks for playing!');
  }
};
