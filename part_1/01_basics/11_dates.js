let date = new Date()
console.log(date) //Not that much readable 

console.log(date.toString()) //Convert it to string. 
console.log("to-Locale-Date-String -> ", date.toLocaleDateString()) 
console.log("to-Locale-String -> ", date.toLocaleString())
console.log("to-Locale-Time-String -> ", date.toLocaleTimeString())
console.log("to-Time-String -> ", date.toTimeString())
// date is object type datatype 

// if you specify any date
let myDtae = new Date(2023, 0, 23)
console.log(myDtae.toDateString()) //Just print the Date you mentation. 