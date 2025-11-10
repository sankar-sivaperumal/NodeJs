const fs = require('fs');

// Write file
fs.writeFileSync('data.txt', 'Hello Node.js!');

// Read file
const content = fs.readFileSync('data.txt', 'utf8');
console.log(content);

// Append data
fs.appendFileSync('data.txt', '\nLearning FS module.');

// Delete file
fs.unlinkSync('data.txt');
