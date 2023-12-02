
const {readFile, read, writeFile} = require('fs');

const util = require('util');
const readFilePromise =util.promisify(readFile);
const writeFilePromise =util.promisify(writeFile);




const start = async() => {
    try{
        const first = await readFilePromise('./Content/first.txt','utf8');
        const second = await readFilePromise('./Content/second.txt','utf8');
        console.log(first,second);
        await writeFilePromise('./Content/promisfy.txt' , `This is AWsome :${first},${second}`);
       
    }
    catch{
        console.log(error);
    }
    
    
}
start();

/* const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        
        })
    })
} */


/* getText('./Content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err)); */