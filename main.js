var $gameBoard = document.querySelector('#container');

var $red = document.querySelector('.red');
var $blue = document.querySelector('.blue');
var $yellow = document.querySelector('.yellow');
var $green = document.querySelector('.green');


var $startBtn = document.querySelector('#start');
var $quitBtn = document.querySelector('#quit');

// var colors2 = ['green', 'red', 'yellow', 'blue'];

var colors = [
  {
    $color: $red,
    color: 'red',
    flashClass: 'red-flash'
  },
  {
    $color: $blue,
    color: 'blue',
    flashClass: 'blue-flash'
  },
  {
    $color: $yellow,
    color: 'yellow',
    flashClass: 'yellow-flash'
  },
  {
    $color: $green,
    color: 'green',
    flashClass: 'green-flash'
  }
]



var userValues = [];
var colorSequence = [];

var sequenceLength = 1; //store sequence length in variable. increase by 1 for each level

//push user click to userValues array
var userInput = function(event) {
  if (event.target.className) { // prevents selecting space outside of color
    userValues.push(event.target.className);
    console.log(userValues);
  }
}

var flash = function($color, color){
  $color.classList.add(color.flashClass);
  if($color.classList.contains(color.flashClass)) {
    var intervalId2 = setTimeout(function flashOff() {
      $color.classList.remove(color.flashClass);
    }, 100);
  }
  // clearTimeout(intervalId2);
}

var i = 0;

var sequence = function() {
  flash(colors[i].$color, colors[i]);
  if (i < colors.length - 1) {
    i++;
  } else {
    clearTimeout(intervalId)
  }
}

var intervalId = null;

var startSequence = function() {
  intervalId = setInterval(sequence, 500);
}

$gameBoard.addEventListener('click', userInput);
$startBtn.addEventListener('click', startSequence)

// return random color value from colors array
var getRandomColor = function() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}


// var colors = ["red","yellow","blue", "green", "purple"]; //Sets Colors
// var target = document.getElementById("test"); //Target element
// var currentColor = 0;
// var time = 1500;//Time between color changes (in ms)
// setInterval(function(){
//     if( currentColor === colors.length) currentColor = 0;
//     target.style.color = colors[currentColor];
//     currentColor++;
// },time);







