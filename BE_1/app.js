var fUtils = require('./FileUtils');
var map = new Map();

if (process.argv.length < 4) {
  console.log('Please enter 2 filename !!!');
  process.exit(-1);
}

fUtils.readfile(process.argv[2], (data)=>{
  for (line of data){
    if (line === '') break;
    var arr = line.split(' ');
    var wordStatus = map.get(arr[0]);
    var number = parseInt(arr[1]);
    // console.log(word);
    // console.log(number);
    if (wordStatus == undefined ) {
      map.set(arr[0], number);
    }else {
      number = number + wordStatus;
      map.set(arr[0], number);
    }
  }

  for (let [key, value] of map.entries()){
    fUtils.writefile(process.argv[3], `${key} ${value}\r\n`, (err) => {
           console.log(err || 'Added !!!');
    });
  }
});
