import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/components/header";
import { ThemeProvider } from "@/app/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning className={nunitoSans.variable}>
      <body className="bg-very-light-gray dark:bg-very-dark-blue text-very-dark-blue dark:text-white">
        <ThemeProvider
          defaultTheme="light"
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
