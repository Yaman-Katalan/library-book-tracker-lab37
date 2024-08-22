// app/hooks/useSortedBooks.js
import { useMemo } from "react";

const useSortedBooks = (books) => {
  return useMemo(() => {
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);
};

export default useSortedBooks;
