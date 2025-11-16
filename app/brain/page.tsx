'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Home, Sparkles, Trophy, ImageIcon, Quote } from 'lucide-react'
import Link from 'next/link'

export default function BrainCanvas() {
  const microAchievements = [
    '☕ Finished coffee before it got cold',
    '✅ Inbox zero (lasted 5 mins)',
    '🐛 Fixed bug without creating 3 more',
    '📝 Actually wrote documentation',
    '🎨 Centered a div on first try',
    '💪 Said no to feature creep',
  ]

  const moodboardImages = [
    { color: 'bg-pink', label: 'Retro Vibes' },
    { color: 'bg-teal', label: 'Clean UI' },
    { color: 'bg-yellow', label: 'Bold Type' },
    { color: 'bg-orange', label: 'Brutalism' },
    { color: 'bg-pink', label: 'Nostalgia' },
    { color: 'bg-teal', label: 'Playful' },
  ]

  return (
    <>
      <header className="border-b-4 border-foreground bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-3 border-foreground brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold rounded-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Back Home
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold font-mono uppercase tracking-tight">
              Inside My Brain
            </h1>
            <p className="text-sm text-red-600 font-handwriting text-center">A Chaotic Canvas</p>
          </div>
          <div className="w-24" />
        </div>
      </header>

      <div className="bg-[#f5f3ed] min-h-screen relative">
        {/* Cork board texture background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="container mx-auto px-4 py-12 relative">
          <section className="mb-12">
            <div className="border-4 border-dashed border-red-600 p-1 mb-8">
              <h2 className="text-center text-2xl font-mono text-red-600 uppercase tracking-widest">
                [ Current Focus ]
              </h2>
            </div>
            
            <Card className="border-4 border-foreground brutalist-shadow bg-yellow rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-mono">Building a Design System That Doesn't Suck</h3>
                  <p className="text-base leading-relaxed mb-4">
                    Creating reusable components that developers actually want to use. 
                    Focus on DX, composability, and making the right thing the easy thing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-bold px-3 py-1 bg-foreground text-background rounded-full">
                      React
                    </span>
                    <span className="text-xs font-bold px-3 py-1 bg-foreground text-background rounded-full">
                      TypeScript
                    </span>
                    <span className="text-xs font-bold px-3 py-1 bg-foreground text-background rounded-full">
                      Figma
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <div className="border-4 border-foreground p-8 bg-card rounded-2xl brutalist-shadow">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Floating Ideas & Thoughts */}
                <div className="border-r-4 border-foreground pr-8">
                  <h3 className="text-xl font-mono uppercase mb-6 border-b-2 border-foreground pb-2">
                    Floating Ideas & Thoughts
                  </h3>
                  <ul className="space-y-3 font-handwriting text-lg">
                    <li>- What if websites could dream?</li>
                    <li>- Coffee → Code → Repeat</li>
                    <li>- Ship &gt; Perfect</li>
                    <li>- Build that side project!</li>
                    <li>- Learn Three.js this month</li>
                  </ul>
                </div>

                {/* Micro Achievements */}
                <div className="pl-0 md:pl-8">
                  <h3 className="text-xl font-mono uppercase mb-6 border-b-2 border-foreground pb-2 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Micro Achievements
                  </h3>
                  <ul className="space-y-3 font-handwriting text-lg">
                    {microAchievements.map((achievement, index) => (
                      <li key={index}>- {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="border-4 border-dashed border-red-600 p-1 mb-8">
              <h2 className="text-center text-2xl font-mono text-red-600 uppercase tracking-[0.3em]">
                [ M O O D B O A R D ]
              </h2>
            </div>

            <Card className="border-4 border-foreground brutalist-shadow bg-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink p-3 rounded-xl border-3 border-foreground rotate-2">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-mono uppercase">Visual Inspiration</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {moodboardImages.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} border-4 border-foreground rounded-xl aspect-square flex items-center justify-center brutalist-shadow hover:rotate-2 transition-transform cursor-pointer`}
                  >
                    <p className="font-bold text-lg font-handwriting">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t-4 border-foreground pt-6">
                <p className="font-handwriting text-lg leading-relaxed text-center">
                  "Design is thinking made visual" - Colors, shapes, and feelings that inspire my work
                </p>
              </div>
            </Card>
          </section>

          {/* Quote of the day */}
          <section>
            <Card className="border-4 border-foreground brutalist-shadow bg-pink rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-8 h-8" />
                <h3 className="text-2xl font-bold font-mono uppercase">Quote of the Day</h3>
              </div>
              <blockquote className="text-2xl md:text-3xl font-handwriting leading-relaxed mb-4">
                "The best way to predict the future is to invent it."
              </blockquote>
              <cite className="text-base font-bold uppercase tracking-wide font-sans">
                — Alan Kay
              </cite>
            </Card>
          </section>

          <div className="text-center mt-12">
            <p className="text-sm font-mono text-muted-foreground">
              This canvas updates whenever my brain does... which is constantly 🎨
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
