import React from 'react';

export default function ShowHistorySearch() {
  const Getsearch = JSON.parse(localStorage.getItem('search'));

  return (
    <div>
      <ul>
        {Getsearch.map((search) => (
          <li key={Math.random()}>{search}</li>
        ))}
      </ul>
    </div>
  );
}
