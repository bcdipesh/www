import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MainFooter from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dipesh B C - Full Stack Developer",
  description:
    "Dipesh B C is a full stack developer based in the US, currently empowering seamless and efficient customer interactions at PayPal.",
  twitter: {
    card: "summary_large_image",
    creator: "@dipeshbc",
    title: "Dipesh B C - Full Stack Developer",
  },
  openGraph: {
    title: "Dipesh B C - Full Stack Developer",
    siteName: "Dipesh B C - Full Stack Developer",
  },
  metadataBase: new URL("https://dipeshbc.vercel.app"),
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
