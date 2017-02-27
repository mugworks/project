'use strict';
var button = document.querySelector('button');
var audio = document.querySelector('audio');
var section = document.querySelector('section');
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

var media = [
  {
    song: 'https://raw.githubusercontent.com/72rpm/project/master/songs/Cranes%20in%20the%20Sky.mp3',    //song src
    choice1: 'images/solange.jpg',//album art 
    choice2: 'images/lemonade.jpg',
    choice3: 'images/rihanna.jpg',
    choice4: 'images/laurynhill.jpg',
    answer: 'images/solange.jpg' //src of correct answer
  }//,
  // {
  //   song: ,    //song src
  //   choice1: , //album  art 
  //   choice2: ,
  //   choice3: ,
  //   choice4: ,
  //   answer:    //src of correct answer
  // },
  // {
  //   song: ,    //song src
  //   choice1: , //album  art 
  //   choice2: ,
  //   choice3: ,
  //   choice4: ,
  //   answer:    //src of correct answer
  // },
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
  console.log(clicked);

}

function generateRandomNumber(){
  //return Math.floor(Math.random() * pathToAssets.length);
}

function displayQuiz() {
  album1.src = media[0].choice1;
  album2.src = media[0].choice2;
  album3.src = media[0].choice3;
  album4.src = media[0].choice4;
}

button.addEventListener('click', playClickHandler);
audio.src = media[0].song;
section.addEventListener('click', imagesClickHandler);
displayQuiz();


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