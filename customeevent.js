const EventEmitter = require('events');

const customEmitter = new EventEmitter();
customEmitter.on('response',(name , id)=>{
    console.log( `data recived user: ${name}, ${id}`);
});
customEmitter.on('response',()=>{
    console.log(`some other event`);
})
customEmitter.emit('response','jhon',34);

