console.log("skills.js loaded in index.html extending base.html");
/**
 * This js file controls the interactivity with the 'skills' menu
 */
var messages = {
    'Javascript' : "this is the javascript massage",
    'Java' : "this is the java messagethis is the java messagethis is the java messagethis is the java messagethis is the java messagethis is the java messagethis is the java messagethis is the java messagethis is the java messagethis is the java message",
    'C#' : "C sharp is cool"
}

var message_panel = document.querySelector(".message-panel");
var msg_container = document.querySelector(".msg-container");
var msg_btn = document.querySelector(".msg-btn");
// Get the container element
// Get all buttons with class="btn" inside the container
// Loop through the buttons and add the active class to the current/clicked button
var btnContainer = document.querySelector(".tools-nav");
var btns = btnContainer.getElementsByClassName("btn");
var _programming = document.querySelectorAll("._programming");
var _tools = document.querySelectorAll("._tools");
var _skills = document.querySelectorAll("._skills");
var _language = document.querySelectorAll("._language");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    
      //->btn 01
      if(current[0].classList.contains("_1")) 
      {
        console.log("blicker _1");
        _programming.forEach(element => {
            if(!element.classList.contains("_show"))
            {
                element.classList = element.classList + " _show";
            }
        });

        _tools.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _skills.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _language.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });
      }else if(current[0].classList.contains("_2")) //btn_2-------------------------
      {
        console.log("blicker _2");
        _tools.forEach(element => {
            if(!element.classList.contains("_show"))
            {
                element.classList = element.classList + " _show";
            }
        });

        _programming.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _skills.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _language.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });
      }else if(current[0].classList.contains("_3")) //btn 3--------------------
      {
        console.log("blicker _3");
        _skills.forEach(element => {
            if(!element.classList.contains("_show"))
            {
                element.classList = element.classList + " _show";
            }
        });

        _tools.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _programming.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _language.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });
      }else if(current[0].classList.contains("_4")) //<-----------btn 4
      {
        console.log("blicker _4");
        _language.forEach(element => {
            if(!element.classList.contains("_show"))
            {
                element.classList = element.classList + " _show";
            }
        });

        _tools.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _skills.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });

        _programming.forEach(element =>{
            element.className = element.className.replace(" _show", "");
        });
      } 

      

    });//end eventlistener
  }

//<---------------------------------------------------------------------------------
/**
 * active switcher for each gridicon:
 * when the listener for each gridicon fires, check if there is alread a active-gridicon class?
 * if yes -> replace the old one, add the class to the clicked item, update msgs panel with object
 * if no -> check if clicked on img 
 *      if yes -> go to parent node, add active class, go to parentparent node - query for gridkey - update msg panel with obj
 *      if no -> add active class, go to parent node, query for gridkey - update panel with gridkey obj
 * 
 * add activemsg class to message-panel class when clicked- to display message panel 
 *  */
const gridicon = document.querySelectorAll(".gridicon");
gridicon.forEach(element => {
    element.addEventListener("click", function(event){
        var current = document.getElementsByClassName("active-gridicon");

        if(current[0])//is there already a class active?
        {
            current[0].className = current[0].className.replace(" active-gridicon", "");
            this.className += " active-gridicon";
            update_msgs(this.parentNode.querySelector(".gridkey"));

            //only update the classlinst of the msg_container to show it, if the class isnt alreay there:
            if(!msg_container.classList.contains("activemsg"))
            {
                msg_container.className += " activemsg";
            }
        }else{
            if(event.target.className == "gridicon-img") //clicked on the image -> go to parent.parent node
            {
                event.target.parentNode.className += " active-gridicon"
                msg_container.className += " activemsg";
                update_msgs(event.target.parentNode.parentNode.querySelector(".gridkey"));
            }
            else{ //clicked on circle go to parent node
                event.target.className += " active-gridicon"; 
                msg_container.className += " activemsg";
                update_msgs(event.target.parentNode.querySelector(".gridkey"));
            }
        }
    });
});

///msg_btn deactivates the msg-container on click
msg_btn.addEventListener("click", function(){
    console.log("click close!"+msg_container.className);
    msg_container.className = msg_container.className.replace(" activemsg", "");
})

function update_msgs(object){
    //check if the given object contains a key of messages, 
    // ->if yes, set the messages-panel html
    //to keyvalue pair of messages
    console.log("in getmsg"+object.innerHTML);
    if(object.innerHTML in messages)
    {
        message_panel.innerHTML = messages[object.innerHTML];
    }
    else{
        console.log("ERROR: key not found for "+object.innerHTML +" in 'getfromMessages(object) - skills.js'");
        message_panel.innerHTML = "ERROR: key not found for :" +object.innerHTML + " ->in 'getfromMessages("+object.innerHTML+") - skills.js";
    }
}
//<---------------------------------------------------------------------------------
