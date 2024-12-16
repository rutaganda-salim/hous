import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"


export default function HeroSection() {
  return (
    <section className=" relative bg-gradient-to-b from-[#14211C] to-[#0f1f1c] px-4 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h1 className="text-xl md:text-5xl lg:text-6xl font-medium tracking-tight">
          <span className="text-white block ">
            For Seamless Onboarding &
          </span>
          <span className="text-[#7FE0D3] font-bold block">
            Property Management Experience
          </span>
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto md:text-xl ">
          Our commitment to innovation and customer satisfaction ensures that we are constantly improving and tailoring our software to meet the unique needs of the property management industry.
        </p>

        <div className="flex items-center justify-center space-x-4">
          <Link 
              href="#" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1a2e29] transition-colors duration-200"
            >
              <ArrowRight className="mr-2" />
              Get Started
            </Link>

          <div className="relative overflow-hidden">
            <Image
              src="/herodemo.svg"
              alt="Property Management Dashboard"
              width={779}
              height={551}
              className='object-cover w-auto h-auto'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}