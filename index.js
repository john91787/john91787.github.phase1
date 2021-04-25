const getQuote = () => {
    return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
}

getQuote().then(console.log)
