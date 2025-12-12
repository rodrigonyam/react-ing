import { useState } from 'react'
import TodoItem from './TodoItem'

// TodoApp Component - Demonstrates complex state management, props, and list rendering
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React components', completed: true },
    { id: 2, text: 'Understand props and state', completed: true },
    { id: 3, text: 'Practice event handling', completed: false }
  ])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(), // Simple ID generation
        text: inputValue.trim(),
        completed: false
      }
      setTodos([...todos, newTodo]) // Spread operator to create new array
      setInputValue('') // Clear input
    }
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } // Spread to create new object
        : todo
    ))
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo()
    }
  }

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true // 'all'
  })

  // Calculate statistics
  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length
  const activeTodos = totalTodos - completedTodos

  return (
    <div className="section">
      <h3>📝 Todo App - Complete React Example</h3>
      
      {/* Add todo form */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            className="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            style={{ flex: 1 }}
          />
          <button className="button" onClick={addTodo}>
            ➕ Add Todo
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginBottom: '20px', 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '5px'
      }}>
        <span>📊 Total: {totalTodos}</span>
        <span>✅ Completed: {completedTodos}</span>
        <span>⏳ Active: {activeTodos}</span>
      </div>

      {/* Filter buttons */}
      <div style={{ marginBottom: '20px' }}>
        <span style={{ marginRight: '10px' }}>Filter:</span>
        <button 
          className={`button ${filter === 'all' ? '' : 'secondary'}`}
          onClick={() => setFilter('all')}
        >
          All ({totalTodos})
        </button>
        <button 
          className={`button ${filter === 'active' ? '' : 'secondary'}`}
          onClick={() => setFilter('active')}
        >
          Active ({activeTodos})
        </button>
        <button 
          className={`button ${filter === 'completed' ? '' : 'secondary'}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTodos})
        </button>
      </div>

      {/* Todo list */}
      <div>
        {filteredTodos.length === 0 ? (
          // Conditional rendering when no todos
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            {filter === 'all' 
              ? '🎉 No todos yet! Add one above to get started.' 
              : `📭 No ${filter} todos.`
            }
          </div>
        ) : (
          // List rendering with map()
          <ul style={{ listStyle: 'none' }}>
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id} // Important: unique key for each item
                todo={todo} // Passing props to child component
                onToggle={toggleTodo} // Passing function as prop
                onDelete={deleteTodo} // Passing function as prop
              />
            ))}
          </ul>
        )}
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <strong>🎓 Learning Points:</strong>
        <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
          <li>Complex state management with arrays and objects</li>
          <li>Props passing between parent and child components</li>
          <li>List rendering with map() and keys</li>
          <li>Conditional rendering</li>
          <li>Event handling (onClick, onChange, onKeyPress)</li>
          <li>State updates with spread operator</li>
          <li>Array methods (filter, map)</li>
        </ul>
      </div>
    </div>
  )
}

export default TodoApp