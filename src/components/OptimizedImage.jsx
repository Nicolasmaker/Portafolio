// src/components/OptimizedImage.jsx
import React, { useState, useCallback } from 'react';
import { Spinner } from 'react-bootstrap';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  loading = 'lazy',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div 
        className={`d-flex align-items-center justify-content-center bg-light text-muted`}
        style={{ minHeight: '200px', ...props.style }}
        {...props}
      >
        <div className="text-center">
          <i className="fas fa-image fa-2x mb-2"></i>
          <p className="mb-0 small">Error al cargar imagen</p>
        </div>
      </div>
    );
  }

  return (
    <div className="position-relative">
      {isLoading && (
        <div 
          className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-light optimized-image-overlay`}
          style={{ minHeight: '200px', zIndex: 1 }}
        >
          {placeholder || (
            <Spinner animation="border" variant="primary" size="sm" />
          )}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          transition: 'opacity 0.3s ease-in-out',
          ...props.style
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;