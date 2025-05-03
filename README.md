# 🔢 JavaScript Numbers: Primitives, Objects & Methods

Welcome to the JavaScript Numbers repository!

This repo helps you understand how numbers work in JavaScript — including the difference between primitive and object numbers, and a comprehensive list of useful number methods.

## 📌 Topics Covered

✅ Primitive Numbers vs Number Objects


🧠 Type Coercion and typeof


📐 Number Properties

🛠️ Common Number Methods

🔍 Primitive vs Object Numbers


### ✅ Primitive Number


let a = 42;

console.log(typeof a); // "number"


### 🧱 Object Number


let b = new Number(42);

console.log(typeof b); // "object"


#### 🧠 Note: Use primitive numbers in most cases. Object numbers can lead to unexpected behavior and are rarely needed.


### 🛠️ Useful Number Methods

toString()	Converts number to string	

toFixed(n)	Rounds to n decimals (returns a string)	

toPrecision(n)	Formats to n significant digits	

isFinite()	Checks if value is a finite number	



### 🙌 Contributing

Found an interesting method or edge case? Feel free to open an issue or pull request!
