"use client"; // Ensure this is a client component

import { useState } from "react";
import Form from "./Form";
import Toast from "./Toast";
import BooksList from "./BooksList";

export default function Main() {
  const [books, setBooks] = useState([]);
  const [lastBook, setLastBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
    setLastBook(book);
  };

  return (
    <main className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
      <Form addBook={addBook} />
      <BooksList books={books} />
      <Toast book={lastBook} />
    </main>
  );
}
