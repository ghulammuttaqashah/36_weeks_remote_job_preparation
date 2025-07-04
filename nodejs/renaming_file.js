const fs = require('fs');

fs.rename('data.txt', 'newname.txt', (err) => {
    console.log('File renamed!');
});
