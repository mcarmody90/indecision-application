// arguments object
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword
const user = {
    name: "Matt",
    cities: ["Spring", "Pearland", "Katy"],
    printPlacesLived() {
      return this.cities.map((city) => this.name + " has lived in " + city + "!");
    }
};
console.log(user.printPlacesLived());

// challenge area

const multiplier = {
  numbers: [5, 10, 15],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied
};
console.log(multiplier.multiply());