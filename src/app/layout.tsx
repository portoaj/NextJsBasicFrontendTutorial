import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple and elegant to-do list application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <header className="w-full py-4 bg-blue-500 text-white flex justify-between items-center px-6">
            <div className="flex items-center">
              <nav>
                <Link href="/" className="flex text-center">
                  {/* Example logo */}
                  <div className="w-10 h-10 bg-white rounded-full"></div>{" "}
                  <h1 className="ml-4 text-xl font-bold">My To-Do List</h1>
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 w-full max-w-3xl mx-auto bg-white rounded-lg">
            {children}
          </main>
          <footer className="w-full py-4 bg-gray-800 text-white text-center">
            <p>&copy; 2024 Basic To-Do List App - UCSD CSES</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
