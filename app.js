/* var con = confirm("We would like to ask you some questions to find out your preferences, click  [ OK ]  button if you don't mind.");

if (con == true) {
var x = prompt('Which of these colors do you prefer?   *just enter the number*   1.Black   2.Orange   3.Blue')

if (x == 1) {
    var color1 = "#000000";
    var color2 = "#535353";
    changeColor(color1, color2);
} else if (x  == 2) {
    var color1 = "#e1701a";
    var color2 = "#f7a440";
    changeColor(color1, color2);
}

var y = prompt('Your new journey in which continent you prefer to be?   *just enter the number*   1.Europe   2.Asia   3.Africa   4.All of these')

var istanbul = document.getElementsByClassName('istanbul');
var dubai = document.getElementsByClassName('dubai');
var doha = document.getElementsByClassName('doha');
var sharmEl = document.getElementsByClassName('sharm-el-sheikh');
var beirut = document.getElementsByClassName('beirut');
var paphos = document.getElementsByClassName('paphos');


if (y == 1) {
    istanbul[0].remove();
    dubai[0].remove();
    doha[0].remove();
    sharmEl[0].remove();
    beirut[0].remove();
} else if (y == 2) {
    sharmEl[0].remove();
    paphos[0].remove();
} else if (y == 3) {
    istanbul[0].remove();
    dubai[0].remove();
    doha[0].remove();
    paphos[0].remove();
    beirut[0].remove();
}

var z = prompt('Did you read about COVID-19 regulations recently?   *just enter the character*  ( y )  means yes and  ( n )  means not yet')

var covid19 = document.getElementsByClassName('covid-19');

if (z == "y") {
    covid19[0].remove();
}
}


function changeColor (color1, color2) {
    var logo = document.getElementsByClassName('logo');
    logo[0].style.backgroundColor = color1;

    var navBar = document.getElementsByClassName('nav-ul');
    navBar[0].style.backgroundColor = color1;

    var navBtn = document.getElementsByClassName('nav-btn');
    for (i=0 ; i< navBtn.length; i++) {
    navBtn[i].style.backgroundColor = color2;
    }

    var coreDiv = document.getElementsByClassName('core-div');
    coreDiv[0].style.backgroundColor = color2;

    var h2Offer = document.getElementsByClassName('offer');
    h2Offer[0].style.color = color1;

    var itemsH2 = document.getElementsByClassName('items-h2');
    for (i=0; i<itemsH2.length; i++) {
        itemsH2[i].style.backgroundColor = color1+"d1";
    }

    var footerBar = document.getElementsByTagName('footer');
    footerBar[0].style.backgroundColor = color1;
    }
*/

var promo;

while (promo !== "sum2021") {
    promo = prompt("What's you promo code?   * If you don't have one choose:   sum2021  ");
}

var promoCode = document.getElementById('promo');

promoCode.textContent = "SUM2021";

var rate = prompt('From what you know about us give us a rate :  from  1  to  5'); 

var star1 = '<img class="stars" src="./img/star1.svg" alt="">';
var star2 = '<img class="stars" src="./img/star2.svg" alt="">';
var happy = '<img class="face" src="./img/happy.svg" alt="">';
var sad = '<img class="face" src="./img/sad.svg" alt="">';

var starDiv = document.getElementById('rating');
var starCount = '';
var badRate = 5 - rate;

if (rate > 0 && rate <= 5) {

for (i=0; i<rate; i++) {
    starCount += star1;
}

for (i=0; i<badRate; i++) {
    starCount += star2;
}

if (badRate > rate ) {
    starCount += sad;
} else {
    starCount += happy;
}

starDiv.innerHTML = starCount;
}


var fishType = prompt('Imagin that this background is a real SEA what do you like to see in it?    * Just choose a number:    1.turtles    2.fishes     3.crabs ')

var backGround = document.getElementById('background');

if (fishType == 1) {
    fishImage = '<img class="background-img" src="./img/turtle.svg" alt="">'
}
else if (fishType == 2) {
    fishImage = '<img class="background-img" src="./img/fish.svg" alt="">'
}
else if (fishType == 3) {
    fishImage = '<img class="background-img" src="./img/crab.svg" alt="">'
}

var fishMax = prompt('How many of these you would like to see?   * MAX is  [  15  ]');

var fishCount = "";

for (i=0; i<fishMax; i++) {
    fishCount += fishImage;
}

backGround.innerHTML = fishCount;
console.log(fishCount);