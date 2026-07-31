//Stack and heap
// Stack Memory use in premitive dataType()
// Heap Memory use in Non-Premitive dataType()

//when you use stack memory you get a coppy of that value. if you change the the value the coppy value is changed, not the orginal one. 
//when you use the stack memory it give you the refarance of that memory location, and if you update the value the orginal value will changed.

//Premitive data type.
let nameOne = "Abhra";
let nameTwo = nameOne;
console.log(nameOne, nameTwo);

nameTwo = "Kuldeep"
console.log(nameOne, nameTwo);

//Non-Premitive dataType.
let studentOne = {
    name : "Abhra",
    roll : 71,
    branch : "CSE"
}
let studentTwo = studentOne;
console.log(studentOne, studentTwo)

studentTwo.name = "Kuldeep"
console.log(studentOne, studentTwo)
