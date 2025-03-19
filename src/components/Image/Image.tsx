import React, { useState, useRef, useEffect } from 'react';
import styles from './Image.module.css';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    lazyLoad?: boolean;

}

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height, lazyLoad = true }) => {
    const [imageSrc, setImageSrc] = useState<string | undefined>(lazyLoad ? undefined : src);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (lazyLoad) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setImageSrc(src); // Load image when in viewport
                            observer.unobserve(entry.target); // Stop observing once loaded
                        }
                    });
                },
                {
                    rootMargin: '100px', // Load a bit before it's visible
                }
            );

            if (imageRef.current) {
                observer.observe(imageRef.current);
            }

            return () => {
                if (imageRef.current) {
                    observer.unobserve(imageRef.current);
                }
            };
        }
    }, [lazyLoad, src]); //Dependencies for useEffect



    return (
        <img
            ref={imageRef}
            src={imageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"} //Very small transparent SVG as a placeholder
            alt={alt}
            className={`${styles.image} ${className}`}
            style={{ width, height }}  //Inline style for width and height

        />
    );
};

export default Image;