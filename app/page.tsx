"use client";
import React from "react";

// Single-file Next.js page component. Tailwind v4 with custom theme tokens
// defined in globals.css (color-ink, color-paper, color-accent, etc).

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  tech: string[];
  repo: string;
  repoLabel?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "LSTM Stock Price Prediction",
    subtitle: "Time-series forecasting with daily retraining",
    description:
      "An LSTM-based forecasting pipeline for stock price prediction, covering historical data ingestion, feature engineering, and model evaluation to assess real-world forecasting performance against naive baselines.",
    tech: ["Python", "Keras", "Docker", "AWS"],
    repo: "https://github.com/rajkamalsingh/fintech_project",
  },
  {
    id: 2,
    title: "Real-Time Face Detection & Emotion Classification",
    subtitle: "Computer vision & CNN-based inference",
    description:
      "A real-time computer vision system for face detection and emotion classification using CNNs and OpenCV, optimized for low-latency live inference on streaming video.",
    tech: ["Python", "Keras", "OpenCV", "Docker"],
    repo: "https://github.com/rajkamalsingh",
    repoLabel: "GitHub Profile (repo link coming soon)",
  },
  {
    id: 3,
    title: "Bitcoin Real-Time Anomaly Detection",
    subtitle: "Serverless pipeline + live alert dashboard",
    description:
      "A low-latency anomaly detection pipeline for crypto price and volume anomalies, running on serverless infrastructure with a live dashboard for alerting.",
    tech: ["AWS Lambda", "Python", "Dash"],
    repo: "https://github.com/rajkamalsingh",
    repoLabel: "GitHub Profile (repo link coming soon)",
  },
  {
    id: 4,
    title: "RAG Chatbot with File Uploads",
    subtitle: "Retrieval-augmented generation over user documents",
    description:
      "A RAG-based chatbot supporting document uploads, semantic search, and fine-grained Q&A over user files, built on a FastAPI backend with a vector database for retrieval.",
    tech: ["FastAPI", "LLMs", "Vector DBs"],
    repo: "https://github.com/rajkamalsingh/llm-rag-basics",
  },
  {
    id: 5,
    title: "Food Context Classification via Transfer Learning",
    subtitle: "ResNet-50 · home vs. restaurant vs. packaged food",
    description:
      "Studied how a pretrained ResNet-50 classifies food images by scene context — home, restaurant, or packaged — rather than by the food itself, then compared four training strategies (baseline, augmentation, synthetic noise, and combined) to see which actually helped.",
    metric: "94.52% test accuracy (baseline beat every augmented variant)",
    tech: ["PyTorch", "ResNet-50", "Transfer Learning"],
    repo: "https://github.com/rajkamalsingh/food_context_classification",
  },
  {
    id: 6,
    title: "Real-World Lane Detection",
    subtitle: "Classical computer vision under adverse conditions",
    description:
      "Built a classical edge-based lane detection pipeline (Canny + Hough transform) and stress-tested it against shadows, motion blur, and bright light, then improved robustness with adaptive thresholds, histogram equalization, and slope filtering.",
    metric: "Adaptive pipeline cut false detections vs. the fixed-threshold baseline",
    tech: ["Python", "OpenCV", "Canny/Hough"],
    repo: "https://github.com/rajkamalsingh/llm-rag-basics/tree/main/lane_detection_project",
  },
  {
    id: 7,
    title: "S&P 500 Fundamentals Analytics",
    subtitle: "Cross-sector valuation & volatility study",
    description:
      "A statistical analysis of S&P 500 company fundamentals — EPS, P/E, P/B, dividends, and volatility — exploring correlations between valuation metrics and how they vary across sectors.",
    tech: ["Python", "Pandas", "Matplotlib"],
    repo: "https://github.com/rajkamalsingh/Data_analytics",
  },
];

const experience = [
  {
    role: "Quality Analyst",
    org: "Nimbbl",
    period: "July 2022 – July 2024",
    points: [
      "Reduced critical production defects by 30% through workflow optimization.",
      "Implemented API automation using JMeter, improving test execution speed by 50%.",
      "Resolved 92% of reported issues within sprint cycles using data-driven analysis.",
    ],
  },
  {
    role: "Quality Assurance Engineer",
    org: "LTI",
    period: "June 2020 – June 2022",
    points: [
      "Reduced post-release defects by 25% through systematic test design.",
      "Managed 500+ test cases ensuring 100% functional coverage.",
      "Achieved 97% on-time delivery across multiple enterprise projects.",
    ],
  },
];

function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
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
  const name = "Raj Kamal Singh";
  const tagline =
    "Data Scientist turning messy real-world data into deployable ML systems.";
  const linkedin = "https://www.linkedin.com/in/raj-kamal-singh13/";
  const github = "https://github.com/rajkamalsingh";
  const email = "rajkamalsingh0001@gmail.com";

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-accent selection:text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display text-lg tracking-wide">
            RKS
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-paper-dim">
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <a
            href="/Raj_Kamal_Singh_Resume.pdf"
            target="_blank"
            className="text-sm border border-line rounded-full px-4 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
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
                Data Scientist · ML · Applied Research
              </p>
              <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
                {name}
              </h1>
              <p className="text-xl text-paper-dim max-w-xl mb-4">{tagline}</p>
              <p className="text-base text-muted max-w-xl mb-10">
                Experienced in building end-to-end data-driven systems, with a strong interest in applied research and real-world impact — from time-series forecasting to computer vision.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/Raj_Kamal_Singh_Resume.pdf"
                  target="_blank"
                  className="bg-accent text-ink font-medium px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Download Resume
                </a>
                <a
                  href={github}
                  target="_blank"
                  className="border border-line px-6 py-3 rounded-lg text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="border border-line px-6 py-3 rounded-lg text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  LinkedIn
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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h4 className="font-display text-xl mb-4">Core Expertise</h4>
              <ul className="text-sm space-y-2 text-paper-dim">
                <li>Machine Learning &amp; Deep Learning</li>
                <li>Time Series Forecasting &amp; Feature Engineering</li>
                <li>Data Analysis &amp; Visualization</li>
                <li>Computer Vision</li>
                <li>Research &amp; Model Evaluation</li>
              </ul>
            </div>
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h4 className="font-display text-xl mb-4">Tech Stack</h4>
              <ul className="text-sm space-y-2 text-paper-dim font-mono">
                <li>Python, SQL, C++</li>
                <li>PyTorch, TensorFlow, Scikit-Learn</li>
                <li>Pandas, NumPy</li>
                <li>FastAPI, Docker, AWS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="02" label="Selected Projects" />
          <h2 className="font-display text-3xl mb-10">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.id}
                className="group p-7 bg-panel border border-line rounded-2xl hover:border-accent/60 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-snug">{p.title}</h3>
                  <span className="font-mono text-xs text-muted shrink-0 pt-1">
                    0{p.id}
                  </span>
                </div>
                <p className="text-sm text-accent mt-1">{p.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-paper-dim flex-1">
                  {p.description}
                </p>

                {p.metric && (
                  <p className="mt-4 text-sm font-mono text-accent-2 border-l-2 border-accent-2/40 pl-3">
                    {p.metric}
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

                <div className="mt-5 pt-5 border-t border-line">
                  <a
                    href={p.repo}
                    target="_blank"
                    className="text-sm text-paper hover:text-accent transition-colors inline-flex items-center gap-1.5"
                  >
                    {p.repoLabel ?? "View on GitHub"}
                    <span aria-hidden>&rarr;</span>
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
                I&apos;m a Data Scientist with a strong foundation in machine learning, statistical modeling, and data analysis, focused on building data-driven systems that are both theoretically sound and practically deployable. My work spans time-series forecasting, computer vision, and applied research, with hands-on experience across the full machine learning lifecycle.
              </p>
              <p>
                I&apos;ve worked extensively with real-world datasets, designing end-to-end pipelines that involve data preprocessing, feature engineering, model development, evaluation, and deployment. My technical experience includes deep learning models such as LSTMs and CNNs, as well as classical machine learning techniques for structured data and predictive analytics.
              </p>
              <p>
                In addition to applied industry projects, I have research experience and a published research paper, reflecting my interest in rigorous experimentation and analytical thinking. I&apos;m actively seeking roles in data science, data analysis, machine learning, and research, where I can contribute to impactful data-driven decision-making.
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
                <p className="text-sm text-muted mt-1">Professional QA &amp; data experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-line">
          <SectionKicker index="04" label="Education" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h4 className="font-display text-lg">M.S. in Data Science</h4>
              <p className="text-sm mt-2 text-paper-dim">University of Maryland, College Park</p>
              <p className="text-sm mt-1 text-muted font-mono">GPA 3.86 / 4.0 · Expected May 2026</p>
            </div>
            <div className="bg-panel border border-line p-7 rounded-2xl">
              <h4 className="font-display text-lg">B.Tech in Computer Science &amp; Engineering</h4>
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
              <h4 className="font-display text-xl">GAN &amp; IEC Approach for Image Generation</h4>
              <span className="text-xs font-mono text-muted">IEEE ISMSIT 2022</span>
            </div>
            <p className="text-sm leading-relaxed text-paper-dim">
              Developed a GAN model coupled with Improved Evolutionary Computing (IEC) to generate high-quality synthetic images, achieving a 94% realism rating and reducing model collapse by 20% through improved training strategies.
            </p>
            <a
              href="https://orcid.org/0009-0005-2068-8898"
              target="_blank"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-accent hover:opacity-80"
            >
              View publication (ORCID) <span aria-hidden>&rarr;</span>
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
                  <h4 className="font-display text-lg">{e.role}</h4>
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
            <p className="text-paper-dim max-w-xl mx-auto mb-10">
              I&rsquo;m open to roles across data science, analytics, engineering, and research. The best way to reach me is via email or LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${email}`}
                className="px-7 py-3.5 rounded-lg bg-accent text-ink font-medium hover:opacity-90 transition-opacity"
              >
                Email Me
              </a>
              <a
                href={linkedin}
                target="_blank"
                className="px-7 py-3.5 rounded-lg border border-line hover:border-accent hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={github}
                target="_blank"
                className="px-7 py-3.5 rounded-lg border border-line hover:border-accent hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-line py-8 text-center text-sm text-muted">
          <div className="mb-2">
            <a href="/Raj_Kamal_Singh_Resume.pdf" target="_blank" className="hover:text-accent">Resume</a>
            {" · "}
            <a href="https://orcid.org/0009-0005-2068-8898" target="_blank" className="hover:text-accent">Research</a>
          </div>
          &copy; {new Date().getFullYear()} {name}
        </footer>
      </main>
    </div>
  );
}
