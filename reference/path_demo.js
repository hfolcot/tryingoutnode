const path = require('path');


// Base file name
console.log('Full file path:');
console.log(__filename); // full path
console.log('')
console.log('File name only:');
console.log(path.basename(__filename)); // file name only

// Directory name
console.log('')
console.log('Full directory path:');
console.log(__dirname); // full path
console.log('')
console.log('Folder name only:');
console.log(path.basename(__dirname)); // folder name only

// File extension
console.log('')
console.log('File extension:');
console.log(path.extname(__filename));

// Create path object
console.log('')
console.log('Create path object:')
console.log(path.parse(__filename));

// Concatenate paths
console.log('')
console.log('Join dir name with folder named test and file named hello.html');
console.log(path.join(__dirname, 'test', 'hello.html'));