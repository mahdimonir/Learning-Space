class CUser {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} ghonta ghumay!`);
  }
}

class CStudent extends CUser {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

class CTeacher extends CUser {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} sir daily ${numOfHours} ghonta Class ney!`);
  }
}

const student1 = new CStudent("Karim", 18, "Chattogram", 41);
student1.getSleep(13);
const teacher1 = new CTeacher("Harun", 31, "Chattogram", "Senior Teacher");
teacher1.takeClass(5);

console.log("", { student1 }, "\n", { teacher1 });
