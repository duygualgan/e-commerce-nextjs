import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductItemSkeleton = () => {
  return (
    <div
      className="group p-2 md:p-4 lg:p-6 flex flex-col items-center justify-center gap-4 border
    borderone bgone lg:h-[450px] rounded-xl hover:shadow-lg transition-all cursor-pointer duration-300"
    >
      <Skeleton className="w-full h-[300px] p-6 skeletoncolor" />

      <div className="flex flex-col gap-3">
        <Skeleton className="w-36 h-5  skeletoncolor" />
        <Skeleton className="w-36 h-5  skeletoncolor" />
      </div>
      <div className="flex flex-row gap-3">
        <Skeleton className="w-24 h-8  skeletoncolor" />
        <Skeleton className="w-24 h-8  skeletoncolor" />
      </div>
    </div>
  );
};

export default ProductItemSkeleton;
