'use client';

import Image from 'next/image';
import { useState } from 'react';

type YouTubeThumbnailProps = {
  videoId: string;
  alt?: string;
  className?: string;
  sizes?: string;
  fallbackSrc?: string;
};

function thumbnailCandidates(videoId: string) {
  return [
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/default.jpg`
  ];
}

export function YouTubeThumbnail({
  videoId,
  alt = '',
  className = '',
  sizes,
  fallbackSrc = '/assets/images/project-video.jpg'
}: YouTubeThumbnailProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = thumbnailCandidates(videoId);
  const src = sources[sourceIndex] ?? fallbackSrc;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized={src.startsWith('https://')}
      className={className}
      sizes={sizes}
      onError={() => setSourceIndex((current) => current + 1)}
    />
  );
}
