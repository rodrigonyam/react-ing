import { useState } from 'react'

// Counter Component - Demonstrates useState hook, event handling, and state updates
function Counter() {
  // State Hook - manages component state
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  // Event handlers
  const increment = () => {
    setCount(count + step)
  }

  const decrement = () => {
    setCount(count - step)
  }

  const reset = () => {
    setCount(0)
  }

  const handleStepChange = (event) => {
    setStep(Number(event.target.value))
  }

  return (
    <div className="section">
      <h3>🔢 Counter Demo - State & Event Handling</h3>
      
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* Displaying state */}
        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4CAF50', margin: '20px 0' }}>
          {count}
        </div>
        
        {/* Conditional styling based on state */}
        <div style={{ 
          padding: '10px', 
          backgroundColor: count > 0 ? '#e8f5e8' : count < 0 ? '#ffeaea' : '#f0f0f0',
          borderRadius: '5px',
          margin: '10px 0'
        }}>
          {/* Conditional rendering */}
          {count > 0 && '📈 Positive number!'}
          {count < 0 && '📉 Negative number!'}
          {count === 0 && '🎯 Perfect balance!'}
        </div>
        
        {/* Control buttons */}
        <div style={{ margin: '20px 0' }}>
          <button className="button" onClick={decrement}>
            - Decrease by 
          </button>
          <button className="button secondary" onClick={reset}>
            🔄 Reset
          </button>
          <button className="button" onClick={increment}>
            + Increase by 
          </button>
        </div>
        
        {/* Step control */}
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="step">Step size: </label>
          <input 
            id="step"
            type="number" 
            value={step} 
            onChange={handleStepChange}
            style={{ width: '80px', padding: '5px', marginLeft: '10px' }}
            min="1"
          />
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <strong>🎓 Learning Points:</strong>
        <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
          <li>useState hook for managing state</li>
          <li>Event handlers (onClick, onChange)</li>
          <li>Conditional rendering and styling</li>
          <li>State updates trigger re-renders</li>
        </ul>
      </div>
    </div>
  )
}

export default Counter