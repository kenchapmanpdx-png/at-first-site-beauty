import { useState, useRef, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  width?: number;
  height?: number;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  style, 
  loading = 'lazy',
  onLoad,
  width,
  height
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [webpError, setWebpError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  const handleWebpError = useCallback(() => {
    setWebpError(true);
  }, []);

  // Generate WebP path from original image path
  const getWebpSrc = (originalSrc: string) => {
    if (originalSrc.includes('/attached_assets/')) {
      return originalSrc
        .replace('/attached_assets/', '/attached_assets/webp/')
        .replace(/\.(png|jpg|jpeg)$/i, '.webp');
    }
    return originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  };

  const webpSrc = getWebpSrc(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={style}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}
      <picture>
        {!webpError && (
          <source 
            srcSet={webpSrc} 
            type="image/webp"
            onError={handleWebpError}
          />
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          decoding="async"
          width={width}
          height={height}
        />
      </picture>
    </div>
  );
}