import type { Metadata } from "next"
import Link from "next/link"
import ProjectGrid from "@/components/project-grid"
import { companyProjects, personalProjects, portfolioProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "My Projects | Your Name",
  description: "Showcase of company projects, personal projects, portfolio items, and case studies.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectGrid title="Company Projects" projects={companyProjects} />
        <ProjectGrid title="Personal Projects" projects={personalProjects} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ProjectGrid title="Portfolio Projects" projects={portfolioProjects} />
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Research & Analysis</h3>
            <p className="text-gray-600 mb-4">
              View detailed case studies and analysis of various business models and strategies.
            </p>
            <Link
              href="/case-studies"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

