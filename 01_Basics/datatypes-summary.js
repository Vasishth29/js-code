//primitive datatypes
// 7 types : string(""), Number, Boolean, null, undefined, symbol(used to make a value unique), BigInt
let bigNumber = 6548484135n;

//Reference (Non Primitive)
//Array, Object, Functions

//arrays:-
const heroes = ["RadhaGopinath", "RadhaSyamsundar", "RadhaPandharinath"];

//object:-
let myObj = {
    name : "Vasishth",
    age : 18,
}

//function:-
let myFunction = function(){
    console.log("Hare Krishna");
}

console.log(myFunction);

//How to find Datatype:-
console.log(typeof bigNumber);

//every Reference typeof is "Functions".
//Function typeof is called Object "Function".


//Read and study:-
//https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//types of memory :-
// 1. Stack
// Used in primitive datatype.

// 2. Heap
// Used in non primitive or reference datatype.

let myBaseName = "VNITBase"

let anotherName = "myBaseName"
anotherName = "VNITVoice"

// console.log(myBaseName);
// console.log(anotherName);

let userOne = {
    email: "Vasishth@yahoo.com",
    upi : "8768454@ybl"
}

let userTwo = userOne
let userthree = userTwo

userTwo.email = "Vasishth@gmail.com"
userThree.email = "hvgfdtykgdvcy@yahoo.com"

// console.log(userOne.email);
// console.log(userTwo.email);
// console.log(userThree.email);