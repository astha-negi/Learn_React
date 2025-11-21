import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter]=useState(5); // this is the concept of hooks in react
  // hooks are special functions that let you "hook into" react features. useState is a hook that allows you to add state to functional components.
  // let counter = 5;
  // also do an imp ques of interview that  can we use counter 4 times in the same component. answer is no we cant use it more than once in the same component because each call to useState creates a separate piece of state.
  return (
    <>
      <h1>Building a Counter App</h1>
      <h2>counter={counter}</h2>
      <button onClick={() => setCounter(counter + 1)} disabled= {counter >= 10}>add value</button>
      <br />
      <button onClick={() => setCounter(counter - 1)} disabled= {counter <= 0}>remove value</button>
    </>
  )
}

export default App
