import { useState, useEffect } from 'react';

/**
 * Custom Debounce Hook
 * 
 * @param {any} value - The value to debounce (usually input value)
 * @param {number} delay - Delay in milliseconds (e.g., 500)
 * @returns {any} - The debounced value
 * 
 * How it works:
 * 1. Sets a timer when value changes
 * 2. If value changes again before timer completes, clear old timer
 * 3. Only update debounced value after timer completes
 * 4. This reduces API calls from typing fast
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timeout to update debounced value after delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: Clear timeout if value changes before delay completes
    // This prevents memory leaks and cancels previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
