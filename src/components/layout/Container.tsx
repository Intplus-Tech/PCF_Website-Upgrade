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
      ? "max-w-5xl"
      : size === "wide"
      ? "max-w-[100rem]"
      : size === "xwide"
      ? "max-w-[108rem]"
      : size === "full"
      ? "max-w-[116rem]"
      : "max-w-[94rem]";

  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-10", max, className)}>
      {children}
    </div>
  );
}