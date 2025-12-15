const person = {
  name: "Hemant"
};

function greet(city, country) {
  console.log(`Hello, my name is ${this.name} from ${city}, ${country}`);
}

// call: arguments passed individually
greet.call(person, "Delhi", "India");

// apply: arguments passed as an array
greet.apply(person, ["Delhi", "India"]);

// bind: returns a new function with fixed this
const greetHemant = greet.bind(person, "Delhi", "India");
greetHemant();
