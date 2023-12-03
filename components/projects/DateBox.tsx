import React from 'react';

export default function DateBox({ dateName, date }: { dateName: string; date: string }) {
  return (
    <div>
      <p style={{ marginBottom: '5px', color: '#666666', fontSize: '1rem', fontWeight: 'bold' }}>
        {dateName}
      </p>
      <div style={{ display: 'inline-block', background: 'rgba(217, 217, 217, 0.20)', borderRadius: 5, border: '1px #7F7F7F solid', color: 'black', fontSize: 16, padding: '6px', boxSizing: 'border-box' }}>
        {date}
      </div>
    </div>
  );
}
