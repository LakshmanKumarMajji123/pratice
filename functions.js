/** functions is a resuable "block of code" 
 * 1. general functions
 * 2. stored functions
 * 3. arrow functions
 * 4. callBack functions
 * 
*/

//func definitions
let add = (a, b) => {

  return a + b;
};

let sub = (a, b) => {

  return a - b;
};

let mul = (a, b) => {

  return a * b;
};

let divison = (a, b) => {

  return a / b;
};


//func definitions
function process(num1, num2, addition, subtraction, multiplication, divison) { //parameters

  let Addition = addition(num1, num2);
  let Subtraction = subtraction(num1, num2);
  let Multiplication = multiplication(num1, num2);
  let Divison = divison(num1, num2);

  let total = `Addition : ${Addition}, Subtraction: ${Subtraction}, multiplication: ${Multiplication}, Division: ${Divison}`;

  return total;

};

//func innvokation
console.log(process(12, 14, add, sub, mul, divison)); //arguments






