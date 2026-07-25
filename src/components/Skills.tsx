"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const [term, setTerm] = useState("");
  const needle = term.trim().toLowerCase();

  // Every group/card stays mounted at all times — we only toggle the
  // `hidden` attribute. Filtering by conditionally rendering would
  // unmount and remount Reveal-wrapped groups on every keystroke,
  // replaying their fade-in animation instead of just showing/hiding.
  const groupVisibility = useMemo(
    () =>
      skillGroups.map((group) => {
        const matches = group.skills.map((s) => !needle || s.name.toLowerCase().includes(needle));
        return { visible: matches.some(Boolean), matches };
      }),
    [needle]
  );

  const totalVisible = groupVisibility.reduce(
    (sum, g) => sum + g.matches.filter(Boolean).length,
    0
  );

  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <Reveal as="div" className="title-block">
          <span className="title-block-index">02</span>
          <div>
            <h2>Skills &amp; Tools</h2>
            <p className="title-block-sub">Stack used across shipped projects</p>
          </div>
        </Reveal>

        <Reveal as="div" className="skills-filter">
          <i className="bi bi-search" />
          <input
            type="text"
            placeholder='Filter skills — try "react" or "docker"'
            aria-label="Filter skills"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Reveal>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <Reveal
              as="div"
              className="skills-group"
              key={group.title}
              hidden={!groupVisibility[gi].visible}
            >
              <h3 className="skills-group-title">{group.title}</h3>
              <div className="skills-grid">
                {group.skills.map((skill, si) => (
                  <div className="skill-card" key={skill.name} hidden={!groupVisibility[gi].matches[si]}>
                    <i className={skill.icon} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {totalVisible === 0 && (
          <p className="skills-filter-empty">
            No skills match &quot;<span>{term.trim()}</span>&quot;.
          </p>
        )}
      </div>
    </section>
  );
}
