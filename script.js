//listed below are variable declarations for the button to work - hopefully.

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });


/*
//Function to enable chosen sign to be saved into a variable...
function setSign () {
  var chosenSign = document.getElementById("myDropdown").value;
  }
 */ 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


/*Arrays for the different star signs so that I can then call them depending on which 
astrological element they belong to */


const starSign = ["Aries", "Leo", "Sagittarius", "Taurus", "Virgo", "Capricorn", "Gemini", "Libra", "Aquarius", "Cancer", "Scorpio", "Pisces"];


const fire = (starSign [0, 1, 2]);
//const fire = ["Aries", "Leo", "Sagittarius"];
const earth = (starSign [3, 4, 5]);
//const earth = ["Taurus", "Virgo", "Capricorn"];
const air = (starSign [6, 7, 8]);
//const air = ["Gemini", "Libra", "Aquarius"];
const water = (starSign [9, 10, 11]);
//const water = ["Cancer", "Scorpio", "Pisces"]; 


var quotes = [
    "You cannot just sit there and wait for people to give you that golden dream. You have to go out there and make it happen. - Diana Ross", 
    "Embrace your inner lion, for a Leo's roar has the power to inspire, uplift and ignite the fire within others. - Graciousquotes.com", 
    "Embrace what makes you unique, even if it makes others uncomfortable. - Janelle Monae", 
    "Sometimes the smallest step in the right direction ends up being the biggest step of your life! - Naeem Callaway",
    "Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn",
    "The bad news is time flies. The good news is you're the pilot. - Michael Altshuler",
    "Spread love everywhere you go. - Mother Teresa",
    "Nobody can make you feel inferior wihtout your consent. - Eleanor Roosevelt",
    "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. - Alexander Graham Bell",
    "The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. - Helen Keller",
    "Just one small positive thought in the morning can change your whole day. - Dalai Lama" 
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


//TO DO___ Function to allow an alert box to pop up and bring items into statement
/*function sendQuote() {
  alert ('Hello ${name}, you have chosen ${starSign}, which is an ${element}. Here is your quote to guide you for today... ${newQuote}');
}*/

/* Now I need to create an if/else so that when the options are 
made I can then push them into their catagories.
After which I need to create another section 
with a function that calls random quotes and which
fires out a string of text, and the random quote! */

function sendMessage () {
  if (starSign === "fire") {
    console.log ("Your Starsign is a fire element, so we have selected the following quote for you today... " + "${newQuote}");
  } else if {
    (starSign === "earth") {
      console.log ("Your Starsign is an earth element, so we have selected the following quote for you today... " + "${newQuote}");
    } else if {
      (starSign === "air")  {
        console.log("Your Starsign is an air element, so we have selected the following quote for you today... " + "${newQuote}");
      } else {
        console.log("Your Starsign is a water element, so we have selected the following quote for you today... " + "${newQuote}");
      }
    }
  }
}


  //STUCK HERE- Trying to add event listener to onclick into a variable
  document.documentElemenById("myDropdown").onchange = function () {
    alert(this.value);
  }

  //sendMessage.target.addEventListener("newQuote", sendMessage);