import { Antonio } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata = {
  title: "Suresh Shanmugasundaram | Portfolio",
  description: "Portfolio of Suresh Shanmugasundaram – showcasing skills, projects, and experience in software development.",
  keywords: [
    "Suresh Shanmugasundaram",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Web Development",
    "React",
    "Node.js"
  ],
  authors: [{ name: "Suresh Shanmugasundaram" }],
  openGraph: {
    title: "Suresh Shanmugasundaram | Portfolio",
    description:
      "Explore the portfolio of Suresh Shanmugasundaram – projects, skills, and achievements in software development.",
    url: "https://sureshshanmugasundaram.com",
    siteName: "Suresh Shanmugasundaram Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/doii12l1d/image/upload/v1755418579/suresh_logo-transaparent_oq1fux.png",
        width: 1200,
        height: 630,
        alt: "Suresh Shanmugasundaram Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Shanmugasundaram | Portfolio",
    description:
      "Check out the portfolio of Suresh Shanmugasundaram – software developer specializing in modern web technologies.",
    images: ["https://res.cloudinary.com/doii12l1d/image/upload/v1755418579/suresh_logo-transaparent_oq1fux.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${antonio.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
