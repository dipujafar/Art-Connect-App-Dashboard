import React from "react";

const GigsContainerSkeleton = () => {
  const rows = Array.from({ length: 10 });

  return (
    <div className="w-full space-y-6">

      {/* ======= TOP CARDS ======= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Card 1 */}
        <div className="bg-[#1f1f2e] rounded-xl p-6 animate-pulse flex items-center gap-5">
          <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
          <div>
            <div className="w-32 h-5 bg-gray-600 rounded mb-3"></div>
            <div className="w-20 h-7 bg-gray-600 rounded"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1f1f2e] rounded-xl p-6 animate-pulse flex items-center gap-5">
          <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
          <div>
            <div className="w-36 h-5 bg-gray-600 rounded mb-3"></div>
            <div className="w-20 h-7 bg-gray-600 rounded"></div>
          </div>
        </div>

      </div>

      {/* ======= TABLE ======= */}
      <div className="bg-[#1f1f2e] rounded-xl overflow-hidden">

        {/* Table Header */}
        <div className="bg-purple-500 text-white py-3 px-4 grid grid-cols-9 font-semibold">
          <div>#SL</div>
          <div>Name</div>
          <div>Email</div>
          <div>Phone number</div>
          <div>Address</div>
          <div>Date</div>
          <div>Status</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {/* Skeleton Rows */}
        {rows.map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-9 items-center py-4 px-4 border-b border-gray-700 animate-pulse"
          >
            {/* SL */}
            <div className="w-6 h-4 bg-gray-600 rounded"></div>

            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
              <div className="w-24 h-4 bg-gray-600 rounded"></div>
            </div>

            {/* Email */}
            <div className="w-36 h-4 bg-gray-600 rounded"></div>

            {/* Phone */}
            <div className="w-20 h-4 bg-gray-600 rounded"></div>

            {/* Address */}
            <div className="w-28 h-4 bg-gray-600 rounded"></div>

            {/* Date */}
            <div className="w-24 h-4 bg-gray-600 rounded"></div>

            {/* Status */}
            <div className="w-20 h-6 bg-gray-600 rounded-full"></div>

            {/* Action icon */}
            <div className="flex justify-center col-span-2">
              <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default GigsContainerSkeleton;
