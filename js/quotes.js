const quotes=[
{
    quote:"The way to get started",
    author:"Walt Disney"
},
{
    quote:"sdsd",
    author:"abab"
},
{
    quote:"aaa",
    author:"Wbbb"
},
{
    quote:"The sdarted",
    author:"Wassney"
},
{
    quote:"The qqet started",
    author:"Wddddddddey"
},
{
    quote:"get started",
    author:"Walzs Disney"
},
{
    quote:"The wa13131y to get started",
    author:"Walt Di2222222222sney"
},
{
    quote:"The way 2222222222222to get started",
    author:"Walt D111111111isney"
},
{
    quote:"The way to 4444444444get started",
    author:"Walt Di45555555sney"
},
{
    quote:"The way to g777777777et started",
    author:"Walt Di888888sney"
}
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=(quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;