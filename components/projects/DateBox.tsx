import React from 'react';

export default function DateBox({ dateName, date }: { dateName: string; date: string }) {
  return (
    <div style={{ display: 'inline-flex', background: 'rgba(217, 217, 217, 0.20)', borderRadius: 5, border: '1px #7F7F7F solid', left: 300, top: 427, position: 'absolute'}}>
        <div style={{ color: 'black', fontSize: 16, fontFamily: 'Ubuntu', fontWeight: '700', wordWrap: 'break-word', padding: '5px' }}>{date}</div>
    </div>
  );
};   

