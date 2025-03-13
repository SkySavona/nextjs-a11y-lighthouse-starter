'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">
        Accessible Next.js Template
      </h1>
      <p className="mb-4">
        This is a basic template for an accessible Next.js application.
      </p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        aria-label="Learn more about accessibility"
      >
        Learn More
      </button>
    </main>
  );
}