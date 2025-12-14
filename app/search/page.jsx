'use client'
import { useState, useEffect } from 'react'
import { useDebounce } from '../components/Debounce'

const Search = () => {
  const [input, setInput] = useState('');
  const [apiCalls, setApiCalls] = useState(0);
  
  // Custom debounce hook - waits 500ms
  const debouncedInput = useDebounce(input, 500);

  // This runs only when debouncedInput changes
  useEffect(() => {
    if (debouncedInput) {
      setApiCalls(prev => prev + 1);
      console.log('API call made for:', debouncedInput);
    }
  }, [debouncedInput]);

  return (
    <div className='min-h-screen bg-slate-950 p-8'>
      <div className='max-w-xl mx-auto'>
        
        <h1 className='text-2xl text-white mb-6'>Search with Debounce</h1>

        {/* Search Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type to search..."
          className='w-full px-4 py-3 rounded bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none mb-6'
        />

        {/* Show values */}
        <div className='space-y-3 text-white'>
          <div className='bg-slate-800 p-4 rounded'>
            <div className='text-slate-400 text-sm'>Input Value:</div>
            <div className='font-mono'>{input || '(empty)'}</div>
          </div>

          <div className='bg-slate-800 p-4 rounded'>
            <div className='text-slate-400 text-sm'>Debounced Value (after 500ms):</div>
            <div className='font-mono'>{debouncedInput || '(empty)'}</div>
          </div>

          <div className='bg-slate-800 p-4 rounded'>
            <div className='text-slate-400 text-sm'>API Calls Made:</div>
            <div className='text-2xl font-bold'>{apiCalls}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search
