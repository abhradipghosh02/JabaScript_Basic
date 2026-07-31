let name = "abhra"
let count = 12
//String interpolation.
console.log(`My name is ${name}, & in my github there are ${count} repo`)

//Tofind the position of the charactor.
name = "Abhradip-Ghosh"
console.log('Charactor in 2nd index ',name.charAt(2));
console.log('In name Abhra charactor  "r" is in index : ', name.indexOf('r'));

//SubString.
const newString = name.substring(0,5); // 0 to before index 5, index 5 not include
console.log(newString);
let revName = name.slice(-13 , -1) //Study more about this -(negative index)
console.log(revName);

//trim methode
console.log("");
let random = "       random        " //<-- with space 
let name2 = "kuldeep ghosh"
console.log(random); 
console.log(random.trim()); // Remove all the spaces just the content without space 
console.log(name2.trim());  // So trim() methode remove just space form the start and end position. 
console.log("")

//Replace 
const url = "abhradip.in"
console.log(url.replace(".in", ".netlify.app"));  //its do not change the main string just display the replece result. if you wnat to store the replaced data then you need to stroe the value in a veriable.
//to find is some word is include in my string or not and get true or false result 
console.log(url.includes(".in"));
console.log(url.includes(".netlify.app"));

//Splite 
let discription = "Abhradip CSE 71 Kolkata"
console.log(discription.split(" ")); //Splite the string basis on the space. 

