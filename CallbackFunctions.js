// a callback function is a function that you pass into another function as an arguement
let people = [
    {
        name: "Luke",
        message: "Hi",
        heightInches: 75
    },
    {
        name: "Dan",
        message: "Im Dan",
        heightInches: 69
    },{
        name: "Steve",
        message: "Im Steve",
        heightInches: 64
    },
    {
        name: "John",
        message: "Im John",
        heightInches: 60
    }
];

function myGreeter(people, callback) { // passing an array and a function
    for(let i = 0; i < people.length; i++){
        let person = people[i];
        let greeting = callback(person.message); // calling the callback function
        console.log(`${greeting} ${person.name}`);
    }
    
}


function myCallbackFunction(message){
    if (message == "Hi" || message == "Hello"){
        return "Hi";
    } else {
        return "Hello There";
    }
}

function anotherCallbackFunction(message){
    if (message =="Im Dan"){
        return "NO WAY, THATS SO COOL";
    } else {
        return "Hello";
    }
}

myGreeter(people, anotherCallbackFunction); // this is the function that we have passed to the myGreeter function. This determines which function is going to run


//Array.filter - return an array for every object where the callback function returned true
function myFilterFunction(person){
    if(person.name[0] == "L"){
        return true; // will be included in the new array (filteredArray)
    } else {
        return false; // will be excluded from the new array (filteredArray)
    }
}

let filteredArray = people.filter(myFilterFunction); // creates a new array with the conditions that you specified by calling a function purely for filtering
console.log(filteredArray)


//Array.map - takes a callback function and whatever you return will be added to a new array
function getNames(person){
    return person.name;
}
let names = people.map(getNames); // creates a new array with only person.name as that is the only thing returned
console.log(names)

// example 2 of array.map
function convertHeightCm(person){
    return {
        name: person.name,
        message: person.message,
        heightInCm: person.heightInches * 2.54
    }
}
let peopleCm = people.map(convertHeightToCm); //creates a new array with the height changed as we have returned the result of the equation

// Array.Map has the same functionality as
let newArr = [];
for (let i= 0; i < people.length; i++){
    let person = people[i];
    newArr.push(person.name);
}


//Array.find - does not return an array, only returns a single element
function findUnder65(person){
    return person.heightInches < 65;
}

let person = people.find(findUnder65);