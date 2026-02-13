"use client";
import React, { useState, useEffect } from "react";

// This is a single-file Next.js-compatible React component (pages/index.tsx or app/page.tsx style)
// Tailwind CSS is used for styling. Replace placeholder links/descriptions with your real content.



const projects = [
  {
    id: 1,
    title: "LSTM Stock Price Prediction",
    subtitle: "LSTM + daily retraining pipeline",
    description:
      "End-to-end LSTM model for next-day stock prediction with automated daily data ingestion and retraining. Includes visualization and deployment-ready Docker image.",
    tech: ["Python", "Keras", "Docker", "AWS"],
    repo: "https://github.com/your-github/stock-prediction",
    demo: "#"
  },
  {
    id: 2,
    title: "Bitcoin Real-Time Anomaly Detection",
    subtitle: "AWS Lambda + real-time dashboard",
    description:
      "Low-latency anomaly detection pipeline for crypto price and volume anomalies using serverless functions and a live dashboard for alerts.",
    tech: ["AWS Lambda", "Python", "Dash"],
    repo: "https://github.com/your-github/bitcoin-anomaly",
    demo: "#"
  },
  {
    id: 3,
    title: "Fashion-MNIST Experiments",
    subtitle: "PCA / Kernel PCA / SVM / k-means",
    description:
      "Dimensionality reduction experiments followed by classification and clustering to compare PCA, Kernel PCA and Laplacian Eigenmaps on Fashion-MNIST.",
    tech: ["Python", "NumPy", "Scikit-Learn"],
    repo: "https://github.com/your-github/fashion-mnist",
    demo: "#"
  },
  {
    id: 4,
    title: "RAG Chatbot (File Uploads)",
    subtitle: "Retrieval-Augmented Generation chatbot",
    description:
      "A RAG-based chatbot supporting document uploads, search, and fine-grained Q&A over user files. Built with FastAPI and vector DBs.",
    tech: ["FastAPI", "LLMs", "Vector DBs"],
    repo: "https://github.com/your-github/rag-chatbot",
    demo: "#"
  },
  {
    id: 5,
    title: "Real-Time ETL Pipeline",
    subtitle: "Kafka / Flink / Kibana",
    description:
      "Generic, modular ETL pipeline for multiple data sources using Kafka, Flink and Kibana for monitoring and observability.",
    tech: ["Kafka", "Flink", "Docker"],
    repo: "https://github.com/your-github/etl-pipeline",
    demo: "#"
  },
  {
    id: 999,
    title: "New Project Placeholder",
    subtitle: "Coming soon",
    description: "This is a placeholder for future projects you will add to your portfolio.",
    tech: ["Tech1", "Tech2"],
    repo: "#",
    demo: "#"
  }
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const name = "Raj"; // personalized from your input
  const tagline = "Your Tagline Here (we will finalize later)";
  const linkedin = "#";
  const github = "#";
  const email = "your.email@example.com";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="mt-1 text-sm opacity-80">{tagline}</p>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="border rounded-md px-3 py-1 text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold">Hi, I’m Raj Kamal Singh</h2>
            <p className="mt-5 leading-relaxed text-gray-700 dark:text-gray-300">
              I am a Data Scientist and Machine Learning Engineer with hands-on experience building
              predictive models, deep learning systems, and end-to-end ML pipelines. I am currently
              pursuing an M.S. in Data Science at the University of Maryland, College Park, and have
              industry experience deploying scalable systems across finance, computer vision, and
              cloud-based applications.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
              I have a strong interest in production ML, research-driven development, and building
              reliable AI systems that create measurable impact. My background includes published
              IEEE research, real-time ML pipelines, and cloud-native deployments.
            </p>

            <div className="mt-7 flex gap-4 flex-wrap">
              <a href={github} className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">GitHub</a>
              <a href={linkedin} className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">LinkedIn</a>
              <a href="#" className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Download Resume</a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <h3 className="text-lg font-medium">Quick Info</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li><strong>Degree:</strong> M.S. Data Science (UMD)</li>
              <li><strong>Graduation:</strong> May 2026</li>
              <li><strong>Location:</strong> United States</li>
              <li><strong>Status:</strong> Open to ML / Data Science roles</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Selected Projects</h2>
            <p className="text-sm opacity-80">Detailed case studies and repos below.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.id}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm opacity-80 mt-1">{p.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs border rounded-full px-2 py-1 opacity-90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <a href={p.repo} className="text-sm underline">
                    Repo
                  </a>
                  <a href={p.demo} className="text-sm underline">
                    Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-medium">M.S. in Data Science</h4>
              <p className="text-sm mt-1">University of Maryland, College Park</p>
              <p className="text-sm mt-1">CGPA: 3.86 · Expected May 2026</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-medium">B.Tech in Computer Science & Engineering</h4>
              <p className="text-sm mt-1">University of Petroleum and Energy Studies</p>
              <p className="text-sm mt-1">CGPA: 7.92 · June 2020</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Research & Publications</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h4 className="font-medium">GAN & IEC Approach for Image Generation</h4>
            <p className="text-sm mt-2">IEEE ISMSIT 2022</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Developed a GAN model coupled with Improved Evolutionary Computing (IEC) to generate
              high-quality synthetic images. Achieved a 94% realism rating and reduced model collapse
              by 20% through improved training strategies.
            </p>
            <p className="mt-3 text-sm italic">Paper link will be added soon.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          <div className="grid gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-medium">Quality Analyst — Nimbbl</h4>
              <p className="text-sm mt-1">July 2022 – July 2024</p>
              <ul className="mt-3 text-sm list-disc list-inside space-y-1">
                <li>Reduced critical production defects by 30% through workflow optimization.</li>
                <li>Implemented API automation using JMeter, improving test execution speed by 50%.</li>
                <li>Resolved 92% of reported issues within sprint cycles using data-driven analysis.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-medium">Quality Assurance Engineer — LTI</h4>
              <p className="text-sm mt-1">June 2020 – June 2022</p>
              <ul className="mt-3 text-sm list-disc list-inside space-y-1">
                <li>Reduced post-release defects by 25% through systematic test design.</li>
                <li>Managed 500+ test cases ensuring 100% functional coverage.</li>
                <li>Achieved 97% on-time delivery across multiple enterprise projects.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <p className="text-sm mb-4">Email me at <strong>{email}</strong> or open a PR on any repo.</p>

          <form className="grid gap-3 max-w-xl">
            <input
              placeholder="Your name"
              className="border rounded-md px-3 py-2 bg-transparent"
            />
            <input
              placeholder="Your email"
              className="border rounded-md px-3 py-2 bg-transparent"
            />
            <textarea
              placeholder="Message"
              className="border rounded-md px-3 py-2 bg-transparent min-h-[120px]"
            />
            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Send
              </button>
              <a href={github} className="px-4 py-2 rounded-md border inline-block">
                View GitHub
              </a>
            </div>
          </form>
        </section>

        <footer className="py-8 text-center text-sm opacity-80">
          © {new Date().getFullYear()} {name} — Built with Next.js + Tailwind • Ready for Vercel deploy
        </footer>
      </main>
    </div>
  );
}

