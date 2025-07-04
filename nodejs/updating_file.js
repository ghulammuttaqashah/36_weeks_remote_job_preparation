const fs = require('fs');

fs.appendFile('data.txt', '\nNew line of text.', (err) => {
    console.log('File updated (appended)!');
});