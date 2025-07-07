class Parent{
    constructor(){
        this.relationsType = "Whome I did like";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.relationsType + " her name is " + this.name
    }
}
const baby = new Child("Sadia");
const baby2 = new Child("Lamia");
console.log(baby);
console.log(baby2);
console.log(baby2.getFullName());