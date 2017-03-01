'use strict';
var button = document.querySelector('button');
var audio = document.querySelector('audio');
var section = document.querySelector('section');
var images = document.querySelectorAll('img');
var albums = [];
var counter = 0;
var userScore = 0;

var media = [
  {             //song src
    song: 'songs/Cranes in the Sky.mp3',
    choice1: 'images/solange.jpg',
    choice2: 'images/lemonade.jpg',
    choice3: 'images/rihanna.jpg',
    choice4: 'images/laurynhill.jpg',
                //answer                  album            artist
    answer: ['images/solange.jpg', 'A Seat at the Table', 'Solange']
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
  var clicked = event.target;

  if (clicked.alt === media[userScore].answer[0]) {
    //if user chooses right answer
    clicked.style.outline = '5px solid #0f0';
    userScore++;
    storeScore();
    audio.pause();
    button.style.display = '';
    if (userScore === media.length) {
      button.innerHTML = 'RESULTS!';
      //otherwise have button display next round message
    } else {
      button.innerHTML = 'Play round ' + (userScore + 1) + '!';
      button.addEventListener('click', nextClickHandler);
    }
  } else if (clicked.getAttribute('src')) {
    clicked.style.outline = '5px solid #f00';
  }
}

function nextClickHandler() {

  for (var i = 0; i < albums.length; i++) {
    albums[i].style.outline = 'none';
    albums[i].removeAttribute('alt');
  }

  displayQuiz();
  audio.play();
}

function generateRandomNumber(max){
  return Math.floor(Math.random() * max);
}

function displayQuiz() {
  audio.src = media[userScore].song;

  var rand1 = generateRandomNumber(albums.length);
  var rand2 = generateRandomNumber(albums.length);
  while(rand2 === rand1){
    rand2 = generateRandomNumber(albums.length);
  }
  var rand3 = generateRandomNumber(albums.length);
  while(rand3 === rand2 || rand3 === rand1){
    rand3 = generateRandomNumber(albums.length);
  }
  var rand4 = generateRandomNumber(albums.length);
  while(rand4 === rand3 || rand4 === rand2 || rand4 === rand1){
    rand4 = generateRandomNumber(albums.length);
  }

  albums[rand1].src = media[userScore].choice1;
  albums[rand1].setAttribute('alt', media[userScore].answer[0]);
  albums[rand2].src = media[userScore].choice2;
  albums[rand3].src = media[userScore].choice3;
  albums[rand4].src = media[userScore].choice4;
}

function grabQuizImages() {
  //Removes header image from array :D
  for (var i = 4; i < images.length; i++) {
    albums.push(images[i]);
  }
}

function storeScore(){
  JSON.stringify(userScore);
  localStorage.setItem('score', userScore);
}

button.addEventListener('click', playClickHandler);
section.addEventListener('click', imagesClickHandler);
grabQuizImages();
displayQuiz();