

const getQuote = () => {
    return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
        
        
}


const makeQuoteDiv = (quote) => {    
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    console.log(quote);
    h3.innerText = quote[0].author
    p.innerText = quote[0].quote
    
    div.appendChild(h3)
    div.appendChild(p)
    
    return div
}

const appendQuote = (quoteDiv) => {
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.innerHTML = ""
    quoteContainer.appendChild(quoteDiv)
}


getQuote().then(quote => {
    const quoteDiv = makeQuoteDiv(quote) 
    appendQuote(quoteDiv)
})

const button = document.getElementById('new-quote-btn')
button.addEventListener('click', () => {
    getQuote().then(quote => {
        const quoteDiv = makeQuoteDiv(quote) 
        appendQuote(quoteDiv)
    })
})
