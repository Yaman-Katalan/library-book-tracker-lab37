"use client"; // Ensure this is a client component

import { useState } from "react";
import Form from "./Form";
import Toast from "./Toast";
import BooksList from "./BooksList";
import LoginForm from "./LoginForm"; // Import the LoginForm component
import { useAuth } from "../context/AuthContext"; // Import the AuthContext

export default function Main() {
  const [books, setBooks] = useState([]);
  const [lastBook, setLastBook] = useState(null);
  const { user } = useAuth(); // Get the user from the AuthContext

  const addBook = (book) => {
    setBooks([...books, book]);
    setLastBook(book);
  };

  return (
    <main className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
      {user ? (
        <>
          <Form addBook={addBook} />
          <BooksList books={books} />
          <Toast book={lastBook} />
        </>
      ) : (
        <LoginForm /> // Display the LoginForm if the user is not logged in
      )}
    </main>
  );
}
