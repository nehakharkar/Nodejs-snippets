var obj = {
 name: 'John Doe',
 greet : function(){
     console.log (`Hello ${this.name}`)
 }
}
obj.greet();
obj.greet.call({name:'Neha'});
obj.greet.apply({name:'Poo'});

//call and apply makes us change where this keyword points to
