import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://thingsofariel.github.io/Project-Portofolio";
const TITLE = "Ariel S Toi — Web Developer & System Architect";
const DESCRIPTION = "Portfolio of Ariel S Toi — IT Support, Web Developer, System Architect.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/assets/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/assets/images/profile.webp` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/assets/images/profile.webp`],
  },
};

export const viewport = {
  themeColor: "#0A0D12",
};

// Runs before hydration so the saved theme applies with no flash of the
// wrong theme. Kept as a tiny inline script rather than a dependency.
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('ast-portfolio-theme');
    var theme = saved === 'dark' || saved === 'light'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>
        <Background />
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
