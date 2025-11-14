//* OOP => instance of type guard / type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} sleep ${numOfHours} hours a day.`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} reads ${numOfHours} hours a day.`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} sir take class ${numOfHours} hours a day.`);
  }
}

//! instanceof

//? function guard
const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(8);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(10);
  }
};

const person1 = new Person("Akib");
const teacher1 = new Teacher("Abid");
const student1 = new Student("Piyash");

getUserInfo(person1);
getUserInfo(teacher1);
getUserInfo(student1);
