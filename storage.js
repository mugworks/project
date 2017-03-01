'use strict';
        //Sets storage for username and emil\\
//May want to make a conditional statement that tests if the
//username and email has been submited and if so, place data in storage
function nameEmailStorage(){
  var nameDomElement = document.getElementById('username');
  var emailDomElement = document.getElementById('email');

  var nameData = nameDomElement;
  JSON.stringify(nameData);
  localStorage.setItem('nameString', nameDate);

  var emailData = emailDomElement;
  JSON.stringify(emailData);
  localStorage.setItem('emailString', emailData);
}
  




        //Set storage data for score\\
function scoreStorage(){
  var scoreData = userScore;
  JSON.stringify(scoreData);
  localStorage.setItem('scoreString', scoreData);
}


var getScoreString = localStorage.getItem('scoreString');
var userScore = JSON.parse(getScoreString);;      //retrieve storage data and place on page
//Could make another contitional statement that tests is user click
//the end game button, the program retrieves storage and places data
//in form or soemthing
// 



// var scoreString = localStorage.getItem('theUserScore');
// var userScore = JSON.parse(scoreString);


