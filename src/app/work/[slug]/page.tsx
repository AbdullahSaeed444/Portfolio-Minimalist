import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { siteContent } from "@/content/site";
import styles from "../../interior.module.css";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project?.title ?? siteContent.pages.work.title,
    description: project?.summary ?? siteContent.metadata.pages.work.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { label: siteContent.pages.caseStudy.labels.problem, value: project.problem },
    { label: siteContent.pages.caseStudy.labels.whatIBuilt, value: project.whatIBuilt },
    { label: siteContent.pages.caseStudy.labels.stack, value: project.stack },
    { label: siteContent.pages.caseStudy.labels.result, value: project.result },
    { label: siteContent.pages.caseStudy.labels.links, value: project.links },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.headingGrid}>
        <div>
          <p className={styles.eyebrow}>{project.category}</p>
          <h1 className={styles.caseTitle}>{project.title}</h1>
          <p className={styles.caseIntro}>{project.summary}</p>
        </div>
      </section>
      {sections.map((section) => (
        <section className={styles.section} key={section.label}>
          <h2 className={styles.sectionLabel}>{section.label}</h2>
          <div className={styles.sectionContent}>
            <p>{section.value}</p>
          </div>
        </section>
      ))}
      <Link className={styles.backLink} href="/work">
        {siteContent.pages.caseStudy.backToWork}
      </Link>
    </main>
  );
}