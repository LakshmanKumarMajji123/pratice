/**numbers
 * booleans
 * strings
 * arrays
 * null
 * undefined
 * object
 */


let string = "20000";
console.log(typeof (string));

//booleans
 let num = 260;
 console.log(num != 260);

/*strings:- A group of characters or a sequence of characters  4 properties
1. concatenation
2. how to access a characters in string
3. properties
4. methods
*/

//properties which nothing but tells about the information
//  let title = "Animal";

//  console.log("Animal movie length is....." + title.length);


/*methods:- which do something action or which performs something action

Destructive-method :- when we apply a method then it's  changes the original one 
non-destructive-method :- when we apply a method then applied variable should be change

*/

let Movie_Title = "Seethama Vakitalo Sirimalle chettu";
console.log(Movie_Title.includes("Sirimalle")); //which tells the "true" or "false"


//number cannot be divded by string
let myNum = 123;
let myNum2 = "abceder";

let r = myNum / myNum2;

console.log("Number cannot be divisible by string", r);


//Template literals
let name = "Majji Lakshman Kumar";
let age = 23;

console.log(`My name is ${name} and i'm ${age} years old`);


/**Arrays :- is a variable which stores a multiple values */
let cricketers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//cricketers.push = 2600;
cricketers.push = 40000;



for (let count in cricketers) {

  console.log(cricketers[count]);

  cricketers.pop("3");
  
}

//methods
/**destructive-array:- which means it changes the orinal array by "push" and "pop" method*/


//loose versus strict

let number = 25;

console.log(number == "25"); //loose comparision :- it compares only value
console.log(number === "25"); //strict comparision :- ti compares both value and type 


