/*Q.1: Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”*/
//Answer:
// var city = prompt("Enter your city");
// if(city == "Karachi"){
// document.write("Welcome to the city of lights")
// }

//===============================================================================
/*Q.2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.*/
//Answer:
// var gender = prompt("Enter gender");
// if(gender == "Male"){
// document.write("Good Morning Sir")
// };
// if(gender == "Female"){
// document.write("Good Morning Ma'am")
// };

//===============================================================================

/*Q.3.Write a program to take input color of road traffic signal
from the user & show the message according to this table:*/
//Answer:

// var trafficSignal = prompt("Enter Signal Color");
// if(trafficSignal == "Red"){
// document.write("Must Stop")
// };
// if(trafficSignal == "Yellow"){
// document.write("Ready to Move")
// };
// if(trafficSignal == "Green"){
// document.write("Move Now")
// };

//===============================================================================
    
 /*Q.4.Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”.*/   
//Answer:

// var fuel = prompt("remaining fuel in car (in litres)");
// if(fuel < 0.25){
// document.write("Please refill the fuel in your car")
// };

//===============================================================================

/*Q.5.Run this script, & check whether alert message would be
displayed or not. Record the outputs.*/
//a. 

// var a = 4;
// if (++a === 5){
// document.write("given condition for variable 'a' is true")
// };
//DISPLAYED
//----------------------------------------------------------------

//b. 

// var b = 82;
// if (b++ === 83){
// document.write("given condition for variable 'b' is true")
// };
// NOT DISPLAYED
//----------------------------------------------------------------

//c. 
// var c = 12;
// if (c++ === 13){
// document.write("condition 1 is true");
// }
//NOT DISPLAYED
//----------------------------------------------------------------

// if (c === 13){
// document.write("condition 2 is true");
// }
//DISPLAYED

// if (++c < 14){
// document.write("condition 3 is true");
// }
//NOT DISPLAYED

// if(c === 14){
// document.write("<br>condition 4 is true");
// }
//DISPLAYED
//----------------------------------------------------------------

//d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// document.write(`The cost equals ${totalCost}`);
// };
//DISPLAYED
//----------------------------------------------------------------

//e. 
// if (true){
// document.write("True")
// };
//DISPLAYED
// if (false){
// document.write("False")
// };
//NOT DSPLAYED
//----------------------------------------------------------------

//f. 
// if("car" < "cat"){
// document.write("car is smaller than cat");
// }
// DISPLAYED

//===============================================================================

/*Q.6.Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:*/
//Answer:

// var percentage = prompt("Enter your percentage and grades");
// if(percentage >= 80 ){
// document.write("Total Marks: 300", "<br> Marks Obtained: 240" , "<br>Percentage: 80%", "<br>Grade: A-One" , " <br> Remarks: Excellent")
// };

// if(percentage >= 70){
// document.write("<br><br>Total Marks: 300", "<br> Marks Obtained: 210" , "<br>Percentage: 70%", "<br>Grade: A" , " <br> Remarks: Good")
// };

// if(percentage >= 60){
// document.write("<br><br>Total Marks: 300", "<br> Marks Obtained: 180" , "<br>Percentage: 60%", "<br>Grade: B" , " <br> Remarks: You Need to improve")
// };
    
// if(percentage < 60){
// document.write("<br>Total Marks: 300", "<br> Marks Obtained: 174" , "<br>Percentage: 58%", "<br>Grade: Fail" , " <br> Remarks: Sorry")
// };

//===============================================================================

/*Q.7.Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/
//Answer:

//a.
// var secretNumber = prompt("Guess the Secret Number between 1 and 10");
// var secretNumber = 2;
// var userGuess = 2;
// if(userGuess === secretNumber){
// document.write("Bingo! Correct answer.")
// };
//----------------------------------------------------------------

//b.
// var secretNumber = prompt("Guess the Secret Number between 1 and 10");
// var secretNumber = +1;
// var userGuess = +2;
// if(userGuess !== secretNumber){
// document.write("Close enough to the correct answer.")
// };

//===============================================================================

/*Q.8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.*/
//Answer:

// var number = prompt("The given number is divisible by 3");
// if(number % 3 === 0){
// document.write(number + " is divisible by 3.");
// }

//===============================================================================

/*Q.9.Write a program that checks whether the given input is an
even number or an odd number.*/
//Answer:

// var number = prompt("Check an Even and Odd Numbers")
// if (number % 2 === 0) {
// document.write(`${number} is an even number.`)
// };
// else {
// document.write(`${number} is an odd number.`)
// };

//===============================================================================

/*Q.10.Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/
//Answer:

//a.
// var T = prompt("Takes Weather Temperature");
// if(T > 40){
// document.write("It is too hot outside.");
// }

//b.
// var T = prompt("Takes Weather Temperature");
// if(T > 30){
// document.write("The weather Today is Normal.");
// }

// //c.
// var T = prompt("Takes Weather Temperature");
// if(T > 20){
// document.write("Today's Weather is Cool.");
// }

// //d.
// var T = prompt("Takes Weather Temperature");
// if(T > 10){
// document.write("OMG! Today's Weather is so cool.");
// }

//===============================================================================

/*Q.11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/
//Answer:

// var operator = prompt("Enter the operation you want to perform (+, -, *, /, %):");
// var num1 = parseFloat(prompt("Enter the first number"));
// var num2 = parseFloat(prompt("Enter the second number"));
// var result;
// if (operator == "+") {
// result = num1 + num2;
// } 

// else if (operator == "-") {
// result = num1 - num2;
// } 

// else if (operator == "*") {
//   result = num1 * num2;
// } 

// else if (operator == "/") {
// result = num1 / num2;
// } 

// else if (operator == "%") {
// result = num1 % num2;
// } 

// else{
// document.write("not a number");
// }

// document.write("Result is " + result);
    
//===============================================================================


