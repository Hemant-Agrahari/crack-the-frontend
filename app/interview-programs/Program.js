//print array using looop
const printArray = (arr)=>{
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
console.log(printArray([2,3,4,5,6,7]))
// Output: 2 3 4 5 6 7


//print string
const printString = (str)=>{
    for(let i = 0;i<str.length;i++){
        console.log(str[i])
    }
}
console.log(printString('cfcfccd'))
// Output: c f c f c c d

//Find the length of an array without using .length
const printLengthOfArray = (arr)=>{
    let count = 0;
    for(let i=0;i<arr.length;i++){
        count++;
    }
    return count;
}

console.log(printLength([1,2,3,4,4,6]))
// Output: 6


//print array max value
const printMaxValueOfArray = (arr)=>{
    let max= arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max= arr[i]
        }
    }
    return max;
}

console.log(printMaxValueOfArray([2,3,4,5,6,7]))

//print array min value
const printMinValueOfArray = (arr)=>{
    let min= arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < min){
            min= arr[i]
        }
    }
    return min;
}

console.log(printMinValueOfArray([2,3,4,5,6,7]))


//reverse an array
const reverseAArray = (arr)=>{
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i])
    }
}
console.log(reverseAArray([1,2,3,4,5]))