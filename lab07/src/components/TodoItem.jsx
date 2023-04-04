import { useState } from 'react'

function TodoItem({ todoItem, deleteTodo }) {
  const [isCompleted, setIsCompleted] = useState(todoItem.completed)

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted((prev) => !prev)}
      />
      <span style={isCompleted ? { textDecoration: 'line-through' } : null}>
        {todoItem.title}
      </span>
      <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
    </li>
  )
}

export default TodoItem
