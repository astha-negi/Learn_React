import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "astha",
    age: 25
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-purple-600 bg-yellow-200 p-4">
  Tailwind is working!
</h1>
       <Card /> 
       <Card username="akku" /> 
    </>
  )
}

export default App
