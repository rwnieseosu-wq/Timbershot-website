"use client";

import { ChevronRight, Drill, Hammer, Ruler, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[2rem] border border-walnut/10 bg-timber-hero p-8 shadow-soft md:p-12 lg:p-16"
    >
      <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-oak opacity-25 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-steel opacity-20 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <Badge variant="ember" className="w-fit px-4 py-1 text-sm">
            TimberShop • Beginner Woodworking
          </Badge>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-walnut md:text-6xl md:leading-[1.05]">
              Practical woodworking for beginners.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-charcoal md:text-xl">
              Start Small. Learn Fast. Build Something Real. A no-fluff site built to help DIY-capable beginners gain
              skills through useful projects, smart tool choices, and a workshop setup that grows with them.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="xl">
                Start with Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#tools">
              <Button variant="outline" size="xl">
                See Starter Tools
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {[
              ["1", "Pick a project"],
              ["2", "Gather the basics"],
              ["3", "Build with confidence"]
            ].map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-walnut/10 bg-white/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-ember">Step {num}</p>
                <p className="mt-1 text-base font-medium text-walnut">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="glass-panel rounded-[2rem] border border-walnut/10 p-6 shadow-warm"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Ruler, label: "Layout" },
              { icon: Drill, label: "Assembly" },
              { icon: Hammer, label: "Projects" },
              { icon: Shield, label: "Safety" }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-walnut/10 bg-cream p-5 shadow-sm">
                <Icon className="mb-3 h-6 w-6 text-ember" />
                <p className="text-sm uppercase tracking-wide text-steel">Core Focus</p>
                <p className="mt-1 text-lg font-semibold text-walnut">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-walnut p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-white/70">Philosophy</p>
            <p className="mt-2 text-xl font-semibold text-white">No fluff. Just build.</p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Every section should help a beginner decide what to do next and make measurable progress with less confusion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
