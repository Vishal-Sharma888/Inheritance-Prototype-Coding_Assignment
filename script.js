// Soluction1:

function Parent(name) {
    this.name = name;
  }
  
 
  Parent.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  

  const parent = new Parent("John");
  

  function Child(name, age) {

    Parent.call(this, name);
    this.age = age;
  }

  Child.prototype = Object.create(Parent.prototype);
  
  
  Child.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  };
  
  
  const child = new Child("Alice", 5);
  
 
  parent.greet(); // Output: Hello, my name is John
  child.greet();  // Output: Hello, my name is Alice
  child.introduce();  // Output: Hi, I'm Alice, and I'm 5 years old.

//   Soluction 2:-
  
function Animal(name) {
    this.name = name;
  }
  

  Animal.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
  
  
  const dog = new Animal("Rex");
  
 
  dog.sayHello(); // Output: "Hello, I'm Rex"
  

  function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
  }

  Dog.prototype = Object.create(Animal.prototype);
  
 
  Dog.prototype.bark = function() {
    console.log(`${this.name} says Woof!`);
  };
  

  const myDog = new Dog("Buddy", "Golden Retriever");
  

  myDog.sayHello(); // Output: "Hello, I'm Buddy"
  myDog.bark();     // Output: "Buddy says Woof!"
  

  console.log(myDog instanceof Animal); // Output: true
  console.log(myDog instanceof Dog);    // Output: true
  
//   Soluction 3
// Define a method to calculate the sum of all elements in an array
Array.prototype.sum = function () {
    return this.reduce((acc, currentValue) => acc + currentValue, 0);
  };
  
  // Create multiple arrays
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [10, 20, 30];
  const array3 = [-1, -2, -3, -4, -5];
  
  // Calculate the sum for each array using the new method
  const sum1 = array1.sum();
  const sum2 = array2.sum();
  const sum3 = array3.sum();
  
  // Display the results
  console.log("Sum of array1:", sum1); // Output: Sum of array1: 15
  console.log("Sum of array2:", sum2); // Output: Sum of array2: 60
  console.log("Sum of array3:", sum3); // Output: Sum of array3: -15
  
//   Soluction 4:-
function getAllPropertyNames(obj) {
    let propertyNames = [];
  
    // Get the names of the object's own properties
    for (let propName in obj) {
      if (obj.hasOwnProperty(propName)) {
        propertyNames.push(propName);
      }
    }
  
    // Get the names of inherited properties using recursion
    let prototype = Object.getPrototypeOf(obj);
    if (prototype !== null) {
      let inheritedProperties = getAllPropertyNames(prototype);
      propertyNames = propertyNames.concat(inheritedProperties);
    }
  
    return propertyNames;
  }
  
  // Example usage:
  const sampleObject = {
    a: 1,
    b: 2,
  };
  
  function CustomObject() {
    this.c = 3;
  }
  
  CustomObject.prototype = Object.create(sampleObject);
  
  const customInstance = new CustomObject();
  
  const allProperties = getAllPropertyNames(customInstance);
  console.log(allProperties);
  