import { ArrowLeft, MapPin, Coffee } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const timeline = [
    {
      icon: '🚀',
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp',
      date: '2023 - Present',
      description: 'Leading development of next-gen web applications. Building scalable systems with React, Next.js, and Node.js. Mentoring junior developers and contributing to open-source projects.',
    },
    {
      icon: '💼',
      title: 'Product Engineer',
      company: 'StartupXYZ',
      date: '2021 - 2023',
      description: 'Built core product features from the ground up. Collaborated with design and product teams to ship user-centric experiences. Grew the platform from 1K to 50K users.',
    },
    {
      icon: '🎓',
      title: 'Launched Personal Blog',
      company: 'Side Project',
      date: '2020 - Present',
      description: 'Started writing about web development, design systems, and the creative process. Published 50+ articles reaching 100K+ readers. Built a community of fellow creators.',
    },
    {
      icon: '🌱',
      title: 'Frontend Developer',
      company: 'Agency Co',
      date: '2019 - 2021',
      description: 'Crafted beautiful, responsive websites for clients across industries. Mastered modern JavaScript frameworks and best practices. Learned the importance of performance and accessibility.',
    },
    {
      icon: '📚',
      title: 'Self-Taught Developer',
      company: 'Online Learning',
      date: '2018 - 2019',
      description: 'Dove deep into web development through online courses, tutorials, and countless side projects. Built my first apps and discovered my passion for creating digital experiences.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-8 hover:text-pink transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">About Me</h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl leading-relaxed mb-6">
          Hi there! I'm based in Brooklyn, NY and currently work as a Senior Full-Stack Developer at TechCorp. 
          I build things for curious and playful folks who love the web.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 border-3 border-foreground bg-teal px-4 py-2 rounded-lg brutalist-shadow-sm">
            <MapPin className="w-4 h-4" />
            <span className="font-bold text-sm">Brooklyn, NY</span>
          </div>
          <div className="flex items-center gap-2 border-3 border-foreground bg-yellow px-4 py-2 rounded-lg brutalist-shadow-sm">
            <Coffee className="w-4 h-4" />
            <span className="font-bold text-sm">Always up for coffee!</span>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground mb-4">
          Get in touch: <a href="mailto:alex@example.com" className="text-pink font-bold hover:underline">alex@example.com</a> / <a href="https://twitter.com/alexrivers" className="text-teal font-bold hover:underline">@alexrivers</a>
        </p>
      </div>

      <div className="border-t-4 border-foreground pt-12">
        <h2 className="text-3xl font-bold mb-8 uppercase text-teal">Timeline</h2>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-foreground bg-yellow rounded-full flex items-center justify-center text-2xl brutalist-shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-1 flex-1 bg-foreground mt-4" />
                )}
              </div>

              <div className="flex-1 pb-8">
                <div className="border-4 border-foreground bg-card rounded-2xl p-6 brutalist-shadow-sm">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="text-sm text-muted-foreground mb-3">
                    {item.company} • {item.date}
                  </div>
                  <p className="text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
