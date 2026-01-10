'use client'

import { useEffect, useState } from "react"

const Footer = () => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          
          {/* About */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">About Us</h4>
            <p className="text-sm text-muted-foreground">
              We are a music academy dedicated to nurturing talent and
              transforming passion into musical excellence.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Courses</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Vocal Training</li>
              <li>Guitar & Piano</li>
              <li>Music Theory</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Student Portal</li>
              <li>Practice Materials</li>
              <li>Events & Workshops</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@musicacademy.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: New York, USA</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          {year && <>© {year} Music Academy. All rights reserved.</>}
        </div>

      </div>
    </footer>
  )
}

export default Footer
