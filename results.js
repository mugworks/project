'use strict';

var comments = ['You got everything wrong! Grandma level!', 'Only one right. You need to unplug your ears.', 'Half right. Still need to increase your knowledge', 'Almost perfect. Maybe add a few albums to your collection', 'Wow! Perfect Score! You are a music junkie!'];

for (var i = 0; i <= score; i++) {
  var tableCell = document.getElementById('score' + [i]);
  tableCell.setAttribute('id', 'filledIn');
}