
//? There are various methods that can be applied to numbers -

//* toFixed()  -  Returns a "string" of numbers written with a number of decimals
// we can specify how many digits we want after our decimal

let num = 123.45;
console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(3));
console.log(typeof num.toFixed(0));



//* toPrecision()  -  Returns a "string" of numbers written with a specified length
// we can specify upto how many digits we want our number

let num5 = 230;
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));
console.log(num.toPrecision(4));
console.log(num.toPrecision(5));
console.log(typeof num.toPrecision(6));
// it will return number in exponential form if no. of digits specified is less than total digits before decimal.



//* toExponential()  -	Returns a "string" of numbers written in exponential notation.
//  A parameter defines the number of characters behind the decimal point.

let num6 = 345.68;
console.log(num6.toExponential(1));
console.log(num6.toExponential(2));
console.log(num6.toExponential(3));
console.log(num6.toExponential(4));
console.log(num6.toExponential(5));
console.log(typeof num6.toExponential(6));
//  it will round off number according to the number of digits we want after decimal in exponential form.


//* toString()	-  Returns a number as a string

console.log(num6.toString(), typeof num6.toString());





