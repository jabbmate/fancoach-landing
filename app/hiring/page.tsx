import React from 'react'


import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FanCoach is hiring!',
  description: 'Join FanCoach as a Technical Co-Founder / Founding CTO. Help us build the default layer between live sports and how fans understand the game.',
  openGraph: {
    title: 'FanCoach is hiring!',
    description: 'Join FanCoach as a Technical Co-Founder / Founding CTO. Help us build the default layer between live sports and how fans understand the game.',
  },
}


export default function Hiring() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ground text-ink">
      <div className="relative z-20">
        <Navbar />

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical Co-Founder / <span className="gradient-text">Founding CTO</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-ink-soft text-lg">
                <span>FanCoach — Seed-Funded AI Sports Tech Startup</span>
                <span className="hidden sm:inline">•</span>
                <span>United States · Remote OK</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-12">
              {/* About FanCoach */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-ink border-b border-line pb-2">About FanCoach</h2>
                <div className="space-y-6 text-ink-soft leading-relaxed">
                  <p>
                    FanCoach is building a smarter, more fun way to follow live sports, turning real-time game moments into personalized, AI-powered commentary that helps fans understand what’s happening and why it matters. We transform live sports data into dynamic “commentary cards” that adapt to different fan styles — casual, analytical, strategy-focused, or hype-driven.
                  </p>
                  <p>
                    Our goal is to become the default layer between live sports and how fans understand the game — and we believe owning that layer is a unicorn-scale opportunity.
                  </p>
                  <p>
                    We believe the next generation of sports fans will not follow games the same way previous generations did. Watching a game with a second screen in hand — checking stats, context, explanations, and reactions — is already normal, and it’s only becoming more universal. FanCoach is being built for that reality: a world where fans expect instant understanding alongside the live broadcast.
                  </p>
                  <p>
                    We launched with the NFL, but this is only the opening kickoff. FanCoach is designed as a multi-sport platform, with a long-term vision to expand across leagues and redefine how fans experience live games. This is a massive, underbuilt category, and we’re building with the conviction that this becomes the default way fans engage with live sports — not an add-on, but an expectation.
                  </p>
                  <div className="my-6 rounded-2xl border border-line bg-surface p-6 shadow-card">
                    <p className="font-semibold text-ink mb-2">👉 Try it yourself:</p>
                    <ul className="list-none space-y-2 pl-0">
                      <li>
                        📲 <a href="https://apps.apple.com/us/app/fancoach/id6756193930" target="_blank" rel="noopener noreferrer" className="text-fancoach-teal hover:underline">Download FanCoach on the App Store</a>
                      </li>
                      <li>
                        🌐 <a href="https://fancoach.ai" target="_blank" rel="noopener noreferrer" className="text-fancoach-teal hover:underline">Visit fancoach.ai</a>
                      </li>
                    </ul>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-8">
                    <div className="rounded-2xl border border-line bg-surface p-4 text-center shadow-card">
                      <div className="text-2xl mb-1">🚀</div>
                      <div className="font-medium text-ink">Live MVP</div>
                      <div className="text-sm text-ink-faint">on iOS App Store</div>
                    </div>
                    <div className="rounded-2xl border border-line bg-surface p-4 text-center shadow-card">
                      <div className="text-2xl mb-1">🌱</div>
                      <div className="font-medium text-ink">Seed Funding</div>
                      <div className="text-sm text-ink-faint">in place</div>
                    </div>
                    <div className="rounded-2xl border border-line bg-surface p-4 text-center shadow-card">
                      <div className="text-2xl mb-1">📈</div>
                      <div className="font-medium text-ink">Strong Momentum</div>
                      <div className="text-sm text-ink-faint">clear roadmap</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* About the Founder */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-ink border-b border-line pb-2">About the Founder</h2>
                <div className="space-y-6 text-ink-soft leading-relaxed">
                  <p>
                    FanCoach was founded by Yuva Gambhir, a University of Pennsylvania senior studying Cognitive Science (Computation & Cognition). Yuva has experience across technology, analytics, and early-stage startup building, most recently founding an AI startup at the intersection of AI and sports.
                  </p>
                  <p>
                    He brings a product-first mindset, strong vision, and a focus on making complex, real-time data feel intuitive, engaging, and genuinely useful for everyday fans.
                  </p>
                </div>
              </section>

              {/* The Role */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-ink border-b border-line pb-2">The Role</h2>
                <div className="space-y-6 text-ink-soft leading-relaxed">
                  <p>
                    We’re looking for a Technical Co-Founder / Founding CTO to join FanCoach at a pivotal stage and own the technical foundation of the company.
                  </p>
                  <p>
                    This is a true co-founder role — not a maintenance position. You’ll be the primary technical leader and hands-on builder, working directly with the founder to turn product vision into a scalable, production-ready platform. You’ll have real influence over architecture, roadmap decisions, and the long-term direction of the company.
                  </p>
                  <p>
                    This role comes with absolute ownership. When something breaks, there is no “someone else” — responsibility is total, and follow-through matters. We’re looking for someone who sees unsolved problems as an invitation, not an obstacle — someone who enjoys breaking complex challenges down and attacking them one by one.
                  </p>
                  <p>
                    As FanCoach grows, you’ll also be a visible partner to the CEO — helping shape not just the product, but how FanCoach’s technology, roadmap, and long-term vision are represented to investors, partners, and future hires. You’ll work closely with the CEO to help raise the next round of venture and angel capital.
                  </p>
                </div>
              </section>

              {/* Core Responsibilities */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-ink border-b border-line pb-2">Core Responsibilities & What We’re Looking For</h2>
                <div className="space-y-8 text-ink-soft leading-relaxed">
                  <p>
                    At its core, this role is about owning and evolving the FanCoach codebase — and thriving in the challenge of doing so in an early-stage startup environment.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Technical Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Strong experience with React Native (2–3+ years required)</li>
                      <li>Solid backend experience with Node.js (2–3+ years required)</li>
                      <li>Experience with Firebase and AWS</li>
                      <li>Ability to take product ideas and execute end-to-end, from concept to App Store release</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Startup & Ownership Mindset</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Comfortable working in an early-stage startup with ambiguity, fast iteration, and constant problem-solving</li>
                      <li>Entrepreneurial mindset — motivated to help build a company, not just an app</li>
                      <li>Excited to collaborate closely with the CEO on product vision, and raising future venture or angel rounds</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Attitude & Personal Qualities</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Hardworking, high-agency, and self-directed</li>
                      <li>An A-type problem solver who genuinely enjoys tackling difficult challenges</li>
                      <li>Resourceful, persistent, and energized by building from the ground up</li>
                      <li>Strong sense of ownership — when something breaks, you want to be the one fixing it</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Interest in Sports</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>A genuine interest in sports — you enjoy watching games, following leagues, or thinking deeply about how fans engage with sports</li>
                      <li>Excited to start with the NFL and help expand FanCoach into other sports over time</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Minimum Education Requirement</h3>
                    <p className="mb-2">Either:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Currently enrolled in an undergraduate program studying Computer Science or a related field, or</li>
                      <li>Hold a degree in Computer Science or a related discipline</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Compensation */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-ink border-b border-line pb-2">Compensation</h2>
                <p className="text-ink-soft leading-relaxed">
                  Compensation will be discussed based on fit, commitment level, and role structure, and will include meaningful equity along with future cash compensation as the company scales.
                </p>
              </section>

              {/* Why FanCoach */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-ink border-b border-line pb-2">Why FanCoach</h2>
                <ul className="list-disc pl-5 space-y-2 text-ink-soft">
                  <li>Be a true technical co-founder, not just an early employee</li>
                  <li>Build on top of a live, funded product with real traction</li>
                  <li>Shape both the technology and the company from an early stage</li>
                  <li>Work at the intersection of sports, real-time data, and AI</li>
                  <li>Join with the intention of building something big, ambitious, and category-defining</li>
                </ul>
              </section>

              {/* Call to Action */}
              <section className="mt-16 rounded-3xl border border-line bg-fancoach-mint p-8 text-center transition-transform duration-300 hover:scale-[1.01]">
                <h2 className="mb-4 text-3xl font-bold text-ink">Interested?</h2>
                <p className="mb-8 text-xl text-ink-soft">
                  Send your resume and links to anything cool you’ve built to
                </p>
                <a
                  href="mailto:fancoachai@gmail.com"
                  className="inline-block rounded-full bg-fancoach-green px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-fancoach-forest"
                >
                  fancoachai@gmail.com
                </a>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
