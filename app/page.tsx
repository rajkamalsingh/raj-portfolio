"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projects } from "./lib/projects";

// Single-file Next.js page component. Tailwind v4 with custom theme tokens
// defined in globals.css (color-ink, color-paper, color-accent, etc).
// Project data lives in ./lib/projects.ts and is shared with the
// /projects/[slug] case study pages.


const experience = [
  {
    role: "Data Analyst",
    org: "Fidelity Investments",
    period: "May 2025 – Present",
    points: [
      "Built Python and SQL analytical workflows to validate large-scale financial datasets, improving reporting accuracy by 25% and cutting manual analysis effort by 40%.",
      "Built automated data-quality monitoring pipelines using Python and Pandas, reducing data inconsistencies by 30%.",
      "Designed interactive dashboards and KPI reporting using AWS Athena and QuickSight, cutting stakeholder reporting turnaround time by 50%.",
      "Partnered with data engineering to optimize ETL workflows, reducing data retrieval latency by 35%.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Nimbbl",
    period: "July 2022 – July 2024",
    points: [
      "Analyzed high-volume production datasets and application logs using SQL and Python, identifying failure patterns that contributed to a 30% reduction in production defects.",
      "Performed root-cause analysis, statistical validation, and hypothesis testing to evaluate system enhancements.",
      "Built automated validation frameworks and data-quality checks, cutting manual verification effort by 45%.",
    ],
  },
  {
    role: "Quality Analyst",
    org: "LTI",
    period: "June 2020 – June 2022",
    points: [
      "Developed data-driven validation frameworks across 2,000+ test scenarios, contributing to a 25% reduction in post-release defects.",
      "Automated test data preparation and validation workflows using SQL and Python, cutting repetitive manual effort by 35%.",
      "Produced testing metrics and release-readiness analyses supporting 97% on-time delivery across client engagements.",
    ],
  },
];

function SectionKicker({
  index,
  label,
  hideHeading = false,
}: {
  index: string;
  label: string;
  hideHeading?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {!hideHeading && <h2 className="sr-only">{label}</h2>}
      <span className="font-mono text-sm text-accent-2 tracking-widest">
        {index}
      </span>
      <span className="h-px flex-1 bg-line max-w-10" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const name = "Raj Kamal Singh";
  const tagline =
    "Data Analyst by trade, Data Scientist by ambition — turning messy data into decisions and deployable ML systems.";
  const linkedin = "https://www.linkedin.com/in/raj-kamal-singh13/";
  const github = "https://github.com/rajkamalsingh";
  const email = "rajkamalsingh0001@gmail.com";
  const phone = "+1 (240) 861-1109";

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-accent selection:text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display text-lg tracking-wide">
            RKS
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-paper-dim" aria-label="Primary">
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/Raj_Kamal_Singh_Resume.pdf"
              target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-block text-sm border border-line rounded-full px-4 py-1.5 hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-11 h-11 flex items-center justify-center border border-line rounded-lg"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                  <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="md:hidden border-t border-line bg-ink px-6 py-4 flex flex-col gap-1 text-sm text-paper-dim"
          >
            <a href="#projects" onClick={() => setMenuOpen(false)} className="py-3 hover:text-accent transition-colors">Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="py-3 hover:text-accent transition-colors">Experience</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-3 hover:text-accent transition-colors">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="py-3 hover:text-accent transition-colors">Contact</a>
            <a
              href="/Raj_Kamal_Singh_Resume.pdf"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-accent"
            >
              Resume
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-dot-grid">
          <div
            className="absolute -top-24 right-0 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
          />
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-3 gap-12 items-center relative">
            <div className="md:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2 mb-5">
                Data Analyst · Aspiring Data Scientist · ML &amp; Research
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
                {name}
              </h1>
              <p className="text-xl text-paper-dim max-w-xl mb-4">{tagline}</p>
              <p className="text-base text-muted max-w-xl mb-10">
                4+ years building data-driven systems in industry, now pursuing an M.S. in Data Science at the University of Maryland. Open to roles in Data Science, Data Analytics, Data Engineering, and Applied Research.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/Raj_Kamal_Singh_Resume.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="bg-accent text-ink font-medium px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Download Resume<span className="sr-only"> (opens in new tab)</span>
                </a>
                <a
                  href={github}
                  target="_blank" rel="noopener noreferrer"
                  className="border border-line px-6 py-3 rounded-lg text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  GitHub<span className="sr-only"> (opens in new tab)</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank" rel="noopener noreferrer"
                  className="border border-line px-6 py-3 rounded-lg text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  LinkedIn<span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center relative">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ background: "radial-gradient(circle, var(--color-accent-2), transparent 70%)" }}
              />
              <img
                src="/profile.JPG"
                alt="Raj Kamal Singh"
                className="relative w-52 h-52 md:w-60 md:h-60 object-cover rounded-full ring-2 ring-line shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="01" label="Skills" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h3 className="font-display text-xl mb-4">Programming &amp; ML</h3>
              <ul className="text-sm space-y-2 text-paper-dim font-mono">
                <li>Python, SQL, C++</li>
                <li>PyTorch, TensorFlow, Scikit-Learn</li>
                <li>LSTM, GANs, A/B Testing</li>
                <li>Hypothesis Testing, Statistical Modeling</li>
              </ul>
            </div>
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h3 className="font-display text-xl mb-4">Data &amp; BI</h3>
              <ul className="text-sm space-y-2 text-paper-dim font-mono">
                <li>Pandas, NumPy</li>
                <li>Power BI, Tableau, DAX</li>
                <li>EDA, ETL Pipelines</li>
                <li>Regression &amp; Classification</li>
              </ul>
            </div>
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h3 className="font-display text-xl mb-4">Cloud &amp; Tools</h3>
              <ul className="text-sm space-y-2 text-paper-dim font-mono">
                <li>AWS (S3, EC2, Athena, QuickSight)</li>
                <li>AWS Kinesis, Lambda</li>
                <li>Snowflake, Databricks</li>
                <li>Docker, Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="02" label="Selected Projects" hideHeading />
          <h2 className="font-display text-3xl mb-10">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.id}
                className="group p-7 bg-panel border border-line rounded-2xl hover:border-accent/60 transition-colors flex flex-col"
              >
                {p.images && p.images[0] && (
                  <img
                    src={p.images[0].src}
                    alt={p.images[0].alt}
                    className="w-full h-40 object-cover rounded-lg border border-line mb-5"
                  />
                )}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-snug">{p.title}</h3>
                  <span className="font-mono text-xs text-muted shrink-0 pt-1">
                    0{p.id}
                  </span>
                </div>
                <p className="text-sm text-accent mt-1">{p.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-paper-dim flex-1">
                  {p.summary}
                </p>

                {p.results[0] && (
                  <p className="mt-4 text-sm font-mono text-accent-2 border-l-2 border-accent-2/40 pl-3">
                    {p.results[0]}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono border border-line rounded-full px-3 py-1 text-paper-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-line flex items-center justify-between gap-4">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-sm text-accent hover:opacity-80 transition-opacity inline-flex items-center gap-1.5"
                  >
                    Read case study
                    <span aria-hidden>&rarr;</span>
                  </Link>
                  <a
                    href={p.repo}
                    target="_blank" rel="noopener noreferrer"
                    className="text-sm text-paper-dim hover:text-accent transition-colors"
                  >
                    {p.repoLabel ? "GitHub Profile" : "GitHub"}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="03" label="About" />
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-5 text-paper-dim leading-relaxed">
              <p>
                I&apos;m a Data Analyst with 4+ years of professional experience turning large-scale operational and financial datasets into decisions — currently at Fidelity Investments, previously at Nimbbl and LTI. I&apos;m pursuing an M.S. in Data Science at the University of Maryland (GPA 3.86, expected May 2026) to move deeper into machine learning, and I&apos;m actively looking for my next role across Data Science, Data Analytics, Data Engineering, and Applied Research.
              </p>
              <p>
                My project work spans the full ML lifecycle — time-series forecasting with LSTMs, NLP systems built on fine-tuned transformer models, and real-time anomaly detection on streaming infrastructure — from data preprocessing and feature engineering through deployment and monitoring.
              </p>
              <p>
                I also have research experience and a published paper at IEEE ISMSIT, reflecting my interest in rigorous experimentation. Beyond the numbers, I care about translating data into insights that actually change decisions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-panel border border-line rounded-2xl p-6">
                <p className="font-display text-3xl text-accent">7+</p>
                <p className="text-sm text-muted mt-1">ML &amp; data projects shipped</p>
              </div>
              <div className="bg-panel border border-line rounded-2xl p-6">
                <p className="font-display text-3xl text-accent">1</p>
                <p className="text-sm text-muted mt-1">Published IEEE research paper</p>
              </div>
              <div className="bg-panel border border-line rounded-2xl p-6">
                <p className="font-display text-3xl text-accent">4+ yrs</p>
                <p className="text-sm text-muted mt-1">Professional data analytics experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="04" label="Education" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h3 className="font-display text-lg">M.S. in Data Science</h3>
              <p className="text-sm mt-2 text-paper-dim">University of Maryland, College Park</p>
              <p className="text-sm mt-1 text-muted font-mono">GPA 3.86 / 4.0 · Expected May 2026</p>
            </div>
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h3 className="font-display text-lg">B.Tech in Computer Science &amp; Engineering</h3>
              <p className="text-sm mt-2 text-paper-dim">University of Petroleum and Energy Studies</p>
              <p className="text-sm mt-1 text-muted font-mono">CGPA 7.92 / 10 (~3.5 / 4.0) · June 2020</p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="05" label="Research & Publications" />
          <div className="bg-panel border border-line rounded-2xl p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
              <h3 className="font-display text-xl">GAN &amp; IEC Approach for Image Generation</h3>
              <span className="text-xs font-mono text-muted">IEEE ISMSIT 2022</span>
            </div>
            <p className="text-sm leading-relaxed text-paper-dim">
              Developed a GAN model coupled with Improved Evolutionary Computing (IEC) to generate high-quality synthetic images, achieving a 94% realism rating and reducing model collapse by 20% through improved training strategies.
            </p>
            <a
              href="https://orcid.org/0009-0005-2068-8898"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-accent hover:opacity-80"
            >
              View publication (ORCID)<span className="sr-only"> (opens in new tab)</span> <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="06" label="Professional Experience" />
          <div className="space-y-8">
            {experience.map((e) => (
              <div key={e.org} className="grid md:grid-cols-4 gap-6 pb-8 border-b border-line last:border-b-0">
                <div>
                  <h3 className="font-display text-lg">{e.role}</h3>
                  <p className="text-sm text-accent mt-1">{e.org}</p>
                  <p className="text-xs font-mono text-muted mt-1">{e.period}</p>
                </div>
                <ul className="md:col-span-3 space-y-2 text-sm text-paper-dim">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="text-accent-2 mt-0.5">&#8226;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2 mb-4">
              Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Let&rsquo;s connect.</h2>
            <p className="text-paper-dim max-w-xl mx-auto mb-2">
              I&rsquo;m open to roles across data science, analytics, engineering, and research. The best way to reach me is via email or LinkedIn.
            </p>
            <p className="text-sm text-muted font-mono mb-10">{phone}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${email}`}
                className="px-7 py-3.5 rounded-lg bg-accent text-ink font-medium hover:opacity-90 transition-opacity"
              >
                Email Me
              </a>
              <a
                href={linkedin}
                target="_blank" rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-lg border border-line hover:border-accent hover:text-accent transition-colors"
              >
                LinkedIn<span className="sr-only"> (opens in new tab)</span>
              </a>
              <a
                href={github}
                target="_blank" rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-lg border border-line hover:border-accent hover:text-accent transition-colors"
              >
                GitHub<span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-line py-8 text-center text-sm text-muted">
          <div className="mb-2">
            <a href="/Raj_Kamal_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Resume<span className="sr-only"> (opens in new tab)</span></a>
            {" · "}
            <a href="https://orcid.org/0009-0005-2068-8898" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Research<span className="sr-only"> (opens in new tab)</span></a>
          </div>
          &copy; {new Date().getFullYear()} {name}
        </footer>
      </main>
    </div>
  );
}