const person = {
  name: "Samsuddin",
  fatherName: "Alauddin",
  motherName: "Sufia",
  dateOfBirth: "30 June, 1992",
  religion: "Islam",
  address: {
    house: 50,
    road: 1,
    block: "A",
    section: "Mirpur-2",
    division: "Dhaka",
  },
  hobby: ["Sleep", "Play Cricket", "Riding Cycle"],
};

// Convert to json format
let convertJson = JSON.stringify(person);
console.log(convertJson);

// json to convert normal object
let jsonConvertObject = JSON.parse(convertJson);
console.log(jsonConvertObject);