// Object Type - represents multiple properties.
// {
//     firstProp: "value1",
//     secondProp: "value2"
// }
//Example: 
var person = {
    name: "Rohit Shamra",
    address: "Mumbai, Maharashtra",
    age: 37,
    phone: 12345678,
    occupation: "Cricketer"
};
console.log(person);
// Error: Property 'name' does not exist on type 'object'
//console.log(person.name);
//console.log(person.address);
// We have to define what type of properties are going to be stored in the object
var person2 = {
    name: "Virat Kohli",
    address: "Delhi, India",
    age: 36,
    phone: 12345678,
    occupation: "Cricketer"
};
console.log(person2);
console.log(person2.name, "", person2.age, "", person2.occupation);
//------------------------------------------
