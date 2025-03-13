'use client';

import React from 'react';
import AccessibleButton from './components/ui/AccessibleButton';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">
        Accessible Next.js Template
      </h1>
      <p className="mb-4">
        This is a basic template for an accessible Next.js application.
      </p>
      <AccessibleButton label={''} >
  
     </AccessibleButton> 
    </main>
  );
}