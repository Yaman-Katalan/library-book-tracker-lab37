// app/components/BooksList.js
"use client"; // Add this line at the top if you are using hooks

import useSortedBooks from "../hooks/useSortedBooks";

export default function BooksList({ books }) {
  // Use the custom hook to get sorted books
  const sortedBooks = useSortedBooks(books);

  return (
    <ul className="mt-4">
      {sortedBooks.map((book, index) => (
        <li key={index} className="mb-2 p-2 border rounded">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-gray-600">by {book.author}</p>
          <p className="text-gray-500">{book.genre}</p>
        </li>
      ))}
    </ul>
  );
}
