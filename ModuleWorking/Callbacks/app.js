function greet(callback){
    console.log('HI');
   
    var data = {
        name : 'Neha kharkar'
    };
    callback(data);
}
greet(function(){
console.log('callback is invoked');
console.log(data);
});
greet(function(){
console.log('a different callback is invoked');
console.log(data.name);
});