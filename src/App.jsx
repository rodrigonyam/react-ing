import { useState } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import TodoApp from './components/TodoApp'
import UserGreeting from './components/UserGreeting'

// Main App Component - Demonstrates component composition
function App() {
  // State to control which section is visible
  const [currentSection, setCurrentSection] = useState('welcome')

  // Function to render the current section
  const renderSection = () => {
    switch (currentSection) {
      case 'welcome':
        return <Welcome />
      case 'counter':
        return <Counter />
      case 'todo':
        return <TodoApp />
      case 'greeting':
        return <UserGreeting />
      default:
        return <Welcome />
    }
  }

  return (
    <div className="app">
      <Header />
      
      {/* Navigation Buttons - Event Handling Example */}
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <button 
          className="button" 
          onClick={() => setCurrentSection('welcome')}
        >
          Welcome
        </button>
        <button 
          className="button" 
          onClick={() => setCurrentSection('counter')}
        >
          Counter Demo
        </button>
        <button 
          className="button" 
          onClick={() => setCurrentSection('todo')}
        >
          Todo App
        </button>
        <button 
          className="button" 
          onClick={() => setCurrentSection('greeting')}
        >
          User Greeting
        </button>
      </nav>

      <main className="main-content">
        {/* Conditional Rendering */}
        {renderSection()}
      </main>
    </div>
  )
}

export default App