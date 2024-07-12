/**Generally we have Arrays which stores multiple values together of a same datatype .like age, products ony
 * one type of data only but "object literals" which stores multiple types of data like nunbers, string, booleans
 * Also it tells us "propeties & methods"
 */

const user = {

  Name: "Rakesh Naik",
  Age: 32,
  designation: "software engineer",
  organization: "KMPG",
  isLoggedIn: "false",

  //methods :- functin which is attached to something and perfom some action ex: example.toUpperCase()
  login: function () {

    return this.isLoggedIn; //this refers the object "user"
    //simply u access the properties in object "user" then must mention "this" keyword 
  },

  logout: function (a, b) {
    let c;
    return c = a + b;
  }


};

//to access the details in the objet by accesssing the "keys"

user["phonenumber"] = 9999999999; //to add the one more key 



for (let details in user) {

  if (details == user.login) {
    continue;
  }
  console.log(details, ":", user[details]);
}


console.log(user.login()); //to access the "method"
console.log(user.logout(100, 2000));


console.log(user.organization);

let key = "designation";  //to take input from the user to see the "particular key value"
console.log(user[key]);

console.log(this); //this is "window" object.
