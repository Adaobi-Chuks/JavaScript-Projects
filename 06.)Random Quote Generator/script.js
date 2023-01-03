const quote = document.getElementById("quote");
const author = document.getElementById("author");
const whatsapp = document.getElementById("whatsapp");
const twitter = document.getElementById("twitter");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");

generate.addEventListener('click', () => {
  fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
        const quotes = data.quotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        const quoteText = randomQuote.quoteText;
        const quoteAuthor = randomQuote.quoteAuthor;
        quote.textContent = quoteText;
        author.textContent = `-By: ${quoteAuthor}`;
    });
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quote.textContent}\n${author.textContent}`);
    alert("copied")
});

twitter.addEventListener("click", () => {
    const url = `https://twitter.com/intent/tweet?url=${quote.textContent} \n${author.textContent}`
    window.open(url, "_blank");
})

whatsapp.addEventListener("click", () => {
    window.open(`whatsapp://send?text=${quote.textContent} \n${author.textContent}`);
})
