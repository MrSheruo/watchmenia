import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WatchMenia | Watch Movies, Series and more",
  description: "WatchMenia is the best place to watch movies and series online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className=" m-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
