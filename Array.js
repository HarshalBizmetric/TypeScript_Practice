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
// Reverse the array elements
console.log(friends.reverse());
// Union type array
var mixed;
mixed = ["one", "two", 3, 4];
console.log(mixed);
mixed.forEach(function (value) {
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed());
    }
});
