const getQuote = () => {
    return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
            
}


const awsemQuoteDiv = (quote) => {    
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const h2 = document.createElement("h2")
    console.log(quote);
    h3.innerText = quote[0].author
    p.innerText = quote[0].quote
    h2.innertext = quote[0].series
    
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(h2)
    
    return div
}

const appendQuote = (quoteDiv) => {
    const quoteContainer = document.getElementById('quote-box')
    quoteContainer.innerHTML = ""
    quoteContainer.appendChild(quoteDiv)
}


getQuote().then(quote => {
    const quoteDiv = awsemQuoteDiv(quote) 
    appendQuote(quoteDiv)
})

const button = document.getElementById('new-quote-btn')
button.addEventListener('click', () => {
    getQuote().then(quote => {
        const quoteDiv = awsemQuoteDiv(quote) 
        appendQuote(quoteDiv)
    })
})

let glyphStates = {
    "♡": "♥",
    "♥": "♡"
  };
  
  let colorStates = {
    "green" : "",
    "": "green"
  };
  let articleHearts = document.querySelectorAll(".like-quote");
  function likeCallback(e) {
    let heart = e.target;
    mimicServerCall()
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      }
     
  
  for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
  function mimicServerCall() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Pretend remote server notified of action!");
      }, 300);
    });
  }