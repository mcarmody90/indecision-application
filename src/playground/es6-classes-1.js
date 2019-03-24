// Setup constructor to take name and age (default 0), use in one and not in other
// getDescription - Matt Carmody is 27 year(s) old.

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} ${this.age === 1 ? "year" : "years"} old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = 'Undeclared') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return (!!this.major && this.major != 'Undeclared');
  }
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return (!!this.homeLocation);
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Matt Carmody', 1, 'Houston, TX');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting()); 