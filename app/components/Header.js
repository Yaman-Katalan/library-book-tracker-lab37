"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-blue-500 text-white py-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Library Book Tracker</h1>
        <nav className="flex items-center">
          <Link href="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link href="/about" className="mr-4 hover:underline">
            About Us
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 bg-gray-800 text-white rounded"
          >
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}
