const cricketer = {

  Name: "Virat Kohli",
  Age: 35,
  Designation: "Right-handed-batsmen",
  Odi_ranking: 1,
  Hundreds: 49,
  Fifties: "50+",
  Formats: "T20, Odi, Test",
  isLoggedIn: false,
  isLoggeOut: true,


  //Arrayof objects
  Advertisements: [

    { Title: "clinicPlus", Actress: "Anushka Sharma" },
    { Title: "Peposodent", Actress: "janiliya" }

  ],

  //Method
  SocailMedia: function () {

    console.log("Instagram, Facebook, Twitter");
  },

  //To access array of objects first make a method 
  AllElements: function () {

    this.Advertisements.forEach((each_object) => {

      console.log(each_object);
    })
  },

  login: function () {

    this.isLoggedIn = true;
    return `login----${this.isLoggedIn} ---- ${this.Designation}`;
  },
  logout: function(){
   this.loggedOut = false;
    return `logout----${this.isloggedOut} ----${this.Name}`;
};


//console.log(cricketer);

cricketer.AllElements();

console.log(cricketer.login());


for (let all_details in cricketer) {

  console.log(all_details + ": " + cricketer[all_details]);

}

