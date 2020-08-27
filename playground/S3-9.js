const fs = require('fs');

// fs.writeFileSync('notes.txt', 'some initial text');

fs.appendFileSync('notes.txt', 'appended text');
