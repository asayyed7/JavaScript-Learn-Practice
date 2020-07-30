4 + 3;

if (4+3 === 7){
    alert("You are smart");
}

function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();

function sing(song) {
    console.log(song);
}

sing("Laa deee daaa");
sing("hellllooooo");
sing("its all good");

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard"
    } else {
        return a*b;
    }
}

multiply();

function multiply(a, b) {
        return a*b;
}

alert(multiply(3,4));