import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amr Elsawalhi — Data Engineer",
  description: "Microsoft Certified Fabric Data Engineer specializing in scalable pipelines, data warehousing, and orchestration with Dagster, PostgreSQL, and Azure.",
  keywords: ["data engineer", "Microsoft Fabric", "Dagster", "Azure", "PostgreSQL", "Python", "SQL", "data pipeline", "ETL", "ELT"],
  authors: [{ name: "Amr Elsawalhi" }],
  openGraph: {
    title: "Amr Elsawalhi — Data Engineer",
    description: "Microsoft Certified Fabric Data Engineer specializing in scalable pipelines and data warehousing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
