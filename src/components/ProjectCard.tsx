import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardContent className="flex flex-col gap-2">
          <p>Status: {status}</p>
          {url && (
            <a href={url} target="_blank" className="text-primary underline">
              Visit
            </a>
          )}
          {onDeploy && (
            <Button className="mt-2" onClick={onDeploy}>
              Deploy
            </Button>
          )}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
