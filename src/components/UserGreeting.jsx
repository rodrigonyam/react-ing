import { useState } from 'react'

// UserGreeting Component - Demonstrates form handling and controlled components
function UserGreeting() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent page reload
    
    if (name.trim() && age && email.trim()) {
      setIsSubmitted(true)
    } else {
      alert('Please fill in all fields!')
    }
  }

  // Reset form
  const resetForm = () => {
    setName('')
    setAge('')
    setEmail('')
    setIsSubmitted(false)
  }

  // Conditional rendering based on form submission
  if (isSubmitted) {
    return (
      <div className="section">
        <h3>🎉 Welcome Message</h3>
        <div style={{
          textAlign: 'center',
          padding: '30px',
          backgroundColor: '#e8f5e8',
          borderRadius: '10px',
          border: '2px solid #4CAF50'
        }}>
          <h2 style={{ color: '#4CAF50', marginBottom: '15px' }}>
            Hello, {name}! 👋
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            Age: {age} years old
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Email: {email}
          </p>
          <p style={{ fontStyle: 'italic', color: '#666' }}>
            Welcome to the React Basics tutorial!
          </p>
          
          <button 
            className="button" 
            onClick={resetForm}
            style={{ marginTop: '20px' }}
          >
            🔄 Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <h3>👋 User Greeting - Forms & Controlled Components</h3>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        {/* Name input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
            What's your name?
          </label>
          <input
            id="name"
            className="input"
            type="text"
            value={name} // Controlled component
            onChange={(e) => setName(e.target.value)} // Update state on change
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Age input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="age" style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
            How old are you?
          </label>
          <input
            id="age"
            className="input"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            min="1"
            max="150"
            required
          />
        </div>

        {/* Email input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
            What's your email?
          </label>
          <input
            id="email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Submit button */}
        <button 
          type="submit" 
          className="button"
          style={{ width: '100%' }}
        >
          👋 Say Hello!
        </button>
      </form>
      
      {/* Preview section */}
      {(name || age || email) && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '5px',
          border: '1px solid #e0e0e0'
        }}>
          <h4>👀 Live Preview:</h4>
          <p>Name: {name || '(not entered yet)'}</p>
          <p>Age: {age || '(not entered yet)'}</p>
          <p>Email: {email || '(not entered yet)'}</p>
        </div>
      )}
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <strong>🎓 Learning Points:</strong>
        <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
          <li>Controlled components (form inputs)</li>
          <li>Form handling and validation</li>
          <li>Event.preventDefault() to prevent page reload</li>
          <li>Conditional rendering based on state</li>
          <li>Multiple state variables</li>
          <li>Live preview updates as you type</li>
        </ul>
      </div>
    </div>
  )
}

export default UserGreeting