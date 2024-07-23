//Explicitly annotated
var userName = "Harshal"; //string data type
// userName = 12345;    //Error 
//Implicitly 
var password = "abc@123";
console.log(typeof password);
var isPresent = true;
console.log(typeof isPresent);
var userEmail = 'abc@gmail.com';
//String literals
var userDescrep = "User is software engineer and his email id is ".concat(userEmail);
console.log(userDescrep);
console.log("Index of @ from abc@gmail.com : " + userEmail.indexOf('@'));
// -------------------------------------------------------------------------------
//Intetionally value is assignes as NULL
//Type of uName variable : object
var uName = null;
console.log(typeof uName + " " + uName);
//Not initialized value: UNDEFINED
//Type of uEmail variable : undefined
var uEmail;
console.log(typeof uEmail + " " + uEmail);
// null and undefined are both FALSY values
if (uName) {
    console.log("True uName");
}
else {
    console.log("False Uname");
}
if (uEmail) {
    console.log("True uEmail");
}
else {
    console.log('False uEmail');
}
//To skip the type checking : any
var data = "This is data";
console.log(typeof data);
data = 12345;
console.log(typeof data);
//--------------------------------------------------
//#Union type
//Union type can hold variable of different types, just we have to declare it properly.
//example1:
var userId = "happy1234";
userId = 12345;
function displayId(userId) {
    console.log(userId);
    return userId;
}
displayId("User Id is: " + userId);
//example2: 
var myArr = ["Virat", "Delhi", 18, true];
console.log(myArr);
//--------------------------------
//Type : Void
// Void - Represents constant value that may be "undefined" or "null"
function myFun() {
    console.log("This function is of type void as it not returning anything");
}
//----------------------------------
//Type: never
//never - Represents value that will never occur. 
//It is used when function never return value or throws an error or abnormal execution
function myFun2() {
    throw new Error("this is error");
}
//-----------------------------------------------
//Type - unknown
//Type safe counterpart of "any"
//Used when type of value is not known
//We cannpt apply any property to "unknown" type
function myFun3() {
    return "this is myFun3()";
}
var val = myFun3();
//Gives error when used "unknown" as this 'uppercase' property is not known to unknown type
// console.log(val1.toUperCase());
var val1 = myFun3();
//No error when used "any" as type is ignored
console.log(val1.toUpperCase());
//To change 'unknown' type into 'String' type
//Here 'val' is of type unknown
var newStr = val;
console.log(typeof newStr);
//---------------------------------------------
//  tuple  - data type
// Number of elements are fixed
// Types of elements should be known and of same type
// Order should be same as of declared data types
var skill = ["programming", 400];
console.log(skill[0]);
console.log(skill[1]);
//  optional tuple
//Here 3rd data type is set as optional
var person = ["virat", 18];
//-----------------------------------
//  Enums - group of named constant values
//name of days
//syntax:
var days;
(function (days) {
    days[days["MON"] = 0] = "MON";
    days[days["TUE"] = 1] = "TUE";
    days[days["WED"] = 2] = "WED";
    days[days["THURS"] = 3] = "THURS";
    days[days["FRI"] = 4] = "FRI";
    days[days["SAT"] = 5] = "SAT";
    days[days["SUN"] = 6] = "SUN";
})(days || (days = {}));
console.log(days);
var sports;
(function (sports) {
    sports[sports["cricket"] = 0] = "cricket";
    sports[sports["football"] = 1] = "football";
    sports[sports["hockey"] = 2] = "hockey";
    sports[sports["tennis"] = 3] = "tennis";
    sports[sports["badminton"] = 4] = "badminton";
})(sports || (sports = {}));
console.log(sports);
//example:
function selectSport(value) {
    switch (value) {
        case sports.badminton:
            console.log("You selected badminton");
            break;
        case sports.cricket:
            console.log("You selected cricket");
            break;
        case sports.tennis:
            console.log("You selected tennis");
            break;
        default:
            console.log("You selected wrong sport");
    }
}
selectSport(sports.cricket);
selectSport(sports.hockey);
var country = "India";
//or
var city = "Pune";
console.log(typeof city); //string
var pass;
pass = "MSDhoni07";
pass = 12345678;
console.log(typeof pass);
//Assigning order as a type to another object
var order1;
order1 = {
    name: "Chicken Biryanai",
    price: 450,
    status: "delivered"
};
console.log(typeof order1, order1);
