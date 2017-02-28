'use strict';
var button = document.querySelector('button');
var audio = document.querySelector('audio');
var section = document.querySelector('section');
//var nextButton = document.querySelectorAll('button')[1]; start button becomes next button now
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
    choice3: 'images/solange.jpg',
    choice2: 'images/lemonade.jpg',
    choice1: 'images/rihanna.jpg',
    choice4: 'images/laurynhill.jpg',
                //filepath                album            artist
    answer: ['images/solange.jpg', 'A Seat at the Table', 'Solange'] //src of correct answer
  },
  {
    song: 'songs/01 Icky Thump (mp3cut.net).mp3',
    choice1: 'images/ickythump.jpeg',
    choice2: 'http://placehold.it/320x320',
    choice3: 'http://placehold.it/320x320',
    choice4: 'http://placehold.it/320x320',
    answer: ['images/ickythump.jpeg', 'Icky Thump', 'The White Stripes']
  },
  {
    song: 'songs/jackWhite.mp3',
    choice1: 'images/lemonade.jpg',
    choice2: 'images/rihanna.jpg',
    choice3: 'images/laurynhill.jpg',
    choice4: 'images/solange.jpg',
    answer: ['images/lemonade.jpg', 'Lemonade', 'Beyonce']
  },
  {
    song: 'songs/Cranes in the Sky.mp3',
    choice1: 'images/solange.jpg',
    choice2: 'http://placehold.it/320x320/fff/000',
    choice3: 'http://placehold.it/320x320/fff/000',
    choice4: 'http://placehold.it/320x320/fff/000',
    answer: ['images/solange.jpg', 'A Seat at the Table', 'Solange']
  }
];


function playClickHandler() {
  audio.play();
  button.style.display = 'none';
  counter += 1;
}

function imagesClickHandler(event) {
  //put picture changing function here...
  //place chart thing here ...
  var clicked = event.target;

  console.log('check to see if answer is right: ', clicked.alt === media[0].answer[0], clicked);

  if (clicked.alt === media[0].answer[0]) {
    //if user chooses right answer
    if (clicked.getAttribute('src')) {
      clicked.style.outline = '2px solid green';
      userScore++;
      audio.pause();
      button.style.display = '';
      button.addEventListener('click', nextClickHandler);
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

  //WRITE CHECK TO SEE IF USERSCORE IS BIGGER THAN LENGTH OF MEDIA OBJECTS. IF SO, LINK TO THE RESULTS PAGE

  for (var i = 0; i < images.length; i++) {
    images[i].style.outline = 'none';
  }

  displayQuiz();
  audio.play();
}

function generateRandomNumber(min, max){


  //return Math.floor(Math.random() * max);
}

function displayQuiz() {
  audio.src = media[userScore].song;
  album1.src = media[userScore].choice1;
  album1.setAttribute('alt', media[0].answer[0]);
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
// nextButton.style.display = 'none';
// nextButton.addEventListener('click', nextClickHandler);
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








