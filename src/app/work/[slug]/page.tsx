import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work } from "@/data/work";
import styles from "../../interior.module.css";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);

  return {
    title: project?.title ?? "Work",
    description: project?.summary ?? "Software engineering and analysis case study.",
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { label: "Problem", value: project.problem },
    { label: "What I built", value: project.built },
    { label: "Stack", value: project.stack },
    { label: "Result", value: project.result },
    { label: "Link", value: project.link },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.headingGrid}>
        <div>
          <p className={styles.eyebrow}>{project.discipline}</p>
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
        Back to work
      </Link>
    </main>
  );
}