// Pure function example
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
add(2, 3); // 5 (same input always gives same output)


// Impure function example
let count = 0;

function increment() {
  count++;
  return count;
}

increment(); // 1
increment(); // 2
