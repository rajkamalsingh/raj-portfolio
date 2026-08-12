import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://www.rajkamalsingh.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Raj Kamal Singh | Data Analyst & Data Scientist",
  description:
    "Portfolio of Raj Kamal Singh — Data Analyst with 4+ years of experience, pursuing an M.S. in Data Science, working across machine learning, time-series forecasting, computer vision, and applied research.",
  keywords: [
    "Raj Kamal Singh",
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "University of Maryland",
    "Data Science Portfolio",
  ],
  authors: [{ name: "Raj Kamal Singh", url: siteUrl }],
  creator: "Raj Kamal Singh",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Raj Kamal Singh — Portfolio",
    title: "Raj Kamal Singh | Data Analyst & Data Scientist",
    description:
      "Data Analyst with 4+ years of experience, pursuing an M.S. in Data Science at the University of Maryland. Open to Data Science, Analytics, Engineering, and Research roles.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Kamal Singh | Data Analyst & Data Scientist",
    description:
      "Data Analyst with 4+ years of experience, pursuing an M.S. in Data Science at the University of Maryland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raj Kamal Singh",
    url: siteUrl,
    jobTitle: "Data Analyst",
    description:
      "Data Analyst with 4+ years of experience, pursuing an M.S. in Data Science at the University of Maryland. Open to Data Science, Analytics, Engineering, and Research roles.",
    email: "mailto:rajkamalsingh0001@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/raj-kamal-singh13/",
      "https://github.com/rajkamalsingh",
      "https://orcid.org/0009-0005-2068-8898",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Maryland, College Park",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Petroleum and Energy Studies",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Fidelity Investments",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}