function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function fetchSearchResults(query) {
  console.log("API call for:", query);
}

const debouncedSearch = debounce(fetchSearchResults, 500);

// simulate typing
debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("react");
