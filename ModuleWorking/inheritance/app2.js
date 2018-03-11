var util = require ('util');
function Person(){
        this.firstname = 'Neha';
        this.lastname= 'Kharkar';

}
Person.prototype.greet = function(){
console.log('Hello'+ this.firstname +' ' + this.lastname);
};

function PoliceMan(){
    Person.call(this);
    this.badgeNumber='123';
}
util.inherits(PoliceMan,Person);
var officer = new PoliceMan();
officer.greet();