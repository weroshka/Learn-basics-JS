// 7 types

// 1. Null - object
console.log(typeof null);

//waiting for object but we don`t know its structure initially
let dog = null;

//now we have structure
dog = {
  name: "Marsik",
  age: 9,

  //dog can`t choose now, so we use undefined. We surely know that lovelyHuman is string, not object
  lovelyHuman: undefined,
};

// 2. Undefined
console.log(typeof undefined); //undefined

//we don`t give the value to variable
let cat;
console.log(cat); //undefined

// 3. Boolean
isVeronika = true;
isMan = false;

// 4. String '', ""
const parrot = "Lyolik";
const bird = " is a bird";
const lovelyBird = "Mine's the best bird.";
console.log(parrot + bird);
console.log(lovelyBird);
console.log(parrot[0]); // L
console.log(parrot.length); //6

// T is situated in alphabet further than Д
const string1 = "Кот";
const string2 = "Код";
console.log(string1 > string2); //true
console.log(string1.toUpperCase()); //КОТ

console.log(string1.toLowerCase() === string1); //false

// 5. Symbol

const myName = Symbol();

const Veronika = {
  age: 21,
  [myName]: "Ника",
};

//idd is description
let id1 = Symbol("idd");
let id2 = Symbol("idd");
console.log(id1.description); //idd'
console.log(id1 === id2); //false. Symbols are unique, description doesn`t make the sense
console.log(id1.toString()); //this command is needed to get id1 as the string

// 6. Number
const million = 1_000_000; //for visual convenience
const round = 1.777777;
console.log(million, round.toFixed(2));

const num = NaN;
console.log(typeof NaN); //NUMBER
console.log(num === NaN); //false, cause NaN != NaN
console.log(Number.isNaN(num)); //true - for checking num is equal to NaN

//the same thing, works only for numbers
let w = 5;
let u = 6;
console.log(w == u);
console.log(w === u);

// 7. object
const employee = {
  name: "Carl",
  age: 30,
  nationality: "British",
  isResume: true,
  skills: ["HTML", "CSS", "JS"],
  career: function () {
    console.log("Work!");
  },
};
employee.career();
employee.gender = "male";
