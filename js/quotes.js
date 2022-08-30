$(document).ready( function () {
    randomQuote();
});

const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name");

//random query function
function randomQuote(){
    // fetching random quotes from the API and parsing it into Javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    });
}
