import React from 'react';
import logo from '../../src/logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { decrement, increment } from '../reducer/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <main>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          >
            Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
            Decrement
        </button>      
      </main>
    </div>
  );
}

export default App;
