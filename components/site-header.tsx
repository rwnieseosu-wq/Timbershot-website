"use client";

import { Menu, Trees } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/components/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[rgba(245,243,239,0.88)] backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="rounded-2xl bg-walnut p-2 text-white shadow-warm">
              <Trees className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-walnut">TimberShop</p>
              <p className="text-sm text-steel">Start Small. Learn Fast. Build Something Real.</p>
            </div>
          </a>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-stone-300 bg-white text-walnut lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav className="hidden flex-wrap gap-2 lg:flex">
            {navItems.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-walnut transition hover:bg-white"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </nav>
        </div>

        <nav className={cn("mt-4 grid gap-2 lg:hidden", open ? "grid" : "hidden")}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-walnut"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
