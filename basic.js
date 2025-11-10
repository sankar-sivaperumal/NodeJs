// app.js
console.log("Welcome to Node.js basics!");

// Using global object
console.log(__dirname);  
console.log(__filename); 


function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Developer");
