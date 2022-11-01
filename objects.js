var billGates={shirt:true,shirtColor:"offWhite",smile:true,swatter:true,swatterColor:"gray",chosma:true};
console.log(billGates['shirtColor'])
var billGatesPro={
    shirt:{
        color:"offWhite",
        Quality:"good",
        price:"200USD"
    },
    swatter:{
        color:"gray",
        Quality:"good",
        price:"300USD",
        warm:"best"
    },
    face:{
        smiling:"Yes",
        chosma:"Yes",
        teath:"white->big"
    }

}
console.log(billGatesPro['swatter']['price']);
