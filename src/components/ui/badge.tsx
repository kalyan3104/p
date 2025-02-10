import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export function Badge({ children, variant = "default", size = "md" }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full font-semibold"

  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-3.5 py-1.5",
  }

  return <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}>{children}</span>
}

