import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Discover from "./pages/Discover";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Simple page navigation for MVP
  const renderPage = () => {
    switch (currentPage) {
      case "discover":
        return <Discover />;
      default:
        return (
          <div className="flex flex-col items-center justify-center flex-grow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 className="text-5xl font-bold text-white mb-6">
              AmenifyMusic 🎵
            </h1>
            <p className="text-white text-lg mb-4">
              Your Gospel Music Social Platform
            </p>
            <button
              onClick={() => setCurrentPage("discover")}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Go to Discover
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
