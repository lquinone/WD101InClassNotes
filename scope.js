/*
Scope is simply the hierarchy of variables within our code.
 - Global Scope or Parent Scope
 - Local Scope or Child Scope
*/

let global = "Earth";

function scopeExample() {
    let local  = "Indy";
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}.`);
}

scopeExample();
// local variable cannot be accessed outside the function
// console.log(local);