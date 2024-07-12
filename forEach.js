/**forEach is basically used to itearate the individual elements in the array */


let products = ["sugar", "salt", "milk", "oil"];

let sum = 0;
products.forEach(product => {

  sum = sum + product;

  console.log(product);

});

console.log("sum of products is....", sum);