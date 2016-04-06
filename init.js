var fs = require('fs');

if (!fs.existsSync('./docs')) {
  fs.mkdirSync('./docs');
}

fs.writeFileSync('./docs/0.txt');
fs.writeFileSync('./docs/1.txt');
fs.writeFileSync('./docs/2.txt');
fs.writeFileSync('./docs/3.txt');
fs.writeFileSync('./docs/4.txt');
