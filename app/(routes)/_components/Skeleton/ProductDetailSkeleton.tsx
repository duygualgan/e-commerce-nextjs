import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailSkeleton = () => {
  return (
    <div className="mt-10 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 container">
        <div className="col-span-1">
          <Skeleton className="w-full h-[400px] lg:h-[600px] skeletoncolor" />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-12 w-96 skeletoncolor" />
            <Skeleton className="h-6 w-40 skeletoncolor" />
            <Skeleton className="h-48 w-full skeletoncolor" />
            <div className="flex gap-3">
              <Skeleton className="h-8 w-20 skeletoncolor" />
              <Skeleton className="h-8 w-20 skeletoncolor" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-10 w-40 skeletoncolor" />
              <Skeleton className="h-10 w-40 skeletoncolor" />
            </div>
            <div className="flex gap-3 mt-8">
              <Skeleton className="h-10 w-40 skeletoncolor" />
            </div>
            <div className="flex gap-3 mt-2">
              <Skeleton className="h-10 w-24 skeletoncolor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
