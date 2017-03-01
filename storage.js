'use strict';
          //Sets storage for username and email
var form = document.querySelector('form');

function submitHandler(){
  var nameDomElement = document.getElementById('username');
  var emailDomElement = document.getElementById('email');

  var nameData = nameDomElement.value;
  JSON.stringify(nameData);
  localStorage.setItem('nameString', nameData);

  var emailData = emailDomElement.value;
  JSON.stringify(emailData);
  localStorage.setItem('emailString', emailData);
}

            //Set storage data for score
var getScoreString = localStorage.getItem('score');
var scoreData = JSON.parse(getScoreString);



form.addEventListener('submit', submitHandler);