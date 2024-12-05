import React from "react";
import { twMerge } from "tailwind-merge";

const AnimateBall = React.forwardRef<HTMLDivElement, { className?: string }>(({ className }, ref) => {

  return (
    <div
      ref={ref}
      className={twMerge(`w-10 h-10 scale-0 aspect-square rounded-lg bg-neutral-500/20 -z-10 transition-all duration-1000 delay-100 absolute left-0 -bottom-10`, className)}
    ></div>
  );
}
);


export default AnimateBall;
