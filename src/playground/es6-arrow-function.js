// const square = function (x) {
//   return x * x;
// };

// // const squareArrow = (x) => {
// //   return x * x;  
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// const getFirstName = (fullName) => fullName.split(' ')[0];
// console.log(getFirstName('Matt Carmody'));

// Create an object with a method that accesses that data, use the map method.

const user = {
  name: "Matt",
  cities: ["Pearland", "Katy", "Spring"],
  printPlacesLived() {
    return this.cities.map((city) => {
      return this.name + " has lived in " + city + "!";
    });
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());








const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName("Matt Carmody"));