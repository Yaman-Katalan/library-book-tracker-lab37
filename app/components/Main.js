"use client";

import { useTheme } from "../context/ThemeContext";
import Form from "./Form";
import Toast from "./Toast";
import BooksList from "./BooksList";

export default function Main() {
  const { theme } = useTheme();

  return (
    <main
      className={`container mx-auto px-4 py-8 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Form />
      <Toast />
      <BooksList />
    </main>
  );
}
