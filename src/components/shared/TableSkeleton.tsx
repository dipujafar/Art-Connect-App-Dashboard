export default function TableSkeleton() {
  return (
    <div className="w-full bg-neutral-900 text-white rounded-lg p-5">
      {/* Title */}
      <div className="h-6 w-40 bg-neutral-700 animate-pulse rounded mb-4"></div>

      {/* Header */}
      <div className="grid grid-cols-6 bg-purple-600 text-left text-white px-4 py-3 rounded-t-lg">
        <div>#SL</div>
        <div>Full Name</div>
        <div>Email</div>
        <div>Join Date</div>
        <div>Action</div>
      </div>

      {/* Skeleton Rows */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-6 items-center px-4 py-4 border-b border-neutral-700"
        >
          {/* SL */}
          <div>
            <div className="w-6 h-4 bg-neutral-700 animate-pulse rounded"></div>
          </div>

          {/* Full Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-700 animate-pulse"></div>
            <div className="w-32 h-4 bg-neutral-700 animate-pulse rounded"></div>
          </div>

          {/* Email */}
          <div>
            <div className="w-48 h-4 bg-neutral-700 animate-pulse rounded"></div>
          </div>

          {/* Join Date */}
          <div>
            <div className="w-28 h-4 bg-neutral-700 animate-pulse rounded"></div>
          </div>

          {/* Action */}
          <div>
            <div className="w-6 h-6 bg-neutral-700 animate-pulse rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
