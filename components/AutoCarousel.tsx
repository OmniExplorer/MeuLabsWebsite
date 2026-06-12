'use client';

import { MouseEvent, PointerEvent, ReactNode, WheelEvent, useEffect, useRef, useState } from 'react';

type AutoCarouselProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  axis?: 'x' | 'y';
  reverse?: boolean;
  durationSeconds?: number;
  speedPixelsPerSecond?: number;
};

export function AutoCarousel({
  ariaLabel,
  children,
  className = '',
  trackClassName = '',
  axis = 'x',
  reverse = false,
  durationSeconds = 14,
  speedPixelsPerSecond = 80
}: AutoCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const firstTrackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);
  const dragRef = useRef<{ pointerId: number; startPosition: number; startOffset: number; moved: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  const getLoopSize = () => {
    const firstTrack = firstTrackRef.current;
    if (!firstTrack) return 0;
    return axis === 'x'
      ? firstTrack.getBoundingClientRect().width
      : firstTrack.getBoundingClientRect().height;
  };

  const normalizeOffset = (value: number, loopSize: number) => {
    if (loopSize <= 1) return 0;
    let next = value;
    while (next <= -loopSize) next += loopSize;
    while (next > 0) next -= loopSize;
    return next;
  };

  const applyOffset = (value: number) => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = axis === 'x'
      ? `translate3d(${value}px, 0, 0)`
      : `translate3d(0, ${value}px, 0)`;
  };

  const moveBy = (delta: number) => {
    const loopSize = getLoopSize();
    if (loopSize <= 1) return;
    offsetRef.current = normalizeOffset(offsetRef.current + delta, loopSize);
    applyOffset(offsetRef.current);
  };

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const inner = innerRef.current;
    const firstTrack = firstTrackRef.current;
    if (!inner || !firstTrack) return;

    let frame = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const loopSize = getLoopSize();
      const canMove = loopSize > 1;

      if (canMove && !pausedRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const delta = Math.min(time - lastTime, 64);
        const speed = (speedPixelsPerSecond ?? loopSize / durationSeconds) / 1000;
        offsetRef.current = normalizeOffset(offsetRef.current + (reverse ? 1 : -1) * speed * delta, loopSize);
        applyOffset(offsetRef.current);
      }

      lastTime = time;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [axis, durationSeconds, reverse, speedPixelsPerSecond]);

  useEffect(() => () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
  }, []);

  const pause = () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    setPaused(true);
  };

  const resume = () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => setPaused(false), 650);
  };

  const getPointerPosition = (event: PointerEvent<HTMLDivElement>) => (
    axis === 'x' ? event.clientX : event.clientY
  );

  const dragStart = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary) return;
    pause();
    dragRef.current = {
      pointerId: event.pointerId,
      startPosition: getPointerPosition(event),
      startOffset: offsetRef.current,
      moved: false
    };
  };

  const dragMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const delta = getPointerPosition(event) - drag.startPosition;
    if (Math.abs(delta) > 6) {
      if (!drag.moved && !event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      drag.moved = true;
      event.preventDefault();
    }

    const loopSize = getLoopSize();
    const next = normalizeOffset(drag.startOffset + delta, loopSize);
    offsetRef.current = next;
    applyOffset(next);
  };

  const dragEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      suppressClickRef.current = dragRef.current.moved;
      dragRef.current = null;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      resume();
    }
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const rawDelta = axis === 'x'
      ? Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      : Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

    if (Math.abs(rawDelta) < 1) return;
    event.preventDefault();
    pause();
    moveBy(-rawDelta);
    resume();
  };

  return (
    <div
      ref={viewportRef}
      aria-label={ariaLabel}
      className={`auto-carousel auto-carousel-${axis} ${className}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onPointerDown={dragStart}
      onPointerMove={dragMove}
      onPointerUp={dragEnd}
      onPointerCancel={dragEnd}
      onClickCapture={handleClickCapture}
      onWheel={handleWheel}
      onDragStart={(event) => event.preventDefault()}
    >
      <div ref={innerRef} className={`auto-carousel-inner auto-carousel-inner-${axis}`}>
        <div ref={firstTrackRef} className={`auto-carousel-track auto-carousel-track-${axis} ${trackClassName}`}>
          {children}
        </div>
        <div className={`auto-carousel-track auto-carousel-track-${axis} ${trackClassName}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
