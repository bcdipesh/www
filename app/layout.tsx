import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MainFooter from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dipesh B C - Software Engineer",
  description:
    "Dipesh B C is a software engineer based in Falls Church, currently building the future of low-code, no-code application platform at BizFlow Corp.",
  twitter: {
    card: "summary_large_image",
    creator: "@dipeshbc",
    title: "Dipesh B C - Software Engineer",
  },
  openGraph: {
    title: "Dipesh B C - Software Engineer",
    siteName: "Dipesh B C - Software Engineer",
  },
  metadataBase: new URL("https://dipeshbc.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-dvh flex-col antialiased overflow-y-scroll`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container md:max-w-2xl flex flex-col min-h-dvh">
            <MainHeader />
            <main className="flex-1 pb-16">{children}</main>
            <MainFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
