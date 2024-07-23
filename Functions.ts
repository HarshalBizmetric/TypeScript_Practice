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

//----------------------------------------------------------

//Type of Functions
//Full declaration of function
//(parameters) => return type
let fun: (x: number, y: number) => number = function myFun(a: number, b: number): number{
    return a+b;
};

let person: {
    firstName: string,
    lastName: string,
    getFullName: ()=> string;
}

person={
    firstName: "Rohit",
    lastName: "Sharma",
    getFullName: function () {
        return this.firstName+" "+ this.lastName;
    }
};
console.log(person.getFullName());


//Optional Parameters --> optional to pass ---> Usually set Last parameter as optional
//Required Parameters --> Must to pass

function sumOfThree(a: number, b: number, c?: number): number{
    
    if(c!== undefined){
        console.log("Adding three numbers: ", a+b+c);
        return a+b+c;
    }
    console.log("Adding three numbers: ", a+b);
    return a+b;
    
};

console.log(sumOfThree(3,4,5));
console.log(sumOfThree(4,5));


//default parameters
//here c: number = 10 is th default value
//If default value is used in between, then use 'undefined' while parsing arguments
function add(a:number, b: number, c: number = 10): number{
    let sum = a + b + c;
    console.log("Sum: ",sum);
    return sum;
};
add(10,20);


//Rest Parameters:
//Must be last parameter

function addition(a: number, b: number, ...rest: number[]): number{
    let add = a + b;
    
    rest.forEach((value) => {
        add += value;
    });
    console.log("Addition is : ", add);
    return add;
}

addition(10,20);
addition(10,20,30,40,50);


//------------------------------------