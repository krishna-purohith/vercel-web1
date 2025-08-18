"use client";
import ProjectCard from "@/components/ProjectCard";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  status: string;
  url?: string;
}

export default function DashboardPage() {
  const { token } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!token) return;
    fetch("https://localhost:3000/projects", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setProjects);
  }, [token]);

  const handleDeploy = async (id: string) => {
    await fetch(`https://localhost:3000/projects/${id}/deploy`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Deployment triggered!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          status={project.status}
          url={project.url}
          onDeploy={() => handleDeploy(project.id)}
        />
      ))}
    </div>
  );
}
