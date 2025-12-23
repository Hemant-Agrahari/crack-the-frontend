// reverse a string using in-built function
const reverseAString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseAString("hemant agrahari"));
// OUTPUT: irahgA tnameH

// using for loop to reverse a string
const reverseAStringUsingForLoop = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
};
console.log(reverseAStringUsingForLoop("Hemant Kumar Agrahari"));
// OUTPUT: irahgA ramuK tnameH

// using recursion to reverse a string
const reverseAStringUsingRecursion = (str) => {
  if (str === "") {
    return "";
  }
  return (
    str[str.length - 1] +
    reverseAStringUsingRecursion(str.substring(0, str.length - 1))
  );
};
console.log(reverseAStringUsingRecursion("Hemant Kumar Agrahari"));

//reverse a number using while loop
const reverseANumberUsingWhileLoop = (num) => {
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10; // get last digit because % gives remainder
    reverse = reverse * 10 + digit; // append digit to reverse number
    num = Math.floor(num / 10); // remove last digit from number
  }

  return reverse;
};
console.log(reverseANumberUsingWhileLoop(123456789));

// reverse a number using string methods
const reverseANumberUsingStringMethods = (num) => {
  return num.toString().split("").reverse().join("");
};
console.log(reverseANumberUsingStringMethods(123456789));

// reverse a number using recursion
const reverseANumberUsingRecursion = (num, reverse = 0) => {
  if (num === 0) {
    return reverse;
  }
  return reverseANumberUsingRecursion(
    Math.floor(num / 10),
    reverse * 10 + (num % 10)
  );
};
console.log(reverseANumberUsingRecursion(123456789));
// OUTPUT: 987654321


//input:Hemant Agrahari
//output:tnameH tnirahgA 

const reverseEachWord = (str) => {
  return str
    .split(" ")
    .map(word => {
      let reversedWord = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      return reversedWord;
    })
    .join(" ");
};

console.log(reverseEachWord("Hemant Agrahari"));
// OUTPUT: tnameH irahgA


// input: Hemant Agrahari
// output: Agrahari Hemant

const reverseWordsOrder = (str) => {
  return str.split(" ").reverse().join(" ");
};

console.log(reverseWordsOrder("Hemant Agrahari"));
// OUTPUT: Agrahari Hemant


// input: hemant agrahari
// output: Hemant Agrahari

const capitalizeFirstLetterOfEachWord = (str) => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetterOfEachWord("hemant agrahari"));
// OUTPUT: Hemant Agrahari

