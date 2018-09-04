class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name}!`;
  }

  getDesciption() {
    return `Hi I am ${this.name} and I am ${this.age} years old!`;
  }
}
// person class

class Student extends Person {
  constructor(name, age, major = 'Not Provided') {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDesciption() {
    let description = super.getDesciption();

    if (this.hasMajor()) {
      description += ` I have a major on ${this.major}`;
    }

    return description;
  }
}
// student class

class Traveller extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }

  hasLocation() {
    return !!this.home;
  }

  getGreeting() {
    let description = super.getGreeting();

    if (this.hasLocation()) {
      description += ` I am from ${this.home}`;
    }

    return description;
  }
}
// traveller class

// const me = new Student('Ujjwal Dahal', 25, 'Computer Science');
// console.log(me);
// console.log(me.getGreeting());
// console.log(me.getDesciption());

// const other = new Student();
// console.log(other);
// console.log(other.getDesciption());

const hiker = new Traveller('Diwash', 23, 'Manang');
console.log(hiker);
console.log(hiker.getGreeting());

const hiker2 = new Traveller('Ujjwal', 35, 'Jhamsikhel');
console.log(hiker2.getGreeting());
