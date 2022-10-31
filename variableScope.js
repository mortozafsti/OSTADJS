
function Mynames(){
    var names = "ECMAScript6" // This is local Scope
    console.log(names);
}

Mynames();

function Mynames1(){
    var names = "ECMAScript6" // This is Global Scope
    console.log(names);
}

Mynames1();