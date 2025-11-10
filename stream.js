const fs = require('fs');

const readStream = fs.createReadStream('data.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) => {
  console.log('--- New Chunk ---');
  writeStream.write(chunk);
});

readStream.on('end', () => {
  console.log('File copied successfully!');
});
