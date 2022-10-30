//"use strict"

function demo(){
    console.log("I Love JS")
}
demo();

function StrictMode(){
  let names = "Mortoza Ahmed"
}
StrictMode();

let poorCountry = ["Bangladesh","Japan","Srilanka"]
let richCountry = [...poorCountry,"Bangladesh","Japan","Srilanka"]

//console.log(richCountry);

let poorCountry1 = ["Bangladesh","Japan","Srilanka"]
let richCountry1 = ["Bangladesh","Japan","Srilanka"]

richCountry.push(poorCountry)

console.log(richCountry);

