const EventEmitter=require('events')
const emitter=new EventEmitter();

emitter.on('message logged',()=>{
    console.log("event listner called")
})
emitter.emit('message logged')