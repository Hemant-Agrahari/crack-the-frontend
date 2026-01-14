function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}


function submitForm() {
  console.log("Form submitted");
}

const throttledSubmit = throttle(submitForm, 2000);

document.getElementById("btn").addEventListener("click", throttledSubmit);
