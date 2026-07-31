let score = 33
console.log(typeof(score)); //-->number

    // Convert String in to Number.
    console.log("Convert simple string --> number")
    let string_num = "55"
    let valueInString = Number(string_num);
    console.log(typeof valueInString);    //-->Number
    console.log("")

    //now converting String which is mix of Number+String
    console.log("For mix value of String+Number")
    let mix = "33abcd"
    let valInMix = Number(mix);
    console.log("The type of the MIX nuber like 23abc : ", typeof valInMix);  //--> Number
    console.log("The value of it : ", valInMix);   //--> NaN
    console.log("")

    //conver null value 
    console.log("For Null value case");
    let nallValue = null;
    let valInNull = Number(nallValue)
    console.log("Type of Null value is : ", typeof valInNull);
    console.log("The value is : ", valInNull);
    console.log("");


    // convert blooen value 
    console.log("for bloowen value");
    let blooval = true;
    let convtblooval = Number (blooval);
    console.log(typeof convtblooval);
    console.log(convtblooval);

    //Conversation
    // "33" -> 33, type number
    // "33abc" -> NaN, type Number
    // true -> 1, Number,
    // false -> o, Number

//conver number to blooean 
console.log("conver number to boolean ");
let isLogedIn = 1
let booleanIsLogedIn = Boolean(isLogedIn);
console.log(booleanIsLogedIn);
console.log();
// is value is 0 or emtyp string "" the blooena value id false.
// and if the value is not 0 and not empty string the value be true. 


// conver to string 
console.log("Convert String into Number")
let isNumber = "33"
let convIsNumber = String(isNumber);
console.log(convIsNumber);

