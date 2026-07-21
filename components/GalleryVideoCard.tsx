'use client';

export function GalleryVideoCard({ video }: { video: { title: string; src: string } }) {
  return (
    <article className="w-[min(86vw,520px)] shrink-0 overflow-hidden rounded-[18px] border border-navy/10 bg-white shadow-soft">
      <div className="aspect-video overflow-hidden bg-navy">
        <video
          src={video.src}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-contain"
          aria-label={video.title}
          onPointerDown={(event) => event.stopPropagation()}
          onPlay={(event) => {
            event.currentTarget.muted = false;
            event.currentTarget.volume = 1;
          }}
        />
      </div>
      <h3 className="px-5 py-4 text-lg font-extrabold text-navy">{video.title}</h3>
    </article>
  );
}
