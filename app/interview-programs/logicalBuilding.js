// 26-jan-2026

// 1.print array using loop
function printArr() {
  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArr();

//2.remove duplicates from array
function removeDuplicateArr() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 4];
  let obj = {};
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      uniqArr.push(arr[i]);
    }
  }
  console.log(uniqArr);
}

removeDuplicateArr();

//3.print occurrence of each element in array
function printOccurrence() {
  let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 4];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 0;
    }
    count[arr[i]] = count[arr[i]] + 1;
  }
  console.log(count);
}

printOccurrence();

//4.print nested object values
const company = {
  name: "Tech",
  department: {
    name: "Engineering",
    employe: {
      empID: 123,
      role: "Frontend Developer",
      address: {
        city: "Ahmedabad",
        year: 2020,
      },
    },
  },
};
function printNestedObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      printNestedObj(obj[key]);
    } else {
      console.log(key, ":", obj[key]);
    }
  }
}

printNestedObj(company);

//5.print object keys in array
let data = {
  name: "anil",
  age: 30,
  email: "hemantk@gmail.com",
};

function printKeys() {
  let keys = [];

  for (let k in data) {
    keys[keys.length] = k;
  }
  console.log(keys);
}
printKeys();


//print nested array values
let nestedArr = [1, 2, [3, 4, [5, 6,[7,8,9]]]];
let nestedArr1 = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flatArr = flattenArray(arr[i]);
      for (let j = 0; j < flatArr.length; j++) {
        result.push(flatArr[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattenArray(nestedArr));
console.log(flattenArray(nestedArr1));

//6.reverse a array
function reverseArray() {
  let arr = [1, 2, 3, 4, 5];
  let reversedArr = [];
  for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
    reversedArr.push(arr[i])
  }
  return reversedArr;
}
reverseArray();

// Output: 5 4 3 2 1
// Return value: [5,4,3,2,1]

//7.remove duplicates from string

function removeDuplicateStr() {
  let str = "abcaabbccdde";
  let obj = {};
  let uniqStr = "";
  for (char of str) {
    if (!obj[char]) {
      obj[char] = true;
      uniqStr += char;
    }
  }
  console.log(uniqStr);
}
removeDuplicateStr();

//8.
console.log([]+[]); // Output: ""
console.log([]+{}); // Output: "[object Object]"
console.log([2]+[2]); // Output: "22"
console.log({}+[]); // Output: 0
console.log({}+{}); // Output: "[object Object][object Object]"
console.log(+[2]+ +[2]); // Output: 4
console.log(-[2] + -[2]); // Output: -4
console.log(+["Hello "] + +["World"]); // Output: NaN


//9.swap two numbers without using third variable
let a = 5;
let b = 10;
b = a + b; // b=15
a = b - a; // a=10
b = b - a; // b=5

console.log("a:", a); 
console.log("b:", b);
// Output: a:10 b:5

//10. Convert string to title case
let info = "heLLO hoW aRe You";

function toLowerCaseCustom(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(toLowerCaseCustom(info));
