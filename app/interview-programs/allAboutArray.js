//simple print a array using for loop
const printArray = (arr)=>{
for(let i=0;i<arr.length;i++){
    console.log('ur array element is :',arr[i]);
    }
}
console.log(printArray([1,2,3,4,5]));

//sum of array elements
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


