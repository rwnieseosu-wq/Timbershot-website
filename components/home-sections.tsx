"use client";

import { CheckCircle2, HardHat, Hammer, Shield } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { materialRows, resources, starterProjects, toolkit, workshopPhases } from "@/components/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.38 }}
    >
      {children}
    </motion.div>
  );
}

export function HomeIntroCards() {
  const items = [
    {
      title: "Start with useful projects",
      text: "Beginner builds should teach one or two repeatable skills while creating something you will actually use."
    },
    {
      title: "Buy tools in the right order",
      text: "Layout, cutting, drilling, clamping, and surface prep create the biggest capability jump per dollar."
    },
    {
      title: "Build the shop that builds your work",
      text: "A better work surface, safer setup, and simple workflow improvements matter more than chasing the perfect shop."
    }
  ];

  return (
    <section className="section-space">
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <Reveal key={item.title}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-charcoal">{item.text}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-space">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Projects"
          title="Start with simple wins that compound"
          description="These project summaries are lightweight on complexity but strong on skill-building. Each one teaches core basics and points naturally to the next build."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {starterProjects.map((project) => (
            <Reveal key={project.title}>
              <Card className="overflow-hidden">
                <div className="h-32 bg-timber-warm" />
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-sm text-steel">{project.time}</span>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.difficulty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-7 text-charcoal">{project.summary}</p>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Skills</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-cream p-4">
                    <p className="text-sm font-semibold text-ember">What this unlocks next</p>
                    <p className="mt-1 font-medium text-walnut">{project.next}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ToolsSection() {
  return (
    <section id="tools" className="section-space">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Tools"
          title="Buy for workflow, not for status"
          description="A strong beginner toolkit follows the actual sequence of building: measure, cut, drill, clamp, refine. Start there, then add machines only when project constraints demand it."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {toolkit.map((item) => (
            <Reveal key={item.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Buy first</p>
                    <p className="mt-2 leading-7 text-charcoal">{item.buy}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Why it matters</p>
                    <p className="mt-2 leading-7 text-charcoal">{item.why}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card>
              <CardHeader>
                <CardTitle>Suggested buying order</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal space-y-4 pl-5 text-charcoal">
                  <li>Drill/driver + layout tools</li>
                  <li>Circular saw strategy for lumber and sheet goods</li>
                  <li>Random-orbit sander</li>
                  <li>Compact router</li>
                  <li>Bigger stationary tools only when repetition, accuracy, or volume truly require them</li>
                </ol>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="bg-walnut text-white">
              <CardHeader>
                <CardTitle className="text-white">Safety belongs on the tools page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/85">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Dust</p>
                  <p className="mt-1 text-sm leading-6">
                    Capture at the source when possible. Dust control is part of tool selection, not a later add-on.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Noise</p>
                  <p className="mt-1 text-sm leading-6">
                    Hearing protection should be routine around loud power tools, especially during repeated use.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Sharpness</p>
                  <p className="mt-1 text-sm leading-6">
                    Sharp edges reduce force, improve results, and help keep technique safer and more controlled.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function MaterialsSection() {
  return (
    <section id="materials" className="section-space">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Materials"
          title="Pick materials that match the project, not the fantasy"
          description="Beginners succeed faster when they use stable, forgiving materials that fit the environment. The right choice is usually the one that cuts cleanly, stays predictable, and supports the finish you want."
        />

        <div className="grid gap-6">
          {materialRows.map((row) => (
            <Reveal key={row.material}>
              <Card>
                <CardContent className="grid gap-4 p-6 md:grid-cols-4 md:items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Material</p>
                    <p className="mt-2 text-xl font-semibold text-walnut">{row.material}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Best for</p>
                    <p className="mt-2 leading-7 text-charcoal">{row.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Watch for</p>
                    <p className="mt-2 leading-7 text-charcoal">{row.watchFor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Why it works</p>
                    <p className="mt-2 leading-7 text-charcoal">{row.why}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card>
              <CardHeader>
                <CardTitle>Beginner buying tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-5 text-charcoal">
                  <li>Use plywood when you want flatter, more predictable large panels.</li>
                  <li>Use paint-grade hardwoods like poplar when you want solid wood without premium complexity.</li>
                  <li>Avoid moisture-sensitive sheet goods for exposed or damp environments.</li>
                  <li>Match the material to the finish: painted, stain-grade, utility, or outdoor use.</li>
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="bg-timber-warm text-white">
              <CardHeader>
                <CardTitle className="text-white">Quick decision rule</CardTitle>
              </CardHeader>
              <CardContent className="leading-7 text-white/90">
                For shop projects, utility shelving, and early practice, start with plywood. For painted furniture, move
                to poplar or painted panel combinations. For cleaner built-ins and bookcases, hardwood plywood is
                usually the best next step.
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WorkshopSection() {
  return (
    <section id="workshop" className="section-space">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Workshop"
          title="Set up a shop that works now and improves later"
          description="A beginner workshop should be treated as a phased system. Start with safe workholding, enough room to move, and a clean workflow. Improve comfort and capacity only when it removes real friction."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {workshopPhases.map((phase) => (
            <Reveal key={phase.phase}>
              <Card>
                <CardHeader>
                  <CardTitle>{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-3 pl-5 text-charcoal">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card>
              <CardHeader>
                <CardTitle>Small-space layouts that work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-charcoal">
                {[
                  ["One-wall shop", "Bench and storage live on one wall while tools come out only when needed."],
                  ["Perimeter + center surface", "Keep tools on the perimeter and use one central work surface as the hub for layout, assembly, and support."],
                  ["Mobile garage shop", "Use rolling stations so the shop can flex between woodworking and shared household use."]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-cream p-4">
                    <p className="font-semibold text-walnut">{title}</p>
                    <p className="mt-1 leading-7">{text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="bg-walnut text-white">
              <CardHeader>
                <CardTitle className="text-white">Safety system</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/85">
                <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <HardHat className="mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Housekeeping</p>
                    <p className="mt-1 text-sm leading-6">
                      Avoid letting dust accumulate. Clean in ways that do not create airborne dust clouds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <Shield className="mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Electrical awareness</p>
                    <p className="mt-1 text-sm leading-6">
                      Use safe power distribution, grounded tools, and a layout that avoids cord chaos and trip hazards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <Hammer className="mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Finishing fire risk</p>
                    <p className="mt-1 text-sm leading-6">
                      Treat oily rags and finishing waste carefully and store or dispose of them appropriately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PhilosophyAndSignup() {
  return (
    <section className="section-space">
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <Card className="bg-walnut text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">No fluff. Just build.</CardTitle>
              <CardDescription className="text-white/70">A practical philosophy for beginners who want real progress.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 text-white/90 sm:grid-cols-2">
              {[
                "Keep steps concise and actionable",
                "Use beginner-friendly material choices",
                "Learn through small, useful projects",
                "Improve the setup only as needed"
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <p>{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <SignupCard />
        </Reveal>
      </div>
    </section>
  );
}

function SignupCard() {
  const [email, setEmail] = useState("");
  const message = useMemo(() => {
    if (!email) return "This form is visually staged for a future email provider integration.";
    return "Thanks — this demo form shows where future resource signup functionality can be connected.";
  }, [email]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get free beginner resources</CardTitle>
        <CardDescription>Project roadmaps, checklists, and simple guidance built for DIY-capable beginners.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
        <Button className="w-full" size="lg">Join the list</Button>
        <p className="text-sm leading-6 text-steel">{message}</p>
      </CardContent>
    </Card>
  );
}

export function ResourcesSection() {
  return (
    <section id="resources" className="section-space">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Resources"
          title="Useful extras for beginners who want to move faster"
          description="This section supports the content site with practical downloads, checklists, and reference tools that reinforce the core pages."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((item) => (
            <Reveal key={item}>
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-walnut">{item}</p>
                  <p className="mt-3 leading-7 text-charcoal">
                    Lightweight, actionable guidance designed to help beginners take the next step without getting overwhelmed.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
