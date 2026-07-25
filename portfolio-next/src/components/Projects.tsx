"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects, FILTERS, type ProjectCategory } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const visibility = projects.map((p) => activeFilter === "all" || p.category === activeFilter);
  const visibleCount = visibility.filter(Boolean).length;

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="div" className="title-block">
          <span className="title-block-index">03</span>
          <div>
            <h2>Projects</h2>
            <p className="title-block-sub">Selected builds — click through for source</p>
          </div>
        </Reveal>

        <Reveal
          as="div"
          className="project-filters"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-tab${activeFilter === f.value ? " is-active" : ""}`}
              role="tab"
              aria-selected={activeFilter === f.value}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {visibleCount === 0 && (
          <p className="project-filters-empty">Nothing filed under this category yet — check back soon.</p>
        )}

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              className="project-card card"
              key={project.slug}
              hidden={!visibility[i]}
            >
              <div className="photo-slot photo-slot--project">
                <div className="photo-placeholder">
                  <i className={project.imageIcon} />
                  <span>{project.image.replace(/^\//, "")}</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              <div className="project-body">
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span className="project-tag">{project.tagLabel}</span>
                </div>
                <p>{project.description}</p>
                <div className="tag-row tag-row--small">
                  {project.tags.map((tag) =>
                    tag.endsWith("✎") ? (
                      <span className="tag" key={tag} title="Confirm with Ariel">
                        {tag}
                      </span>
                    ) : (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <div className="project-links">
                  {project.link ? (
                    <a href={project.link.href} target="_blank" rel="noopener">
                      <i className={project.link.icon} /> {project.link.label}
                    </a>
                  ) : (
                    <a href="#" className="link-disabled" title="Add your repo/live link">
                      <i className="bi bi-link-45deg" /> Add link
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
