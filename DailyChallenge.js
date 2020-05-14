//Given the two arrays below, write a function that takes the two arrays as parameters and outputs an array of pets with ownerName as a property instead of the ownerId property.
let pets = [
    {
      name: "Rex",
      age: 4,
      ownerId: 42
    },{
      name: "Spot",
      age: 7,
      ownerId: 132
    },{
      name: "Scooby",
      age: 3,
      ownerId: 546
    },{
      name: "Lucky",
      age: 1,
      ownerId: 42
    }
  ];
  let people = [
    {
      name: "Luke",
      id: 42
    },{
      name: "Shaggy",
      id: 546
    },{
      name: "Jade",
      id: 132
    }
  ];


// function convertNumberToName(pets, people){
         
//         return {
//             name: pets.name,
//             age: pets.age,
//             owner: while(pets.ownerId == people.id)
//         }
//     }
// }
// let newArray = pets.map(convertNumberToName)
// console.log(newArray);

//Daily Challenge Answer
function mapPet(pet){
    function findPersonById(owner){ //calling a function within a function that uses the people array
        return owner.id == pet.ownerId; // if both ID matches the function will return true
    }
    let owner = people.find(findPersonById); // whenever the findPersonById is true, it will allocate the persons object (both name and age) to the owner array
    return { // creates a new array with all the info we want
        name: pet.name,
        age: pet.age,
        owner: owner.name
    };
}

let detailedPets = pets.map(mapPet);
console.log(detailedPets);