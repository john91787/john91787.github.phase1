const getQuote = () => {
    return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
}

getQuote().then(console.log)

const QuoteDiv = (randomquote) => {
    const div = documnet.createElement('div')
    const p = document.createElement('p')
    const h3 = document.createElement('h3')
}