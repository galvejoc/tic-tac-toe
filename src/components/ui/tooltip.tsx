import { ReactNode } from "react";

interface TooltipInterface {
  text: string;
  children: ReactNode;
}

export function Tooltip({ text, children }: TooltipInterface) {
  return (
    <div className="relative inline-block group">
      {children}
      <span className="absolute z-10 hidden bg-white text-blue-700 border-2 border-blue-200
      md:text-lg text-base rounded py-1 px-2 md:-bottom-12 -bottom-10 left-1/2 transform -translate-x-1/2 
      group-hover:block transition-opacity opacity-0 group-hover:opacity-100">
        {text}
      </span>
    </div>
  )
}
