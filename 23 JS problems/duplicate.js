var name = [3, 6, 5, 7, 4, 3, 6, 15, 5, 70, 6];
var uniqueName = [];
for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);