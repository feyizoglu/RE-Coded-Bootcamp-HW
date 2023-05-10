class Cat {
  constructor(name) {
    this.name = name;
    this.speak = function () {
      return `${this.name} says meow!`;
    };
  }
}

class Dog {
  constructor(name) {
    this.name = name;
    this.speak = function () {
      return `${this.name} says woof!`;
    };
  }
}

class Bird {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.speak = function () {
      if (this.gender == "male") {
        return `It's me! ${this.name}, the parrot!`;
      }
      return `${this.name} says squawk!`;
    };
  }
}
