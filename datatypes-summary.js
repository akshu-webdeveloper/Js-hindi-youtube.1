//Primitive Data Types
//
//Call by value


// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//java script cousin bhai "Typescript"
const score = 100
const scorVvalue = 100.3
const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);
//const bigNumber = 345634667457765455787697n



//Reference (Non primitive)

// Array, Obejects, Functions

const heros = ["shaktiman","naagraj","doge"]

    let myObj = {
        name: "akanksha",
        age: "19",
    }
    

const myFunction = function(){
    //console.log("Hello World");
}

//console.log(typeof anotherId);


//+++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "akshucreatesdotcom"
let anothername = myYoutubename
anothername = "thethingsof_18"
console.log(myYoutubename);
console.log(anothername);
