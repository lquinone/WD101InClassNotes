//Paramerter are values we haven't assigned yet.
//Value is passed through to the function using an argument(s).
/*
//ex:
    function nameFunc(parameter) {
        return...
}

nameFunc(argument);
*/


//Parameter naming should reflect the desired data
function myName(name) {
    console.log(`My name is ${name}`);
}

myName("Kate");

function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`);
}

coffeePot("Dark roast");
coffeePot("Medium roast");
coffeePot("Light roast");
coffeePot("tea instead");


//known as a Function Reference
let kettle = coffeePot;
kettle("Green tea");


//Arguments get passed in order or position
function dinner(main, side, drink) {
    console.log(`For dinner, I had ${main} and ${side}). To wash it down, I had a ${drink}.`);
}

//dinner("coke", "steak", "patatoes"); <--order doesn't work, due to the order

dinner("stake", "roasted patatoes", "water");


//Retun:
//Variable is used to capture the return value
//Return is the keyword "waiting" to capture it/waits for the value

function calc(one, two, three) {
    //start by declaring our new variable & whatever it is (calculation/value holder).
    let total = one + two + three;
    let avarage = Math.round(total/ 3);
    return avarage;
}

//calc(15, 60, 55); <-- no way to see return
let avgWeight = calc(15, 60, 55);
console.log(`The amount of rice I bought is ${avgWeight} lbs.`);

