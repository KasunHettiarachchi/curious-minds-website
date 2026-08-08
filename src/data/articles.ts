import { CategorySlug } from "@/types";

export interface ArticleData {
  slug: string;
  category: CategorySlug;
  title: string;
  subtitle: string;
  description: string;
  publishedAt: string;
  readTime: string;
  author: string;
  featured?: boolean;
  hasSimulation?: boolean;
  simulationType?: "orbit" | "projectile" | "sorting";
  openingQuestion: string;
  intuition: string;
  scientificModel: string;
  keyTakeaway: string;
  sources: { title: string; url: string }[];
}

export const ARTICLES: ArticleData[] = [
  {
    slug: "why-does-the-moon-not-fall",
    category: "space",
    title: "Why Doesn't the Moon Fall Into Earth?",
    subtitle: "An intuitive visual explanation of orbital motion, tangential velocity, and gravity.",
    description: "Gravitational attraction pulls the Moon toward Earth continuously, yet it never collides. Discover how falling around Earth creates a stable orbit.",
    publishedAt: "2026-08-08",
    readTime: "6 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: true,
    simulationType: "orbit",
    openingQuestion: "If Earth's gravity exerts immense attractive force on the Moon every second, why doesn't the Moon accelerate straight downward and crash into our planet?",
    intuition: "Imagine throwing a baseball horizontally. It travels forward while gravity pulls it down, creating a curved path. Throw it faster, and it lands further away. If you throw it fast enough—around 7.9 kilometers per second—the curvature of the ball's falling path matches the curvature of Earth itself. The ball continuously falls, but Earth curves away beneath it at the exact same rate! That is precisely what an orbit is.",
    scientificModel: "Newtonian gravity provides the fundamental equation for orbital velocity: v = √(G * M / r). Where G is the gravitational constant, M is Earth's mass, and r is the distance to the center of Earth. At the Moon's distance (384,400 km), tangential velocity of ~1.022 km/s maintains perpetual free-fall without loss of altitude.",
    keyTakeaway: "Orbiting is not the absence of gravity; it is the state of continuous free-fall around a curved celestial body at high tangential speed.",
    sources: [
      { title: "NASA Orbital Mechanics Guide", url: "https://www.nasa.gov" },
      { title: "Feynman Lectures on Physics, Vol 1, Ch 7", url: "https://www.feynmanlectures.caltech.edu" },
    ],
  },
  {
    slug: "scale-of-the-solar-system",
    category: "space",
    title: "Understanding Space: Scale of the Universe & Celestial Motion",
    subtitle: "Visualizing the immense empty spaces between planets and distant stars.",
    description: "Textbooks often compress planetary orbits to fit on a page, creating misconceptions about planetary density and distances.",
    publishedAt: "2026-08-08",
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: false,
    openingQuestion: "How empty is the solar system really, and why do traditional diagrams mislead our intuition?",
    intuition: "If the Sun were scaled down to the size of a standard basketball (23 cm diameter), Earth would be a tiny pinhead just 2 millimeters wide located 25 meters away. Neptune would be a small marble located 750 meters down the street!",
    scientificModel: "Space is overwhelmingly empty vacuum. Interplanetary distances range from tens of millions of kilometers to billions of kilometers, making celestial encounters extremely rare.",
    keyTakeaway: "Visualizing true cosmic proportions reveals that solar systems are almost entirely vast empty vacuum dotted with distant planetary pinpoints.",
    sources: [
      { title: "IAU Astronomical Units Standard", url: "https://www.iau.org" },
    ],
  },
  {
    slug: "projectile-motion-and-gravity",
    category: "physics",
    title: "Understanding Projectile Trajectories & Gravitational Acceleration",
    subtitle: "Exploring independent horizontal and vertical velocities in a gravitational field.",
    description: "Step-by-step visual exploration of launch angles, initial velocity, air resistance, and parabolic trajectories.",
    publishedAt: "2026-08-08",
    readTime: "5 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: true,
    simulationType: "projectile",
    openingQuestion: "Why does a thrown ball trace out a perfect parabolic arc regardless of how hard or soft it is thrown?",
    intuition: "When an object is launched into the air, its motion separates into two independent directions: constant horizontal velocity (moving forward) and accelerating vertical velocity (pulled downward by gravity). Combining uniform forward speed with accelerating drop creates a parabola.",
    scientificModel: "The kinematics equations dictate: x(t) = v0 * cos(θ) * t and y(t) = v0 * sin(θ) * t - 0.5 * g * t^2. Maximum range occurs at a 45-degree angle in vacuum conditions.",
    keyTakeaway: "Horizontal velocity remains constant while vertical velocity is continuously altered by gravitational acceleration g = 9.81 m/s².",
    sources: [
      { title: "Halliday & Resnick Fundamentals of Physics", url: "https://wiley.com" },
    ],
  },
  {
    slug: "what-is-time-dilation",
    category: "physics",
    title: "Mathematical & Physical Foundations of Relativity & Motion",
    subtitle: "Exploring Einstein's Special Relativity and how velocity alters the passage of time.",
    description: "Discover why moving clocks run slower and how GPS satellites must compensate for relativistic time shifts.",
    publishedAt: "2026-08-08",
    readTime: "8 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: false,
    openingQuestion: "Can time tick at different rates for two people moving at different speeds?",
    intuition: "Imagine a light clock consisting of a photon bouncing between two mirrors. For a stationary observer, the photon travels straight up and down. For a moving observer, the photon must travel along a longer diagonal path. Because the speed of light is constant for all observers, the moving clock must tick slower to cover the extra distance!",
    scientificModel: "The Lorentz transformation factor γ = 1 / √(1 - v²/c²). At 90% the speed of light, time slows down by a factor of 2.29 for the moving system.",
    keyTakeaway: "Time is not a universal constant; it is relative to the observer's state of motion and gravitational field.",
    sources: [
      { title: "Einstein 1905 Paper on Special Relativity", url: "https://einsteinpapers.press.princeton.edu" },
    ],
  },
  {
    slug: "why-is-pi-everywhere",
    category: "mathematics",
    title: "Why Does Pi (π) Appear in Unexpected Places?",
    subtitle: "From circle geometry to probability theory, quantum mechanics, and Fourier series.",
    description: "Investigate why the fundamental circle constant π emerges in probability distribution formulas and prime number sums.",
    publishedAt: "2026-08-08",
    readTime: "6 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: false,
    openingQuestion: "Why does the ratio of a circle's circumference to its diameter appear in equations having nothing to do with circles?",
    intuition: "Whenever a physical system involves periodicity, oscillation, rotation, or normal distribution symmetry, circular geometry is secretly present under the mathematical hood.",
    scientificModel: "From Euler's identity e^(iπ) + 1 = 0 to the Gaussian integral ∫ e^(-x²) dx = √π, pi links exponential growth, complex numbers, and probabilities.",
    keyTakeaway: "Pi is not merely a geometric property of circles; it is the fundamental mathematical constant of waves and continuous transformations.",
    sources: [
      { title: "3Blue1Brown Visual Mathematics Series", url: "https://3blue1brown.com" },
    ],
  },
  {
    slug: "understanding-fractals-and-patterns",
    category: "mathematics",
    title: "Mathematical & Physical Foundations of Fractals & Patterns",
    subtitle: "How simple recursive formulas generate infinite self-similar complexity.",
    description: "Explore the Mandelbrot set, Julia sets, and fractional dimensions in nature.",
    publishedAt: "2026-08-08",
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: false,
    openingQuestion: "How can a simple equation like z = z² + c produce infinite visual complexity that never repeats?",
    intuition: "Zooming into a coastline reveals smaller sub-bays, which contain smaller rocks, which contain micro-grooves. Fractals exhibit self-similarity at every scale.",
    scientificModel: "Fractal geometry introduces non-integer Hausdorff dimensions. The boundary of the Mandelbrot set has a dimension of 2.",
    keyTakeaway: "Complex, organic-looking geometric patterns emerge naturally from simple iterative feedback loops.",
    sources: [
      { title: "Benoit Mandelbrot: The Fractal Geometry of Nature", url: "https://freeman.com" },
    ],
  },
  {
    slug: "how-sorting-algorithms-work",
    category: "computer-science",
    title: "Visualizing Sorting Algorithms: Bubble, Selection & QuickSort",
    subtitle: "Step-by-step visual execution of computational sorting and complexity classes.",
    description: "Interactive visual demonstration comparing O(N²) comparison sorts with O(N log N) divide-and-conquer strategies.",
    publishedAt: "2026-08-08",
    readTime: "6 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: true,
    simulationType: "sorting",
    openingQuestion: "How do computers organize millions of data records efficiently, and why does algorithm selection matter?",
    intuition: "Imagine sorting a hand of playing cards. You might scan for the smallest card and move it to the front, or compare adjacent pairs step-by-step. How you organize comparison operations determines whether sorting takes seconds or hours on large datasets.",
    scientificModel: "Comparison-based sorting has a lower bound efficiency of O(N log N). Bubble sort requires O(N²) comparisons, while QuickSort partitions arrays around a pivot element.",
    keyTakeaway: "Algorithmic efficiency transforms intractable computational problems into instant real-time executions.",
    sources: [
      { title: "Knuth: The Art of Computer Programming, Vol 3", url: "https://knuth.stanford.edu" },
    ],
  },
  {
    slug: "binary-search-and-logarithmic-time",
    category: "computer-science",
    title: "Logic, Computation, and Algorithmic Complexity",
    subtitle: "Intuitive visual breakdown of logarithmic time searching in sorted arrays.",
    description: "Discover how halving search spaces enables finding a single name in 4 billion records in under 32 comparisons.",
    publishedAt: "2026-08-08",
    readTime: "5 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: false,
    openingQuestion: "How can a database search billions of items in a fraction of a millisecond?",
    intuition: "If you guess a number between 1 and 100 and receive 'higher' or 'lower' feedback, guessing 50 immediately cuts the remaining search space in half. Repeating this halves the remaining items every step.",
    scientificModel: "Binary search executes in O(log₂ N) time. For N = 1,000,000, log₂ N is approximately 20 operations.",
    keyTakeaway: "Logarithmic time growth keeps algorithms exceptionally fast even as input datasets expand exponentially.",
    sources: [
      { title: "Introduction to Algorithms (CLRS)", url: "https://mitpress.mit.edu" },
    ],
  },
  {
    slug: "ecosystem-balance-and-predator-prey",
    category: "nature",
    title: "Ecosystem Balance: Predator-Prey Dynamics & Chaos",
    subtitle: "Understanding Lotka-Volterra population oscillations in biological environments.",
    description: "Explore how wolves and deer, or foxes and rabbits, balance population growth cycles through feedback loops.",
    publishedAt: "2026-08-08",
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: false,
    openingQuestion: "Why do wild animal populations naturally rise and fall in predictable wave-like cycles?",
    intuition: "When prey (rabbits) are abundant, predators (foxes) have plenty of food and reproduce rapidly. As predator numbers rise, they consume rabbits faster than they reproduce, leading to a rabbit population crash. Without food, fox numbers fall, allowing the rabbit population to recover!",
    scientificModel: "Modeled by non-linear differential equations: dx/dt = αx - βxy and dy/dt = δxy - γy.",
    keyTakeaway: "Natural ecosystems maintain dynamic equilibrium through continuous population feedback oscillations.",
    sources: [
      { title: "Lotka-Volterra Ecological Population Models", url: "https://nature.com" },
    ],
  },
  {
    slug: "fibonacci-in-nature-and-botany",
    category: "nature",
    title: "Patterns in the Living World: Fibonacci Spirals & Golden Ratio",
    subtitle: "How sunflower seed heads and pinecones optimize solar exposure using mathematical spirals.",
    description: "Discover why botanical growth patterns naturally converge on the golden angle of 137.5 degrees.",
    publishedAt: "2026-08-08",
    readTime: "6 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: false,
    openingQuestion: "Why do sunflowers, pineapples, and pinecones pack seeds in exact numbers from the Fibonacci sequence (13, 21, 34, 55)?",
    intuition: "Plants place new seeds at an angle that avoids overlapping older seeds. The optimal packing angle that minimizes dead space is the Golden Angle (360° / φ² ≈ 137.5°).",
    scientificModel: "Packing efficiency is maximized by irrational divergence ratios derived from φ = (1 + √5) / 2.",
    keyTakeaway: "Botanical architecture relies on mathematical optimization evolved to maximize sunlight and seed density.",
    sources: [
      { title: "Phyllotaxis: Mathematical Models of Plant Growth", url: "https://cambridge.org" },
    ],
  },
];

export const ARTICLE_MAP = Object.fromEntries(
  ARTICLES.map((art) => [`${art.category}/${art.slug}`, art])
);
