import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Here you would typically send an email or save to a database
    // For this example, we'll just log the data
    console.log("Received message:", { name, email, message })

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing message:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

