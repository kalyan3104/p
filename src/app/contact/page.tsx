import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/abdul-a-6_fTMTi0HaQ-unsplash.jpg')" }}
    >
      <div className="container mx-auto px-6 py-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">Medapalli Kalyan</h1>

        {/* Contact Details Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-blue-600" />
              <a href="mailto:kalyan12.4st@gmail.com" className="text-blue-600 hover:underline">
                kalyan12.4st@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-blue-600" />
              <a href="tel:+918074429214" className="text-blue-600 hover:underline">
                +91 8074429214
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
