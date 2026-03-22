// Reverse a String
function reverseString(str){
    let reverse = "";
    for(let i=str.length-1;i>=0;i--){
        reverse = reverse + str[i]
    }
    return reverse;
    
}

console.log(reverseString("hemant kumar Agrahari"))

//find largest no in an array
function largestNumberOfArr(arr){
    let largNum = arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>largNum){
            largNum = arr[i]
        }
    }
    return largNum;
}
console.log(largestNumberOfArr([2,3,4,5]))

//find lowest no in an array

function lowestNumberOfArr(arr){
    let largNum = arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]<largNum){
            largNum = arr[i]
        }
    }
    return largNum;
}

console.log(lowestNumberOfArr([2,3,4,5]));