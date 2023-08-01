//Task 3: Asynchronous File Handling

const fs = require('fs');
const wordCount = require('word-count');
const file = 'data.txt';

fs.readFile(file, 'utf8', (err, data) => {
    if(err){
        console.error('Error reading the file:', file);
        return;
    }

    const totalWords = wordCount(data);
    console.log('Total numbers of words in the file:', totalWords);
});