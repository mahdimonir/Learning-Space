//* OOP => Object Oriented Programming
// oop - class - object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
// }
//! Class using parameter properties
class CAnimal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(
      `The ${this.name}'s species is ${this.species} and his sound like: ${this.sound}`
    );
  }
}

const germanShepherd = new CAnimal("Daisy", "German Shepherds", "Howling");
const labradors = new CAnimal("Charlie", "Labradors", "Whining");
// console.log("", germanShepherd, "\n", labradors);
germanShepherd.makeSound();
labradors.makeSound();
