// src/components/Video/Video.tsx
import React, { useRef, useEffect } from 'react';
import styles from './Video.module.css';

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const Video: React.FC<VideoProps> = ({
  src,
  className,
  autoPlay,
  muted,
  loop,
  controls,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, [autoPlay]);

  const isYouTube = src.includes('youtube.com/embed');

  return (
    <div className={`${styles.videoContainer} ${className || ''}`}>
      {isYouTube ? (
        <iframe
          className={styles.videoIframe}
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Video;