var firstName = prompt("What is your first name");
var lastName = prompt("What is your last name");
var age = prompt("What is your age");

var fullName = firstName + " " + lastName;

var thisYear = new Date().getFullYear();

var daysAlive = age * 365 + (age /4);

console.log("Name: " + fullName);
console.log("Age: " + age + ". You've been alive for: " + daysAlive + " days.");
console.log("The year is: " + thisYear);