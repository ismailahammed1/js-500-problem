let myArray = [1, 2, 3, 4];
let anotherArray = ["apple", "banana", "cherry"];

// Non-array variables
let myString = "Hello, World!";
let myNumber = 42;
let myObject = { name: "John", age: 30 };
let myBoolean = true;
let myNull = null;


if (Array.isArray(myArray)) {
    console.log("myArray is an array");
  } else {
    console.log("myArray is not an array");
  }

  if (Array.isArray(anotherArray)) {
    console.log("anotherArray is an array");
  } else {
    console.log("anotherArray is not an array");
  }
  if (Array.isArray(myString)) {
    console.log("myString is an array");
  } else {
    console.log("myString is not an array");
  }
  if (Array.isArray(myNumber)) {
    console.log("myNumber is an array");
  } else {
    console.log("myNumber is not an array");
  }
  if (Array.isArray(myObject)) {
    console.log("myObject is an array");
  } else {
    console.log("myObject is not an array");
  }