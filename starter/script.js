"use strict";

let calculator = function () {
  console.log("I am in Global scope");
};

const multiplyNumbers = function () {
  
  const operation = "Multiplication";
  
  calculator = function (num1, num2) {
    const result = num1 * num2;
    console.log(`${result} is result of "${operation}".`);
  };
};

calculator(3, 5);
multiplyNumbers();

calculator(3, 5);
console.dir(calculator);

const addNumbers = function () {

  const operation = "Addition";
  
  calculator = function (num1, num2) {
    const result = num1 + num2;
    console.log(`${result} is result of "${operation}".`);
  };
};

addNumbers();
calculator(3, 5);
console.dir(calculator);

