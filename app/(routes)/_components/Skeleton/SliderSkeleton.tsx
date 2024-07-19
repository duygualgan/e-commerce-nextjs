import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SliderSkeleton = () => {
  return (
    <div className="w-full h-[200px] md:h-[450px] object-cover">
      <Skeleton className="h-full skeletoncolor" />
    </div>
  );
};

export default SliderSkeleton;
