// List of Star Signs:
const starSign = ["Aries", "Leo", "Sagittarius", "Taurus", "Virgo", "Capricorn", "Gemini", "Libra", "Aquarius", "Cancer", "Scorpio", "Pisces"];

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  };

//When the user selects a starsign the chosen option stays visible
let selection = document.querySelector('select');
let result = document.querySelector('h2');
  
selection.addEventListener('change', () => {
    result.innerHTML = selection.options[selection.selectedIndex].text;
});

//!! STUCK HERE!! - Trying to generate a quote with the selected option in the dropbtn...
let enterBtn = document.getElementById('enterBtn');
let quoteOfTheDay = document.getElementById('quoteOfTheDay');

// Array of quotes to be randomised:
let quotes = 
  [
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
    "Just one small positive thought in the morning can change your whole day. - Dalai Lama",
  ];

enterBtn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  quoteOfTheDay.innerHTML = randomQuote;
});