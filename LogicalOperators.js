// NOT Operator !
if(!true){
    console.log("Im inside the IF statement")
} else{
    console.log("Im inside the ELSE statement")
}

if(!(9 > 10)){
    console.log("Im inside the IF statement")
} else{
    console.log("Im inside the ELSE statement")
}

let myEmptyValue;
if(!myEmptyValue){
    myEmptyValue = "Default Value";
}


// OR Operator || - as long as one side evaluates to true, then the whole arugment is true
let a = true || true; //true
let b = false || true; // true
let c = true || false; // true
let d = false || false; // false

let person = {
    name: "Luke",
    age: 23
}
if(person.name[0] == "D" || person.age > 20) // answer is true


//AND Operator && - Only true if BOTH sides are true
let a = true && true; //true
let b = false && true; // false
let c = true && false; // false
let d = false && false; // false

let person = {
    name: "Luke",
    age: 23
}
if(person.name[0] == "L" && person.age < 18)  // answer is false


// chained operators
let a = true && false || true // the entire statement overall is true