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
                //image                  album            artist
    choice1: ['images/solange.jpg', 'A Seat at the Table', 'Solange'],
    choice2: ['images/lemonade.jpg', 'Lemonade', 'Beyonce'],
    choice3: ['images/rihanna.jpg', 'Unapologetic', 'Rihanna'],
    choice4: ['images/laurynhill.jpg', 'The Miseducation of Lauren Hill', 'Lauryn Hill'],
                //answer
    answer: ['images/solange.jpg', 'A Seat at the Table', 'Solange']
  },
  {
    song: 'songs/01 Icky Thump (mp3cut.net).mp3',
    choice1: ['images/ickythump.jpeg', 'Icky Thump', 'The White Stripes'],
    choice2: ['images/deathfromabove.jpg', 'You\'re a Woman, I\'m a Machine', 'Death From Above 1979'],
    choice3: ['images/blackkeysmagicpotion.jpg', 'Magic Potion', 'The White Stripes'],
    choice4: ['images/apologiestothequeenmary.jpg', 'Apologies To The Queen Mary', 'Wolf Parade'],
    answer: ['images/ickythump.jpeg', 'Icky Thump', 'The White Stripes']
  },
  {
    song: 'songs/jackWhite.mp3',
    choice1: ['images/lemonade.jpg', 'Lemonade', 'Beyonce'],
    choice2: ['images/rihanna.jpg', 'Unapologetic', 'Rihanna'],
    choice3: ['images/laurynhill.jpg', 'The Miseducation of Lauren Hill', 'Lauryn Hill'],
    choice4: ['images/solange.jpg', 'A Seat at the Table', 'Solange'],
    answer: ['images/lemonade.jpg', 'Lemonade', 'Beyonce']
  },
  {
    song: 'songs/kurtvile.mp3',
    choice1: ['images/believeimgoingdown.jpg', 'B\'lieve I\'m Goin Down...', 'Kurt Vile'],
    choice2: ['images/mangylove.jpg', 'Mangy Love', 'Cass McCombs'],
    choice3: ['images/singingsaw.jpg', 'Singing Saw', 'Kevin Morby'],
    choice4: ['images/iloveyouhoneybear.jpg', 'I Love You Honeybear', 'Father John Misty'],
    answer: ['images/believeimgoingdown.jpg', 'B\'lieve I\'m Goin Down...', 'Kurt Vile']
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
  while(rand2 === rand1) {
    rand2 = generateRandomNumber(albums.length);
  }
  var rand3 = generateRandomNumber(albums.length);
  while(rand3 === rand2 || rand3 === rand1) {
    rand3 = generateRandomNumber(albums.length);
  }
  var rand4 = generateRandomNumber(albums.length);
  while(rand4 === rand3 || rand4 === rand2 || rand4 === rand1) {
    rand4 = generateRandomNumber(albums.length);
  }

  albums[rand1].src = media[userScore].choice1[0];
  albums[rand1].setAttribute('alt', media[userScore].answer[0]);
  albums[rand2].src = media[userScore].choice2[0];
  albums[rand3].src = media[userScore].choice3[0];
  albums[rand4].src = media[userScore].choice4[0];
}

function grabQuizImages() {
  //Removes header image from array :D
  for (var i = 4; i < images.length - 1; i++) {
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