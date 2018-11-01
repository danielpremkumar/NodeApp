console.log('Starting App....');
const fs = require('fs');
const os = require('os');

const user = os.userInfo();

//fs.appendFileSync('greeting.txt','Hello World!');
fs.appendFile('greeting.txt',`Hello ${user.username}!`, (err) => {
  if (err) throw err;
  console.log('File Operation complete');
});
console.log('Closing App...');
