import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function TodoForm() {
  // Local state for input field
  const [todo, setTodo] = useState("")

  // Get addTodo function from Context
  const { addTodo } = useTodo()

  // Handle form submission
  const add = (e) => {
    e.preventDefault()

    // Prevent empty todo
    if (!todo) return

    // Send todo data to context (App.jsx)
    addTodo({ todo, completed: false })

    // Clear input field
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 
                   outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
