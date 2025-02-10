import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface ProjectGridProps {
  title: string
  projects: Project[]
}

export default function ProjectGrid({ title, projects }: ProjectGridProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="px-4 pb-4">
              <Link
                href={project.link}
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
