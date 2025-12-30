//1.simple print a array using for loop
const printArray = (arr)=>{
for(let i=0;i<arr.length;i++){
    console.log('ur array element is :',arr[i]);
    }
}
console.log(printArray([1,2,3,4,5]));

//2.sum of array elements
const sumOfArray = (arr)=>{
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum = sum +arr[i];
    }
    return sum;
}
// console.log('sum is '+sumOfArray([1,2,3,4,5]));

//find max element in array
const maxInArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log("max element is", maxInArray([1, 2, 3, 4, 5, 99, 23, 11]));

//find min element in array
const minInArray = (arr)=>{
    let min = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min;
}
console.log('min element is',minInArray([1,2,3,4,5,-1,0,-99,11]));

//find average of array elements
const averageOFArray =(arr)=>{
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum = sum +arr[i];
    }
    return sum/arr.length;
}

//print second largest number in array
const printSecondLargestNumber = (arr)=>{
    let sorting = [...arr].sort((a,b)=>b-a)
    return sorting[1]
}
console.log(printSecondLargestNumber([2,3,4,5,6,7]))

//reverse a array
const reverseAArr = (arr) => {
    let reverseArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i]);
    }
    return reverseArray;
};

console.log(reverseAArr([2,3,4,5,6,7,8]));
// Output: [8, 7, 6, 5, 4, 3, 2]


//check is array is sorted or not
const isArraySorted = (arr)=>{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isArraySorted([1,2,3,4,5]));
// Output: true
console.log(isArraySorted([1,3,2,4,5]));
// Output: false


//print even odd numbers in array
const printEvenOddNumber = (arr) => {
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return { even, odd };
};

console.log(printEvenOddNumber([1, 2, 3, 4, 5, 6]));
// Output: { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }

//Remove duplicate elements from an array
const removeDuplicate = (arr)=>{
    const uniqueValue = [];
    for(let i=0;i<arr.length;i++){
        if(!uniqueValue.includes(arr[i])){
            uniqueValue.push(arr[i])
        }
    }
    return uniqueValue;
}

console.log(removeDuplicate([1,2,2,3,4,5,6,7,7,7]))

//Find the length of an array without using .length
const lengthOfArray = (arr)=>{
    let count = 0;
    while(arr[count] !== undefined){
        count++;
    }
    return count;
}
console.log(lengthOfArray([1,2,3,4,5,6,7,8,9]))
// Output: 9



// Find the missing number in a sequence
const findMissingNumber = (arr, n) => {
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
};

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3


//Check if an element exists in an array
const elementExists = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};

console.log(elementExists([1, 2, 3, 4, 5], 3));


// Merge two arrays
const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Copy one array to another
const copyArray = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}
console.log(copyArray([1, 2, 3, 4, 5]));

// Print array elements using for, forEach, map
const printArrayElements = (arr) => {
  console.log("Using for loop:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log("Using forEach:");
  arr.forEach((element) => {
    console.log(element);
  });
  console.log("Using map:");
  arr.map((element) => {
    console.log(element);
  });
}
printArrayElements([1, 2, 3, 4, 5]);

// Find the index of a given element
const findIndexOfElement = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};
console.log(findIndexOfElement([1, 2, 3, 4, 5], 3)); // 2
console.log(findIndexOfElement([1, 2, 3, 4, 5], 6)); // -1

// Convert array to string
const arrayToString = (arr) => {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += ',';
    }
  }
  return result;
}   


//intersect two arrays
const intersectArrays = (arr1, arr2) => {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

console.log(intersectArrays([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4] 


//union of two arrays
const unionArrays = (arr1, arr2) => {
  const union = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    if (!union.includes(arr2[i])) {
      union.push(arr2[i]);
    }
  }
  return union;
}

console.log(unionArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

//find duplicate elements in array
const findDuplicateElements = (arr) => {
  const duplicates = [];
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i]) && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }
  return duplicates;  
}
// output
console.log(findDuplicateElements([1, 2, 2, 3, 4, 4, 5])); // [2, 4]

// Find unique elements only
const findUniqueElements = (arr) => {
  const uniqueElements = [];
  const elementCount = {};
  for (let i = 0; i < arr.length; i++) {
    elementCount[arr[i]] = (elementCount[arr[i]] || 0) + 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (elementCount[arr[i]] === 1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]

// Sort an array in ascending/descending order
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([5, 2, 9, 1, 3]));
//ouput:[1, 2, 3, 5, 9]



// Rotate an array left or right

// Move all zeros to the end
const moveZerosToEnd = (arr) => {
  const nonZeros = arr.filter(num => num !== 0);
  const zeros = arr.filter(num => num === 0);
  return [...nonZeros, ...zeros];
};

//input:aaabbccc
//output:a3b2c3
const countWord = (str)=>{
    let count= 1;
    let result = ""
    for(let i =0;i<str.length;i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            result +=str[i] + count;
            count = 1
        }
    }
    return result;
}
console.log(countWord("aabbccc"))

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
//filter method
const moveZeroToLast = (arr)=>{
    const nonZero = arr.filter((a)=>a !== 0);
    const zero = arr.filter((a) =>a===0);
    const res = [...nonZero,...zero]
    console.log(res,"res")
}
console.log(moveZeroToLast([1,0,3,0,4]))

//swap method

const moveZeroToLast1 = (arr) => {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++;
    }
  }

  return arr;
};

console.log(moveZeroToLast1([1,0,3,0,4]));
// Output: [1, 3, 4, 0, 0]

// Find the largest & smallest element in one loop
const findMinAndMax = (arr) => {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
};

console.log(findMinAndMax([3, 1, 9, 7, 2]));
// { min: 1, max: 9 }


// Count the frequency of elements
const countFrequency = (arr) => {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    freq[value] = (freq[value] || 0) + 1;
  }

  return freq;
};

console.log(countFrequency([1, 2, 2, 3, 1, 4, 2]));
// { 1: 2, 2: 3, 3: 1, 4: 1 }


// Check if two arrays are equal
const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // false

//check if two object are equal


// Flatten a nested array
const flattenArray = (arr) => {
  return arr.flat(Infinity);
};

console.log(flattenArray([1, [2, [3, 4], 5], 6]));

// Split array into chunks

// Find the most frequent element

// Remove falsy values (false, 0, null, undefined)

// Convert array to object

// Group array of objects by a property

// Find sum using reduce()

// Find max using reduce()

// Filter numbers greater than a given value

// Map array to a new transformed array

