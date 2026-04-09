import { BookOpen, FolderOpen, Home, Trees, Warehouse, Wrench } from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "materials", label: "Materials", icon: Trees },
  { id: "workshop", label: "Workshop", icon: Warehouse },
  { id: "resources", label: "Resources", icon: BookOpen }
];

export const starterProjects = [
  {
    title: "Simple Wall Shelf",
    category: "Quick Build",
    time: "2–4 hrs",
    difficulty: "Beginner",
    skills: ["Layout", "Straight cuts", "Fastening"],
    summary: "A practical first project that teaches square layout, clean cuts, and basic wall-mount alignment.",
    next: "Build a small bookcase"
  },
  {
    title: "Sawhorses",
    category: "Workshop",
    time: "3–5 hrs",
    difficulty: "Beginner",
    skills: ["Repetitive cuts", "Assembly", "Squareness"],
    summary: "Low-cost, high-utility build that immediately improves every future project by giving you a better work surface.",
    next: "Create a temporary workbench"
  },
  {
    title: "Small Storage Box",
    category: "Skill Builder",
    time: "2–3 hrs",
    difficulty: "Beginner",
    skills: ["Basic joinery", "Sanding", "Finishing"],
    summary: "A compact way to learn the full workflow from cutting through final surface prep without overwhelming complexity.",
    next: "Build a shop cabinet"
  },
  {
    title: "Plant Stand",
    category: "Home Improvement",
    time: "3–6 hrs",
    difficulty: "Beginner+",
    skills: ["Glue-up", "Stability", "Fit-up"],
    summary: "A useful project that introduces sturdier joinery and teaches how to make a build feel solid, not wobbly.",
    next: "Build a side table"
  }
];

export const toolkit = [
  {
    title: "Measure & Mark",
    buy: "Tape measure, combination square, pencil, straightedge",
    why: "Most bad cuts start with bad layout. These tools improve accuracy faster than expensive machines."
  },
  {
    title: "Cut",
    buy: "Circular saw, reliable hand saw, jigsaw",
    why: "This group covers rough breakdown, straight cuts, and simple curves without requiring a full shop footprint."
  },
  {
    title: "Drill & Assemble",
    buy: "Drill/driver, bit set, countersink, clamps",
    why: "Assembly quality depends on straight holes, repeatable fastening, and holding parts in alignment."
  },
  {
    title: "Refine Surfaces",
    buy: "Sanding block, sandpaper, random-orbit sander",
    why: "Surface prep is where beginner builds start looking finished instead of homemade."
  }
];

export const materialRows = [
  {
    material: "Construction Plywood",
    bestFor: "Shop fixtures, utility shelving, jigs",
    watchFor: "Wrong face grade, tear-out on visible edges",
    why: "Flat, strong, widely available, and forgiving for practical builds."
  },
  {
    material: "Hardwood Plywood",
    bestFor: "Bookcases, cabinets, built-ins",
    watchFor: "Thin veneer faces, edge banding needs",
    why: "Stable large panels with a cleaner furniture-ready look."
  },
  {
    material: "Poplar",
    bestFor: "Painted furniture and trim-style projects",
    watchFor: "Dents easier than harder hardwoods",
    why: "Easy to work, predictable, and friendly for beginners moving into solid wood."
  },
  {
    material: "MDF",
    bestFor: "Painted panels, templates, dry indoor use",
    watchFor: "Heavy, dust-heavy, swells with moisture",
    why: "Smooth and stable for paint-focused applications when kept dry."
  }
];

export const workshopPhases = [
  {
    phase: "Day 1 Essentials",
    items: [
      "Stable work surface strategy",
      "Safe power access and lighting",
      "Safety glasses, hearing protection, dust protection",
      "Clear walking and cutting space"
    ]
  },
  {
    phase: "Month 1 Upgrades",
    items: [
      "Clamp and tool storage",
      "Better dust capture at the source",
      "Mobile bases or portable workstations",
      "Dedicated layout/assembly area"
    ]
  },
  {
    phase: "Later Improvements",
    items: [
      "Stationary tools only when needed",
      "Dedicated circuits and climate comfort",
      "Refined workflow zones",
      "Long-board and sheet-goods handling strategy"
    ]
  }
];

export const resources = [
  "Starter project roadmap",
  "Tool buying order checklist",
  "Wood selection quick guide",
  "Small-shop setup checklist"
];
