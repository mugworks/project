'use strict';

var form = document.querySelector('form');

function submitHandler(){ //Sets storage for username and email
  var nameDomElement = document.getElementById('username');
  var emailDomElement = document.getElementById('email');

  var nameData = nameDomElement.value;
  JSON.stringify(nameData);
  localStorage.setItem('nameString', nameData);

  var emailData = emailDomElement.value;
  JSON.stringify(emailData);
  localStorage.setItem('emailString', emailData);
}

if (form) {
  form.addEventListener('submit', submitHandler);
}
function loadHandler(){ //retrieves name, email, and score data
  var loadName = localStorage.getItem('nameString');
  console.log(loadName);
  var loadEmail = localStorage.getItem('emailString');
  console.log(loadEmail);
  var loadScore = localStorage.getItem('score');
  console.log(loadScore);
}
