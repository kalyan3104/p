"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      console.log("Submitting form data:", formData)
      const response = await fetch("https://formspree.io/f/mkgozjar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("Form submission response:", result)

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        console.error("Form submission failed:", result)
      }
    } catch (error) {
      setStatus("error")
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div>
      {status === "success" ? (
        <p className="text-green-600 font-semibold">✅ Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && <p className="text-red-600 font-semibold mt-2">❌ Error! Please try again.</p>}
        </form>
      )}
    </div>
  )
}

