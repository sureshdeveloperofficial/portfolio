import { Antonio } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
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
