import Image from "next/image"
import { Clock, Layout, UserCheck, ThumbsUp } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4 ">
            <span className="text-sm font-medium text-teal-400 tracking-wide">
              WHY CHOOSE US?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Here is why we are different from others
            </h2>
            <p className="text-gray-600">
              Choosing Hous means investing in the future of your property
              management business. Our application doesn't just help; it
              revolutionizes.
            </p>
          </div>

          <div className="space-y-6">
            <Feature
              icon={Clock}
              title="Time Savings"
              description="Streamlining every aspect of property management saves hours of work"
            />
            <Feature
              icon={Layout}
              title="All-in-One"
              description="A comprehensive range of features that eliminate the need for multiple platforms"
            />
            <Feature
              icon={UserCheck}
              title="User-Friendly"
              description="Intuitive interfaces mean less time learning and more time doing"
            />
            <Feature
              icon={ThumbsUp}
              title="Satisfaction Boost"
              description="Happy tenants lead to a thriving business – and Hous makes satisfying service simple"
            />
          </div>
        </div>

          <div className="relative w-full max-w-6xl flex items-center justify-end">
            <Image
              src="/laptop-mockup.svg"
              alt="Dashboard interface on laptop"
              width={1500}
              height={1225}
              className="rounded-2xl object-contain"
              priority
            />
          </div>
      </div>
    </section>
  )
}

function Feature({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <Icon className="w-6 h-6 text-teal-400" />
        {title}
      </h3>
      <p className="text-gray-600 pl-8">{description}</p>
    </div>
  )
}

