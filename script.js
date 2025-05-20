 const quotes=["'Start where you are. Use what you have. Do what you can.'– Arthur Ashe",
    "'Success usually comes to those who are too busy to be looking for it.' – Henry David Thoreau"
,"'Opportunities don't happen. You create them.' – Chris Grosser",
"'Do something today that your future self will thank you for.' – Sean Patrick Flanery",
"'The only limit to our realization of tomorrow is our doubts of today.' – Franklin D. Roosevelt"
,"'Don’t wait for opportunity. Create it.' – Unknown",
"'Great things never come from comfort zones.' – Anonymous"
,"'You are never too old to set another goal or to dream a new dream.' – C.S. Lewis",
"'Discipline is the bridge between goals and accomplishment.' – Jim Rohn",
"'Your only limit is your mind.' – Unknown"];


let text=document.getElementsByTagName('p')[0];
let button=document.getElementsByClassName("button")[0];
 
button.addEventListener('click', function(){
    let randomnumber=Math.floor(Math.random()*quotes.length);
    text.textContent=quotes[randomnumber];
})

 

 