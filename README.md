- 1️⃣ What is the difference between var, let, and const?
=>
    var, let and const are used to declare variables.

    Var - "Var" follows function scope. Even if declared inside any block, it can be accessed from outside the block. If you do not use value checking before declaring its value, it will show undefined without showing an error. This allows a variable to be declared repeatedly with the same name and its value to be changed repeatedly. This creates confusion, so it is no longer used today.

    Let - It follows block scope. It is widely used in modern programming. It cannot be reassigned inside the block but its value can be changed. If you try to get the value of the variable before declaring it, it will show a reference error.

    Const - It behaves like "Let", but its special feature is that the value cannot be changed.


- 2️⃣ What is the spread operator (...)?
=>
    The spread operator spreads the values of arrays and objects. It is very useful when we want to directly access the values of an array by breaking them apart. The biggest advantage is that it creates a new copy of the object, without losing the original value.


- 3️⃣ What is the difference between map(), filter(), and forEach()?
=>
    map() - It works like a loop over an array. It creates a new array by working on each value.

    filter() - It takes values from an array based on a condition. It creates a new array by combining all the elements that match the condition.

    forEach() - It is used to loop through an array and work through each element of the array. It does not return any value.

  
- 4️⃣ What is an arrow function?
=> 
    Array function is a short and advanced form of a normal function. It is called an array function because it looks like an arrow symbol "=>" when declared. It has many advantages like - it automatically retains the result, if it is in one line you don't have to write the "return" keyword.


- 5️⃣ What are template literals?
=> 
    Template literals are a modern and much more convenient way to write strings or text in JavaScript. Template literals are written with a backtick ( ` ) symbol. To insert a variable in the middle of a text, you can insert the variable or JavaScript code directly inside the ${ } symbol in the template literal. In this, you do not have to write any code to start a new line. If necessary, you can put any JavaScript expression or number inside the ${ } .
