import React from 'react';

export default function MyNav({ links }) {
  return (
    <nav>
      {
        links.map(link => (
          <a key={link.id} href={link.url}>{link.label}</a>
        ))
      }
    </nav>
  );
}
