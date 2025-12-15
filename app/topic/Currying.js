// Currying example: add(2)(3)(4)(5)
function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

add(2)(3)(4)(5); // 14


// function add(a, b) {
//   return a + b;
// }

// add(2, 4);
// Here, a and b are parameters of the function.
// When you call add(2, 4), 2 and 4 are arguments passed to those parameters.
// So:
