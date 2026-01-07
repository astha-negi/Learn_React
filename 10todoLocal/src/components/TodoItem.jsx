import React, { useState } from "react"
import { useTodo } from "../Context"

function TodoItem({ todo }) {
  // Controls whether todo is in edit mode
  const [isTodoEditable, setIsTodoEditable] = useState(false)

  // Local editable text state
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  // Get actions from Context
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  // Save edited todo
  const editTodo = () => {
    const updatedTodo = { ...todo, todo: todoMsg }
    updateTodo(todo.id, updatedTodo)
    setIsTodoEditable(false)
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3
      shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* Checkbox to toggle completed state */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {/* Todo text field */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10
        justify-center items-center bg-gray-50 hover:bg-gray-100
        shrink-0 disabled:opacity-50"
        onClick={() => {
          // Prevent editing completed todo
          if (todo.completed) return

          // Save if editing, else enable edit mode
          if (isTodoEditable) {
            editTodo()
          } else {
            setIsTodoEditable(true)
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete todo */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10
        justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
