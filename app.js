//arrray literal//
var numbers= [3, 55, 87];
console.log (numbers);

//Creating an Array with the New JS Keyboard//
var strings= new Array("mangoes", "pineapples", "kiwis", "bananas");
console.log (strings);

//Creating an array with the new JS keyboard by making the index//

var booleans= new Array()
booleans[0]= 9<10;
booleans[1]= 11===11.5;
booleans[2]= 12>8;
booleans[3]= "Sky" == "SKY";

console.log (booleans);

//Create an Array of your classmates' names//
var classNames= new Array("Sky", "Trent", "Katie", "Danielle", "Heather");
console.log (classNames);

//Use the Index position//
console.log(classNames[2]);

//.Length method  (gives index of our arrray - tells you how many things are in your array//
console.log(classNames.length);

//ARRAY METHODS//
//Built-In Methods .methodname(data);

//.push -- adds index to the end of an arrray
classNames.push("Mara", "John");


//.pop -- removes an index from the end of the array
classNames.pop();

//.shift -- removes the first index from an array and shifts the names up by one
classNames.shift();

//.unshift -- adds an index to the beginning of the array
classNames.unshift("Kevin");

//.splice ADD/REMOVE an Index in the Array
classNames.splice(2,1, "Eli");
//Add Eli to Array, 1 = 1 person will be removed, if you want to get ride of more indexes, changes second number, 2=where you want to add Eli(read it backwards)
//You can use - numbers to make positive changes that would not remove anyone, You can also use 0 if you don't want to change anything and you just want to add something new

//Loooping over an Array
//To see all the itmes in ou array// Iterations
// "For" loop while loop for each loop
// 3 things we need to loop through data

//When to start, when to stop, and how to get to the next item
for (i=0; i<classNames.length; i++) {
    console.log(classNames[i]);
}
//i=index, so start at index=0 (i=) then stop once you go through the whole length (i<classNames.length) then i++ means next?
//really important to have all three in your code or else it will be an endless loop and it can break the website or computer


//Finding an Index - if  you want to locate a specific item in your array
console.log(classNames.indexOf("Trent"));
// It will tell you which position Trent is in the array
//Returns the specific index of an array item


// /Create an Array called "donuts" that list 7-10 different items
var donuts= new Array("chocolate", "strawberry", "vanilla", "oreo", "cookie dough", "jelly", "blueberry", "glazed");

//1 Using a loop, iterate through this array and console.log all the donuts
for (i=0; i<donuts.length; i++) {
    console.log(donuts[i]);
}
    
//2 Write the command to remove the first donut fron the array

donuts.shift();
console.log(donuts);

//3 Write the command to remove the last donuts from the array
donuts.pop();
console.log(donuts);

//4 Write the command to add a new donut "lime zest" to the front of the array
donuts.unshift("lime zest");
console.log(donuts);

//5 Write the command to add another donut "lemon pie" to the end of the array
donuts.push("lemon pie");
console.log(donuts);

//6 Use either the join() or toString() method to convert an array to a string.
console.log(donuts.toString());

//7 Write the command to make a copy of the array using slice. 
// The copy should NOT include two donuts.
console.log(donuts.slice(2));


//8 Write the command that gives the indexOf where "chocolate" is located.
console.log(donuts.indexOf("chocolate"));

//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
console.log(donuts.indexOf("glazed"));

//10 **Using the splice method, remove one donut from the array and add another.

donuts.splice(2,1, "sprinkles");
console.log(donuts);
//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
var withSyed = donuts.concat("Bob");
console.log(withSyed);


//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
function getdonuts () {document.write(donuts);} 

getdonuts ();

    