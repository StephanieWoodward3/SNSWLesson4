// 1. Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. 
// Return true if num is between floor and ceiling. Otherwise return false
// 2. Create a function that takes 1 parameter that is an object with 2 properties, name and age. 
// Return true if the person's age is greater than 30 or their name contains the letter x (case insensitive). Otherwise return false.
// 3. Create a function that takes 3 parameters. The first should be an object with two properties name and age. 
// The second should be a number, the third should be a string. The function should return true if the age of the object is equal to the second parameter and the name is not equal 
// to the third parameter. Otherwise return false.

//Question 1
function house(floor, ceiling, num){
    if(num > floor && num < ceiling){
        return true;
    }else {
        return false;
    }
}
let answer = house(80, 120, 130)
console.log(answer);

// Question 1 Answer
function isBetween(floor, ceiling, num){
    if(num > floor && num < celiling){
        return true;
    } else{
        return false;
    }
}
let ans1 = isBetween(12, 24, 15);
console.log(ans1);

//Question 2
let myobject = [
    {
        name: "Luke",
        age: 12
    },
    {
        name: "Dan",
        age: 20   
    }
];
function person(myObject){
    if(myObject.age > 30 || myObject.name[i] == "x"){
        return true;
    }else {
        return false;
    }
}
// Question 2 Answer
function checkNameAndAge(person){
    let isOver30 = person.age > 30;
    let foundX = false;
    for (let i = 0; i < person.name.length; i++){
        let letter = person.name[i].toLowerCase();
        if(letter == "x"){
            foundX = true;
            break;
        }
    }
    if(isOver30 || foundX){
        return true;
    } else{
        return false;
    }
}

let person1 = {
    name: "Xavier",
    age: 29
}

console.log(checkNameAndAge(person1)); // returns true

let person2 = {
    name: "Dan",
    age: 24
}
console.log(checkNameAndAge(person1)); // returns false


//Question 3
function questionThree(myObject, num, word){
    if(myObject.age == number && myObject.name != word){
        return true;
    } else {
        return false;
    }
}

//Question 3 Answer

function checkExactNameAndAge (person, ageToBe, nameToNotBe){
    let equalAge = ageToBe == person.age; // if the age of the object is equal to the second parameter

    let equalName = nameToNotBe == person.name; // if the name of the object is NOT equal to the thir parameter

    if(equalAge && !equalName){
        return true;
    } else{
        return false;
    }
}

console.log(checkExactNameAndAge({ //will return true
    name: "Luke",
    age: 23
}, 23, "David"));
console.log(checkExactNameAndAge{ // Will return false
    name: "Dan",
    age: 22
}, 50, "Sinclair")