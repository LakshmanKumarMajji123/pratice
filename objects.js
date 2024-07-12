/**objects is nothing but key & value pairs */

let student = {

  Name : 'Majji Shanmukha Vardhan',
  Age : 17,
  Gender: "Male",
  Address: "Yeleswaram"

};

//for-in which access the index/keys
for(let details in student){
  console.log(details, ": ",  student[details]);
}


let members = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i of members){
  if(i == 8){
    break;
  }

  console.log(i);
}