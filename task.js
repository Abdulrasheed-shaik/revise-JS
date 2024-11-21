//1. Check Voting Eligibility
var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//2. Simple Temperature Check
var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's a cool day.");
}

//3. Even or Odd Number Check

var number = 7;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//4. Check Passing Grade
var score = 60;
if (score >= 50) {
  console.log("You passed the test!");
} else {
  console.log("You did not pass the test.");
}

//5. Check Positive or Negative Number
var num = -10;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//6. Basic Discount Application
var totalAmount = 120;
var discount = totalAmount > 100 ? 10 : 0;
console.log("Discount applied:", discount);

//7. Check Multiple of 5

var value = 20;
if (value % 5 === 0) {
  console.log("The value is a multiple of 5.");
} else {
  console.log("The value is not a multiple of 5.");
}

//8. Check Driving Eligibility
var driverAge = 17;
if (driverAge >= 18) {
  console.log("Eligible to drive.");
} else {
  console.log("Not eligible to drive.");
}

//9. Simple Age Group Check
var age = 45;
if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

//10. Product Stock Availability

var stock = 5;
var purchaseQuantity = 3;
if (purchaseQuantity <= stock) {
  console.log("Order placed successfully.");
} else {
  console.log("Not enough stock available.");
}


//Slightly Tricky Snippets

//11. Calculate Total Cost with Taxes

var price = 200;
var taxRate = 0.08;
var totalCost = price + (price * taxRate);
console.log("Total Cost:", totalCost);

//12. Nested Conditions: Score Grading
var marks = 78;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

//13. Ternary Operator: Adult Check
var personAge = 21;
var status = personAge >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

//14. Logical AND Condition
var hasID = true;
var hasTicket = false;
if (hasID && hasTicket) {
  console.log("Entry allowed.");
} else {
  console.log("Entry not allowed.");
}

//15. Calculate BMI
var weight = 70; // in kg
var height = 1.75; // in meters
var bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));

//16. Restaurant Service Charge

var billAmount = 250;
var serviceCharge = billAmount >= 200 ? billAmount * 0.1 : billAmount * 0.05;
console.log("Service Charge:", serviceCharge);

//17. Logical OR Condition: Password Check

var passwordLength = 5;
if (passwordLength < 8 || passwordLength > 15) {
  console.log("Password length is not acceptable.");
} else {
  console.log("Password length is acceptable.");
}

//18. Calculate Final Price After Discount

var basePrice = 150;
var discount = basePrice > 100 ? 20 : 10;
var finalPrice = basePrice - discount;
console.log("Final Price:", finalPrice);

//19. Leap Year Check

var year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

//20. Check Driving and Drinking Age

var age = 20;
if (age >= 18) {
  if (age >= 21) {
    console.log("Eligible for driving and drinking.");
  } else {
    console.log("Eligible for driving only.");
  }
} else {
  console.log("Not eligible for driving or drinking.");
}




//Easy Snippets

//1. Simple Array of Fruits
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); 
//2. Add an Element to an Array
var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors); 
//3. Iterate Through an Array
var animals = ["Dog", "Cat", "Elephant"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//4. Access Object Properties
var person = { name: "John", age: 30, city: "New York" };
console.log(person.name); 

//5. Add a New Property to an Object

var car = { make: "Toyota", model: "Camry" };
car.year = 2022;
console.log(car); 
//6. Array Length Check
var numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
  console.log("Array has more than 3 elements.");
}

//7. Check if an Array Contains an Element

var colorss = ["Red", "black", "Blue"];
if (colorss.includes("Green")) {
  console.log("Green is in the array.");
}
else{
console.log("no values prsnt in array")
}

//8. Combine Two Arrays

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr2.concat(arr1);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//9. Check if an Object Has a Property
var student = { name: "Alice", age: 22 };
if ("age" in student) {
  console.log("Age is a property of student.");
}

//10. Simple Array Sorting
var scores = [1, 10, 40, 30];
scores.sort();
console.log(scores); 


//Slightly Tricky Snippets

//11. Nested Array Access
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// Output: 5
//12. Nested Object Access

var user = {
  name: "Mark",
  address: {
    city: "Los Angeles",
    zip: 90001
  }
};


//13. Loop Through an Object's Properties

var book = { title: "1984", author: "George Orwell", year: 1949 };
for (var key in book) {
  console.log(key + ": " + book[key]);
}

//14. Filtering an Array

var numbers = [5, 10, 15, 20];
var filtered = numbers.filter(function(number) {
  return number > 10;
});
console.log(filtered); // Output: [15, 20]

//15. Removing the Last Element of an Array
var fruits = ["Apple", "Banana", "Cherry"];
var lastFruit = fruits.pop();
console.log(fruits); 
console.log(lastFruit);

//16. Convert Object Values to Array

var car = { make: "Toyota", model: "Camry", year: 2022 };
var carValues = Object.values(car);
console.log(carValues); 
//17. Convert Array to String

var letters = ["A", "B", "C"];
var string = letters.join("-");
console.log(string);



