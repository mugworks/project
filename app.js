'use strict';
var button = document.getElementById('start-game');
var audio = document.querySelector('audio');
var section = document.querySelector('section');
var images = document.querySelectorAll('section figure img');
var figCaptions = document.querySelectorAll('section figcaption');
var counter = 0;
var userScore = 0;
//array of quiz questions
var media = [
  {             //song src
    song: 'songs/Cranes in the Sky.mp3',
                //image                  album            artist
    choice1: ['images/solange.jpg', 'A Seat at the Table', 'Solange'],
    choice2: ['images/lemonade.jpg', 'Lemonade', 'Beyonce'],
    choice3: ['images/rihanna.jpg', 'Unapologetic', 'Rihanna'],
    choice4: ['images/laurynhill.jpg', 'The Miseducation of Lauren Hill', 'Lauryn Hill'],
                //answer
    answer: 'images/solange.jpg'
  },
  {
    song: 'songs/01 Icky Thump (mp3cut.net).mp3',
    choice1: ['images/ickythump.jpeg', 'Icky Thump', 'The White Stripes'],
    choice2: ['images/deathfromabove.jpg', 'You\'re a Woman, I\'m a Machine', 'Death From Above 1979'],
    choice3: ['images/blackkeysmagicpotion.jpg', 'Magic Potion', 'The White Stripes'],
    choice4: ['images/apologiestothequeenmary.jpg', 'Apologies To The Queen Mary', 'Wolf Parade'],
    answer: 'images/ickythump.jpeg'
  },
  {
    song: 'songs/allmanbrothers.mp3',
    choice1: ['images/rockofages.jpg', 'Rock of Ages', 'The Band'],
    choice2: ['images/brothersandsisters.jpg', 'Brothers and Sisters', 'The Allman Brothers Band'],
    choice3: ['images/creedence.jpg', 'Willy and the Poor Boys', 'Creedence Clearwater Revival'],
    choice4: ['images/iloveyouhoneybear.jpg', 'I Love You Honeybear', 'Father John Misty'],
    answer: 'images/rockofages.jpg'
  },
  {
    song: 'songs/kurtvile.mp3',
    choice1: ['images/believeimgoingdown.jpg', 'B\'lieve I\'m Goin Down...', 'Kurt Vile'],
    choice2: ['images/mangylove.jpg', 'Mangy Love', 'Cass McCombs'],
    choice3: ['images/singingsaw.jpg', 'Singing Saw', 'Kevin Morby'],
    choice4: ['images/iloveyouhoneybear.jpg', 'I Love You Honeybear', 'Father John Misty'],
    answer: 'images/believeimgoingdown.jpg'
  },
  {
    song: 'songs/jackWhite.mp3',
    choice1: ['images/lemonade.jpg', 'Lemonade', 'Beyonce'],
    choice2: ['images/rihanna.jpg', 'Unapologetic', 'Rihanna'],
    choice3: ['images/laurynhill.jpg', 'The Miseducation of Lauren Hill', 'Lauryn Hill'],
    choice4: ['images/solange.jpg', 'A Seat at the Table', 'Solange'],
    answer: 'images/lemonade.jpg'
  }
];


function playClickHandler() {
  audio.play();
  button.style.display = 'none';
  counter += 1;
}

function imagesClickHandler(event) {
  var clicked = event.target;

  if (clicked.alt === media[userScore].answer) {
    //if user chooses right answer
    clicked.style.outline = '5px solid #0f0';
    audio.pause();
    userScore++;
    storeScore();
    button.style.display = '';
    if (userScore === media.length) {
      button.innerHTML = 'RESULTS!';
      button.href = 'results.html';
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

  for (var i = 0; i < images.length; i++) {
    images[i].style.outline = 'none';
    images[i].removeAttribute('alt');
  }

  displayQuiz();
  audio.play();
}

function generateRandomNumber(max){
  return Math.floor(Math.random() * max);
}

function displayQuiz() {
  audio.src = media[userScore].song;

  var rand1 = generateRandomNumber(images.length);
  var rand2 = generateRandomNumber(images.length);
  while(rand2 === rand1) {
    rand2 = generateRandomNumber(images.length);
  }
  var rand3 = generateRandomNumber(images.length);
  while(rand3 === rand2 || rand3 === rand1) {
    rand3 = generateRandomNumber(images.length);
  }
  var rand4 = generateRandomNumber(images.length);
  while(rand4 === rand3 || rand4 === rand2 || rand4 === rand1) {
    rand4 = generateRandomNumber(images.length);
  }

  //set image and hook for correct answer, along with album/artist info
  images[rand1].src = media[userScore].choice1[0];
  images[rand1].setAttribute('alt', media[userScore].answer);
  figCaptions[rand1].innerHTML = '<i>' + media[userScore].choice1[1] + '</i>' + '<br>' + media[userScore].choice1[2];
  //set image and album artist info for incorrect answers
  images[rand2].src = media[userScore].choice2[0];
  figCaptions[rand2].innerHTML = '<i>' + media[userScore].choice2[1] + '</i>' + '<br>' + media[userScore].choice2[2];
  images[rand3].src = media[userScore].choice3[0];
  figCaptions[rand3].innerHTML = '<i>' + media[userScore].choice3[1] + '</i>' + '<br>' + media[userScore].choice3[2];
  images[rand4].src = media[userScore].choice4[0];
  figCaptions[rand4].innerHTML = '<i>' + media[userScore].choice4[1] + '</i>' + '<br>' + media[userScore].choice4[2];
}

function storeScore(){
  JSON.stringify(userScore);
  localStorage.setItem('score', userScore);
}

button.addEventListener('click', playClickHandler);
section.addEventListener('click', imagesClickHandler);
displayQuiz();