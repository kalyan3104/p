import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>{children}</div>
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <h3 className={`text-xl font-semibold mb-2 ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = "" }: CardProps) {
  return <p className={`text-gray-600 ${className}`}>{children}</p>
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = "" }: CardProps) {
  return <div className={`px-4 pb-4 ${className}`}>{children}</div>
}

