// app/components/Toast.js
"use client"; // Add this line at the top

export default function Toast({ book }) {
  return (
    <div
      className={`fixed bottom-4 right-4 p-4 ${
        book ? "bg-green-500" : "bg-red-500"
      } text-white rounded`}
    >
      {book ? (
        <p>
          Added: <strong>{book.title}</strong> by {book.author} (Genre:{" "}
          {book.genre})
        </p>
      ) : (
        <p>No book added yet.</p>
      )}
    </div>
  );
}
