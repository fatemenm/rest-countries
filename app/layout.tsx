import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Rest Countries",
  description: "Rest Countries project using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body>{children}</body>
    </html>
  );
}
