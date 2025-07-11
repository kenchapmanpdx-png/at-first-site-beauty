
import React, { lazy, Suspense } from 'react';

const Gallery = lazy(() => import('./Gallery'));

export default function LazyGallery() {
  return (
    <Suspense fallback={
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      <Gallery />
    </Suspense>
  );
}
