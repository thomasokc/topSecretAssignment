//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

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

console.log(Object.keys(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name,age){
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method
    this.printInfo = () => {console.log(`My name is ${this.name}, I am ${this.age} years old.`)}
    
// Create another arrow function for the addAge method that takes a single parameter
    this.addAge = () => {console.log(`${this.name} just turned ${age += 1}.`)}
}
// Adding to the age 
let my_person = new Person('Bobby', 47,'Red')
let my_person2 = new Person('Dobby', 147,'gone')
my_person.printInfo()
my_person.addAge()
my_person.addAge()
my_person.addAge()
my_person2.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = word =>{
    return new Promise( (resolve, reject) =>{
        word.length > 10 ? resolve('Big word') : reject('Small Number')
    })
}

isBigWord('AAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHH WORDS!')
isBigWord('nope')

.then( (result) =>{
    console.log(`What kind if it? It's a... ${result}`)
})

.catch( (error) =>{
    console.log(`Its a... ${error}`)
})

