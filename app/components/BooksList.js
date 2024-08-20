// app/components/BooksList.js
"use client"; // Add this line at the top

import useSortedBooks from "../hooks/useSortedBooks";

export default function BooksList({ books }) {
  const sortedBooks = useSortedBooks(books);

  return (
    <ul className="mt-4">
      {sortedBooks.map((book, index) => (
        <li key={index} className="border-b py-2">
          <strong>{book.title}</strong> by {book.author} (Genre: {book.genre})
        </li>
      ))}
    </ul>
  );
}
