//6.0 quote
const quotes = [
{
    quote:"Where there is a will there is a way"
    , author:"Angela Merkel" 
}
, {
    quote:"No pain, No gain"
    , author:"Benjamin Franklin" 
}
, {
    quote:"The dies is cast"
    , author:"Julius Caesar" 
}
, {
    quote:"I was never less alone than when by myself"
    , author:"Edward Gibbon" 
}
, {
    quote:"A friend is a second myself"
    , author:"Aristotle" 
}
, {
    quote:"Seeing is believing"
    , author:"Thomas Fuller" 
}

]

 const quote = document.querySelector("#quote span:first-child");
 const author = document.querySelector("#quote span:last-child");
 const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

//  console.log(quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;

 //math
//  Math.random(); 랜덤
//  Math.round();  반올림
//  Math.ceil();   올림
//  Math.floor();  내림
