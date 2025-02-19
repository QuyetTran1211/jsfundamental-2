'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to prototype
// // 4. Function automatically return {}

// console.log(jonas instanceof Person);

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Coding Challange #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);
// console.log(car2);

// car1.accelerate();
// car1.brake();

//---------------ES6 Class----------------

// Class Expression
// const PersonCl = class {};

// Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Methods
//   // Methods will be added to .prototype property

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// // 1. Classes are Not hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in stric mode

// const walter = new PersonCl('Walter White', 1956);

// const account = {
//   owner: 'Jonas',
//   movement: [200, 530, 120, 300],

//   get lastest() {
//     return this.movement.slice(-1).pop();
//   },

//   set lastest(mov) {
//     this.movement.push(mov);
//   },
// };

// console.log(account.lastest);

// account.lastest = 50;

// console.log(account.movement);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Steven', 1986);
// steven.calcAge();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return `${this.make} going at ${this.speed / 1.6} mi/h`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, currentSpeed) {
//   this.make = make;
//   this.currentSpeed = currentSpeed;
// };

// const ElectricCar = function (make, currentSpeed, charge) {
//   Car.call(this, make, currentSpeed);
//   this.charge = charge;
// };

// ElectricCar.prototype = Object.create(Car.prototype);

// ElectricCar.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`charge to ${this.charge}%`);
// };

// ElectricCar.prototype.accelerate = function () {
//   this.currentSpeed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`
//   );
// };

// ElectricCar.prototype.brake = function () {
//   this.currentSpeed -= 5;
//   console.log(
//     `${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new ElectricCar('Tesla', 120, 23);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.accelerate();

// -------- Inheritance Between Classes vs ES6 Classes--
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Methods
//   // Methods will be added to .prototype property

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there ✋');
//   }
// }

// class SudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and O study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years oldm bvut as a student i feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new SudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// ----- Inheritance between "classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// ---- Another Class Example ------------

// Public fields
// Private fields
// Public method
// Private methods

class Account {
  // 1- Public fields
  locale = navigator.language;

  // 2 - Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  widthdrawl(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) this.deposit(val);
    console.log(`Loan approved`);
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
// console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

// acc1.deposit(250);
// acc1.widthdrawl(140);
// acc1.requestLoan(1000);
// acc1._approveLoan(1000);
// console.log(acc1);

// console.log(acc1.#movements);

// -------------- Chaining Methods--------------//
// acc1
//   .deposit(300)
//   .deposit(500)
//   .widthdrawl(35)
//   .requestLoan(25000)
//   .widthdrawl(4000);
// console.log(acc1.getMovements());

// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

class EVCl extends CarCl {
  _charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this._charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h and charge is ${this._charge}%`
    );
    return this;
  }

  brake() {
    this.speed -= 15;
    console.log(
      `${this.make} going at ${this.speed} km/h and charge is ${this._charge}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this._charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

console.log(
  rivian.chargeBattery(88).accelerate().brake().accelerate().accelerate()
);
// console.log(rivian.);
// console.log(rivian.);
// console.log(rivian);
// console.log(rivian);
