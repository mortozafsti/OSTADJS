
function calculation(a,b,...Number){

    let sum = 0;
    for(let i of Number){
        sum = sum+i;
    }
    console.log(sum);
}
calculation(10,20,1,2,3,4,5,6)