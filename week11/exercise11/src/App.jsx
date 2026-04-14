//Import CSS file for style and SimpleCard
import './App.css';
import SimpleCard from './SimpleCard';

// ------- APP COMPONENT ---------
// Main component of app, the parent
function App() {
  return (
    <div>
      {/* Page heading */}
      <h1>Hello World</h1>
       {/* Render SimpleCard */}
      <SimpleCard title="Hello Card!" content="This is my first card!"/>
    </div>
  );
}

export default App;
// Export App as the default component
// Allows other files to import and render
