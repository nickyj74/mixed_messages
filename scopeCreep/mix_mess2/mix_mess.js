function generateNumber(num) {
    returnMath.floor(Math.random() * num)
}

// Storing my variables to pull from later
const quoteOfTheDay = {
    starSign: ["Aries", "Leo", "Sagittarius", "Taurus", "Virgo", "Capricorn", "Gemini", "Libra", "Aquarius", "Cancer", "Scorpio", "Pisces"],
    signElement: ["Fire", "Earth", "Air", "Water"],
    randomQuote: ["You cannot just sit there and wait for people to give you that golden dream. You have to go out there and make it happen. - Diana Ross", 
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
    "Just one small positive thought in the morning can change your whole day. - Dalai Lama" ]
}

//Empty array to draw the relevant quote into
let randomQuote = [];

//Iterate over the array object
for(let prop in quoteOfTheDay) {
    let chosenOption = generateRandomNumber(quoteOfTheDay[prop].length)

    //Quote customisation based on options
    switch(prop) {
        case 'starSign':
            randomQuote.push(`Your star sign is "${quoteOfTheDay[starSign][chosenOption]}".`)
            break
        case 'signElement':
            randomQuote.push(`Your sign has the element of "${quoteOfTheDay[signElement][chosenOption]}".`)
            break
        case 'randomQuote':
            randomQuote.push(`Our oracle has determined your quote of the day to be "${quoteOfTheDay[randomQuote][chosenOption]}`)
            break
        default:
            randomQuote.push("Please complete the options.")
    }
}

function formatQuote(quote) {
    const formatted = randomQuote.join('\n')
    console.log(formatted)
}

formatQuote(randomQuote);
