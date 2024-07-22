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