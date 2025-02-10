"use client"

import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import { SocialLinks } from "@/components/social-links"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-6">
            <Image
              src="https://res.cloudinary.com/dlfwu43qp/image/upload/v1738000578/WhatsApp_Image_2025-01-27_at_17.52.32_fbd97099_uie8jg.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <MainNav />
          </div>
          <ModeToggle />
        </header>

        <main className="py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                I&apos;m Kalyan.
                <br />I live in Hyderabad,
                <br />
                where I design the future.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
                I am a backend developer with over 3 years of experience specializing in Go (Golang), Java and
                blockchain technologies. I excel in problem-solving and developing robust systems that enhance
                performance and reliability. My expertise includes creating intuitive SDKs and managing complex
                transaction systems. I am committed to continuous learning and collaboration in diverse teams to deliver
                impactful results.
              </p>
              <SocialLinks />
            </div>
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="https://res.cloudinary.com/dlfwu43qp/image/upload/v1738000578/WhatsApp_Image_2025-01-27_at_17.52.32_fbd97099_uie8jg.jpg"
                alt="Professional Portrait"
                fill
                className="object-cover rounded-3xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}