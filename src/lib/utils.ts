import type { SVGProps } from "react";
import clsx from "clsx";
import type { ComponentType } from "react";

export function cn(...inputs: (string | false | null | undefined)[]) {
  return clsx(inputs);
}

export type Icon = ComponentType<{ className?: string }>;
