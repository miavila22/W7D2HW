
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// going to need a function
// going to need a loop. 

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function favorite_dishes(person){
    for(let snack in person){
        // console.log(`${snack}:`);

        if(Array.isArray(person[snack])) {
            // person[snack].forEach(munchies => console.log(`${munchies}`))
            console.log(`${snack}: ${person[snack].join(",  ")}`);

        } else if (typeof person[snack] == 'object') {

            console.log(`${snack}:`);

            for (let key2 in (person[snack][0])) {

                console.log(`${person[snack][0][key2]}`);
            }
        } else {

            console.log(`${snack}: ${person[snack]}`);
        }

    }
}
favorite_dishes(person3);




// Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods
// */
// // Create our Person Prototype

// // Use an arrow to create the printInfo method
// // Create another arrow function for the addAge method that takes a single parameter
// // Adding to the age 
// name, age, printinfo, 
// THEN do an arrow function for addAge to increment. takes a (), increment 

function Nightblade(name, age) {
    this.name = name;
    this.age = age


//now the printInfo method
    this.printInfo = () =>{
        console.log(`${this.name} is ${this.age}. He has no age.`)
        return "Sorry Not Sorry."
    }

    this.addAge = () => {
    this.age++;

    }
}

let Dragon = new Nightblade("Paarthurnax", 6500);
let Dragon2 = new Nightblade("Alduin", 760000000);

Dragon.printInfo();
Dragon2.printInfo();

Dragon.addAge();

Dragon.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
// create a function
// check length of string
// promised = resolve, reject. Resolve returns "big word" if the len(string) > 10
// reject returns "small number"  if len(string) < 10

function Novelist(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve("Big Word");
        } else {
            reject('Small Number');
        }
    })
};
//----------------------------------------

Novelist("System Failed")
    .then((result) =>{
        console.log(`${result} is a Big One.`)
    })
    .catch((error) =>{
        console.log(`${error} small buddy`)
    });
//-----------------------------------------

Novelist("Lost Cause")
    .then((result) =>{
        console.log(`${result} is a Big One.`)
    })
    .catch((error) =>{
        console.log(`${error} small buddy`)
    });

//  Codewars problems 
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels 
// from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let result = "";
    for (let letter of str) {
      if('aeiouAEIOU'.includes(letter) == false) {
        result += letter;
      }
    }
    return result;
  }

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      if (args.length > 0){
        args.sort(function(a,b) {
          return a -b;
        });
        
        return args[0];
       } else {
         return null;
       } 
      
    }
  }