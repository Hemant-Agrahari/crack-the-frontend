// call()
const employee = {
  name: "Hemant",
  role: "Frontend Developer"
};

function getDetails(company) {
  return `${this.name} works as ${this.role} at ${company}`;
}

console.log(getDetails.call(employee, "Globalvox Venture"));

// apply()
const student = {
    name: "Rahul",
    grade: "A"
};

function getStudentDetails(school, year) {
    return `${this.name} has achieved grade ${this.grade} in ${year} at ${school}`;
}

console.log(getStudentDetails.apply(student, ["Sunrise High School", 2023]));

// bind()
const person = {
    name: "Amit",
    age: 30
}

function introduce(city, country) {
    return `My name is ${this.name}, I am ${this.age} years old and I live in ${city}, ${country}.`;
}

const introducePerson = introduce.bind(person, "New York", "USA");
console.log(introducePerson());