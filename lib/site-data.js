export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programmes", label: "Programs" },
  { href: "/student-creations", label: "Student Creations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { value: "500+", label: "students mentored through project-based learning" },
  { value: "2,000+", label: "student-built projects, experiments, and showcases" },
  { value: "4", label: "core programme families across exploration and specialisation" },
  { value: "1", label: "connected ecosystem from first curiosity to advanced readiness" }
];

export const pathwayFamilies = [
  {
    id: "foundations",
    label: "Foundations",
    query: { mode: "age", pathway: "foundations" },
    accent: "from-amber-400/30 via-orange-500/20 to-transparent",
    blurb: "Younger learners begin with mission-led robotics, coding, and design challenges.",
    items: [
      { href: "/kx1", title: "Mars Exploration", image: "/assets/img/kx1-rover.png" },
      { href: "/kx2", title: "Project Superhero", image: "/assets/img/kx2-rover.png" },
      { href: "/kx3", title: "Wildlife Conservation", image: "/assets/img/kx3-build.png" }
    ]
  },
  {
    id: "learning-paths",
    label: "Learning Paths",
    query: { mode: "age", pathway: "learning-paths" },
    accent: "from-sky-400/30 via-cyan-500/20 to-transparent",
    blurb: "Students test interests across analytics, product thinking, and creative communication.",
    items: [
      { href: "/analytics", title: "Analytics", image: "/assets/img/analytics-logo.png" },
      { href: "/product-design", title: "Product Design", image: "/assets/img/px-product-design-icon.webp" },
      { href: "/course-detail?course=maker-lab", title: "Creative Expressions", image: "/assets/img/px-show-your-talent-icon.webp" }
    ]
  },
  {
    id: "specializations",
    label: "Specializations",
    query: { mode: "age", pathway: "specializations" },
    accent: "from-fuchsia-400/30 via-violet-500/20 to-transparent",
    blurb: "Older students move into AI, embedded systems, software, animation, and engineering tracks.",
    items: [
      { href: "/data-science-ai", title: "Data & AI", image: "/assets/img/px-aia.webp" },
      { href: "/embedded-systems", title: "Embedded Systems", image: "/assets/img/tool-magicbit.png" },
      { href: "/course-detail?course=animation", title: "Animation", image: "/assets/img/blog-img.png.webp" }
    ],
    moreLabel: "+4 more"
  },
  {
    id: "launchpad",
    label: "Launchpad",
    query: { mode: "age", pathway: "launchpad" },
    accent: "from-emerald-400/30 via-teal-500/20 to-transparent",
    blurb: "University and incubator pathways turn stronger portfolios into next-step momentum.",
    items: [
      { href: "/course-detail?course=university-pathway", title: "University", image: "/assets/img/px-uol.webp" },
      { href: "/course-detail?course=incubator-hub", title: "Incubator", image: "/assets/img/px-show-your-talent-icon.webp" }
    ]
  }
];

export const programmeModes = [
  { id: "age", label: "Explore by Age" },
  { id: "interest", label: "Explore by Interest" }
];

export const ageFilters = [
  { value: "all", label: "All" },
  { value: "foundations", label: "Foundations (Age 8-9)" },
  { value: "learning-paths", label: "Learning Paths (Age 10-12)" },
  { value: "specializations", label: "Specializations (Age 13-16)" },
  { value: "launchpad", label: "Launchpad (Age 16+)" }
];

export const interestFilters = [
  { value: "all", label: "All" },
  { value: "robotics", label: "Robotics" },
  { value: "coding", label: "Coding" },
  { value: "design", label: "Design" },
  { value: "ai", label: "AI" },
  { value: "electronics", label: "Electronics" },
  { value: "media", label: "Media" },
  { value: "leadership", label: "Leadership" }
];

export const programmes = [
  {
    id: "kx1",
    title: "Mars Exploration",
    href: "/kx1",
    family: "foundations",
    familyLabel: "Foundations",
    age: "Age 8-9",
    duration: "4-6 months",
    summary: "A Mars-themed first-step foundation where younger learners begin robotics, coding, design, and rover-based problem solving through a connected mission journey.",
    tags: ["Coding", "Robotics", "Design Thinking"],
    interests: ["robotics", "coding", "design", "electronics"],
    image: "/assets/img/kx1-rover.png"
  },
  {
    id: "kx2",
    title: "Project Superhero",
    href: "/kx2",
    family: "foundations",
    familyLabel: "Foundations",
    age: "Age 9-13",
    duration: "12-16 months",
    summary: "A superhero-themed creative-engineering foundation covering 3D design, Scratch coding, Plotagon storytelling, Clipchamp editing, and a programmable turret build.",
    tags: ["TinkerCAD", "Scratch", "Plotagon", "Turret Build"],
    interests: ["robotics", "coding", "electronics"],
    image: "/assets/img/kx2-rover.png"
  },
  {
    id: "kx3",
    title: "Wildlife Conservation",
    href: "/kx3",
    family: "foundations",
    familyLabel: "Foundations",
    age: "Age 11-13",
    duration: "6-10 months",
    summary: "A conservation-themed advanced foundation where students design immersive worlds, build apps, create media, and assemble a smart camera trap system.",
    tags: ["CoSpaces", "App Design", "Camera Trap"],
    interests: ["coding", "electronics", "design"],
    image: "/assets/img/kx3-build.png"
  },
  {
    id: "analytics",
    title: "Analytics",
    href: "/analytics",
    family: "learning-paths",
    familyLabel: "Learning Paths",
    age: "Age 10-12",
    duration: "6-12 months",
    summary: "A logic-and-data pathway where students explore patterns, structured thinking, evidence-based decisions, and insight-building through guided projects.",
    tags: ["Data Thinking", "Logic", "Insights"],
    interests: ["coding", "ai"],
    image: "/assets/img/analytics-logo.png"
  },
  {
    id: "product-design",
    title: "Product Design",
    href: "/product-design",
    family: "learning-paths",
    familyLabel: "Learning Paths",
    age: "Age 10-12",
    duration: "6-12 months",
    summary: "A design-led pathway where students learn how to shape ideas into clear products through planning, prototyping, testing, and refinement.",
    tags: ["Prototyping", "Product Thinking", "Iteration"],
    interests: ["design", "electronics"],
    image: "/assets/img/px-product-design-icon.webp"
  },
  {
    id: "maker-lab",
    title: "Creative Expressions",
    href: "/course-detail?course=maker-lab",
    family: "learning-paths",
    familyLabel: "Learning Paths",
    age: "Age 10-12",
    duration: "6-12 months",
    summary: "A media and storytelling pathway where students learn to communicate ideas through creative outputs, presentation, and expressive project work.",
    tags: ["Storytelling", "Media", "Presentation"],
    interests: ["media", "leadership"],
    image: "/assets/img/px-show-your-talent-icon.webp"
  },
  {
    id: "data-science-ai",
    title: "Data Science & AI",
    href: "/data-science-ai",
    family: "specializations",
    familyLabel: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Explore data, machine intelligence, and analytical thinking through projects that connect coding, models, and decision-making.",
    tags: ["Data", "AI", "Analytics"],
    interests: ["coding", "ai"],
    image: "/assets/img/px-aia.webp"
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    href: "/embedded-systems",
    family: "specializations",
    familyLabel: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Combine hardware and software through controllers, sensors, and real-world technical builds that respond to physical inputs.",
    tags: ["Embedded", "Sensors", "Hardware"],
    interests: ["robotics", "electronics", "coding"],
    image: "/assets/img/tool-magicbit.png"
  },
  {
    id: "animation",
    title: "Animation",
    href: "/course-detail?course=animation",
    family: "specializations",
    familyLabel: "Specializations",
    age: "Age 13-16",
    duration: "6-12 months",
    summary: "Develop story-led visual communication through animated scenes, timing, transitions, character work, and polished media outputs.",
    tags: ["Motion", "Story", "Media"],
    interests: ["media", "design"],
    image: "/assets/img/blog-img.png.webp"
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    href: "/software-engineering",
    family: "specializations",
    familyLabel: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Build scalable software systems using structured logic, clearer architecture, and stronger technical execution habits.",
    tags: ["Programming", "Systems", "APIs"],
    interests: ["coding"],
    image: "/assets/img/tool-react-official.png"
  },
  {
    id: "eee",
    title: "EEE",
    href: "/eee",
    family: "specializations",
    familyLabel: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Go deeper into electrical and electronic engineering ideas through circuits, components, control logic, and applied technical systems.",
    tags: ["Circuits", "Power", "Electronics"],
    interests: ["electronics"],
    image: "/assets/img/Red-robot-hand.webp"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    href: "/course-detail?course=digital-marketing",
    family: "specializations",
    familyLabel: "Specializations",
    age: "Age 13-16",
    duration: "6-12 months",
    summary: "Strengthen branding, content strategy, campaign thinking, and audience communication through modern digital outreach projects.",
    tags: ["Branding", "Content", "Strategy"],
    interests: ["media", "design", "leadership"],
    image: "/assets/img/tool-canva-official.png"
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    href: "/course-detail?course=cyber-security",
    family: "specializations",
    familyLabel: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Learn how digital systems are protected, how risks are identified, and how secure technical thinking is built early.",
    tags: ["Security", "Networks", "Ethics"],
    interests: ["coding"],
    image: "/assets/img/tool-api-braces.svg"
  },
  {
    id: "university-pathway",
    title: "University Pathway",
    href: "/course-detail?course=university-pathway",
    family: "launchpad",
    familyLabel: "Launchpad",
    age: "Age 16+",
    duration: "1-2 years",
    summary: "Prepare for university through mentorship, portfolio positioning, and next-step planning built around stronger project work.",
    tags: ["Portfolio", "Mentorship", "Guidance"],
    interests: ["leadership"],
    image: "/assets/img/px-uol.webp"
  },
  {
    id: "incubator-hub",
    title: "Incubator Hub",
    href: "/course-detail?course=incubator-hub",
    family: "launchpad",
    familyLabel: "Launchpad",
    age: "Age 16+",
    duration: "1-2 years",
    summary: "Shape stronger ideas into applied innovation work, startup-like thinking, and independent execution beyond classroom-style delivery.",
    tags: ["Innovation", "Startup Mindset", "Leadership"],
    interests: ["leadership", "design", "coding"],
    image: "/assets/img/px-show-your-talent-icon.webp"
  }
];

export const galleryFilters = [
  { value: "all", label: "All" },
  { value: "robotics", label: "Robotics" },
  { value: "coding", label: "Coding" },
  { value: "design", label: "Design" },
  { value: "media", label: "Media" }
];

export const galleryItems = [
  {
    title: "Expedition Mars Rocket Concepts",
    tag: "Design + Robotics",
    image: "/assets/img/ROCKET.webp",
    alt: "Expedition Mars rocket project",
    summary: "3D-designed spacecraft concepts developed inside the foundational Mars Exploration journey.",
    categories: ["design", "robotics"]
  },
  {
    title: "Robot Build Showcases",
    tag: "Robotics",
    image: "/assets/img/px-side-view-of-a-robot-dog.webp",
    alt: "Robot prototype",
    summary: "Mechanics, motion, and systems thinking brought together through guided robotics builds.",
    categories: ["robotics"]
  },
  {
    title: "Systems And Interaction Concepts",
    tag: "Coding + Design",
    image: "/assets/img/px-Mechanical-robotic-hand.webp",
    alt: "Engineering concept visual",
    summary: "Projects that connect physical design decisions with digital logic and control.",
    categories: ["coding", "design"]
  },
  {
    title: "Presentation And Storytelling Outputs",
    tag: "Media",
    image: "/assets/img/px-img1.webp",
    alt: "Creative media project",
    summary: "Student-made explainers, edits, and narrative presentation pieces linked to project work.",
    categories: ["media"]
  },
  {
    title: "Scratch And Logic Projects",
    tag: "Coding",
    image: "/assets/img/px-img2.webp",
    alt: "Coding pathway visual",
    summary: "Interactive logic exercises and early computational thinking work from younger cohorts.",
    categories: ["coding"]
  },
  {
    title: "Creative Prototype Boards",
    tag: "Design + Media",
    image: "/assets/img/px-img3.webp",
    alt: "Creative build visual",
    summary: "Visual concept work that helps students communicate product thinking more clearly.",
    categories: ["design", "media"]
  },
  {
    title: "Hardware Logic Challenges",
    tag: "Robotics + Coding",
    image: "/assets/img/Red-robot-hand.webp",
    alt: "Robotics engineering visual",
    summary: "Hands-on engineering tasks where code meets circuits, devices, and structured testing.",
    categories: ["robotics", "coding"]
  },
  {
    title: "Showcase-Ready Output",
    tag: "Design + Media",
    image: "/assets/img/px-img4.webp",
    alt: "Visual showcase",
    summary: "Finished visual pieces suitable for events, portfolios, and parent-facing exhibitions.",
    categories: ["design", "media"]
  },
  {
    title: "Competition Day Recap Boards",
    tag: "Robotics + Media",
    image: "/assets/img/px-img1.webp",
    alt: "Competition day robotics recap",
    summary: "Students package build photos, test notes, and team highlights into polished showcase visuals.",
    categories: ["robotics", "media"]
  },
  {
    title: "Interactive Product Concept Boards",
    tag: "Design + Coding",
    image: "/assets/img/px-img3.webp",
    alt: "Product interface concept board",
    summary: "Wireframes, control logic, and interface ideas brought together into clearer product proposals.",
    categories: ["design", "coding"]
  },
  {
    title: "Demo Videos And App Walkthroughs",
    tag: "Media + Coding",
    image: "/assets/img/px-img4.webp",
    alt: "App demo presentation visual",
    summary: "Students explain how their apps and systems work through edited recordings and narrated demos.",
    categories: ["media", "coding"]
  },
  {
    title: "Mechanical Form Exploration",
    tag: "Robotics + Design",
    image: "/assets/img/px-side-view-of-a-robot-dog.webp",
    alt: "Mechanical form exploration",
    summary: "Students iterate on body shape, movement constraints, and structure before building final robotic forms.",
    categories: ["robotics", "design"]
  }
];

export const courseDetails = {
  "kx1-foundation": {
    title: "Mars Exploration",
    pathway: "Foundations",
    age: "Age 8-9",
    duration: "4-6 months",
    summary: "A Mars-themed first-step foundation where younger learners begin robotics, coding, design, and rover-based problem solving through a connected mission journey.",
    tags: ["Coding", "Robotics", "Design Thinking"],
    image: "/assets/img/ROCKET.webp",
    heading: "What Mars Exploration develops",
    copy: "Mars Exploration is the Mars-themed first foundation step in the Meu Labs ecosystem, helping younger learners gain confidence through guided making, simple logic, rover building, and mission-based experimentation.",
    panelOneTitle: "What It Focuses On",
    panelOne: [
      "Curiosity-driven challenges and guided making",
      "Introductory robotics and visual coding",
      "Early collaboration and hands-on confidence"
    ],
    panelTwoTitle: "Why It Matters",
    panelTwo: [
      "Creates a softer first step for younger learners",
      "Builds confidence before broader Project Superhero experiences",
      "Makes technical exploration feel approachable and playful"
    ]
  },
  "kx3-foundation": {
    title: "Wildlife Conservation",
    pathway: "Foundations",
    age: "Age 11-13",
    duration: "6-10 months",
    summary: "A conservation-themed advanced foundation where students design immersive worlds, build apps, create media, and assemble a smart camera trap system.",
    tags: ["CoSpaces", "App Design", "Camera Trap"],
    image: "/assets/img/kx3-build.png",
    heading: "What Wildlife Conservation develops",
    copy: "Wildlife Conservation moves students into richer systems work through simulation, app design, media storytelling, and a smart camera trap build connected to conservation ideas.",
    panelOneTitle: "Best For",
    panelOne: [
      "Students ready to move beyond basic foundations into integrated systems work",
      "Learners interested in apps, environments, and smart build projects",
      "Bridging from broad exploration into more advanced technical thinking"
    ],
    panelTwoTitle: "Why It Matters",
    panelTwo: [
      "Builds confidence across software, storytelling, and embedded hardware",
      "Shows how smart monitoring tools can connect with environmental themes",
      "Prepares students for more advanced specialization tracks with stronger systems thinking"
    ]
  },
  analytics: {
    title: "Analytics",
    pathway: "Learning Paths",
    age: "Age 10-12",
    duration: "6-12 months",
    summary: "A logic-and-data pathway where students explore patterns, structured thinking, evidence-based decisions, and insight-building through guided projects.",
    tags: ["Data Thinking", "Logic", "Insights"],
    image: "/assets/img/analytics-logo.png",
    heading: "What Analytics develops",
    copy: "Analytics helps students notice patterns, compare evidence, structure decisions, and turn information into clearer insights before they move into deeper technical pathways.",
    panelOneTitle: "Core Direction",
    panelOne: [
      "Pattern recognition and comparison",
      "Evidence-based reasoning and decision making",
      "Structured logic through guided analysis tasks"
    ],
    panelTwoTitle: "Why It Matters",
    panelTwo: [
      "Builds confidence with data-aware thinking",
      "Strengthens problem solving through structure and evidence",
      "Creates a bridge into software, AI, and systems pathways"
    ]
  },
  "ai-explorers": {
    title: "Product Design",
    pathway: "Learning Paths",
    age: "Age 10-12",
    duration: "6-12 months",
    summary: "A design-led pathway where students learn how to shape ideas into clear products through planning, prototyping, testing, and refinement.",
    tags: ["Prototyping", "Product Thinking", "Iteration"],
    image: "/assets/img/px-product-design-icon.webp",
    heading: "What Product Design develops",
    copy: "Product Design helps students think through user needs, planning, prototyping, testing, and refinement so ideas become more intentional and usable.",
    panelOneTitle: "What Students Gain",
    panelOne: [
      "Product thinking from idea to revision",
      "Confidence with prototyping and iteration",
      "Stronger design decisions grounded in purpose"
    ],
    panelTwoTitle: "Best For",
    panelTwo: [
      "Students who enjoy planning and improving ideas",
      "Learners drawn to designing visible outputs",
      "Families looking for a strong design-centered pathway"
    ]
  },
  "maker-lab": {
    title: "Creative Expressions",
    pathway: "Learning Paths",
    age: "Age 10-12",
    duration: "6-12 months",
    summary: "A media and storytelling pathway where students learn to communicate ideas through creative outputs, presentation, and expressive project work.",
    tags: ["Storytelling", "Media", "Presentation"],
    image: "/assets/img/px-show-your-talent-icon.webp",
    heading: "What Creative Expressions develops",
    copy: "Creative Expressions is built for students who learn best by shaping stories, presenting ideas, and using media to make their thinking visible.",
    panelOneTitle: "Emphasis",
    panelOne: [
      "Storytelling through media and presentation",
      "Confidence expressing ideas clearly",
      "Creative project work with visible outputs"
    ],
    panelTwoTitle: "Outcome",
    panelTwo: [
      "Stronger communication confidence",
      "More expressive and polished student outputs",
      "Better storytelling around projects and ideas"
    ]
  },
  "data-science-ai": {
    title: "Data Science & AI",
    pathway: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Explore data, machine intelligence, and analytical thinking through projects that connect coding, models, and decision-making.",
    tags: ["Data", "AI", "Analytics"],
    image: "/assets/img/px-aia.webp",
    heading: "What Data Science & AI develops",
    copy: "This specialization builds stronger analytical thinking, model awareness, and confidence in working with real datasets and AI-led problem solving.",
    panelOneTitle: "Focus",
    panelOne: [
      "Data exploration, pattern spotting, and model thinking",
      "Project work that connects coding with practical analysis",
      "Preparation for AI-aware technical pathways"
    ],
    panelTwoTitle: "Outcome",
    panelTwo: [
      "Stronger reasoning with data",
      "Better familiarity with AI concepts and workflows",
      "More confidence in analytical project work"
    ]
  },
  "software-engineering": {
    title: "Software Engineering",
    pathway: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Build scalable software systems using structured logic, clearer architecture, and stronger technical execution habits.",
    tags: ["Programming", "Systems", "APIs"],
    image: "/assets/img/px-Mechanical-robotic-hand.webp",
    heading: "What Software Engineering develops",
    copy: "This specialization pushes students deeper into serious technical construction, stronger code organization, and system-level thinking.",
    panelOneTitle: "Focus",
    panelOne: [
      "Deeper software logic and design patterns",
      "Project structure, debugging, and scalable thinking",
      "Preparation for serious technical pathways"
    ],
    panelTwoTitle: "Outcome",
    panelTwo: [
      "Clearer coding discipline",
      "More confidence in building larger technical work",
      "Better readiness for advanced engineering tracks"
    ]
  },
  "embedded-systems": {
    title: "Embedded Systems",
    pathway: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Combine hardware and software through controllers, sensors, and real-world technical builds that respond to physical inputs.",
    tags: ["Embedded", "Sensors", "Hardware"],
    image: "/assets/img/tool-esp32.svg",
    heading: "What Embedded Systems develops",
    copy: "Embedded Systems helps students connect software logic with electronics, control behavior, and practical device-level engineering.",
    panelOneTitle: "Track Value",
    panelOne: [
      "Controller-based system design",
      "Real-world sensor and device interaction",
      "Stronger links between code and hardware behavior"
    ],
    panelTwoTitle: "Outcome",
    panelTwo: [
      "Better systems integration confidence",
      "More practical engineering discipline",
      "Readiness for device-focused technical tracks"
    ]
  },
  animation: {
    title: "Animation",
    pathway: "Specializations",
    age: "Age 13-16",
    duration: "6-12 months",
    summary: "Develop story-led visual communication through animated scenes, timing, transitions, character work, and polished media outputs.",
    tags: ["Motion", "Story", "Media"],
    image: "/assets/img/blog-img.png.webp",
    heading: "What Animation develops",
    copy: "This specialization strengthens visual storytelling, timing, movement, and creative presentation through more polished animation outputs.",
    panelOneTitle: "What It Strengthens",
    panelOne: [
      "Animation timing and sequencing",
      "Creative storytelling through motion",
      "More polished media presentation skills"
    ],
    panelTwoTitle: "Best For",
    panelTwo: [
      "Students drawn to visual storytelling",
      "Learners who enjoy creative production tools",
      "Project portfolios needing stronger motion media"
    ]
  },
  eee: {
    title: "EEE",
    pathway: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Go deeper into electrical and electronic engineering ideas through circuits, components, control logic, and applied technical systems.",
    tags: ["Circuits", "Power", "Electronics"],
    image: "/assets/img/tool-arduino.png",
    heading: "What EEE develops",
    copy: "EEE introduces a stronger engineering layer around electricity, electronics, control systems, and disciplined technical experimentation.",
    panelOneTitle: "Track Value",
    panelOne: [
      "Circuit and component understanding",
      "Applied electronics and control logic",
      "More grounded engineering experimentation"
    ],
    panelTwoTitle: "Outcome",
    panelTwo: [
      "Better electronics confidence",
      "Stronger technical systems thinking",
      "Readiness for engineering-heavy pathways"
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    pathway: "Specializations",
    age: "Age 13-16",
    duration: "6-12 months",
    summary: "Strengthen branding, content strategy, campaign thinking, and audience communication through modern digital outreach projects.",
    tags: ["Branding", "Content", "Strategy"],
    image: "/assets/img/px-show-your-talent-icon.webp",
    heading: "What Digital Marketing develops",
    copy: "This specialization builds the communication, content, and audience strategy side of the ecosystem through campaign-minded project work.",
    panelOneTitle: "What It Strengthens",
    panelOne: [
      "Brand thinking and content planning",
      "Audience awareness and campaign structure",
      "Clearer digital communication habits"
    ],
    panelTwoTitle: "Best For",
    panelTwo: [
      "Students who enjoy communication and media",
      "Learners interested in brand-led projects",
      "Portfolios that need outreach and presentation depth"
    ]
  },
  "cyber-security": {
    title: "Cyber Security",
    pathway: "Specializations",
    age: "Age 13-16",
    duration: "1-2 years",
    summary: "Learn how digital systems are protected, how risks are identified, and how secure technical thinking is built early.",
    tags: ["Security", "Networks", "Ethics"],
    image: "/assets/img/Red-robot-hand.webp",
    heading: "What Cyber Security develops",
    copy: "Cyber Security introduces students to how systems are defended, how threats are understood, and how responsible technical discipline is built.",
    panelOneTitle: "Track Value",
    panelOne: [
      "Security awareness and systems protection concepts",
      "Technical discipline and responsible thinking",
      "Stronger understanding of digital risk"
    ],
    panelTwoTitle: "Who It Fits",
    panelTwo: [
      "Students interested in systems and protection",
      "Learners who enjoy structured technical logic",
      "Families looking for future-facing technical depth"
    ]
  },
  "university-pathway": {
    title: "University Pathway",
    pathway: "Launchpad",
    age: "Age 16+",
    duration: "1-2 years",
    summary: "Prepare for university through mentorship, portfolio positioning, and next-step planning built around stronger project work.",
    tags: ["Portfolio", "Mentorship", "Guidance"],
    image: "/assets/img/px-uol.webp",
    heading: "What University Pathway develops",
    copy: "University Pathway helps students convert strong learning experiences into better next-step readiness, portfolio clarity, and larger educational direction.",
    panelOneTitle: "Purpose",
    panelOne: [
      "Support students preparing for larger educational goals",
      "Turn projects into meaningful portfolio evidence",
      "Guide stronger next-step planning"
    ],
    panelTwoTitle: "Outcome",
    panelTwo: [
      "Better university readiness",
      "Clearer portfolio positioning",
      "More confidence around future academic decisions"
    ]
  },
  "incubator-hub": {
    title: "Incubator Hub",
    pathway: "Launchpad",
    age: "Age 16+",
    duration: "1-2 years",
    summary: "Shape stronger ideas into applied innovation work, startup-like thinking, and independent execution beyond classroom-style delivery.",
    tags: ["Innovation", "Startup Mindset", "Leadership"],
    image: "/assets/img/px-show-your-talent-icon.webp",
    heading: "What Incubator Hub develops",
    copy: "Incubator Hub shifts students from guided learning into greater independence, stronger execution, and more venture-like project development.",
    panelOneTitle: "What Changes Here",
    panelOne: [
      "Students move from guided learning into independent shaping of solutions",
      "Projects become more venture-like, applied, and future-facing",
      "Ownership and leadership expectations increase"
    ],
    panelTwoTitle: "Outcome",
    panelTwo: [
      "Stronger innovation mindset",
      "More independent execution habits",
      "Better preparation for entrepreneurial or advanced pathways"
    ]
  }
};
