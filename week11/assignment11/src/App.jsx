import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <ProjectCard name="Project One" title="First React Component" />
      <ProjectCard name="Project Two" title="Learning Props" />
    </div>
  );
}

export default App;