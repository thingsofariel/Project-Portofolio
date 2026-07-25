export type Skill = {
  name: string;
  icon: string; // full icon class, e.g. "devicon-nodejs-plain" or "bi bi-shield-lock"
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Prisma ORM", icon: "devicon-prisma-original" },
      { name: "Redis / BullMQ", icon: "devicon-redis-plain" },
      { name: "SQLite", icon: "devicon-sqlite-plain" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "Bootstrap / Icons", icon: "devicon-bootstrap-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "React + Vite", icon: "devicon-react-original" },
    ],
  },
  {
    title: "Infra & Tools",
    skills: [
      { name: "Docker Compose", icon: "devicon-docker-plain" },
      { name: "Git / GitHub", icon: "devicon-git-plain" },
      { name: "JWT Auth", icon: "bi bi-shield-lock" },
      { name: "Puppeteer / qpdf", icon: "devicon-puppeteer-plain" },
      { name: "Fedora Linux", icon: "devicon-fedora-plain" },
    ],
  },
  {
    title: "Beyond Code",
    skills: [
      { name: "Photography", icon: "bi bi-camera" },
      { name: "English (fluent)", icon: "bi bi-translate" },
      { name: "System Architecture", icon: "bi bi-diagram-3" },
      { name: "IT Support", icon: "bi bi-life-preserver" },
    ],
  },
];
