import React from 'react';

const DescriptionBox = (description: string) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '200px',
        background: 'rgba(217, 217, 217, 0.16)',
        borderRadius: 10,
        border: '1px #999999 solid',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h2>Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionBox;
