// app/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <h1 className="text-center text-3xl font-bold">Library Book Tracker</h1>
      <nav className="text-center mt-2">
        <Link href="/" className="mx-4">
          Home
        </Link>
        <Link href="/about" className="mx-4">
          About Us
        </Link>
      </nav>
    </header>
  );
}
