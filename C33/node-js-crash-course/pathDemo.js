import path from 'path';

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath)); // gives just basesname which is the filename

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

import url from 'url'
const __filename = url.fileURLToPath(import.meta.url); // file://filepath
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join()
// creates a file path with given parameters with correct delimiters
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);