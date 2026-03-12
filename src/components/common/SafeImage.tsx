import { useState } from 'react';

type Props = {
  src?: string;
  alt: string;
  fallback?: string;
};

export default function SafeImage({ src, alt, fallback = '/images/broken.png' }: Props) {
  const [imgSrc, setImgSrc] = useState(src || '/images/default.jpg');

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
      style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem' }}
    />
  );
}
