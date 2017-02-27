'use strict';
var button = document.querySelector('button');
var audio = document.querySelector('audio');
button.addEventListener('click', clickHandler);

function playlClickHandler() {
  audio.play();
  counter += 1;
}









var pathToAssets = ['blabla.jpg', 'example', 'blablabla.jpg', 
 'anotherexample.jpg']
var album1 = document.getElementById('Album1');
var album2 = document.getElementById('Album2');
var album3 = document.getElementById('Album3');
var album4 = document.getElementById('Album4');
var items = [];
var indexOne = 0;
var indexTwo = 1;
var indexThee = 2;
var indexFour = 3;

fucntion ImagesclickHandler(event) {
  //put picture changing function here...
  //place chart thing here ...
}

function generateRandomNumber(){
  return Math.floor(Math.random() * pathToAssets.length);
}

funtion displayChart() {
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




functon clikcHandler(){

var testSong = document.getElementById('button')
}
