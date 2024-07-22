//Explicitly annotated
let userName: string = "Harshal";   //string data type
// userName = 12345;    //Error 

//Implicitly 
let password = "abc@123";
console.log(typeof password);

let isPresent = true;
console.log(typeof isPresent);

let userEmail  = 'abc@gmail.com';
//String literals
let userDescrep = `User is software engineer and his email id is ${userEmail}`;

console.log(userDescrep);
console.log("Index of @ from abc@gmail.com : "+userEmail.indexOf('@'));

// -------------------------------------------------------------------------------

//Intetionally value is assignes as NULL
//Type of uName variable : object
let uName = null;
console.log(typeof uName + " "+ uName);

//Not initialized value: UNDEFINED
//Type of uEmail variable : undefined
let uEmail;
console.log(typeof uEmail + " "+ uEmail);

// null and undefined are both FALSY values

if(uName){
    console.log("True uName");
}else{
    console.log("False Uname");
}

if(uEmail){
    console.log("True uEmail");
}else{
    console.log('False uEmail');
}

//To skip the type checking : any

let data: any = "This is data";
console.log(typeof data);
data = 12345;
console.log(typeof data);

//--------------------------------------------------

//#Union type
//Union type can hold variable of different types, just we have to declare it properly.
//example1:
let userId: (number | string) = "happy1234";
userId = 12345;

function displayId(userId: string | number): string | number{
    console.log(userId);
    return userId;
}
displayId("User Id is: "+ userId);

//example2: 

let myArr: (string | number | boolean)[] = ["Virat", "Delhi", 18, true];
console.log(myArr);

//--------------------------------

//Type : Void
// Void - Represents constant value that may be "undefined" or "null"
function myFun(): void{
    console.log("This function is of type void as it not returning anything");
}

//----------------------------------

//Type: never
//never - Represents value that will never occur. 
//It is used when function never return value or throws an error or abnormal execution

function myFun2(): never{
    throw new Error("this is error");
}

//-----------------------------------------------

//Type - unknown
//Type safe counterpart of "any"
//Used when type of value is not known
//We cannpt apply any property to "unknown" type
function myFun3(){
    return "this is myFun3()";
}

let val: unknown = myFun3();
//Gives error when used "unknown" as this 'uppercase' property is not known to unknown type
// console.log(val1.toUperCase());

let val1 : any = myFun3();
//No error when used "any" as type is ignored
console.log(val1.toUpperCase());


//To change 'unknown' type into 'String' type
//Here 'val' is of type unknown
let newStr : string = val as string;
console.log(typeof newStr);
