const {readFile,writeFile} = require('fs');

readFile('./Content/first.txt','utf8', (err,result)=>{
    if(err){
        return;
    }
    const first = result;
    readFile('./Content/second.txt','utf-8',(err,result)=>{
        if(err){
            return;
        }
        const second = result;
        writeFile('./Content/result-Async.txt',`Here is the result: ${second}, ${first}`
        ,(err,result)=>{
            if(err){
                return;
            }
            console.log(result);
        } )
    }
            )
})