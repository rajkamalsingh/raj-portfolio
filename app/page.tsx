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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Hi — I’m {name}.</h2>
            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
              I build production-ready machine learning systems and data pipelines. I enjoy shipping
              models that make a measurable impact and building infrastructure to keep them reliable.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={github}
                className="inline-block border px-4 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                GitHub
              </a>
              <a
                href={linkedin}
                className="inline-block border px-4 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <h3 className="text-lg font-medium">Contact</h3>
            <p className="text-sm mt-2">{email}</p>
            <p className="text-sm mt-2">Open to ML / Data Science roles — remote or hybrid.</p>
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

        <section id="about" className="mb-12">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-medium">Background</h4>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                I have experience building ML models, deploying services on cloud platforms, and
                building data pipelines. I enjoy taking projects from prototype to production.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-medium">What I’m working on</h4>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Improving model robustness, experimenting with LLM-based retrieval systems, and
                building observability for ML systems.
              </p>
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
