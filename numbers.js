
//? How numbers are created in stack and heap memory -

let num1 = 123;
let num2 = new Number(123);
let num3 = new Number(123);

console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num3, typeof num3);

console.log(num1 == num2);
console.log(num2 == num3);


/*

Here, num1 is primitive- created in stack memory with value 123.
         num2 and num3 are non-primitive(object) - created in heap memory with address of 
         different memory locations as both are created using new keyword, so will take new memory in heap.

Whenever we compare number with String/Boolean/Object then these are converted into number before comapison.
so, when  num1 is compared to num2 then num2(object) is converted to number and then compared to num1.
the type converted value of num2 is '123' which is same as value of num1, so result is true.

When we compare string with string, boolean with boolean or object with object then they are directly compared.
so, when num2(object) is compared with num3(object) then they are compared directly as
both are of same datatype and num2 has value of memory location where it is created in heap,
similarly num3 has value of memory location where it is created in heap.
These two address are not equal to each other in value, so result is false.

*/







