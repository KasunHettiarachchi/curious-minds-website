import { CategoryInfo } from "@/types";

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: "space",
    name: "Space",
    description: "Explore orbits, stellar life cycles, black holes, and the vast scale of the cosmos.",
    tagline: "Unveiling the wonders of the universe beyond Earth",
    iconName: "Rocket",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    topicCount: 4,
  },
  {
    slug: "physics",
    name: "Physics",
    description: "Deconstruct gravity, time dilation, optics, quantum phenomena, and fundamental forces.",
    tagline: "The core laws that govern reality and movement",
    iconName: "Atom",
    color: "#f59e0b",
    gradient: "from-amber-400 to-orange-600",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    topicCount: 4,
  },
  {
    slug: "mathematics",
    name: "Mathematics",
    description: "Visualize fractals, fundamental constants, probability, geometric transformations, and prime patterns.",
    tagline: "The universal language of structures and patterns",
    iconName: "Sigma",
    color: "#10b981",
    gradient: "from-emerald-400 to-teal-600",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    topicCount: 4,
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    description: "Interactive visual demonstrations of algorithms, sorting, data structures, and network routing.",
    tagline: "Logic, computation, and algorithmic beauty",
    iconName: "Cpu",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-indigo-600",
    badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    topicCount: 4,
  },
  {
    slug: "nature",
    name: "Nature",
    description: "Investigate biological patterns, ecosystems, fluid dynamics, and evolutionary mechanics.",
    tagline: "Complexity and harmony in the living world",
    iconName: "Leaf",
    color: "#ec4899",
    gradient: "from-rose-400 to-pink-600",
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    topicCount: 4,
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((cat) => [cat.slug, cat])
);
