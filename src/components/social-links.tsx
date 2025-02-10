import { Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">

      <Link
        href="https://www.linkedin.com/in/medapalli-kalyan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="h-6 w-6" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://www.instagram.com/kalyannchowdary/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Instagram className="h-6 w-6" />
        <span className="sr-only">Instagram</span>
      </Link>

      <Link
        href="https://github.com/kalyan3104"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </Link>
    </div>
  )
}


