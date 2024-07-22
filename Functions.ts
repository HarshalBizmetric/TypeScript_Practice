//Functions: Set of statements written for doing a particular task repeatedly. 
//In TypeScript it is important to define parameters and return type of functions

//Syntax
// function nameOfFunction(abc: type, b: type){
//     //Statement
    //return type
// }


//Return type : void
//Input param1 type: no input params
function hi(){
    console.log("Hi, Rohit Hitman Sharma 🏏");
}
hi();


//Return type : number
//Input param1 type: number
//Input param2 type: string
function thankYou(rs: number, name: string): number{
    document.writeln(`Hello ${name}, How are you doing brother? </br>`);
    console.log(`Hello ${name}, HOw are you doing brother ?`)
    return rs;
}
thankYou(18, "Virat");
thankYou(45, "Rohit Shamra");

//-----------------------------------

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