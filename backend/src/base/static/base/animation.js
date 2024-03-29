console.log("animation.js loaded in base/base.html extends index.html");
//__________________________________________________________________________________________
/*
Load SVG objects for Animation of 'stecker' 
*/
const hand_left = document.getElementById("hand-l_1_");
const cable_left = document.getElementById("stecker_x5F_left_1_");
const hand_right = document.getElementById("hand_x5F_right_1_");
const cable_right = document.getElementById("stecker_x5F_right_2_");
const abdecker = document.getElementById("abdecker");
const dots = document.getElementById("dots");
const light1 = document.getElementById("lightning1");
const light2 = document.getElementById("lightning2");
const light3 = document.getElementById("lighning3");
const light4 = document.getElementById("lighning4");

//get number divs:
const number_wrapper = document.querySelector(".number-wrapper");
const number1 = document.querySelector(".nmbr1");
const number2 = document.querySelector(".nmbr2");
const number3 = document.querySelector(".nmbr3");
const n1p = document.querySelector(".nmbr1-p");
const n2p = document.querySelector(".nmbr2-p");
const n3p = document.querySelector(".nmbr3-p");
const nmbr3firma = document.querySelector(".nmbr3firma");

var hashit = false;

/*
Pre Position the Objects, hide abdecker..
*/
TweenMax.set(cable_left, {x:-400});
TweenMax.set(cable_right, {x:400});
TweenMax.set(abdecker, {opacity: 0, x:-400});
TweenMax.set(dots, {opacity: 0.2});
TweenMax.set(light1, {opacity: 0});
TweenMax.set(light2, {opacity: 0});
TweenMax.set(light3, {opacity: 0});
TweenMax.set(light4, {opacity: 0});

//NUMBER ANIMATION: set numbers to 0:
number1.innerHTML = 0;
number2.innerHTML = 0;
number3.innerHTML = 0;

//dont show numbers before scrolling in
TweenMax.set(number1, {opacity: 0});
TweenMax.set(number2, {opacity: 0});
TweenMax.set(number3, {opacity: 0});
TweenMax.set(n1p, {opacity: 0});
TweenMax.set(n2p, {opacity: 0});
TweenMax.set(n3p, {opacity: 0});
TweenMax.set(nmbr3firma, {opacity: 0});


/*scrollmagic / TimelineMax setup: */
const controller = new ScrollMagic.Controller();

/*Create a Scroll Animation that gets triggered when entering .stecker,
 */
//<- could add {onUpdate: update_scrollAnimation} to call a function on update,  
//onUpdate() -> .progress() for percentage
var scrollAnimation = new TimelineMax(); 
scrollAnimation.to(hand_left, 1, {x: 400})
.to(hand_right, 1, {x: -400}, '-=1')
.to(cable_left, 1, {x: 0}, '-=1')
.to(cable_right, 1, {x: 0}, '-=1')
.to(abdecker, 1, {x:0}, '-=1')
.to(abdecker, 0.2, {opacity:1, delay: 0.2}, '-=1')
.to(light1, 0.01, {opacity:1},'-=0.3')
.to(light2, 0.01, {opacity:1},'-=0.25')
.to(light3, 0.01, {opacity:1},'-=0.21')
.to(light4, 0.01, {opacity:1},'-=0.18');

//called when scrolling towards numbers, fades them in
var nropacity = new TimelineMax();
nropacity.to(n1p, 1, {opacity:1})
.to(n2p, 1, {opacity:1})
.to(n3p, 1, {opacity:1})
.to(nmbr3firma, 1, {opacity:1})
.to(number1, 1, {opacity:1})
.to(number2, 1, {opacity:1})
.to(number3, 1, {opacity:1})
;

//scene for stecker animation
var scene = new ScrollMagic.Scene({
    triggerElement : '.stecker',
    triggerHook : 0.4,
    duration : "40%" //<- duratio of stecker animation
})
.addIndicators()
//.setPin(".stecker") //keeps .stecker's position while scrolling
.setTween(scrollAnimation)
.addTo(controller);
scene.offset(-50);

//scene for numbers - triggers opacity
var opacitynrscrene = new ScrollMagic.Scene({
    triggerElement : '.number-wrapper',
    triggerHook : 0.5,
    duration : "30%"
})
.addIndicators()
.addTo(controller)
.setTween(nropacity);
opacitynrscrene.offset(-200);

//triggers number count animation
var numberscene = new ScrollMagic.Scene({
    triggerElement : '.number-wrapper',
    triggerHook : 0.5,
    duration : "40%"
})
.addIndicators()
.on('start', function () {
    if(!hashit)
    {
        count_up();
    }
    hashit = true;
})
.addTo(controller);

function count_up() { 
    //gets called when trigger element hits .numer-wrapper
    var Cont={val:0, val2:0, val3:10000} , NewVal = 1400,NewVal2 = 100, NewVal3 = 0; ;
    TweenMax.to(Cont,1,{val:NewVal,roundProps:"val",onUpdate:function(){
      number1.innerHTML=Cont.val;
    }})

    TweenMax.to(Cont,1,{val2:NewVal2,roundProps:"val2",onUpdate:function(){
        number2.innerHTML=Cont.val2;
    }});
    
    TweenMax.to(Cont,1,{val3:NewVal3,roundProps:"val3",onUpdate:function(){
        number3.innerHTML=Cont.val3;
    }});

}