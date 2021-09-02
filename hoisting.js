/*
 Two geral phases when we run code:
 - Creation Phase
    any variable (let, var, const) and function in our code are stored to memory.
- Execution Phase:
    values are assigned to the variable and functions that were stored to memory during the create phase
The left (create)of the assigent aperator (=) is stored to memory, right (execution) side is assigned during execution

*/
/*
left (create Phase)  (execute)
      let variable = value;
*/

//1. 'num' has been hoisted - JS recognized our variable, it knows it exists
//2. JS reads top to bottom, when we called our console.log first, it doesn't get the value of 'num'
//console.log(num);
//let num = 12;

sayHi();

function sayHi(){
    console.log('Hello');
    let hi = 'Hola';
    console.log(hi);
}

// varFunc(); location of this declaration matters

let varFunc = function() {
    console.log('Anithing');
}

varFunc(); //this should come at the end 
