
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="/" className="text-xl font-bold text-red-600">
            Finline
          </a>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-red-600">Home</a>
          <a href="/pricing" className="hover:text-red-600">Pricing</a>
          <a href="/reports" className="hover:text-red-600">Reports</a>
          <a href="/blog" className="hover:text-red-600">Blog</a>
          <a href="/login" className="hover:text-red-600">Login</a>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Get Your Report Now
          </button>
        </nav>
      </div>
    </header>
  );
}
