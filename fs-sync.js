const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./Content/first.txt','utf8');
const second = readFileSync('./Content/second.txt','utf8');

console.log(`${first},${second}`);

writeFileSync('./Content/result-sync.txt',`Here is the result: ${second}, ${first}`,{flag : 'a'})