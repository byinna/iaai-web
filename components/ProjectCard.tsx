import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" data-reveal data-card>
      <div className="card__imgwrap">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 900px) 100vw, 600px"
        />
      </div>
      <div className="card__body">
        <div className="card__meta">
          <span className="card__n">{project.n}</span>
          <span className="card__tag">{project.tag}</span>
        </div>
        <h3 className="card__name">{project.name}</h3>
        <p className="card__desc">{project.desc}</p>
      </div>
      {project.href && (
        <a className="card__link" href={project.href}>
          View {project.name}
        </a>
      )}
    </article>
  );
}
