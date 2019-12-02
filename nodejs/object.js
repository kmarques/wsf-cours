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

String.prototype.sayHi = function() {
  console.log("hi!");
}



function Teacher(name, config) {
  let myname = name;
  this.publicName = name;
  this.conf = config;

  this.getName = function() {
    return myname.toUpperCase();
  }
};

const tech1 = new Teacher("Karl", {age: 29});

console.log(tech1.myname);
console.log(tech1.getName());
tech1.myname = "Foo";
console.log(tech1.conf.age);
console.log(tech1.myname);
console.log(tech1.getName());