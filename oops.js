function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
var john= new Person('John','Doe');
console.log(john.firstname);

Person.prototype.greet = function(){
    console.log('Hello'+this.firstname+' '+this.lastname);
};
john.greet();

console.log(john.__proto__);