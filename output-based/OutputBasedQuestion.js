// Question 1 These arrays of object ypu have to make group city wise

import { json } from "stream/consumers";

const users = [
  { name: "Hemant", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Amit", city: "Delhi" },
  { name: "Neha", city: "Pune" },
  { name: "Riya", city: "Mumbai" },
];

const groupByCity = (users) => {
  return users.reduce((acc, user) => {
    (acc[user.city] = acc[user.city] || []).push(user);
    return acc;
  }, {});
};

console.log(groupByCity(users));
// {
//   Delhi: [
//     { name: "Hemant", city: "Delhi" },
//     { name: "Amit", city: "Delhi" }
//   ],
//   Mumbai: [
//     { name: "Rahul", city: "Mumbai" },
//     { name: "Riya", city: "Mumbai" }
//   ],
//   Pune: [
//     { name: "Neha", city: "Pune" }
//   ]
// }

//Question 2 conver number to array
let number = 123456789;
const arr = [...(number + "")];
console.log(arr);
//["1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Question 3
let str = "JS";
json.stringify(str === str);
//false
// Reason: because stringify add '' before and after the string so it become 'JS'==='JS' which is false

// Question 4
function test(a, a) {
  console.log(a);
}
test(3);
// Output:undefine

// Question 5
let r = [10, 34, 89][(1, 2, 3)];
console.log(r);
//Output:89
// Reason: But due to how the engine optimizes constant expressions in this case, it resolves to the last valid element, which is 89.

// Question 6
const check = (...arg) => {
  for (let x of arg) {
    if (typeof x !== "number") {
      throw new Error("Invalid Number");
    }
  }
};

function add(n1, n2) {
  check(n1, n2);
  return n1 + n2;
}

add(2, "3");

// Question 7
const arr1 = [1, 2, 3,4,5];
//Filter odd numbers
//square each number
//given 2 posible solutions
arr1.filter((num)=>num%2 === 0).map((nu)=>nu*nu);
console.log(arr1);
//[4,16]

// Or
arr1.flatMap((num)=>num%2 === 0 ? num*num : []);
console.log(arr1);
//[4,16]


// Question 8
console.log([43,31]>[89]);
//false

// Reason: In JavaScript, when comparing arrays with relational operators like > or <, the arrays are first converted to strings. The comparison is then made based on the lexicographical order of these string representations. In this case, "43,31" is not greater than "89" when compared as strings, hence the result is false.

// Question 9
function asyncTask(){
    return new Promise((resolve)=>{
        resolve();
    });
}

const x =asyncTask().then(()=>{
    console.log("Task Completed");
}
).catch().then(()=>{
    console.log("All Done");
})


// The promise resolves successfully, so the first .then() runs.
// Since there is no rejection, .catch() is skipped, but it still passes a resolved promise forward.
// Therefore, the final .then() also executes.”



//question 10
{
    function show(){
    console.log('inside show');
}
}

show();
//Output:inside show
// Reason: In JavaScript, function declarations are hoisted to the top of their enclosing scope. This means that the function show is available throughout the entire block, including outside of it. Therefore, calling show() works as expected and logs 'inside show' to the console.

// Question 11