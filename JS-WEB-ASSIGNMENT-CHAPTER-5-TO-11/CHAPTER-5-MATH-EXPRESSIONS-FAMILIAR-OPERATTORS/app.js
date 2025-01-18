/*Q.1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser.*/
//Answer:
// var a = 3;
// var b = 5;
// var c = a + b;
// document.write ("The Sum of "+a+" and " + b +" is " + c + ". ");
//==================================================================================

/*Q.2.Repeat task1 for subtraction, multiplication, division &
modulus.*/
//Answer: SUBSTRACTION
// let a = 3;
// let b = 5;
// var c = a - b;
// document.write ("The Substraction of "+a+" and "+b+" is "+c+".");
//==================================================================================
//Answer: MULTIPLICATION
// let a = 3;
// let b = 5;
// var c = a * b;
// document.write ("Multiplication of "+a+" and "+b+" is "+c+".");
//==================================================================================
//Answer: DIVISION
// let a = 3;
// let b = 5;
// var c = a / b;
// document.write ("Division of "+a+" and "+b+" is "+c+". ");
//==================================================================================
//Answer: MODULUS
// let a = 3;
// let b = 5;
// var c = (a / b) *100;
// document.write ("Percentage of "+a+" and "+b+" is "+c+".");
//==================================================================================

/*Q.3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.*/
//Answer:
//a and b).
/*let mynumber = 10 + 5;
document.write("Value after variable declaration is: " + mynumber);*/
//------------------------------------------------------------------------------
//c)
// var num1;
// num1 = 14;
// var num2;
// num2 = num1;
// document.write ("Number-2 is: " +num2+  "\n <br> Number-1 is: \n"  +num1)
//------------------------------------------------------------------------------

//d)
// let mynumber = 5;
// document.write("Initial value: " + mynumber);
//------------------------------------------------------------------------------

//e)
// var num = 10;
// alert(num)
// num = num + 1;
// alert(num)
// num = num + 1;
// alert(num)
// num = num + 1;
// alert(num)
//------------------------------------------------------------------------------

//f)
// var num = 5;
// num = num + 1;
// document.write("Value after increment is: " +num);
//------------------------------------------------------------------------------

//g)
// var num = 5;
// num++;
// num++;
// num++;
// num++;
// num++;
// num++;
// num++;
// alert(num)
//------------------------------------------------------------------------------

//h)
// let myNumber = 6;
// myNumber += 7;
// document.write("Value after addition is:" +myNumber)

                            //OR
// var num1 = 6;
// var num2 = 7;
// var myNumber = num1 + num2;
// document.write("Value after addition is: " +myNumber);

//------------------------------------------------------------------------------

//i)
// let num = 13;
// num--;
// alert(num);
//------------------------------------------------------------------------------

//j)
// let myNumber = 13;
// myNumber--;
// document.write ("Value after decrement is:" +myNumber)
//------------------------------------------------------------------------------

//k)
// let myNumber = 12;
// myNumber = 12/3;
// alert(myNumber)
//------------------------------------------------------------------------------

//l)
// let myNumber = 12;
// let remainder = myNumber % 3;
// alert(remainder);

//==================================================================================

/*Q.4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output:*/
//Answer:
// var myTicket =600;
// myTicket = 600*5;
// document.write("Total cost to buy 5 tickets to a movie is: " + myTicket+ " PKR.")

//==================================================================================

/*Q.5.Write a script to display multiplication table of any
number in your browser. E.g 4*1=4 ...*/
//Answer:
/*function table(number){
for(var i=1;i<=10;i++){
var res = i*number;
document.write (`${number }  *  ${i} =  ${res} \n`);

}
}
table(4);*/
                            //OR
// var number = prompt("Enter a number to gen erate its multiplication Table");
// console.log(`Multiplication table for ${number}:`);

// for (var i = 1; i <= 10; i++){
// var result = number * i;
// console.log(`${number} * ${i} = ${result}`);
// }

//==================================================================================

/*Q.6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/
//Answer:
//a) and b)
// var celsius = 25 //FOR DEGREE SIGN press "alt +0176"
// var fahrenheit = (celsius * 9/5) + 32;
// console.log(`${celsius}°C is ${fahrenheit}°F`);

//c) and d)

// var fahrenheit = 70;
// var celsius = (fahrenheit - 32) * 5/9;
// console.log(`${fahrenheit}°F is ${celsius}°C`);

//==================================================================================

/*Q.7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables.
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/
//Answer:
//a)
// var item1 = 650;
// var quantityItem1 = 650 * 3;
// var item2 = 100;
// var quantityItem2 = 100 * 7;
// var shippingCharges = 100;
// var result = quantityItem1 + quantityItem2 + shippingCharges;
// document.write(`Total cost of your order is: ${result}`);

//==================================================================================

/*Q.8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser.*/
//Answer:

// var totalmarks = 980;
// var marksobtained = 804;
// var percentage =  804 *100 / 980;
// document.write (`Total marks: ${totalmarks}<br>`);
// document.write (`Marks obtained: ${marksobtained}<br>`);
// document.write (`Percentage: ${percentage}`);
//==================================================================================

/*Q.9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)*/
//Anwser: 

// var usDollars = 10;
// var saudiRiyal = 25;
// var pakistaniRupee = usDollars * 104.80;
// var pakistaniRupee1 = saudiRiyal * 28;
// var result = pakistaniRupee + pakistaniRupee1;
// document.write(`Total Currency in PKR: ${result}`)

//==================================================================================

/*Q.10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/

// let number = 8;
// let result = ((number + 5) * 10) / 2;
// alert(result)

//==================================================================================

/*Q.11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.

Output them to the screen like so: “They are either NN or NN
years old”.*/
//Answer:
// let currentYear = 2016;
// let birthYear = 1992;

// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;

// document.write("They are either " +age1+ " and " +age2+ " years old.");

//==================================================================================

// Q.12.The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//Answer:

// var radius = 20;
// var circumfrence =  2 * 3.142 *radius;            //2 π radius;
// console.log(`The circumfrence is: ${circumfrence}`);

// var area = 3.142 * radius * radius;
// console.log(`The area is: ${area}`)

//==================================================================================

// Q.13.The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

//Answer:
// var favSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountSnack = 3; //per day
// var restAge = maxAge - currentAge;
// var snacks = restAge * amountSnack;
// document.write(`You will need ${snacks} chocolate chip to last you until the ripe old age of ${maxAge}.`);
//==================================================================================
