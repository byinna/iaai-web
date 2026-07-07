import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="panel work">
      <div className="work__head" data-reveal>
        <div className="work__head-text">
          <span className="eyebrow">02 &mdash; PORTFOLIO</span>
          <h2 className="display" data-snap style={{ fontSize: "clamp(32px, 5vw, 46px)" }}>
            SELECTED WORK
          </h2>
        </div>
        <div className="work__head-cloud" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/clouds/cloud-band.webp" alt="" />
        </div>
      </div>

      <div className="work__grid">
        {projects.map((p) => (
          <ProjectCard key={p.n} project={p} />
        ))}
      </div>
    </section>
  );
}
