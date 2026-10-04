export type Project = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  problem: string;
  whatIBuilt: string;
  stack: string;
  result: string;
  links: string;
};

export const projects: Project[] = [
  {
    slug: "invoice-app",
    category: "Web app",
    title: "Invoice app",
    summary:
      "Private client, project, and invoice management, so each user has their own secure workspace.",
    problem:
      "Client, project, and invoice management needs to stay private, with each user in their own secure workspace.",
    whatIBuilt:
      "Private client, project, and invoice management, so each user has their own secure workspace.",
    stack: "Next.js, Neon, Clerk",
    result: "TODO: real content",
    links: "TODO: real content",
  },
  {
    slug: "healthcare-management-system",
    category: "Web app",
    title: "Healthcare management system",
    summary: "A healthcare management system with authenticated access to sensitive data.",
    problem: "Sensitive data needs authenticated access in a healthcare management system.",
    whatIBuilt: "A healthcare management system with authenticated access to sensitive data.",
    stack: "Next.js, Neon, Clerk",
    result: "TODO: real content",
    links: "TODO: real content",
  },
  {
    slug: "job-board-cms",
    category: "CMS",
    title: "Job-board CMS",
    summary:
      "A content management system for a job-board website, so the owner can manage listings without a developer.",
    problem: "The job-board owner needs to manage listings without a developer.",
    whatIBuilt:
      "A content management system for a job-board website, so the owner can manage listings without a developer.",
    stack: "TODO: confirm",
    result: "TODO: real content",
    links: "TODO: real content",
  },
];