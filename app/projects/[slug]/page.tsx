import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "../../lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Raj Kamal Singh`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-accent selection:text-ink">
      <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-lg tracking-wide">
            RKS
          </Link>
          <Link
            href="/#projects"
            className="text-sm border border-line rounded-full px-4 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            &larr; All projects
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2 mb-5">
          Case Study 0{project.id}
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-accent mb-8">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono border border-line rounded-full px-3 py-1 text-paper-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mb-14 text-sm bg-accent text-ink font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          {project.repoLabel ?? "View on GitHub"}
          <span className="sr-only"> (opens in new tab)</span>
          <span aria-hidden>&rarr;</span>
        </a>

        <section className="mb-12">
          <h2 className="font-display text-2xl mb-4 text-accent-2">The Problem</h2>
          <p className="text-paper-dim leading-relaxed">{project.problem}</p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl mb-4 text-accent-2">Approach</h2>
          <ol className="space-y-4">
            {project.approach.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-sm text-muted shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-paper-dim leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl mb-4 text-accent-2">Results</h2>
          <div className="bg-panel border border-line rounded-2xl p-6 space-y-3">
            {project.results.map((r) => (
              <p
                key={r}
                className="text-sm font-mono text-paper border-l-2 border-accent/40 pl-3"
              >
                {r}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl mb-4 text-accent-2">
            Reflection
          </h2>
          <p className="text-paper-dim leading-relaxed">{project.reflection}</p>
        </section>

        <div className="border-t border-line pt-8 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-sm text-paper-dim hover:text-accent transition-colors"
          >
            &larr; Back to all projects
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="text-sm text-paper-dim hover:text-accent transition-colors text-right"
          >
            Next: {next.title} &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}