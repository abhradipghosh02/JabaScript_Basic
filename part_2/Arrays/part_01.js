//In array ther is not nessary that all the elements will smame. in a array you can sorte different datatypes.
//Arrays itslef its a object.
//JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on
// 
// //
//JavaScript arrays are resizable and can contain a mix of different data types. 

let arr1 = [1, 2, 3, 4, 5, "Abhra", true];
console.log(arr1)
let arr2 = ["ABhra", "Kuldeep", "Urmi"];

let arr3 = new Array(4, 56, 53, 42, 87) //Another way to declear array. 
console.log(arr3[2]) // print second index element in an array


                                                    //Array METHODES 
//1. PUSH Method (Push the element in the last of the array.)
console.log("Push method")
let newArray = [1, 2, 3, 4, 5, 6, 7, 8]
newArray.push(12)
console.log(newArray)
newArray.push(14)
console.log(newArray)

//2. POP Method ---> (Remove the last element form the array)
newArray.pop()
console.log(newArray)

//3. UNDHIFT ---> add element in the 0th index of an array
newArray.unshift(10)
console.log(newArray)

// SHIFT ---> in shift methode it remove element form the oth index
newArray.shift();
console.log(newArray)

//some othe twchnique 
console.log(newArray.includes(7))   //---> find the element 7 is present in array or not and give the answer in boolen.
console.log(newArray.indexOf(3))   // ---> Find the index of 3

// JOIN Functon 
let demoArray = newArray.join()
console.log(demoArray)     /// -----> Copy the value of newArray and store it in a string format.
console.log(typeof demoArray)


//Difference Between SLICE and SPLICE 
// Modifies original array?
// SLICE ---> ❌ No  ||Creates a shallow copy of part of an array. do slice(1, 3) include 1 and 2 not 3. 
// SPLICE ---> ✅ Yes  ||Changes the original array by removing, adding, or replacing elements. splice(1, 3) includee 1, 2 & 3 

//Slice
const fruits = ["apple", "banana", "orange", "grape"];
const result = fruits.slice(1, 3)    
console.log(result);     // ---> print the sliced Array
console.log(fruits);    // ----> the orginal remains same.

console.log("Splice")
const fruits2 = ["apple", "banana", "orange", "grape"]; 
const result2 = fruits2.splice(1, 2); 
console.log(result2)     // ---> Remove = "banana", "orange"
console.log(fruits2)    //  ---> Remain element = "apple", "grape"