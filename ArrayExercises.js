// 1. Use the Array.filter function to create an array of all the pets owned by Luke.
// 2. Use the Array.map function to create an array of all the names of the owners.
// 3. Use the Array.find function to retrieve the pet owned by Shaggy
// 4. Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

let pets = [
    {
      name: "Rex",
      age: 4,
      ownerName: "Luke"
    },{
      name: "Spot",
      age: 7,
      ownerName: "Jade"
    },{
      name: "Scooby",
      age: 3,
      ownerName: "Shaggy"
    },{
      name: "Lucky",
      age: 1,
      ownerName: "Luke"
    },{
      name: "Sadie",
      age: 3,
      ownerName: "Daniel"
    },{
      name: "Duke",
      age: 5,
      ownerName: "Sabine"
    }
  ];
  
// Question 1
  function myFilterFunction(pets){
    if(pets.ownerName == "Luke"){
        return pets.name; // will be included in the new array (filteredArray)
    } else {
        return false; // will be excluded from the new array (filteredArray)
    }
}
let filteredArray = pets.filter(myFilterFunction);
console.log("Answer to Question 1: ")
console.log(filteredArray);

// Question 1 Answer
// function ownedByLuke(pet){
//     return pet.ownerName == "Luke" // works the same as the if statement above
// }
// let lukesPets = pets.filter(ownedByLuke)
// console.log(lukesPets)

// Question 2
function getNames(pets){
    return pets.ownerName;
}
let names = pets.map(getNames); // creates a new array with only person.name as that is the only thing returned
console.log("Answer to Question 2: ")
console.log(names)

// Question 2 Answer // seems to be same as my answer
// function getOwner(pet){
//   return pet.ownerName;
// }
// let owners = pets.map(getOwner);
// console.log(owners);

// Question 3
function findOwner(pets){
    return pets.ownerName == "Shaggy";
}

let person = pets.find(findOwner);
console.log("Answer to Question 3: ")
console.log(person);

// Question 3 Answer // Seems to be same as my answer
// function findShaggysPet(pet){
//   return pet.ownerName == "Shaggy";
// }
// let shaggysPet = pets.find(findShaggysPet);
// console.log(shaggysPet);

// Question 4 
function myFilterFunction(pets){
    if(pets.age < 5 && (pets.ownerName[0] == "S"|| pets.name[0] == "S")){
        return pets.name; // will be included in the new array (filteredArray)
    } else {
        return false; // will be excluded from the new array (filteredArray)
    }
}
let filteredArray2 = pets.filter(myFilterFunction);
console.log("Answer to Question 4: ")
console.log(filteredArray2);

//Question 4 Answer
// function filterCallBakc(pet){
//   let lessThan5 = pet.age < 5;
//   let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
//   return lessThan5 && hasS;
// }

// let filteredPets = pets.filter(filterCallback);
// console.log(filterCallback)