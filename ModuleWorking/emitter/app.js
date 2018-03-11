var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet',function(){
console.log('Someone said bla ');
});

emtr.on('greet',function(){
console.log('Greetings');
});

console.log('Hello');
emtr.emit('greet');