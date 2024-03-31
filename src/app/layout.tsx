import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hexleap",
  description: "Hexleap Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#F7F7F8] dark:bg-[#292B32]" lang="en">
      <body>{children}</body>
    </html>
  );
}
