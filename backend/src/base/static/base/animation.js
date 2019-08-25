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

var scene = new ScrollMagic.Scene({
    triggerElement : '.stecker',
    triggerHook : 0.4,
    duration : "40%" //<- duratio of stecker animation
})
.addIndicators()
//.setPin(".stecker") //keeps .stecker's position while scrolling
.setTween(scrollAnimation)
.addTo(controller);

scene.offset(-200);
