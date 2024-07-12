/** except object all are primitive which are num, array, string, boolean  
 * object is a reference type
*/

let First_num = 100;

let Second_num = First_num;

First_num = 300;

console.log(First_num);
console.log(Second_num);

let player_one = {

  name: "ronaldo",
  country: "portuguse",
  sport: 'Football'

};

let player_two = { ...player_one };

player_two["cars"] = "bmw";

player_one["gender"] = "male";

player_two["choper"] = 1;

player_three = { ...player_two };

console.log("Player One is....", player_one);
console.log("Player Two is....", player_two);

console.log("Player Three is....", player_three);




player_one["Marital_Status"] = "Married";
console.log(player_one);

console.log("Player Two is....", player_two);

player_two["houses"] = "3+";
console.log(player_two);

player_three = { ...player_two };
console.log("player Three is....", player_three);