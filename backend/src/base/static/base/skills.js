console.log("skills.js loaded in index.html extending base.html");
/**
 * This js file controls the interactivity with the 'skills' menu
 */
var messages = {
    /*-------start: _programming */
    'Javascript' : "Javascript ist mehr als nur eine Client-Side Scripting Sprache (Node.js als Serverside JavaScript). Es kommt mit vielen Libraries (Tweenmax, Scrollmagic).",
    'Java' : "Java wird seit 1996 eigesetzt. Es ist eine Objekt orientierte Sprache und ein allrounder. Mit dem Motto 'write once, run everywhere' ist es eine der flexibelsten Programmiersprachen. Egal ob Web, Desktop oder Mobile. ",
    'Python' : "Python ist eine 'high-level general-purpose' Sprache. Das Backend dieser Webseite besteht aus Python(Django).",
    'Html' : "Html ist eine 'markup' Sprache, die das basis Layout von fast jeder Webseite bestimmt.",
    'Css' : "Css - 'cascading style sheet' definiert das Aussehen einer Webseite.",
    'Php' : "Php ist eine scripting Sprache die auf der Server Seite läuft. Ich benutze sie vorallem für Drupal8 Projekte, um Module zu erstellen.",
    'C Sharp' : "1999 wurde C Sharp (C# oder .cs) von einem Niederländischen Software Engineer Team, geführt von Anders Hejlsberg entwickelt, um Microsofts .Net Framework zu erweitern. Es ist außerdem die Haupt Script Sprache von Unity 3D",
    'Processing' : "Processing ist eine Open Source Sprache und integrierte Entwickler Umgebung. Sie baut auf Java auf und wurde vor allem für Visuelles Design und elektronische Künste entworfen",
    'Matlab' : "Matlab ist eine Script Sprache die vorallem für Wissenschafler entworfen wurde um Daten zu analisieren, Algorithmen zu entwerfen und Modelle und Visualisierungen zu erstellen. Außerdem erlaubt Matlab die integrierung von Code aus anderen Sprachen. Zum Beispiel C,C#, Java, Fortran und Python. Matlab wird vorallem in Deep- und Machine Learning, Signal Verarbeitung, Bild- und Videoverarbeitung, Kontroll Systemen, Test und Messungen verwendet.",
    'Django' : "Django ist ein open source high-level Python Web Framework. Es besitzt seine eigene Templating Sprache (Dtl), eine klassenbasierte Datenbank, Routing, Apps und REST Api",
    'MySQL' : "MySQL ist eine Client-Server relationale Datenbank. Sie wird also als 'Server' installiert und in einer App verbinde ich mich als 'Client' mit der Datenbank. MySQl benutzt für das durchsuchen der Datenbank SQL - structured query language. MySQL häufig benutzt um Daten zu speichern, die von mehreren Usern und Apps benutzt werden. Zum Beispiel von Facebook, Twitter oder Youtube's Web Applikationen. ",
    'Drupal8' : "Drupal8 ist ein Content Management System (CMS) geschrieben in Php. Es stellt ein Backend Framework zur verfügung. Drupal8 beeinhaltet - Inhaltstypen, Taxonomie Begriffe, Benutzer Registration und Instandhaltung, RSS feeds, Seiten Layout und System administration. Mittels Modulen (Php) lassen sich Drupal8's Funktionen leicht erweitern.",
    'SQlite' : "SQlite ist eine open source relationale Datenbank. Dabei ist SQlite keine Client-Server Datenbank, sondern wird in das Programm eingebettet. SQlite läuft also als Teil einer App. SQlite wird oft von einer App verwendet um die eigenen Daten lokal zu managen. Ein Webbrowser könnte Beispielsweise Bookmarks mittels SQlite speichern. ",
    'Node.js' : "Node ist ein JavaScript runtime environment, das es ermöglicht JavaScript Code auf Server Seite laufen zu lassen. Historisch wurde JavaScript vorallem auf der Client Seite, eingebettet im HTML einer Webseite benutzt und dort im Webbrowser ausgeführt.",
      /*-------start: _tools */
    'Git' : "Git ist ein Versionen Kontroll System zum verfolgen von Änderungen and Dateien und zum Koordinieren der Arbeit an diesen Datein von mehreren Personen. Dabei werden Dateien auf ein Repository 'gepushed'.",
    'Express' : "Express ist ein Node.js Server Framework für Web Applikationen und API's.",
    'Twig' : "Twig ist eine Templating Engine die es ermöglicht Variablen aus PHP oder JavaScript an das Twig-Template weiter zu geben. Im Twig template schreibt man dann normales HTML, kann aber auf die weitergereichten Variablen zugreifen, oder weitere Twig Funktionen nutzen (if-else, escaping). Das Twig-runtime-environment auf dem Server rendert das Template danach zu einer Html Datei und sendet diese an die jeweile 'request'.",
    'GoogleARCore' : "ARCore ist eine Library von Google, die es ermöglicht mittels verschiedener API's Augmented Reality Applikationen zu entwickeln. Grundsätzlich macht ARCore zwei Dinge: Die Position des Mobilgeräts während seiner Bewegung verfolgen und ein eigenes Verständnis der realen Welt aufbauen. Die Bewegungsverfolgungstechnologie von ARCore verwendet die Kamera des Telefons, um interessante Punkte, sogenannte Features, zu identifizieren und zu verfolgen, wie sich diese Punkte im Laufe der Zeit bewegen. Mit einer Kombination aus der Bewegung dieser Punkte und den Messwerten der Trägheitssensoren des Telefons bestimmt ARCore sowohl die Position als auch die Ausrichtung des Telefons, wenn es sich durch den Raum bewegt. Es versucht außerdem die Lichtverhältnisse zu schätzen. Mit diesen Informationen kann man Objekte, Anmerkungen oder andere Informationen so platzieren, dass sie sich nahtlos in die (Kamera)Welt einfügen.",
    'GSAP' : "GSAP ist eine Reihe kleiner Javascript Libraries die Webanimationen vereinfachen. Durch Tweenmax lassen sich Css properties animieren, Mittels TimelineMax lässt sich einfach die Tween Reihenfolge und Timing bestimmen. Scrollmagic ist eine Library die es einfacht macht auf die Scroll Position zu reagieren. Entweder um eine Funktion aufzurufen, eine Animation auszulösen oder ein Element mit der Scroll- Position zu synchronisieren. Die Animationen dieser Webseite werden mittels Scrollmagic aktiviert / kontrolliert.",
    'Bootstrap':"Bootstrap ist ein FrontEnd Javascript Framework, das Html und Css templates für typography, forms, buttons, navigation und anderen interface elementen zur verfügung stellt.",
    'Photoshop':"Der Industrie Standart Raster Grafik Editor. ",
    'InDesign':"Eine Publishing-App mit der Dokumente in einer Vielzahl von Digital- und Printmedien entworfen und veröffentlicht werden kann.",
    'Illustrator':"Adobe Illustrator ist ein Vector Grafik Editor",
    'Premiere':"Adobe Premiere Pro ist eine Timeline-basierene Video editier app",
    'Aftereffects':" Aftereffects wird für ideo compositing, motion graphics design, und Animation genutzt.",
    'Unity':"Unity ist eine multi- Plattform GameEngine, die es ermöglicht 3D und 2D Spiele oder Simulationen zu erstellen. Unity's Skriptssprache ist C#",
    'Blender':"Blender ist eine 3D creation suite. In Blender umfässt Modellierung, Riggen, Animation, Simulation, Rendering, Compositing und motion tracking, sowie Video Editierung and Spiele entwicklung. Blenders Skript Sprache ist Python",
    'Logic':"Ein Musik/Sound Editierungs Software, die viele standartisierte Industrie Plugins bereitstellt (EQ, Reverb, Alchemy, Arpeggiator, MIDI, Sampler und mehr).",
    /*-------start: _skills */
    'Freundlich':"skills.js --> change!",
    'Teamworker':"skills.js --> change!",
     /*-------start: _language */
     'Deutsch':"Muttersprache",
     'Englisch':"Fließend",
     'Dänisch':"Grundkenntnisse",
    '':""
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

    //de highlight griditem:
    var current = document.getElementsByClassName("active-gridicon");
    current[0].className = current[0].className.replace(" active-gridicon", "");
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
