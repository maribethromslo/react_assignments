function ProjectCard({ name, title }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

export default ProjectCard;