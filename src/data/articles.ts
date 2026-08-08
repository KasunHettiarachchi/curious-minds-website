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
  hasSimulation: boolean;
  simulationType:
    | "orbit"
    | "solar-scale"
    | "projectile"
    | "time-dilation"
    | "pi-estimator"
    | "fractal"
    | "sorting"
    | "binary-search"
    | "predator-prey"
    | "fibonacci";
  openingQuestion: string;
  historicalContext: string;
  theoreticalPrinciples: string;
  mathematicalFormulas: string;
  intuition: string;
  scientificModel: string;
  realWorldApplications: string;
  commonMisconceptions: string;
  keyTakeaway: string;
  sources: { title: string; url: string }[];
}

export const ARTICLES: ArticleData[] = [
  {
    slug: "why-does-the-moon-not-fall",
    category: "space",
    title: "Why Doesn't the Moon Fall Into Earth?",
    subtitle: "An intuitive visual explanation of orbital mechanics, tangential velocity, and gravity.",
    description: "Gravitational attraction pulls the Moon toward Earth continuously, yet it never collides. Discover how falling around Earth creates a stable orbit.",
    publishedAt: "2026-08-08",
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: true,
    simulationType: "orbit",
    openingQuestion: "If Earth's gravity exerts immense attractive force on the Moon every second, why doesn't the Moon accelerate straight downward and crash into our planet?",
    historicalContext: "In 1687, Sir Isaac Newton published the Principia Mathematica, proposing his famous thought experiment: 'Newton's Cannonball'. He realized that if a cannon launched a ball fast enough from a mountain peak, the ball's falling curvature would match Earth's surface curvature.",
    theoreticalPrinciples: "An orbit is not a state of zero gravity; gravitational pull at the Moon's orbital altitude is still ~0.27 m/s². The Moon is in perpetual free-fall toward Earth. However, because the Moon possesses a high tangential velocity (forward momentum perpendicular to Earth's center), as it falls toward Earth, Earth's surface curves away underneath it at the exact same rate.",
    mathematicalFormulas: "Newtonian Universal Gravitation dictates: F = G * (m1 * m2) / r². Equating gravitational force to centripetal force yields the circular orbital velocity formula: v = √(G * M / r). At r = 384,400 km, v ≈ 1.022 km/s (3,679 km/h).",
    intuition: "Imagine throwing a baseball horizontally. It travels forward while gravity pulls it down, creating a curved path. Throw it faster, and it lands further away. If you throw it fast enough—around 7.9 km/s near Earth's surface—the curvature of the falling path matches Earth's curvature. The ball continuously falls, but Earth curves away beneath it at the exact same rate!",
    scientificModel: "The Moon's orbit is slightly elliptical (eccentricity e ≈ 0.0549). Tidal friction gradually transfers Earth's rotational energy to the Moon, causing its orbit to widen by ~3.8 cm per year.",
    realWorldApplications: "Underpins satellite constellations (GPS, Starlink, International Space Station), lunar insertion trajectories, and interplanetary slingshot maneuvers.",
    commonMisconceptions: "Myth: Astronauts in orbit experience microgravity because there is no gravity in space. Truth: Earth's gravity at ISS altitude (~400 km) is 90% as strong as on Earth's surface. Weightlessness is caused by continuous free-fall, not zero gravity.",
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
    description: "Textbooks often compress planetary orbits to fit on a page, creating widespread misconceptions about planetary density and true cosmic distances.",
    publishedAt: "2026-08-08",
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: true,
    simulationType: "solar-scale",
    openingQuestion: "How empty is the solar system really, and why do traditional school diagrams mislead our intuition?",
    historicalContext: "In 1672, Giovanni Cassini measured the parallax of Mars to calculate the true distance from Earth to the Sun (the Astronomical Unit, AU), revealing for the first time the breathtaking scale of our solar system.",
    theoreticalPrinciples: "Because the Sun accounts for 99.86% of all mass in the solar system, planetary distances expand rapidly as you move outward. The gap between Mars and Jupiter spans hundreds of millions of kilometers, while Neptune lies 30 times further from the Sun than Earth.",
    mathematicalFormulas: "1 Astronomical Unit (AU) = 149,597,870.7 km (~8.3 light-minutes). Distance to Neptune = 30.05 AU (~4.17 light-hours). Distance to nearest star Proxima Centauri = 268,770 AU (4.24 light-years).",
    intuition: "If the Sun were scaled down to the size of a standard basketball (23 cm diameter), Earth would be a tiny pinhead just 2 millimeters wide located 25 meters away. Neptune would be a small marble located 750 meters down the street!",
    scientificModel: "Planetary spacing roughly follows logarithmic scaling patterns (historically described by the Titius-Bode relation), reflecting protoplanetary disk clearing during early planetary accretion.",
    realWorldApplications: "Essential for calculating spacecraft flight durations, deep space communications latency (up to 4.5 hours for Voyager 1), and gravity assist trajectories.",
    commonMisconceptions: "Myth: The asteroid belt is densely packed like sci-fi movie scenes. Truth: The average distance between asteroids in the asteroid belt is over 960,000 km—far wider than the distance between Earth and the Moon!",
    keyTakeaway: "Visualizing true cosmic proportions reveals that solar systems are overwhelmingly empty vacuum dotted with distant planetary pinpoints.",
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
    readTime: "6 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: true,
    simulationType: "projectile",
    openingQuestion: "Why does a thrown ball trace out a perfect parabolic arc regardless of how hard or soft it is thrown?",
    historicalContext: "Galileo Galilei first proved in 1638 that projectile motion is composed of two independent motion components: uniform horizontal motion and accelerated vertical falling motion.",
    theoreticalPrinciples: "In the absence of air resistance, an object launched with initial velocity v0 at angle θ travels horizontally at constant velocity while accelerating downward vertically due to gravity g = 9.81 m/s².",
    mathematicalFormulas: "Horizontal displacement: x(t) = v0 * cos(θ) * t. Vertical displacement: y(t) = v0 * sin(θ) * t - 0.5 * g * t². Maximum Range R = (v0² * sin(2θ)) / g.",
    intuition: "Imagine dropping a bullet from your hand at the exact same instant a gun fires a bullet horizontally. Both bullets strike the flat ground at the exact same millisecond! Horizontal motion does not delay or alter vertical gravitational acceleration.",
    scientificModel: "Parabolic trajectory equations assume uniform gravity and vacuum. Introducing aerodynamic drag (air resistance proportional to v²) flattens the descending arc.",
    realWorldApplications: "Crucial for sports physics (golf, basketball, archery), ballistics engineering, rocket staging, and fireworks display choreography.",
    commonMisconceptions: "Myth: Heavier objects fall faster than lighter objects. Truth: In a vacuum, all objects accelerate downward at the exact same rate regardless of mass.",
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
    hasSimulation: true,
    simulationType: "time-dilation",
    openingQuestion: "Can time tick at different rates for two people moving at different speeds?",
    historicalContext: "In 1905, Albert Einstein published his Special Theory of Relativity, upending Isaac Newton's assumption that time is universal and absolute throughout the universe.",
    theoreticalPrinciples: "Because the speed of light in a vacuum (c ≈ 300,000 km/s) is invariant for all observers regardless of their velocity, time must expand (dilate) and space must contract for a moving observer.",
    mathematicalFormulas: "Time Dilation formula: Δt' = Δt / √(1 - v²/c²). Where γ = 1 / √(1 - v²/c²) is the Lorentz factor. At v = 0.8c, γ = 1.667.",
    intuition: "Imagine a light clock consisting of a photon bouncing between two mirrors. For a stationary observer, the photon travels straight up and down. For a moving observer, the photon must travel along a longer diagonal path. Because light speed is constant, the moving clock must tick slower to cover the longer path!",
    scientificModel: "Relativity combines space and time into a 4-dimensional spacetime continuum. Moving through space consumes part of an object's motion through time.",
    realWorldApplications: "Atomic clocks aboard GPS satellites tick faster than ground clocks by 38 microseconds per day due to gravitational and kinematic relativity; without relativistic corrections, GPS positioning would drift by 10 kilometers daily!",
    commonMisconceptions: "Myth: Time dilation is just a optical illusion caused by light transmission delays. Truth: Time physically ticks slower for moving atomic clocks and subatomic particles (such as muons reaching Earth's surface).",
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
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: true,
    simulationType: "pi-estimator",
    openingQuestion: "Why does the ratio of a circle's circumference to its diameter appear in equations having nothing to do with circles?",
    historicalContext: "Archimedes of Syracuse first rigorous calculated bounds for π in 250 BCE by inscribing and circumscribing 96-sided polygons around a circle.",
    theoreticalPrinciples: "Pi (π ≈ 3.14159...) is an irrational and transcendental mathematical constant. It appears in fields far beyond geometry because any continuous periodic motion or symmetric distribution involves circular functions under the mathematical hood.",
    mathematicalFormulas: "Euler's identity: e^(iπ) + 1 = 0. Gaussian normal distribution: f(x) = (1 / √(2πσ²)) * e^(-(x-μ)² / 2σ²). Leibniz series: π/4 = 1 - 1/3 + 1/5 - 1/7 + ...",
    intuition: "Whenever a physical system involves rotation, oscillation, waves, or normal distribution symmetry, circular geometry is secretly present.",
    scientificModel: "In probability (Monte Carlo Buffon's needle problem), dropping random needles onto parallel lines yields a probability of 2/π because orientation angles integrate over a 180° semi-circle.",
    realWorldApplications: "Essential for signal processing (Fourier Transforms), quantum wavefunctions (Heisenberg Uncertainty Principle ΔxΔp ≥ ℏ/2), and structural engineering.",
    commonMisconceptions: "Myth: Pi can be expressed as a fraction like 22/7. Truth: 22/7 is only an approximation (3.1428...); pi's decimal expansion is non-repeating and infinite.",
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
    hasSimulation: true,
    simulationType: "fractal",
    openingQuestion: "How can a simple equation like z = z² + c produce infinite visual complexity that never repeats?",
    historicalContext: "Benoit Mandelbrot coined the term 'fractal' in 1975 to describe rough geometric shapes that exhibit self-similarity at all magnifications.",
    theoreticalPrinciples: "Fractals are non-Euclidean structures whose Hausdorff dimension exceeds their topological dimension. Repeating a simple rule recursively creates infinite boundary detail.",
    mathematicalFormulas: "Mandelbrot set quadratic recurrence: z_(n+1) = z_n² + c. Where z and c are complex numbers starting at z_0 = 0.",
    intuition: "Zooming into a coastline reveals smaller sub-bays, which contain smaller rocks, which contain micro-grooves. Fractals exhibit self-similarity at every scale.",
    scientificModel: "In nature, fractals maximize surface area while minimizing volume—allowing trees to absorb sunlight and human lungs to exchange oxygen efficienty.",
    realWorldApplications: "Computer graphics rendering (procedural mountains/clouds), antenna design (compact fractal antennas), and financial market volatility analysis.",
    commonMisconceptions: "Myth: Fractals are artificial mathematical abstractions. Truth: Natural formations like coastlines, snowflakes, trees, blood vessels, and lightning strikes are natural fractals.",
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
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: true,
    hasSimulation: true,
    simulationType: "sorting",
    openingQuestion: "How do computers organize millions of data records efficiently, and why does algorithm selection matter?",
    historicalContext: "John von Neumann invented the Merge Sort algorithm in 1945, laying the groundwork for divide-and-conquer computational complexity analysis.",
    theoreticalPrinciples: "Sorting arranges elements in a specified order (ascending or descending). Comparison-based algorithms compare pairs of elements to determine order.",
    mathematicalFormulas: "Bubble Sort worst-case comparisons: N*(N-1)/2 = O(N²). QuickSort/MergeSort average complexity: O(N log₂ N). Lower bound for comparison sorting: Ω(N log N).",
    intuition: "Imagine sorting a hand of playing cards. You might scan for the smallest card and move it to the front, or compare adjacent pairs step-by-step. How you organize comparisons determines whether sorting takes seconds or hours on large datasets.",
    scientificModel: "Efficiency varies dramatically with scale: sorting 1 million items takes ~1,000,000,000,000 operations with Bubble Sort vs ~20,000,000 operations with QuickSort!",
    realWorldApplications: "Database indexing, search engine result ranking, e-commerce catalog filtering, and computer graphics z-buffering.",
    commonMisconceptions: "Myth: The fastest sorting algorithm is always QuickSort. Truth: For small array sizes (N < 20) or mostly sorted data, Insertion Sort is faster due to lower constant factor overhead.",
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
    readTime: "6 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: true,
    simulationType: "binary-search",
    openingQuestion: "How can a database search billions of items in a fraction of a millisecond?",
    historicalContext: "Binary search was first published by John Mauchly in 1946, though its mathematical principle dates back to binary root-finding methods in antiquity.",
    theoreticalPrinciples: "Binary search operates on sorted arrays. By inspecting the middle element, it eliminates half of the remaining search space in a single comparison step.",
    mathematicalFormulas: "Time complexity: T(N) = T(N/2) + O(1) ⇒ O(log₂ N). For N = 4,294,967,296 (4.2 billion items), log₂ N = 32 maximum comparisons!",
    intuition: "If you guess a number between 1 and 100 and receive 'higher' or 'lower' feedback, guessing 50 immediately cuts the remaining search space in half. Repeating this halves the remaining items every step.",
    scientificModel: "Binary search trees (BSTs, Red-Black Trees, B-Trees) extend binary search principles to dynamic memory insertions and file systems.",
    realWorldApplications: "Database primary key indexing (B+ Trees), Git commit bisecting (`git bisect`), and memory address lookup in operating systems.",
    commonMisconceptions: "Myth: Binary search works on any dataset. Truth: Binary search strictly requires the data array to be sorted beforehand.",
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
    hasSimulation: true,
    simulationType: "predator-prey",
    openingQuestion: "Why do wild animal populations naturally rise and fall in predictable wave-like cycles?",
    historicalContext: "Alfred J. Lotka (1925) and Vito Volterra (1926) independently developed the differential equations modeling predator-prey interaction dynamics.",
    theoreticalPrinciples: "When prey are abundant, predators thrive and reproduce. As predator density rises, prey consumption increases, causing prey population to collapse. Lacking food, predator numbers drop, enabling prey recovery.",
    mathematicalFormulas: "Lotka-Volterra equations: dx/dt = αx - βxy (prey rate) and dy/dt = δxy - γy (predator rate). Where x is prey, y is predator.",
    intuition: "When prey (rabbits) are abundant, predators (foxes) have plenty of food and reproduce rapidly. As predator numbers rise, they consume rabbits faster than they reproduce, leading to a rabbit population crash. Without food, fox numbers fall, allowing the rabbit population to recover!",
    scientificModel: "The system forms a closed-loop phase-space trajectory with periodic oscillations out of phase by approximately 1/4 period.",
    realWorldApplications: "Wildlife conservation management, fisheries quota planning, epidemic disease spread modeling, and agricultural pest control.",
    commonMisconceptions: "Myth: Predators drive prey populations to extinction if left unmanaged. Truth: Natural ecosystems settle into dynamic balance cycles unless external habitat destruction occurs.",
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
    readTime: "7 min read",
    author: "Curious Minds Team",
    featured: false,
    hasSimulation: true,
    simulationType: "fibonacci",
    openingQuestion: "Why do sunflowers, pineapples, and pinecones pack seeds in exact numbers from the Fibonacci sequence (13, 21, 34, 55)?",
    historicalContext: "Leonardo Fibonacci introduced his sequence (1, 1, 2, 3, 5, 8, 13, 21, 34...) in 1202. Johannes Kepler later noticed its connection to plant spiral phyllotaxis.",
    theoreticalPrinciples: "Plants place new seeds/primordia at a fixed angle relative to previous seeds. To prevent seeds from lining up in straight radial lines and wasting space, the angle must be an irrational fraction of a circle.",
    mathematicalFormulas: "Golden Ratio φ = (1 + √5) / 2 ≈ 1.618033... Golden Angle = 360° * (1 - 1/φ) ≈ 137.5077°.",
    intuition: "If a sunflower places seeds at 90° or 120°, seeds form straight cross arms with large gaps between them. Using 137.5° ensures every new seed falls into the widest available open gap, filling the disk completely!",
    scientificModel: "Vogel's spiral model places seed n at radius r = c * √n and angle θ = n * 137.5°. This maximizes seed density and sunlight capture.",
    realWorldApplications: "Solar panel array arrangement to avoid shading, architectural dome optimization, and botanical evolutionary biology.",
    commonMisconceptions: "Myth: The Golden Ratio is a magical mystifying force controlling everything. Truth: It is the mathematical solution to optimal spatial packing and non-overlapping growth angles.",
    keyTakeaway: "Botanical architecture relies on mathematical optimization evolved to maximize sunlight and seed density.",
    sources: [
      { title: "Phyllotaxis: Mathematical Models of Plant Growth", url: "https://cambridge.org" },
    ],
  },
];

export const ARTICLE_MAP = Object.fromEntries(
  ARTICLES.map((art) => [`${art.category}/${art.slug}`, art])
);
