/**
ex:
    let array = [value, value, value];
    index position: 0 ,   1,   2
 */

let arr = ['first value', 'second value', 'third value'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// .length with an array:

console.log(arr.length);
console.log(arr[arr.length -1]);

// Using an array constructor, uses new keyword
let test = new Array();
console.log(test);
console.log(test.length);

// Created an empty array w/ 3 empty items
let test2 = new Array(3);
console.log(test2);
console.log(test2.length);

//We target a specific value, we "assigned" it a proper value
test[0]='New Value';
console.log(test2);

// Initializing an array values
let nums = Array(1, 2, 3, 4, 5);
console.log(nums);
//console.log(typeof nums);

// 
let string = Array('array1', 'array2', 'array3');
console.log(string);
console.log(string[2]);

// ********* METHODS ******************
// Methods are a way to pull out and /or manipulate the data within our arrays.

// forEach(),method runs a function over each index of our array
let boardGames = ['Scrabble', 'Chess', 'Monopoly', 'DnD', 'Clue'];
for (i = 0; i <boardGames.length; i++){
    console.log(boardGames[i]);
}

//Concise Body Arrow Function
boardGames.forEach(game => console.log(`Concise: ${game}`));
//boardGames.forEach(game => console.log(typeof game));

//Block Body Arrow Function
boardGames.forEach(game => {
    console.log(`Block: ${game}`);
});

//Anonymous Functions
boardGames.forEach(function(game){
    console.log(`Anon: ${game}`);
})

// Various other methods:
// Array.lenght -> returnd the numbers of elements in the array
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.length);

//Array.push() -> adds an element to the end of the array
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
shoppingList.push('mint');
console.log(shoppingList);

// Array.pop() -> removes the last element of the array and returns that element

let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
shoppingList.pop();
console.log(shoppingList);

// Array.unshift() -> adds a new element at the begining of the array

let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
shoppingList.unshift('salt');
console.log(shoppingList);

// Array.shift() -> removes the first element in the array, and returns that element
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
let celery = shoppingList.shift();
console.log(shoppingList);
console.log(celery);

//Array,map() -> transforms the elements in the original array by calling the given function once for each element in the array
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.map(item => item.toUpperCase()));

//Array.filter() -> Creates a new array with only the elements that pass the test in a given fuction
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('1')));

//Array.find() -> retunr the first element in the array that passes a test given as a function 
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.find(item => item.startsWith('1')));

//Array.reduce() -> executes a givenn function for each value of the array and return a single value
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total,cost) => total + cost));

//Array.includes() -> determines wether an array has a specific element, returns boolean value
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.includes('limes'));
console.log(shoppingList.includes('salt'));

//Array.indexOf() -> search the array for a specific element and returns it's first index. Returns -1 when elements is not found.
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.indexOf('limes'));
console.log(shoppingList.indexOf('salt'));

//Array.findIndex() -> returns the index of the first element in an array that passes the test given in a function. Returns -1 when element is not found.

let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.findIndex(item => item.startsWith('g')));

//Array.every() -> checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements.

let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.every(item => item.length > 1));

//Array.concat() -> merge to or more arrays, and returns a new array
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
let secondList = ['mint', 'salt', 'simple syrup'];
console.log(shoppingList.concat(secondList));

// Array.slice() -> selects a part of an array, and returns a new array. It selects the elements starting at the provided start argument, and ends at, but does *not* include, the provided end argument.

let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.slice(1, 4));

// Array.splice() -> add/removes elements in an array an returns the new elements. First argument take in an integer thta specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. optional third argument takes in the new elements to be added to the array.
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
//shoppingList.splice(2, 1);
console.log(shoppingList);

shoppingList.splice(2, 1, 'cherries');
console.log(shoppingList);

// Array.sort() -> sorts the item in an array. The sort order can be either alphabetic or numeric, and with ascending or descending. By default, sort() orders the values as strings in alphabetical and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending order.

let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.sort())

let costs = [3, 2, 13, 4];
// want to sort by decending order
console.log(costs.sort((a, b) => b - a));
// want to sort by ascending order
console.log(costs.sort((a, b) => a - b));

// Array.reverse() -> reverse teh order of elements in an array
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.reverse());

// Array.toString() -> converts an array into a string
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.toString());

// Array.join() -> converts the elements of an array into a string. Can accept an optional parameter, "separator", which indicates how the elements will be separated. Default separator is a comma.
let shoppingList = ['celery', 'limes', 'lemon', 'granadine', 'oranges'];
console.log(shoppingList.join("! and "));

// Lastly, an ES6 features: the spread operator. The spread operator, is indicated by these 3 dots "..." expands the cotnents of the array an takes it out of the array structure.
