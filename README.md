1) What is the difference between null and undefined?

Ans: In Javascript, Undefind means a variable has been declared but has not been assigned a value yet.It is automatically assigned by Javascript.
Null, on the other hand is intentionally assigned by the developer. It represent empty or no value.

2) What is the use of the map() function in JavaScript? How is it different from forEach()?

Ans: The map() function in javascript is used to create a new array by applying a function to each element of an existing array. It returns a new array, leaving the original array unchanged. 
The different from forEach() that forEach() does not return a new array, it simply excutes a function on each element.

3) What is the difference between == and ===?

Ans: == is a loose equality oparetor. It compares values after type conversion. On the other hand === is a strict equality oparetor. It compares both value and type.

4) What is the significance of async/await in fetching API data?

And: The significance of async/ await
 a. Makes asynchronous code easier to read than .then() chain.
 b. Helps handle API data sequentially without nested callbacks.
 c. Reducess errors and improves maintainabilty.
 
5) Explain the concept of Scope in JavaScript (Global, Function, Block)?

Ans: Scope in JavaScript defines where a variable is accessible in the code. There are mainly 3 types of scopes-

Global scope: Variable declared outside any function or block. It accessiable anywhere in the code

Function scope: Variable declared inside the function and it accessible only inside the function.

Block scope: Variable declared with let or const inside {} and it acccssible only inside the block