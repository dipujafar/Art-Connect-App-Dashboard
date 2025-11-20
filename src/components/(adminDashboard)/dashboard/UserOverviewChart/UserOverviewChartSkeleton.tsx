import React from 'react'

export default function UserOverviewChartSkeleton() {
    return (
        <div className="w-full p-6 rounded-xl bg-[#1b1c23]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                {/* Title skeleton */}
                <div className="h-6 w-40 rounded bg-gray-700 animate-pulse" />

                {/* Dropdown skeleton */}
                <div className="h-9 w-24 rounded bg-gray-700 animate-pulse" />
            </div>

            {/* Chart area */}
            <div className="w-full">
                {/* Bars */}
                <div className="grid grid-cols-12 gap-3 h-64 items-end">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-full bg-gray-700 rounded animate-pulse"
                            style={{
                                height: `${50 + Math.random() * 120}px`, // varied bar heights
                            }}
                        />
                    ))}
                </div>

                {/* Month labels */}
                <div className="grid grid-cols-12 gap-3 mt-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-4 w-8 mx-auto rounded bg-gray-700 animate-pulse"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
