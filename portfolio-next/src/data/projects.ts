export type ProjectCategory = "coding" | "ai" | "research" | "community";

export type Project = {
  slug: string;
  title: string;
  tagLabel: string;
  description: string;
  image: string;
  imageIcon: string; // bootstrap icon class for the placeholder fallback
  tags: string[];
  category: ProjectCategory;
  link: { href: string; label: string; icon: string } | null; // null = "add link" placeholder
};

export const projects: Project[] = [
  {
    slug: "payslip",
    title: "Payslip Management System",
    tagLabel: "Full-Stack",
    description:
      "A full-stack payslip system with role-based auth, automated total calculation via a Postgres trigger, background PDF generation, and secure shareable payslip links.",
    image: "/assets/images/projects/payslip.webp",
    imageIcon: "bi bi-receipt-cutoff",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis/BullMQ", "React + Vite"],
    category: "coding",
    link: { href: "https://github.com/thingsofariel/Payslip", label: "Source", icon: "bi bi-github" },
  },
  {
    slug: "fortuna-center",
    title: "Fortuna Center Website",
    tagLabel: "Web App",
    description:
      "Web platform built for Fortuna English Global Learning, supporting the organization's day-to-day operations and online presence.",
    image: "/assets/images/projects/fortuna-center.webp",
    imageIcon: "bi bi-mortarboard",
    tags: ["Node.js", "Express", "Confirm stack ✎"],
    category: "coding",
    link: {
      href: "https://github.com/handfortunateam-dev/fortuna-center-app",
      label: "Source",
      icon: "bi bi-github",
    },
  },
  {
    slug: "wedding",
    title: "Wedding Invitation Website",
    tagLabel: "Web App",
    description:
      "A digital wedding invitation with RSVP, paginated guest wishes, live countdown timer, photo gallery, and gift bank account display.",
    image: "/assets/images/projects/wedding.webp",
    imageIcon: "bi bi-heart",
    tags: ["HTML/CSS/JS", "Node.js", "Express", "SQLite"],
    category: "coding",
    link: null,
  },
  {
    slug: "personal-web",
    title: "Personal Web Portfolio",
    tagLabel: "This Site",
    description:
      "This very portfolio — a blueprint-themed, dark/light responsive site, now running on Next.js, TypeScript and Tailwind.",
    image: "/assets/images/projects/personal-web.webp",
    imageIcon: "bi bi-person-workspace",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "coding",
    link: null,
  },
];

export const FILTERS: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "coding", label: "Coding" },
  { value: "ai", label: "AI" },
  { value: "research", label: "Research" },
  { value: "community", label: "Community Service" },
];
