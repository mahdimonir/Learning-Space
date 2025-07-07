class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "MFRSC"
    }
}

const student1 = new Student("01", "Muna Afrin");
const student2 = new Student("02", "Samia Seddika");
const student3 = new Student("03", "Salma Khanom")
console.log(student1, student2, student3);