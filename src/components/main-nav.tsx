import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex items-center">
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
            {item.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          <Menu className="h-6 w-6" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}


