const getQuote = () => {
    return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
        .catch(err => console.log(err))
}


const QuoteDiv = (randomquote) => {
    const div = documnet.createElement('div')
    const p = document.createElement('p')
    const h3 = document.createElement('h3')

    h3.innerText = randomquote.author
    p.innerText = randomquote.content

    div.appendChild(h3)
    div.appendChild(p)

    return div
}

const appendQuote = (quote)=>{
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.innerHTML = ""
    quoteContainer.appendChild(quote)
}