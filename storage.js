'use strict';
var loadName;
var loadEmail;
var loadScore;
var playGame = document.getElementById('play_game');

function playHandler(event) { //Sets storage for username and email
  var nameDomElement = document.getElementById('username');
  var emailDomElement = document.getElementById('email');
  var nameData;
  var emailData;

  //form name validation
  if (!nameDomElement.value) {
    nameDomElement.style.outline = '2px solid #f00';
    event.preventDefault();

  } else {
    nameData = nameDomElement.value;
    JSON.stringify(nameData);
    localStorage.setItem('nameString', nameData);
  }

  //form email validation
  if (!emailDomElement.value) {
    emailDomElement.style.outline = '2px solid #f00';
    event.preventDefault();
  } else {
    emailDomElement.value;
    JSON.stringify(emailData);
    localStorage.setItem('emailString', emailData);
  }

}

if (playGame) {
  playGame.addEventListener('click', playHandler);
}
function loadHandler() { //retrieves name, email, and score data
  loadName = localStorage.getItem('nameString');
  console.log(loadName);
  loadEmail = localStorage.getItem('emailString');
  console.log(loadEmail);
  loadScore = localStorage.getItem('score');
  console.log(loadScore);
}
