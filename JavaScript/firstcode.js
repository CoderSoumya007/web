var age = 303.02 / 488;
console.log(age);

//primitive data typres
//string
let name = "soumya ranjan panda";

//Number
let accountBalance = 8000;

//Null
let voteid = null;

//boolean
let isMarried = false;

//Undefined
let country = undefined;

//let symbol
let uniqueId = Symbol("identity card");

//Non-Primitive Data Types
//1.Object
let user = {
  firstName: "Soumya",
  MiddleName: "Ranjan",
  LastName: "Panda",
};

//2.Arrays
let listOfChildren = ["sonu", "monu", "chintu", "pintu"];

//3.Function
let greetUser = () => {
  let localvariable = "i am local";
  console.log(localvariable);
  console.log(country);
};

function greet() {
  console.log(user);
}

greetUser();
greet();
//as local variable hence cannot be accessed outside the function
// console.log(localvariable);
console.log(user);
console.log("10" - "10");

let firstName = "soumya";
let middlename = "ranjan";
let lastname = "panda";

let fullname = firstName.concat(" " + middlename, " ", lastname);
console.log(fullname);
console.log(`my full Name is ${firstName} ${middlename} ${lastname}`);

function addNum(a, b) {
  (a = 20), (b = 40);
  console.log(a + b);
}

let a = 34,
  b = 432;
addNum(a, b);
console.log(a, b);

//Loop(Same as java)
let i = 0;
while (i <= 10) {
  console.log(i++);
}

switch (i) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("INvalid Choice");
}

let str = "soumya ranjan panda";
console.log(str.length);
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
const split = str.split("");
console.log(split.reverse().join("-"));

console.log(split.join(""));

str = reverse(str);
console.log(str);

function reverse(str) {
  let newstring = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstring += str.charAt(i);
  }
  return newstring;
}

const rep = str.repeat(0);
console.log(rep);
console.log(str.slice(5));
console.log("glow" > "gleezzzzzzzzzz");

//**************ARRAYS************************* */
const ar = new Array(1, 2, 3);
const ar1 = [1, "soumya", false, null, ar];
// ar[4] = "mongo";
ar1[2] = "ranjan"; //replaces the element at that index

//reduce function
let sum = ar.reduce(function (accumulator, currValue, currIndex, ar) {
  return accumulator + currValue; //this value is returned to accumulator
}, (initialValue = 0));
console.log(sum);

const array = [1, 1, 2, 3, 4, 5, 5, 6, 7, 7];
let newarr = [array[0]];
for (let i = 1; i < array.length; i++) {
  if (array[i] != array[i - 1]) newarr.push(array[i]);
}
console.log(newarr);

//filter function
const string = ["soumya", "rnajan", "panda", "shaswat", "kumar", "gu", "rdd"];
const newstring = string.filter(function (ele) {
  return ele.length <= 3;
});
console.log(newstring);

//******************************OBJECTS****************************** */
const animal = new Object();
animal.dog = "puppy";
animal.lifespan = 15;
animal.height = 34;
console.log(animal);

const person = { name: "soumya", age: 20, hobbies: ["coding", "gyming"] };
console.log(person);

//Accessing object properties
//1.using dot operator
const nameofperson = person.name;
console.log(nameofperson);
//2.using bracket notation
const nameofperson1 = person["hobbies"];
console.log(nameofperson1);

const car = {
  name: "suzuki",
  company: "honda",
  height: 34,
  width: 23,
  speed: 54,
  modelNumber: false,
  setModelNumber: function (x) {
    this.modelNumber = x;
  },
  checkvalidCar: function () {
    if (this.modelNumber == false) {
      delete car.name;
    }
  },
};

//*************Deleting object********************** */
// delete car.name;
console.log(car);

//Iterating object
//1.using for in loop
for (keys in car) {
  console.log(keys + " : " + car[keys]);
}

//2.can be used to iterate either keys or values in the array
//using key keyword for keys and value for values
const key = Object.keys(car);
console.log(key);

//3.for each loop->used to iterate over an array
key.forEach(function (element) {
  console.log(element);
});

//4.using object.entries()
//it will return array of both key and value in array form
const objectEntries = Object.entries(car);
console.log(objectEntries);

objectEntries.forEach((x) => {
  console.log(x);
});

//****************************Array of objects*****************************/
const student = [
  { name: "soumya", age: 23, height: 5.7 },
  { name: "shaswat", age: 23, height: 6.2 },
];
//1.using for each
// student.forEach((x) => {
//   console.log(x.name);
// });

//2.using map
// const it = student.map((user) => {
//   return user.name;
// });
// console.log(it);

//3.using reduce
const it = student.reduce(function (acc, user) {
  return acc + user.age;
}, 0);
console.log(it);

//***************************DESTRUCTURING*******************************/
//DESTRUCTURING PARAMETERS
const details = {
  name: "youtube",
  age: 34,
};
function getusername({ name, age }) {
  console.log(name);
  console.log(age);
}
getusername(details);

//************************************REST PARAMETERS****************************/
function add(...x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}
console.log(add(3, 4, 5, 6, 7, 8));

let x = 34;
let oc = function () {
  let x = 340;
};
console.log(x);

//***********************************Document Object Model********************* */
alert("hi");