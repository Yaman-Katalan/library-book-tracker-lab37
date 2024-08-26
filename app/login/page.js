// app/login/page.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
