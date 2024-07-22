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
//Ordered list to data is defined as array
//Syntax
// let arrayName: type[];
var num = [10, 20, 30, 40.25, 50];
console.log(num);
console.log("value at idx 1 (num[1]): " + num[1]);
var friends = [
    "Vinayak",
    "Adinath",
    "Yash",
    "Gopal",
    "Rushi"
];
console.log(friends);
//----------------LOOPS---------------
//for-each method
friends.forEach(function (name) {
    console.log(name);
});
console.log(friends.length);
friends.forEach(function (value, index) {
    console.log(index, value);
});
console.log("----------");
//for-loop
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
console.log("----------");
//Push new item in the array and do every item in upperCase
friends.push("Pragati");
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase());
}
console.log(friends.length + " || Type of friends array:" + typeof friends);
//Join method joins the every items of the array in string format
var joinArray = friends.join(); //by default comma-seperated string
console.log(joinArray);
console.log(friends.join("---"));
// Map Method --- have a callback function and return a value array
var newFriends = friends.map(function (value) {
    console.log(value);
    return value.toUpperCase();
});
console.log(newFriends);
