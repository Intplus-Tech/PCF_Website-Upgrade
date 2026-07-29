// import { cn } from "@/lib/utils";

// export function Container({
//   children,
//   className,
//   size = "default",
// }: {
//   children: React.ReactNode;
//   className?: string;
//   size?: "default" | "narrow" | "wide";
// }) {
//   const max =
//     size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-7xl" : "max-w-6xl";
//   return (
//     <div className={cn("mx-auto w-full px-5 sm:px-8", max, className)}>
//       {children}
//     </div>
//   );
// }


import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "xwide" | "full";
}) {
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
      ? "max-w-7xl"
      : size === "xwide"
      ? "max-w-[90rem]"
      : size === "full"
      ? "max-w-[100rem]"
      : "max-w-6xl";

  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", max, className)}>
      {children}
    </div>
  );
}