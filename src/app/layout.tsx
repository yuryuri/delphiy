import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delphiy - AI-Powered Philosophical Reflection",
  description: "Engage in meaningful philosophical discussions with Delphiy, an AI companion that uses the Socratic method to encourage deeper thinking and reflection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
