'use client';

import { useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';

export function GalleryVideoCard({ video }: { video: { title: string; src: string } }) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const enableSound = () => {
    const selectedVideo = videoRef.current;
    if (!selectedVideo) return;

    document.querySelectorAll<HTMLVideoElement>('[data-gallery-video]').forEach((galleryVideo) => {
      if (galleryVideo !== selectedVideo) galleryVideo.muted = true;
    });
    selectedVideo.defaultMuted = false;
    selectedVideo.muted = false;
    selectedVideo.volume = 1;
    setSoundEnabled(true);
    void selectedVideo.play();
  };

  return (
    <article className="aspect-[4/3] w-[min(84vw,440px)] shrink-0 snap-start overflow-hidden rounded-[18px] border border-navy/10 bg-navy shadow-soft">
      <div className="group/video relative h-full w-full cursor-pointer overflow-hidden">
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          loop
          muted={!soundEnabled}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label={video.title}
          onPointerDown={(event) => event.stopPropagation()}
          data-gallery-video
        />
        {!soundEnabled && (
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={enableSound}
            className="absolute right-3 top-3 inline-flex w-fit items-center gap-2 rounded-full bg-navy/90 px-4 py-2 text-sm font-extrabold text-white shadow-pop backdrop-blur-sm transition hover:scale-105 focus-visible:scale-105"
          >
            <Volume2 size={17} aria-hidden />
            Click for sound
          </button>
        )}
      </div>
    </article>
  );
}
