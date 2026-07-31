//=================== MATHs =====================
console.log(Math)
//absulute values (convert -negative values in to positive value )
let negVal = -21
console.log(Math.abs(negVal))

//rund of Value 
let num2 = 4.2
console.log(Math.round(num2)) //Round of the value
console.log(Math.ceil(num2)) //round of the value alwys uper side.
console.log(Math.floor(num2)) // Rounf od the alwyas lower side

//To find minimum number in an array:
console.log(Math.min(34, 23, 6, 87, 10, 34));
console.log(Math.max(34, 23, 6, 87, 10, 34));
console.log('');

//random values
console.log(Math.random())
console.log(Math.random()*10)

//OTP kinf off thig 

let OTP = Math.random() //Give value between 0 to 1
OTP * 10 //shift one digite. 
Math.floor(OTP) + 1 //if some time we get value like .091 then floor function convert the value to o so here +1

const min = 1000
const max = 9999 //max - min to get the range of the number. 

console.log(Math.floor(Math.random() *10) * (max -min ) +min)