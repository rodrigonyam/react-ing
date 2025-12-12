// Welcome Component - Demonstrates JSX and component structure
function Welcome() {
  const concepts = [
    'Components & JSX',
    'Props & State', 
    'Event Handling',
    'Conditional Rendering',
    'Lists & Keys',
    'React Hooks'
  ]

  return (
    <div className="welcome">
      <h2>Welcome to React Basics! 👋</h2>
      <p>
        This project demonstrates the core concepts of React through interactive examples.
        Navigate through the different sections using the buttons above to explore each concept.
      </p>
      
      <h3>What you'll learn:</h3>
      <ul className="concepts-list">
        {/* List Rendering with map() */}
        {concepts.map((concept, index) => (
          <li key={index}>✅ {concept}</li>
        ))}
      </ul>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e8', borderRadius: '5px' }}>
        <strong>💡 Tip:</strong> Open the developer tools and examine the components in React DevTools!
      </div>
    </div>
  )
}

export default Welcome