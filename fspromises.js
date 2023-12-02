const {readFile, read, writeFile} = require('fs').promises;


const start = async() => {
    try{
        const first = await readFile('./Content/first.txt','utf8');
        const second = await readFile('./Content/second.txt','utf8');
        console.log(first,second);
        await writeFile('./Content/promisfy.txt' , `This is AWsomesf :${first},${second}`);
       
    }
    catch{
        console.log(error);
    }
    
    
}
start();
