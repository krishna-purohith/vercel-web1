interface ProjectCardProps {
  name: string;
  status: string;
  url?: string;
  onDeploy?: () => void;
}

export default function ProjectCard({
  name,
  status,
  url,
  onDeploy,
}: ProjectCardProps) {
  return (
    <div className="p-4 bg-card rounded-lg shadow flex flex-col gap-2">
      <h3 className="font-semibold">{name}</h3>
      <p>Status: {status}</p>
      {url && (
        <a href="url" target="_blank" className="text-primary underline">
          Visit
        </a>
      )}
      {onDeploy && (
        <button className="btn-primary mt-2" onClick={onDeploy}>
          Deploy
        </button>
      )}
    </div>
  );
}
