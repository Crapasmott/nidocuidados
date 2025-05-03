// src/app/blog/layout.jsx
import React from 'react';
import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <div className="blog-layout">
      
      
      {/* Contenido principal */}
      <main>
        {children}
      </main>
    </div>
  );
}