import React from "react";

const ReactOutputBased = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Question 1 */}
      {/*
       * What is the output of the following code?
       * const [count, setCount] = useState(0);
       * setCount(count + 1);
       * setCount(count + 1);
       * console.log(count);
       * Output: 1 because setCount(count + 1) is a function that updates the state and the console.log(count) is a function that logs the current state.
       */}

      {/* Question 2 Promise explanation*/}
      {/*
       * const fetchData = new Promise((resolve, reject) => {
       *   const success = true;
       *
       *   if (success) {
       *     resolve("Data fetched successfully");
       *   } else {
       *     reject("Something went wrong");
       *   }
       * });
       *
       * fetchData
       *   .then(result => {
       *     console.log(result); // "Data fetched successfully"
       *   })
       *   .catch(error => {
       *     console.log(error); // "Something went wrong"
       *   });
       *
       * Output:
       * "Data fetched successfully"
       *
       * Reason:
       * The promise is resolved immediately because success is true,
       * so the .then() block is executed.
       */}
    </div>
  );
};

export default ReactOutputBased;
