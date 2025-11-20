export default function StatisticSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
      {/* Card 1 */}
      <div className="bg-neutral-800 rounded-xl px-5 py-10">
        <div className="h-5 w-32 bg-neutral-700 animate-pulse rounded mb-3"></div>
        <div className="h-6 w-20 bg-neutral-700 animate-pulse rounded"></div>
      </div>

      {/* Card 2 */}
      <div className="bg-neutral-800 rounded-xl p-5 py-10">
        <div className="h-5 w-32 bg-neutral-700 animate-pulse rounded mb-3"></div>
        <div className="h-6 w-20 bg-neutral-700 animate-pulse rounded"></div>
      </div>

      {/* Full-width Card */}
      <div className="col-span-2 bg-neutral-800 rounded-xl p-5 py-10">
        <div className="h-5 w-40 bg-neutral-700 animate-pulse rounded mb-3"></div>
        <div className="h-6 w-20 bg-neutral-700 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
