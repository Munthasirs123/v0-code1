import { Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r-4 border-foreground bg-sidebar sticky top-0 h-screen p-6">
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
              <Link href="/projects" className="text-base hover:text-yellow transition-colors font-bold">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-base hover:text-orange transition-colors font-bold">
                About
              </Link>
            </li>
            <li>
              <Link href="/brain" className="text-base hover:text-pink transition-colors font-bold">
                Brain
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
    </aside>
  )
}
