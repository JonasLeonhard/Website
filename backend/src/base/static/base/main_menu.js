console.log("main.js loaded in base/base.html extends #<$ ");

has_subnav = document.querySelectorAll(".has_subnav");
user_tool_profileimg = document.querySelector(".user_tool_profileimg");

/*
add listener to profile img in user_tool -> toggles usermenu 
*/
user_tool_profileimg.addEventListener("click", toggleUserMenu);

/*
get each subnav and add a listener to toggle display
*/
has_subnav.forEach(element => {
  element.addEventListener("click", function(){
    toggleElement(element);
  });
});

function toggleElement(element) {  
  /*get has_subnav element list: ->.subnav */
  subnav = element.querySelectorAll(".subnav");
  subnav_icon = element.querySelectorAll(".subnav_icon");

  /*iterate each .subnav item and remove/add class .hidden/visible */
  subnav.forEach(element => {
    console.log("name: "+element.className);
    if(element.className.includes("hidden")){
      element.classList.remove("hidden");
      element.classList.add("visible");
    }else{
      element.classList.remove("visible");
      element.classList.add("hidden");
    }
  });

  /* iterate each .subnav_icon and add .hidden/visibe */
  plus_icon = element.querySelector(".plus_icon");
  minus_icon = element.querySelector(".minus_icon");
  //+
  if(plus_icon.className.includes("icon_hidden")){
    plus_icon.classList.remove("icon_hidden");
    plus_icon.classList.add("icon_visible");
  }else{
    plus_icon.classList.remove("icon_visible");
    plus_icon.classList.add("icon_hidden");
  }
  ///-
  if(minus_icon.className.includes("icon_hidden")){
    minus_icon.classList.remove("icon_hidden");
    minus_icon.classList.add("icon_visible");
  }else{
    minus_icon.classList.remove("icon_visible");
    minus_icon.classList.add("icon_hidden");
  }
}

function toggleUserMenu(){
  //get the user_menu:
  usermenu = document.querySelector(".user_tool_usermenu");
  console.log("show usermenu "+usermenu);

  if(usermenu.className.includes("usermenu_hidden")){
    usermenu.classList.remove("usermenu_hidden");
    usermenu.classList.add("usermenu_visible");
  }else{
    usermenu.classList.remove("usermenu_visible");
    usermenu.classList.add("usermenu_hidden");
  }
}