const {createReadStream} = require('fs');

const stream = createReadStream('./Content/promisfy.txt',{highWaterMark:1000});

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(error)=>{console.log(error)});

