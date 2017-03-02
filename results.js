'use strict';

var comments = ['Only one right. Grandma level.', 'Two right. Poser level.', 'Mid-level knowledge.', 'Your audiophile skills are strong', 'Wow! Perfect Score! You are a music junkie!'];

var score = 3;

if(score === 0) {
  var zeroComment = document.getElementById('zero_score_text');
  zeroComment.textContent = ('You got zero correct answers. Come to r&d immediately!');
} else {
  for (var i = 1; i <= score; i++) {
    var tableCell = document.getElementById('score' + [i]);
    tableCell.setAttribute('id', 'filledIn');
  }
  var tableComment = document.getElementById('status' + [score]);
  tableComment.textContent = comments[score - 1];

  if (score === 5) {
    var paraText = document.getElementById('congrats');
    paraText.textContent = ('Congratulations! You get a free record voucher! Print this page and bring it to the store.');
  } else {
    var paraOther = document.getElementById('results_text');
    paraOther.textContent = ('Thanks for playing!');
  }
};

