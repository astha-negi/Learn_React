import './App.css'
import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
// Wrapping app with the UserContextProvider to make context available.
import UserContextProvider from './context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
