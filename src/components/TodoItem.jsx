// TodoItem Component - Demonstrates props usage and component communication
// This is a child component that receives props from TodoApp
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px',
      marginBottom: '8px',
      backgroundColor: todo.completed ? '#f0f8f0' : 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      transition: 'all 0.3s ease'
    }}>
      {/* Toggle completion checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)} // Calling parent function via props
        style={{ marginRight: '12px', transform: 'scale(1.2)' }}
      />
      
      {/* Todo text with conditional styling */}
      <span style={{
        flex: 1,
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#666' : '#333',
        fontSize: '1rem'
      }}>
        {todo.text}
      </span>
      
      {/* Status indicator */}
      <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>
        {todo.completed ? '✅' : '⏳'}
      </span>
      
      {/* Delete button */}
      <button
        className="button danger"
        onClick={() => onDelete(todo.id)} // Calling parent function via props
        style={{ padding: '6px 12px', fontSize: '0.8rem' }}
      >
        🗑️ Delete
      </button>
    </li>
  )
}

export default TodoItem