const fs = require('fs');
fs.writeFileSync('data.txt', 'Hello Node!');
fs.readFile('data.txt', 'utf8', (err, data) => {
  console.log(data);
});

console.log('Reading written file...');