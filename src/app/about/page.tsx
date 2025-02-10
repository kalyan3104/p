import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileDown, Github, Linkedin, Globe, Mail, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Medapalli Kalyan</h1>
      <p className="text-xl mb-6">Backend Developer</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <Link href="https://github.com/kalyan3104" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/medapalli-kalyan" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </Link>
        <Link href="https://medapallikalyan.me" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            <Globe className="mr-2 h-4 w-4" /> Portfolio
          </Button>
        </Link>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center">
            <Mail className="mr-2 h-5 w-5" />
            <a href="mailto:kalyan12.4st@gmail.com" className="text-blue-600 hover:underline">
              kalyan12.4st@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            <a href="tel:+918074429214" className="text-blue-600 hover:underline">
              +91 8074429214
            </a>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-lg">
          I am a backend developer with over 3 years of experience specializing in Go (Golang), Java, and blockchain
          technologies. I excel in problem-solving and developing robust systems that enhance performance and
          reliability. My expertise includes creating intuitive SDKs and managing complex transaction systems. I am
          committed to continuous learning and collaboration in diverse teams to deliver impactful results.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <h3 className="text-xl font-medium">Backend Developer</h3>
        <p className="text-lg mb-2">Dugong Global Services Pvt Lmt, Hyderabad, India | September 2022 – Present</p>
        <ul className="list-disc list-inside text-lg">
          <li>Led development of Pos blockchain platform, enhancing scalability and sustainability.</li>
          <li>Contributed to the development of core, chain-go, and vm-go (virtual machine) components.</li>
          <li>Improved transaction management, including transaction signing, sending, and monitoring.</li>
          <li>Assisted in debugging and troubleshooting complex problems in a multi-node Web environment.</li>
          <li>Developed and maintained the Virtual Machine for executing WebAssembly (WASM) smart contracts.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside text-lg grid grid-cols-2 gap-2">
          <li>Go (Golang), Java, Python, Rust, Javascript</li>
          <li>ReactJS, Material-UI, Redux</li>
          <li>Flask, Node.js</li>
          <li>gRPC, SQL, MongoDB</li>
          <li>Git, Linux, Windows</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-lg">Bachelor of Business Administration, Manipal University, Jaipur (2022 - 2025)</p>
      </section>

      <div className="mt-8">
        <Link href="/api/download-resume" passHref legacyBehavior>
          <a download="Medapalli_Kalyan_Resume.pdf">
            <Button>
              <FileDown className="mr-2 h-4 w-4" /> Download Full Resume
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}
