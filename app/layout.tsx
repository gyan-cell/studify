import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/static/Navbar";


export const metadata: Metadata = {
  title: "Studify.",
  description: "Study Hard With Studify.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
