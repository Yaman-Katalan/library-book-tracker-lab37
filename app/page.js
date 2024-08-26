// app/page.js
"use client"; // Ensure this is a client component

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthContext"; // Import useAuth correctly

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Header />
      {user ? (
        <Main />
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p>Please log in to view the content.</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
