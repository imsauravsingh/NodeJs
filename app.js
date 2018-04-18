// function statement
function greet(){
    console.log('hi');
}
greet();

// functions are first class
function logGreeting(fn){
    fn();
}
logGreeting(greet);

// function expression
let greetMe = function(){
    console.log('Hi Saurav!');
}
greetMe();
logGreeting(greetMe);

// use a functino expression on the fly
logGreeting(function(){console.log("Hello Gaurav!");})