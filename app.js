'use strict';
var button = document.querySelector('button');
var audio = document.querySelector('audio');
var section = document.querySelector('section');
var nextButton = document.querySelectorAll('button')[1];
var images = document.querySelectorAll('img');
var counter = 0;
var album1 = document.getElementById('album1');
var album2 = document.getElementById('album2');
var album3 = document.getElementById('album3');
var album4 = document.getElementById('album4');
var items = [];
var indexOne = 0;
var indexTwo = 1;
var indexThree = 2;
var indexFour = 3;
var userScore = 0;

var media = [
  {
    song: 'songs/Cranes in the Sky.mp3',    //song src
    choice1: ['images/solange.jpg', 'A Seat at the Table', 'Solange'],
                            //filepath, album, artist
    choice2: 'images/lemonade.jpg',
    choice3: 'images/rihanna.jpg',
    choice4: 'images/laurynhill.jpg',
    answer: 'images/solange.jpg' //src of correct answer
  },
  {
    song: 'songs/01 Icky Thump (mp3cut.net).mp3',
    choice1: ['images/ickythump.jpeg', 'Icky Thump', 'The White Stripes'],
    choice2: 'http://placehold.it/320x320',
    choice3: 'http://placehold.it/350x150',
    choice4: 'http://placehold.it/350x150',
    answer: 'images/ickythump.jpeg'
  },
  {
    song: 'songs/jackWhite.mp3',
    choice1: ['images/lemonade.jpg', 'Lemonade', 'Beyonce'],
    choice2: 'images/rihanna.jpg',
    choice3: 'images/laurynhill.jpg',
    choice4: 'images/solange.jpg',
    answer: 'images/lemonade.jpg'
  },
  // {
  //   song: ,    //song src
  //   choice1: , //album  art
  //   choice2: ,
  //   choice3: ,
  //   choice4: ,
  //   answer:    //src of correct answer
  // }
];


function playClickHandler() {
  audio.play();
  counter += 1;
}

function imagesClickHandler(event) {
  //put picture changing function here...
  //place chart thing here ...
  var clicked = event.target;

  if (clicked.alt === media[0].answer) {
    //if user chooses right answer
    if (clicked.getAttribute('src')) {
      clicked.style.outline = '2px solid green';
      nextButton.style.display = '';
      userScore++;
      audio.pause();
    }//if user chooses wrong answer
  } else if (clicked.getAttribute('src')) {
    clicked.style.outline = '2px solid red';
  }
}

function nextClickHandler() {
  // audio.src = media[userScore].song;
  // album1.src = media[userScore].choice1[0];
  // album2.src = media[userScore].choice2;
  // album3.src = media[1].choice3;
  // album4.src = media[1].choice4;

  for (var i = 0; i < images.length; i++) {
    images[i].style.outline = 'none';
  }

  displayQuiz();
}

function generateRandomNumber(){
  //return Math.floor(Math.random() * pathToAssets.length);
}

function displayQuiz() {
  // album3.src = media[0].choice1[0];
  // album3.setAttribute('alt', media[0].choice1[0]);
  // album2.src = media[0].choice2;
  // album1.src = media[0].choice3;
  // album4.src = media[0].choice4;

  audio.src = media[userScore].song;
  album1.src = media[userScore].choice1[0];
  album1.setAttribute('alt', media[0].choice1[0]);
  album2.src = media[userScore].choice2;
  album3.src = media[userScore].choice3;
  album4.src = media[userScore].choice4;
}

//start of Local Storage stuff
function init() {
  var grabData = localStorage.getItem('localData');
  newPlayer = JSON.parse(grabData);

  if(grabData) {

  }
}

function saveData() {
  localStorage.setItem('localData', JSON.stringify(userScore) );
}

button.addEventListener('click', playClickHandler);
section.addEventListener('click', imagesClickHandler);
nextButton.style.display = 'none';
nextButton.addEventListener('click', nextClickHandler);
displayQuiz();
saveData();


// random logic
// var randomIndex1 = generateRandomNumber();
//   var randomIndex2 = generateRandomNumber();
//   var randomIndex3 = generateRandomNumber();
//   var randomIndex4 = generateRandomNumber();

//  while (randomIndex1 === indexOne || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3) {
//     randomIndex1 = generateRandomNumber();
//   }
//   while (randomIndex2 === indexTwo || randomIndex2 === randomIndex1 || randomIndex2 === randomIndex3) {
//     randomIndex2 = generateRandomNumber();
//   }
//   while (randomIndex3 === indexThree || randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
//     randomIndex3 = generateRandomNumber();
//   }
//   while (randomIndex4 === indexFour || randomIndex4) {

//   }








