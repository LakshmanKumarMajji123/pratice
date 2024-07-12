let first_num = 100; //global declaration

if (first_num >= 100) {

  let b = 200; //local 

  if (first_num < b) {
    console.log("it's true", first_num, "is", "less than ", b);
  }


  let c = 500; //local

  if ((b > c)) {

    console.log("true");
  } else {

    console.log("false");
    var d = 1000;  //by put let instead of "var" it works bcz it doesn't have any scopes like global and local

    if ((d > first_num) && (d > b) && (d > c)) {
      console.log(d, "is greater than among all the number....", first_num, b, c);
    }
  }


  if (first_num <= 3000) {

    let e = 4000;

    console.log(first_num + e + b + c + d);  //it shows an error
  }
}

//console.log(first_num, b, c, d, e);   it shows an error