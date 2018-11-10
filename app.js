console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log('Result :' + notes.add(9,-5));
console.log(_.isString(notes.add(9,-5)));
console.log(_.uniq([2,2,3,2,3,'Daniel','Daniel']));
//fs.appendFileSync('greeting.txt','Hello World!');
// fs.appendFile('greeting.txt',`Hello ${user.username}!. You are ${notes.age}.`, (err) => {
//   if (err) throw err;
//   console.log('File Operation complete');
// });
// console.log('Closing App...');
