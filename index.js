//"use strict"

function demo(){
    console.log("I Love JS")
}
demo();

function StrictMode(){
  let names = "Mortoza Ahmed"
}
StrictMode();

let poorCountry = ["Bangladesh","Japan","Srilanka","Nepal"]
let richCountry = [...poorCountry,"Bangladesh","Japan","Srilanka","Australia"]

//console.log(richCountry);

let poorCountry1 = ["Bangladesh","Japan","Srilanka"]
let richCountry1 = ["Bangladesh","Japan","Srilanka","gfhgfdd"]

richCountry.push(poorCountry)

console.log(richCountry);

