//* static
class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

console.log(Counter.increment()); // 0 -> 1
console.log(Counter.increment()); // 1 -> 2
console.log(Counter.increment()); // 2 -> 3
console.log(Counter.decrement()); // 3 -> 2
console.log(Counter.decrement()); // 2 -> 1
console.log(Counter.increment()); // 1 -> 2
