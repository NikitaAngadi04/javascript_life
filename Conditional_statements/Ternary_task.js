//1.Find the largest of two numbers
// let a = 25;
// let b = 40;
// let largest = a > b ? a : b;
// console.log(largest);


//2. Even/Odd with Numbers
// for (let i = 11; i <= 20; i++) {
//     let result = i % 2 === 0 ? `${i} is Even` : `${i} is Odd`;
//     console.log(result);
// }


//3.Greatest of 5 numbers
let a = 25;
let b = 40;
let c = 15;
let d = 60;
let e = 35;

let greatest = a > b ? a : b;
greatest = greatest > c ? greatest : c;
greatest = greatest > d ? greatest : d;
greatest = greatest > e ? greatest : e;

console.log("Greatest number is:", greatest);


//4. Student Result with Grade
// let marks = [95, 68, 54, 22, 76];

// for (let mark of marks) {
//     let grade = mark >= 90 ? "A"
//               : mark >= 75 ? "B"
//               : mark >= 50 ? "C"
//               : "Fail";

//     console.log(`Marks: ${mark}, Grade: ${grade}`);
// }

//5. Find Maximum of Two Numbers
// let a = [75, 18, 92, 40];
// let b = [60, 35, 88, 55];

// for (let i = 0; i < a.length; i++) {
//     let max = a[i] > b[i] ? a[i] : b[i];
//     console.log(`Maximum: ${max}`);
// }

//6.Check Login Status
// let users = [
//     { name: "Riya", login: false },
//     { name: "Kiran", login: true },
//     { name: "Anil", login: false },
//     { name: "Sneha", login: true }
// ];

// for (let user of users) {
//     let status = user.login ? "Online" : "Offline";
//     console.log(`${user.name}: ${status}`);
// }

//7.Calculate Discount
// let prices = [750, 1800, 3200, 950];
// for (let price of prices) {
//     let discount = price >= 3000 ? 25
//                   : price >= 1500 ? 15
//                   : 5;

//     console.log(`Price: ₹${price}, Discount: ${discount}%`);
// }

//8.Check Stock Availability
// let products = [
//     { name: "Monitor", stock: 8 },
//     { name: "Printer", stock: 0 },
//     { name: "Speaker", stock: 12 },
//     { name: "Scanner", stock: 0 }
// ];

// for (let product of products) {
//     let status = product.stock > 0 ? "Available" : "Out of Stock";
//     console.log(`${product.name}: ${status}`);
// }

//9.Check password strength
// let password = "hello123";
// let result = password.length >= 8
//     ? "Strong Password"
//     : "Weak Password";
// console.log(result);

//10.Use Ternary Inside While Loop
// let i = 6;

// while (i <= 15) {
//     let result = i % 3 === 0 ? "Divisible by 3" : "Not Divisible by 3";
//     console.log(`${i} → ${result}`);
//     i++;
// }

// 11.Nested Ternary with Loop
// let numbers = [8, 17, 29, 41, 55];

// for (let num of numbers) {
//     let result = num >= 50 ? "Excellent"
//                : num >= 30 ? "Good"
//                : num >= 15 ? "Average"
//                : "Poor";

//     console.log(`${num} → ${result}`);
// }