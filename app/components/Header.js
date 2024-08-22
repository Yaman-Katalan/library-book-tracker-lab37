"use client"; // Ensure this is a client component

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-blue-600 text-white py-4 dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-center text-3xl font-bold">Library Book Tracker</h1>
      <nav className="text-center mt-2">
        <Link href="/" className="mx-4">
          Home
        </Link>
        <Link href="/about" className="mx-4">
          About Us
        </Link>
        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 bg-gray-800 text-white rounded dark:bg-gray-700"
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </nav>
    </header>
  );
}
