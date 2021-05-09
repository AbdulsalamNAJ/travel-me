/*var y = prompt('Your new journey in which continent you prefer to be?   *just enter the number*   1.Europe   2.Asia   3.Africa   4.All of these')

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

*/

var promo;

while (promo !== "sum2021") {
    promo = prompt("You MUST enter a promo code to see our latest offers.   * If you don't have one use:   SUM2021  ");
    if (promo == null){
        promo = "";
    }
    promo = promo.toLowerCase();
}

promoCode()

var con = confirm("We would like to ask you some questions to find out your preferences, click  [ OK ]  button if you don't mind.");

if (con == true) {
    var x = prompt('Which of these colors do you prefer?   *just enter the number*   1.Black   2.Orange   3.Blue   4.Green')

    if (x == 1) {
        var color1 = "#000000";
        var color2 = "#535353";
        changeColor(color1, color2);
    } else if (x  == 2) {
        var color1 = "#e1701a";
        var color2 = "#f7a440";
        changeColor(color1, color2);
    } else if (x == 4) {
        var color1 = "#4aa96c";
        var color2 = "#6fc170";
        changeColor(color1, color2);
    }
    
    var rate = prompt('From what you know about us give us a rate :  from  1  to  5'); 
    
    var star1 = '<img class="stars" src="./img/star1.svg" alt="">';
    var star2 = '<img class="stars" src="./img/star2.svg" alt="">';
    var happy = '<img class="face" src="./img/happy.svg" alt="">';
    var sad = '<img class="face" src="./img/sad.svg" alt="">';
    
    var starDiv = document.getElementById('rating');
    var starCount = '';
    var badRate = 5 - rate;
    
    starsRate();
    
    var fishType = prompt('Imagin this background is a real SEA what would you like to see in it?    * Just enter a number:    1.turtles    2.fishes     3.crabs ');
    
    var backGround = document.getElementById('background');
    
    backFish()
}

// FUNCTIONS WE ARE USING IN OUR PAGE

function promoCode () {
    var promoCode = document.getElementById("promoCode");
promoCode.textContent = promo.toUpperCase();

var offers = document.getElementById('offers');

offers.innerHTML = '<div class="items beirut"><h3>Special offer<br>Up to 35%</h3><img src="./img/beirut.jpg" alt=""><h2 class="items-h2">Beriut</h2></div><div class="items doha"><h3>Special offer<br>Up to 35%</h3><img src="./img/doha.jpg" alt=""><h2 class="items-h2">Doha</h2></div><div class="items dubai"><h3>Special offer<br>Up to 35%</h3><img src="./img/dubai.jpg" alt=""><h2 class="items-h2">Dubai</h2></div><div class="items istanbul"><h3>Special offer<br>Up to 35%</h3><img src="./img/istanbul.jpg" alt=""><h2 class="items-h2">Istanbul</h2></div><div class="items paphos"><h3>Special offer<br>Up to 35%</h3><img src="./img/paphos.jpg" alt=""><h2 class="items-h2">Paphos</h2></div><div class="items sharm-el-sheikh"><h3>Special offer<br>Up to 35%</h3><img src="./img/sharm-el-sheikh.jpg" alt=""><h2 class="items-h2">Sharm El Sheikh</h2></div>';
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

var itemsH2 = document.getElementsByClassName('items-h2');
for (i=0; i<itemsH2.length; i++) {
itemsH2[i].style.backgroundColor = color1+"d1";
}

var footerBar = document.getElementsByTagName('footer');
footerBar[0].style.backgroundColor = color1;
}

function starsRate () {

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
}

function backFish () {

    if (fishType == 1) {
        fishImage = '<img class="background-img" src="./img/turtle.svg" alt="">'
    }
    else if (fishType == 2) {
        fishImage = '<img class="background-img" src="./img/fish.svg" alt="">'
    }
    else if (fishType == 3) {
        fishImage = '<img class="background-img" src="./img/crab.svg" alt="">'
    }
    
    if (fishType !== null) {
        if (3 >= fishType > 0) {
        var seaBackground = document.body.style.backgroundImage = "url(./img/background.svg)";
        var fishMax = prompt('How many of these you would like to see?   * MAX is  [  12  ]');
    }
    }
    
    var fishCount = "";
    
    if (fishMax <= 12) {
        for (i=0; i<fishMax; i++) {
        fishCount += fishImage;
    }
    
    }
    
    backGround.innerHTML = fishCount;
    }