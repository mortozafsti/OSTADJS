
function Mynames(){
    var names = "ECMAScript6" // This is local Scope
    console.log(names);
}

Mynames();

var names = "ECMAScript6" // This is Global Scope
function Mynames1(){
    console.log(names);
}

Mynames1();

var i;
for(i=1; i<10; i++){
    console.log(i);
}