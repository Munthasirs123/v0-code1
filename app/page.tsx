import { Mail, BookOpen, User, Code, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  const blogPosts = [
    {
      title: 'The Art of Writing Clean Code',
      date: 'Nov 12, 2025',
      category: 'Tech',
      excerpt: 'Exploring patterns and practices that make code more maintainable and enjoyable to work with...',
    },
    {
      title: 'Building in Public: Year One',
      date: 'Nov 8, 2025',
      category: 'Career',
      excerpt: 'What I learned from sharing my journey openly with the internet...',
    },
    {
      title: 'Design Systems That Scale',
      date: 'Nov 5, 2025',
      category: 'Design',
      excerpt: 'Creating consistent experiences across products without stifling creativity...',
    },
    {
      title: 'The Creative Developer',
      date: 'Nov 1, 2025',
      category: 'Life',
      excerpt: 'Why coding is just as creative as painting, writing, or making music...',
    },
  ]

  return (
    <>
      <header className="lg:hidden border-b-4 border-foreground bg-background py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-bold text-3xl mb-2">
            ALEX RIVERS
          </h1>
          <div className="text-center text-xs uppercase tracking-widest">
            Developer • Writer • Creator
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hey, I'm Alex!
          </h1>
          <p className="text-xl leading-relaxed mb-4">
            I'm a <strong>software developer</strong>, <strong>designer</strong>, and <strong>creative tinkerer</strong>. 
            I love building things that live on the internet and sharing what I learn along the way.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Currently working on side projects, writing about web development, and exploring the intersection 
            of code and creativity. This is my digital garden where I document my journey.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/about">
            <Card className="border-4 border-foreground brutalist-shadow p-8 bg-yellow rounded-2xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer h-full">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-foreground text-background p-2 rotate-3 rounded-lg">
                  <User className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold bg-foreground text-background px-2 py-1 -rotate-2 rounded">
                  About
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-balance">
                About Me
              </h2>
              <p className="text-base mb-6 leading-relaxed">
                My journey through tech, design, and everything in between. From startups to side projects.
              </p>
              <span className="text-sm font-bold uppercase tracking-wide">
                View Career Timeline →
              </span>
            </Card>
          </Link>

          <div className="grid gap-6">
            <Link href="/projects">
              <Card className="border-4 border-foreground brutalist-shadow p-6 bg-teal rounded-2xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-pink p-2 rounded-full border-3 border-foreground">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold uppercase">Projects</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Open-source work, experiments, and side projects built with curiosity.
                </p>
              </Card>
            </Link>

            <Link href="/blog">
              <Card className="border-4 border-foreground brutalist-shadow p-6 bg-orange rounded-2xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-card p-2 rounded-full border-3 border-foreground">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold uppercase">Blog</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Essays, tutorials, and thoughts on code, design, and creativity.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-pink p-3 rounded-xl border-4 border-foreground -rotate-3 brutalist-shadow-sm">
            <Brain className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold uppercase">Inside My Brain</h2>
        </div>

        <Card className="border-4 border-foreground brutalist-shadow bg-card rounded-2xl overflow-hidden">
          <div className="bg-teal p-4 border-b-4 border-foreground">
            <p className="text-sm font-bold uppercase tracking-wide">
              A chaotic canvas of thoughts, ideas, and creative chaos
            </p>
          </div>
          
          <div className="p-6">
            <div className="relative w-full aspect-video bg-background border-4 border-foreground rounded-xl overflow-hidden mb-6">
              <iframe 
                src="/brain"
                className="w-full h-full"
                title="Brain Canvas Preview"
                style={{ pointerEvents: 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
                <p className="text-sm font-bold uppercase tracking-wider">
                  Preview Mode
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-sm leading-relaxed">
                Unfiltered thoughts, floating ideas, and daily inspirations. Step into my creative moodboard.
              </p>
              <Link href="/brain">
                <Button 
                  size="lg"
                  className="border-4 border-foreground brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all bg-yellow text-foreground font-bold uppercase tracking-wide px-8 rounded-xl whitespace-nowrap"
                >
                  Explore the Canvas →
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <h2 className="text-3xl font-bold uppercase mb-8">Recent Posts</h2>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="border-4 border-foreground bg-card brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row">
                <div className={`sm:w-2 ${
                  index === 0 ? 'bg-pink' : index === 1 ? 'bg-teal' : index === 2 ? 'bg-yellow' : 'bg-orange'
                }`} />
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider mb-3">
                    <span className={`font-bold px-3 py-1 rounded-full border-2 border-foreground ${
                      index === 0 ? 'bg-pink' : index === 1 ? 'bg-teal' : index === 2 ? 'bg-yellow' : 'bg-orange'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight text-balance">
                    {post.title}
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-bold uppercase tracking-wider hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-background py-8 border-t-4 border-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-center text-foreground">
            © 2025 Alex Rivers. Built with curiosity.
          </p>
        </div>
      </footer>
    </>
  )
}
