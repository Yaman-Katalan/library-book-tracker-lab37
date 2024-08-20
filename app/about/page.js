// app/about/page.js
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p>
          Welcome to the Library Book Tracker app! This app allows you to track
          your favorite books by adding details such as title, author, and
          genre. You can view all your books sorted by title, and this page
          gives you an insight into the purpose of this app.
        </p>
      </main>
      <Footer />
    </>
  );
}
