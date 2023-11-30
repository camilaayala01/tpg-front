// ImagenComponente.tsx
import React from 'react';

const ImagenComponente: React.FC<{ src: string; alt: string; style?: React.CSSProperties }> = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

export default ImagenComponente;

