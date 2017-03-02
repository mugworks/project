'use strict';

var comments = ['Only one right. Grandma level.', 'Two right. Poser level.', 'Mid-level knowledge.', 'Your audiophile skills are strong', 'Wow! Perfect Score! You are a music junkie!'];

// var score = 2;
loadHandler();
if(loadScore === 0) {
  var zeroComment = document.getElementById('zero_score_text');
  zeroComment.textContent = ('You got zero correct answers. Come to r&d immediately!');
} else {
  for (var i = 1; i <= loadScore; i++) {
    var tableCell = document.getElementById('score' + [i]);
    tableCell.setAttribute('id', 'filledIn');
  }
  var tableComment = document.getElementById('status' + [loadScore]);
  tableComment.textContent = comments[loadScore - 1];

  if (loadScore === 5) {
    var paraText = document.getElementById('congrats');
    paraText.textContent = ('Congratulations! You get a free record voucher!');
  } else {
    var paraOther = document.getElementById('results_text');
    paraOther.textContent = ('Thanks for playing!');
  }
};

