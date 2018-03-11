//function statement
function greet(){
    console.log('hi');
}
greet();


//functions are firstclass
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var GreetMe =function(){
    cosole.log('Hi tom');
}
GreetMe();

//its still first class
logGreeting(GreetMe);

//use function expression on th fly
logGreeting (function(){
    
    console.log('Hello tom');
});