class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('Hello');
  }
  display() {
    return "Je suis " + this.name;
  }
}
const person1 = new Person("Toto");
class Student extends Person {
  constructor(name, prom) {
    super(name);
    this.prom = prom;
  }
  state = "accepted";

  display() {
    return super.display() + " de la promo " + this.prom;
  }
}
const student1 = new Student("Foo", 2019);
console.log(student1.__proto__.hello());
console.log(student1.display());
student1.hello();
console.log(student1.state);

console.log(person1.display());

String.prototype.sayHi = function() {
  console.log("hi!");
}

"test".sayHi();