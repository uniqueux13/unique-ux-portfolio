import React from 'react';
import styles from './Video.module.css'

interface VideoProps {
    src: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    width?: string | number;
    height?: string | number;
    className?: string;
}
const Video: React.FC<VideoProps> = ({ src, controls = true, autoPlay = false, loop = false, muted = false, width, height, className }) => {
    return (
        <video
            className={`${styles.video} ${className}`}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            width={width}
            height={height}

        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default Video;