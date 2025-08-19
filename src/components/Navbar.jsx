import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">Amenify</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
            <a href="/discover" className="hover:text-gray-200">
              Discover
            </a>
            <a href="/lessons" className="hover:text-gray-200">
              Lessons
            </a>
            <a href="/login" className="hover:text-gray-200">
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-500 px-4 pt-2 pb-4 space-y-1">
          <a href="/" className="block hover:text-gray-200">
            Home
          </a>
          <a href="/discover" className="block hover:text-gray-200">
            Discover
          </a>
          <a href="/lessons" className="block hover:text-gray-200">
            Lessons
          </a>
          <a href="/login" className="block hover:text-gray-200">
            Login
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
