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