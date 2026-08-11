//1.Find the largest of two numbers
let a = 25;
let b = 40;
let largest = a > b ? a : b;
console.log(largest);


//1. Even/Odd with Numbers
for (let i = 11; i <= 20; i++) {
    let result = i % 2 === 0 ? `${i} is Even` : `${i} is Odd`;
    console.log(result);
}

//2. Find Positive, Negative, or Zero
let numbers = [25, -12, 0, 19, -45, 7];

for (let num of numbers) {
    let result = num > 0 ? "Positive"
               : num < 0 ? "Negative"
               : "Zero";

    console.log(`${num} → ${result}`);
}

//3. Student Result with Grade
let marks = [95, 68, 54, 22, 76];

for (let mark of marks) {
    let grade = mark >= 90 ? "A"
              : mark >= 75 ? "B"
              : mark >= 50 ? "C"
              : "Fail";

    console.log(`Marks: ${mark}, Grade: ${grade}`);
}

//4. Find Maximum of Two Numbers
let a = [75, 18, 92, 40];
let b = [60, 35, 88, 55];

for (let i = 0; i < a.length; i++) {
    let max = a[i] > b[i] ? a[i] : b[i];
    console.log(`Maximum: ${max}`);
}

//5.Check Login Status
let users = [
    { name: "Riya", login: false },
    { name: "Kiran", login: true },
    { name: "Anil", login: false },
    { name: "Sneha", login: true }
];

for (let user of users) {
    let status = user.login ? "Online" : "Offline";
    console.log(`${user.name}: ${status}`);
}

//6.Calculate Discount
let prices = [750, 1800, 3200, 950];

for (let price of prices) {
    let discount = price >= 3000 ? 25
                  : price >= 1500 ? 15
                  : 5;

    console.log(`Price: ₹${price}, Discount: ${discount}%`);
}

//7.Check Stock Availability
let products = [
    { name: "Monitor", stock: 8 },
    { name: "Printer", stock: 0 },
    { name: "Speaker", stock: 12 },
    { name: "Scanner", stock: 0 }
];

for (let product of products) {
    let status = product.stock > 0 ? "Available" : "Out of Stock";
    console.log(`${product.name}: ${status}`);
}

//8.Check Employee Bonus Eligibility
let employees = [
    { name: "Rohit", salary: 40000, experience: 5 },
    { name: "Meena", salary: 28000, experience: 2 },
    { name: "Arjun", salary: 35000, experience: 1 }
];

for (let emp of employees) {
    let bonus = emp.experience >= 3 ? "Eligible" : "Not Eligible";
    console.log(`${emp.name}: ${bonus}`);
}

//9.Use Ternary Inside While Loop
let i = 6;

while (i <= 15) {
    let result = i % 3 === 0 ? "Divisible by 3" : "Not Divisible by 3";
    console.log(`${i} → ${result}`);
    i++;
}

//10.Nested Ternary with Loop
let numbers = [8, 17, 29, 41, 55];

for (let num of numbers) {
    let result = num >= 50 ? "Excellent"
               : num >= 30 ? "Good"
               : num >= 15 ? "Average"
               : "Poor";

    console.log(`${num} → ${result}`);
}