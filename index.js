// The first time the loop is run, the variable i (the counter) is assigned a value of zero. //(var i = 0; ….
// Every time the loop is run, the condition is checked. // i < 10
// Then the code inside the loop (the statements between the curly brackets) is run.
// The variable i can be used inside the loop. In this example it’s just writing a number to the page.
// When the statements have finished, the variable i is incremented by 1 // i++
// When the condition is no longer true the loop ends. i.e. var i is no longer less than 10… Then the script moves on to the next line of code.

// Create an Array the stores at least 10 predictions 

var fortunes = [
    "You will be a famous singer.",
    "You will be poor.",
    "You will be a successful CEO.",
    "You will have 10 children and live in a shack.",
    "You will be the happiest person in the world.",
    "You will break every bone in your body.",
    "You will be the president of the United States.",
    "You will be a successful Web Developer.",
    "You will have twenty dogs.",
    "You will live in Peru.",
];

// Math. method (expression) Math.ceil() .ceil rounds up to highest integer; .floor rounds down to lowest integer; Math is always capital
//page 708 for math methods

function tellFortune () {
    var randomFortune = Math.floor(Math.random()Uint16Array; * fortunes.length);
    document.getElementById('btn').innerHTML = fortunes[randomFortune];
    //target where you want to put the predictions on your page
 
}; 
// ** Create a function 

// // create a function called 'tellFortune' that will randomly select a prediction 
//     // from the array 
//     // **hint Math.random 
//      //target the ID from the html and insert the 
//             // predictions on the document
// * When you click on the button a new prection should be posted to the page. 