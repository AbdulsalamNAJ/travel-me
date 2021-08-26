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

var promo;

while (promo !== "sum2021") {
    promo = prompt("You MUST enter a promo code to see our latest offers.   * If you don't have one use:   SUM2021  ");
    if (promo == null){
        promo = "";
    }
    promo = promo.toLowerCase();
}
promoCode()


//<img class="face" src="./img/happy.svg" alt="">
//<img class="face" src="./img/sad.svg" alt="">

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

var offers = document.getElementById('offers');

offers.innerHTML = '';
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
*/

let star1 = '<img class = "stars" src="./img/star1.svg" alt=""></img>';
let star2 = '<img class = "stars" src="./img/star2.svg" alt=""></img>';
let happy = '<img class = "stars" src="./img/happy.svg" alt=""></img>';
let sad = '<img class = "stars" src="./img/sad.svg" alt=""></img>'

document.getElementById("star1").addEventListener("click", function(){
    document.getElementById("rating").innerHTML = star1 + star2 + star2 + star2 + star2 + sad;
  }); 
  document.getElementById("star2").addEventListener("click", function(){
    document.getElementById("rating").innerHTML = star1 + star1 + star2 + star2 + star2 + sad;
  }); 
  document.getElementById("star3").addEventListener("click", function(){
    document.getElementById("rating").innerHTML = star1 + star1 + star1 + star2 + star2 + happy;
  }); 
  document.getElementById("star4").addEventListener("click", function(){
    document.getElementById("rating").innerHTML = star1 + star1 + star1 + star1 + star2 + happy;
  }); 
  document.getElementById("star5").addEventListener("click", function(){
    document.getElementById("rating").innerHTML = star1 + star1 + star1 + star1 + star1 + happy;
  }); 

  function changeColor(color1, color2) {
    let logo = document.getElementsByClassName('logo');
    logo[0].style.backgroundColor = color1;
    
    let navBar = document.getElementsByClassName('nav-ul');
    navBar[0].style.backgroundColor = color1;
    
    let navBtn = document.getElementsByClassName('nav-btn');
    for (i=0 ; i< navBtn.length; i++) {
    navBtn[i].style.backgroundColor = color2;
    }
    
    let coreDiv = document.getElementsByClassName('core-div');
    coreDiv[0].style.backgroundColor = color2;
    
    let itemsH2 = document.getElementsByClassName('items-h2');
    for (i=0; i<itemsH2.length; i++) {
    itemsH2[i].style.backgroundColor = color1 + "d1";
    }
    
    let footerBar = document.getElementsByTagName('footer');
    footerBar[0].style.backgroundColor = color1; 
  }

  document.getElementById("orange").addEventListener("click", function (){
    changeColor('#e1701a', '#f7a440')
  }); 

  document.getElementById("green").addEventListener("click", function (){
    changeColor('#4aa96c', '#6fc170')
  }); 

  document.getElementById("black").addEventListener("click", function (){
    changeColor('#000000', '#535353')
  }); 

  document.getElementById("blue").addEventListener("click", function (){
    changeColor('#344fa1', '#78b0d9')
  }); 
