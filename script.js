// 1. locate the Elemet(s)
let square = document.getElementById('square')

// 2. write the functionality needed when event occurs
        function changeColour(colour){
           square.style.background = colour;
        }

// 3. Link element, event to the functionality
//  i.e add an event listener
square.addEventListener('click', (event) => showMessage());
square.addEventListener('mouseover', (event) => changeColour('grey'));
square.addEventListener('mouseout', (event) => changeColour('red'));

let words = document.getElementById('words')
function greeting(){
    console.log("Welcome to Flatland")
    words.innerHTML = "Welcome to Flatland.<br> I am Square!";
}
// words.addEventListener('load', (event) => greeting())
document.onload = greeting()

function showMessage(){
    let message = "Build a " + createBuzzwordPhrase();
    words.innerHTML - message; 
}

function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}