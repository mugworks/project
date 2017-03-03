'use strict';

var comments = ['Only one right answer, Grandma.', 'Two right. Try again, poser.', 'Three right answers, nice work!', 'Four correct answers. Your audiophile skills are strong', 'Wow! Perfect Score! You are a music junkie!'];


loadHandler();
if(loadScore == 0) {
  var zeroComment = document.getElementById('zero_score_text');
  zeroComment.textContent = (loadName + ', you got zero correct answers. Come to r&d immediately for some musical knowledge!');
} else {
  for (var i = 1; i <= loadScore; i++) {
    var tableCell = document.getElementById('score' + [i]);
    tableCell.setAttribute('id', 'filledIn');
  }
  var tableComment = document.getElementById('status' + [loadScore]);
  tableComment.textContent = comments[loadScore - 1];


  if (loadScore == 5) {
    var paraText = document.getElementById('congrats');
    paraText.textContent = ('Congratulations, ' + loadName + '! Your voucher for the new Black Keys Record will be emailed to ' + loadEmail + '! Redeem your copy today only');
  } else {
    var paraOther = document.getElementById('results_text');
    paraOther.textContent = ('Thanks for playing ' + loadName + '. Try again to win a voucher for the new Black Keys record!');
  }
};

localStorage.clear();

