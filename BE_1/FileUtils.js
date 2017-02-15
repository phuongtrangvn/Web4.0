var fs = require('fs');

function readfile(file, callback) {
  if(fs.existsSync(file)) {
    try {
      callback(fs.readFileSync(file).toString().split('\r\n'));
    }
    catch(err) {
      callback(err);
    }
  }
  else {
    console.log("File does not exist !!!");
  }
}

function writefile(file, data, callback) {
  fs.appendFile(file, data, callback);
}

module.exports = {
  readfile,
  writefile
}
