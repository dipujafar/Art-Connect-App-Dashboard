import React from "react";

const InstrumentsContainerSkeleton = () => {
  const skeletonItems = Array.from({ length: 15 });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
      {skeletonItems.map((_, index) => (
        <div key={index}>
          <div className="bg-[#1f1f2e] rounded-xl p-6 text-center">
            
            {/* Round Image Skeleton */}
            <div className="animate-pulse flex justify-center">
              <div className="w-28 h-28 rounded-full bg-gray-600 mb-5"></div>
            </div>

            {/* Title Skeleton */}
            <div className="animate-pulse flex justify-center mb-5">
              <div className="w-40 h-5 bg-gray-600 rounded"></div>
            </div>

            {/* Buttons Skeleton */}
            <div className="flex justify-center gap-3 animate-pulse">
              <div className="w-20 h-8 bg-gray-600 rounded-xl"></div>
              <div className="w-20 h-8 bg-gray-600 rounded-xl"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstrumentsContainerSkeleton;
