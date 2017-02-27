'use strict';
var button = document.querySelector('button');
var audio = document.querySelector('audio');
var counter = 0;

var media = [
  {
    song: ,    //song src
    choice1: , //album  art 
    choice2: ,
    choice3: ,
    choice4: ,
    answer:    //src of correct answer
  },
  {
    song: ,    //song src
    choice1: , //album  art 
    choice2: ,
    choice3: ,
    choice4: ,
    answer:    //src of correct answer
  },
  {
    song: ,    //song src
    choice1: , //album  art 
    choice2: ,
    choice3: ,
    choice4: ,
    answer:    //src of correct answer
  },
  {
    song: ,    //song src
    choice1: , //album  art 
    choice2: ,
    choice3: ,
    choice4: ,
    answer:    //src of correct answer
  }
];

var album1 = document.getElementById('Album1');
var album2 = document.getElementById('Album2');
var album3 = document.getElementById('Album3');
var album4 = document.getElementById('Album4');
var items = [];
var indexOne = 0;
var indexTwo = 1;
var indexThee = 2;
var indexFour = 3;

button.addEventListener('click', playClickHandler);




function playClickHandler() {
  audio.play();
  counter += 1;
}

function imagesClickHandler(event) {
  //put picture changing function here...
  //place chart thing here ...
}

function generateRandomNumber(){
  return Math.floor(Math.random() * pathToAssets.length);
}

funtion displayQuiz() {
  var randomIndex1 = generateRandomNumber();
  var randomIndex2 = generateRandomNumber();
  var randomIndex3 = generateRandomNumber();
  var randomIndex4 = generateRandomNumber();

 while (randomIndex1 === indexOne || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3) {
    randomIndex1 = generateRandomNumber();
  }
  while (randomIndex2 === indexTwo || randomIndex2 === randomIndex1 || randomIndex2 === randomIndex3) {
    randomIndex2 = generateRandomNumber();
  }
  while (randomIndex3 === indexThree || randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
    randomIndex3 = generateRandomNumber();
  }
  while (randomIndex4 === indexFour || randomIndex4  || )

}

















//start of Local Storage stuff
var userScore = 0;

function init() {
  var grabData = localStorage.getItem('localData');
  newPlayer = JSON.parse(grabData);

  if(grabData) {

  }
}

function saveData() {
  localStorage.setItem('localData', JSON.stringify(userScore) );
}
saveData();






