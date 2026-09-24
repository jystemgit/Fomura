import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  type?: "button" | "submit";
  className?: string;
};

export function Button({ children, href, variant = "primary", type = "button", className = "" }: ButtonProps) {
  const classes = `button button-${variant} ${className}`;
  if (href?.startsWith("http")) return <a href={href} className={classes} target="_blank" rel="noreferrer">{children}</a>;
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} className={classes}>{children}</button>;
}
