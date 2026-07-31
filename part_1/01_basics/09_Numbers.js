const score = 400;
console.log(score);
// here javaScript Automatically assign number datatype with 400.

const balance = new Number(400); //<-- here we explicetly assign number data type with 400. in number there are also some properties. 
console.log(balance)

//we can conver number to string 
console.log("Number to String")
let strNum = balance.toString()
console.log(strNum)
console.log(typeof(strNum))
console.log(strNum.length)
console.log("")

//add decimel after number
console.log(balance.toFixed(2));

//toPrecsion value 
let otherNum = 23.896
console.log(otherNum.toPrecision(3)) //<<-give precision value upto 3 digite

let num2 = 123.896 
console.log(num2.toPrecision(4)) // <<-give precision value upto 4 digite

let num3 = 1123.896 
console.log(num3.toPrecision(5)) // <<-give precision value upto 6 digite

//Number in to indian style 
let number4 = 100000000
console.log(number4.toLocaleString('en-IN')) //Number representation into Indian style 
console.log(number4.toLocaleString()) //defult it represnent into american style representation.




