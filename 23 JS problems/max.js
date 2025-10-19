var business = 450;
var minister = 350;
var sochib = 220;

/**if(sochib > business){
    if(sochib > minister){
        console.log("Sochib is bigger");
    }
    else{
        console.log("Minister is bigger");
    }
}
else{
    if(business > minister){
        console.log("Business is bigger");
    }
    else{
        console.log("Minister is bigger");
    }
}
*/
var max = Math.max(business, minister, sochib)
console.log(max);