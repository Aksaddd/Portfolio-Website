import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aksad Hossain — Portfolio",
  description:
    "Aksad Hossain — full-stack engineer. Projects in AI-assisted ed-tech, full-stack web, and systems design.",
  openGraph: {
    title: "Aksad Hossain — Portfolio",
    description:
      "Full-stack engineer. Quant-Review (AI ed-tech), Ensō no Sato, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise font-sans antialiased bg-moss-950 text-ink">
        {children}
      </body>
    </html>
  );
}
