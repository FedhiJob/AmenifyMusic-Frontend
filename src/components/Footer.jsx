import React from "react";

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} AmenifyMusic. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Follow us on
          <a href="https://youtube.com" className="ml-1 underline">
            YouTube
          </a>
          ,
          <a href="https://instagram.com" className="ml-1 underline">
            Instagram
          </a>
          ,
          <a href="https://facebook.com" className="ml-1 underline">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
