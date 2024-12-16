import Link from 'next/link'
import { Home } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white bg-[url('/map.svg')] bg-no-repeat bg-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Home className="w-5 h-5 text-teal-400" />
          <h1 className="text-xl">About us</h1>
        </div>

        {/* Main Heading */}
        <h2 className="text-xl sm:text-4xl lg:text-5xl font-normal max-w-3xl mb-32">
          At Hous, we are dedicated to delivering efficient and effective property management solutions
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-[#1B4B40] mb-2">30%</div>
            <div className="text-[#1B4B40] font-medium mb-2">Annually</div>
            <p className="text-gray-600">Increase rentals & renewals by</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-[#1B4B40] mb-2">35%</div>
            <div className="text-[#1B4B40] font-medium mb-2">Annually</div>
            <p className="text-gray-600">Grow your profits by</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-[#1B4B40] mb-2">20+</div>
            <div className="text-[#1B4B40] font-medium mb-2">Hours Monthly</div>
            <p className="text-gray-600">Save an average of</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full bg-[#1B4B40] text-white hover:bg-[#163b33] transition-colors"
          >
            Get Started
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}