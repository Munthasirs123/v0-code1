'use client'

import { ArrowLeft, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Art of Writing Clean Code',
      date: 'Nov 12, 2025',
      category: 'Tech',
      excerpt: 'Exploring patterns and practices that make code more maintainable and enjoyable to work with. From naming conventions to architectural decisions.',
      readTime: '8 min read',
    },
    {
      title: 'Building in Public: Year One',
      date: 'Nov 8, 2025',
      category: 'Career',
      excerpt: 'What I learned from sharing my journey openly with the internet. The good, the bad, and the unexpected connections.',
      readTime: '6 min read',
    },
    {
      title: 'Design Systems That Scale',
      date: 'Nov 5, 2025',
      category: 'Design',
      excerpt: 'Creating consistent experiences across products without stifling creativity. Finding the balance between structure and flexibility.',
      readTime: '10 min read',
    },
    {
      title: 'The Creative Developer',
      date: 'Nov 1, 2025',
      category: 'Life',
      excerpt: 'Why coding is just as creative as painting, writing, or making music. Exploring the art in the craft of software development.',
      readTime: '5 min read',
    },
    {
      title: 'State Management in 2025',
      date: 'Oct 28, 2025',
      category: 'Tech',
      excerpt: 'A comprehensive look at modern state management solutions. From Context API to Zustand, finding the right tool for your needs.',
      readTime: '12 min read',
    },
    {
      title: 'Typography on the Web',
      date: 'Oct 22, 2025',
      category: 'Design',
      excerpt: 'Making text beautiful and readable. A deep dive into web typography, from font selection to responsive sizing.',
      readTime: '7 min read',
    },
  ]

  return (
    <div className="min-h-screen bg-background flex gap-0">
      {/* removed hardcoded sidebar - now uses layout sidebar */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-8 hover:text-pink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">Blog</h1>
        
        <p className="text-xl leading-relaxed mb-12">
          Essays, tutorials, and thoughts on web development, design, and the creative process. 
          Updated regularly with new ideas and experiments.
        </p>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="border-4 border-foreground bg-card brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row">
                <div className={`sm:w-2 ${
                  index % 4 === 0 ? 'bg-pink' : index % 4 === 1 ? 'bg-teal' : index % 4 === 2 ? 'bg-yellow' : 'bg-orange'
                }`} />
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider mb-3">
                    <span className={`font-bold px-3 py-1 rounded-full border-2 border-foreground ${
                      index % 4 === 0 ? 'bg-pink' : index % 4 === 1 ? 'bg-teal' : index % 4 === 2 ? 'bg-yellow' : 'bg-orange'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-muted-foreground">{post.date}</span>
                    <span className="text-muted-foreground">• {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight text-balance">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
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
      </div>
    </div>
  )
}
