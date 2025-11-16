'use client'

import { ArrowLeft, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      year: '2024',
      stars: '2,107',
      title: 'DevTools Pro',
      description: 'A comprehensive browser extension for web developers',
      tags: ['TypeScript', 'React', 'Chrome API'],
      links: [
        { label: 'Source', url: '#' },
        { label: 'Demo', url: '#' },
      ],
    },
    {
      year: '2024',
      stars: '1,543',
      title: 'Design System Starter',
      description: 'An opinionated starter kit for building design systems',
      tags: ['React', 'Storybook', 'Tailwind'],
      links: [
        { label: 'Source', url: '#' },
        { label: 'Article', url: '#' },
      ],
    },
    {
      year: '2023',
      stars: '892',
      title: 'Markdown Editor',
      description: 'A beautiful, minimal markdown editor with live preview',
      tags: ['Next.js', 'MDX', 'Monaco'],
      links: [
        { label: 'Demo', url: '#' },
        { label: 'Source', url: '#' },
      ],
    },
    {
      year: '2023',
      stars: '1,234',
      title: 'API Toolkit',
      description: 'Type-safe API client generator from OpenAPI specs',
      tags: ['TypeScript', 'Node.js', 'CLI'],
      links: [
        { label: 'Source', url: '#' },
        { label: 'Docs', url: '#' },
      ],
    },
    {
      year: '2022',
      stars: '2,456',
      title: 'Component Library',
      description: 'Accessible React components with a modern twist',
      tags: ['React', 'A11y', 'CSS-in-JS'],
      links: [
        { label: 'Demo', url: '#' },
        { label: 'Source', url: '#' },
        { label: 'NPM', url: '#' },
      ],
    },
    {
      year: '2022',
      stars: '678',
      title: 'Portfolio Template',
      description: 'A minimal, fast portfolio template for developers',
      tags: ['Next.js', 'Vercel', 'MDX'],
      links: [
        { label: 'Demo', url: '#' },
        { label: 'Source', url: '#' },
      ],
    },
    {
      year: '2021',
      stars: '3,102',
      title: 'State Manager',
      description: 'A lightweight state management solution for React',
      tags: ['React', 'TypeScript', 'Hooks'],
      links: [
        { label: 'Source', url: '#' },
        { label: 'Docs', url: '#' },
      ],
    },
    {
      year: '2021',
      stars: '445',
      title: 'CLI Boilerplate',
      description: 'A modern template for building Node.js CLI tools',
      tags: ['Node.js', 'Commander', 'Chalk'],
      links: [
        { label: 'Source', url: '#' },
      ],
    },
    {
      year: '2020',
      stars: '1,890',
      title: 'Animation Library',
      description: 'Smooth, performant animations for the web',
      tags: ['JavaScript', 'GSAP', 'CSS'],
      links: [
        { label: 'Demo', url: '#' },
        { label: 'Source', url: '#' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background flex gap-0">
      <aside className="hidden lg:flex lg:flex-col lg:w-72 border-r-4 border-foreground bg-sidebar sticky top-0 h-screen p-6">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Alex Rivers</h1>
            <p className="text-base text-muted-foreground mb-3">
              Developer & Writer
            </p>
            <p className="text-sm leading-relaxed">
              Building digital experiences. Writing about tech, design, and the creative process.
            </p>
          </div>

          <nav className="mb-6">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-base hover:text-pink transition-colors font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base hover:text-teal transition-colors font-bold">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-base hover:text-yellow transition-colors font-bold text-yellow">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base hover:text-orange transition-colors font-bold">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-2">
            <button className="p-2 border-3 border-foreground bg-card hover:bg-teal transition-colors rounded-lg brutalist-shadow-sm">
              <Github className="w-4 h-4" />
            </button>
            <button className="p-2 border-3 border-foreground bg-card hover:bg-pink transition-colors rounded-lg brutalist-shadow-sm">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="p-2 border-3 border-foreground bg-card hover:bg-yellow transition-colors rounded-lg brutalist-shadow-sm">
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <div className="border-4 border-foreground bg-pink p-4 rounded-2xl brutalist-shadow-sm">
            <Mail className="w-5 h-5 mb-2" />
            <h3 className="font-bold text-xs mb-2 uppercase">Newsletter</h3>
            <p className="text-xs mb-3 leading-relaxed">
              Weekly dispatches on creativity & code
            </p>
            <Button 
              size="sm"
              className="w-full border-3 border-foreground bg-foreground text-background hover:bg-foreground/90 font-bold text-xs rounded-lg"
            >
              Subscribe
            </Button>
          </div>
        </div>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-8 hover:text-pink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">Projects</h1>
          
          <p className="text-xl leading-relaxed mb-12 max-w-3xl">
            Open-source projects I've made over the years, including tools, libraries, frameworks, and experiments. 
            Each one taught me something new.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="border-4 border-foreground bg-card rounded-2xl p-6 brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-bold text-muted-foreground">{project.year}</span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow stroke-yellow" />
                    <span className="font-bold">{project.stars}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-pink">{project.title}</h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-bold px-2 py-1 bg-muted rounded border-2 border-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 border-3 border-foreground rounded-lg hover:bg-teal transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
