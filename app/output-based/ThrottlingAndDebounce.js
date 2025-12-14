function throttle(fn, delay) {
  let canCall = true;
  return function (...args) {
    if (!canCall) return;
    fn(...args);
    canCall = false;

    setTimeout(() => {
      canCall = true;
    }, delay);
  };
}

function saveData() {
  console.log("API called to save data");
}

const throttledSave = throttle(saveData, 2000);

// User clicks multiple times
throttledSave();
throttledSave();
throttledSave();
// debounce