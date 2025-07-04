const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  console.log(data);
});

console.log('Reading file...');