var speech = "I am a good persone. I don't snore at night. ";
var count = 0;
for(var i = 0; i < speech.length; i++){
    var characters = speech[i];
    if(characters == " "){
        count++;
    }
}
console.log(count);