import { courseAliases, courseSpecificUpdates } from './courseContent';

export type PathwayStage = 'Foundations' | 'Learning Path' | 'Specialisation' | 'Launch Pad';

const pathwayStageLabels: Record<PathwayStage, string> = {
  Foundations: 'Level 01: Foundations',
  'Learning Path': 'Level 02: Learning Path',
  Specialisation: 'Level 03: Specialisation',
  'Launch Pad': 'Level 04: Launch Pad'
};

export function formatPathwayStage(stage: PathwayStage) {
  return pathwayStageLabels[stage];
}

export interface Course {
  slug: string;
  title: string;
  internalName: string;
  subtitle: string;
  keywords: string[];
  pathwayStage: PathwayStage;
  descriptor: string;
  ageRange: string;
  duration: string;
  format: string;
  focusAreas: string[];
  learningOutcomes: string[];
  courseStructure: string;
  toolsUsed: string[];
  prerequisites: string;
  exampleProjects: string[];
  location: string;
  registerLink: string;
  recommendedCourses: string[];
  comingSoon?: boolean;
}

const placeholderRegister = 'https://docs.google.com/forms/d/e/placeholder/viewform';
const waitlistForm = 'https://forms.gle/fBLiHsRBqRB6n3MZ7';

function waitlistRegister() {
  return waitlistForm;
}

const detailsPending = 'Course details are being finalised for the next Meu Labs pathway update.';
const tbc = 'To be confirmed';

export const courses: Course[] = [
  {
    slug: 'kx',
    title: 'STEM For Kids',
    internalName: 'Knowledge Explorers',
    subtitle: 'Build a STEM foundation through coding, robotics, design and creative problem solving.',
    keywords: ['Scratch', 'Arduino', 'TinkerCAD', 'Animation', '21st Century Skills'],
    pathwayStage: 'Foundations',
    descriptor: 'A hands-on foundation course where younger learners explore coding, electronics, design, animation and teamwork through guided projects.',
    ageRange: '8 - 12',
    duration: '4 months',
    format: '1 x 2hr/week',
    focusAreas: ['Robotics & Electronics', 'Coding & Game Programming', '3D Design', 'Creative Storytelling', 'Strategy & Teamwork'],
    learningOutcomes: ['Build simple robots and electronic circuits with confidence.', 'Create games, animations and interactive stories.', 'Design 3D objects and explain how their ideas work.', 'Collaborate, present and improve projects through feedback.'],
    courseStructure: 'Weekly guided sessions with short concept demos, project build time, instructor support and student sharing.',
    toolsUsed: ['Scratch', 'TinkerCAD', 'Arduino', 'ChatGPT', 'ClipChamp', 'Google Workspace'],
    prerequisites: 'Can read and write, use a computer at a basic level, and enjoys hands-on activities.',
    exampleProjects: ['Robotics challenge', 'Animated story game', 'Smart traffic light'],
    location: 'Online / In Person / Colombo 06',
    registerLink: 'https://forms.gle/RuJ8dto9zjFNCCsE9',
    recommendedCourses: ['kx-j', 'coding-software', 'robotics-iot']
  },
  {
    slug: 'kx-j',
    title: 'STEM For Kids: Junior',
    internalName: 'Knowledge Explorers Junior',
    subtitle: 'Early STEM discovery for younger learners.',
    keywords: ['STEM Basics', 'Creativity', 'Logic', 'Building', 'Teamwork'],
    pathwayStage: 'Foundations',
    descriptor: detailsPending,
    ageRange: '6 - 8',
    duration: tbc,
    format: tbc,
    focusAreas: ['Early STEM', 'Creative Building', 'Logic', 'Communication'],
    learningOutcomes: [detailsPending],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: 'Suitable for early learners.',
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: 'https://forms.gle/gdU3BmjrT4j95EKW8',
    recommendedCourses: ['kx', 'coding-software', 'robotics-iot']
  },
  {
    slug: 'coding-software',
    title: 'Coding and Software',
    internalName: 'Analytics',
    subtitle: 'Programming for Kids',
    keywords: ['Python', 'Web Sites', 'AI Models', 'Statistics', 'Research'],
    pathwayStage: 'Learning Path',
    descriptor: 'A practical programming and analytics pathway where students learn Python, data thinking, dashboards, APIs and AI-assisted research.',
    ageRange: '10 - 14',
    duration: '6 months',
    format: '1 x 2hr/week',
    focusAreas: ['Data Analysis & Dashboards', 'Programming & APIs', 'AI & ML Tools', 'Electronics & Sensors', 'Research & Communication'],
    learningOutcomes: ['Write Python programs and debug independently.', 'Collect, clean and visualise data from real sources.', 'Build simple dashboards and web tools.', 'Explain findings clearly using evidence.'],
    courseStructure: 'Concept labs, code-along practice, weekly builds and portfolio-ready mini projects.',
    toolsUsed: ['Python', 'Google Colab', 'Streamlit', 'Excel', 'Our World in Data', 'ML for Kids', 'GitHub', 'Google Workspace'],
    prerequisites: 'Foundation level or Scratch/MIT App Inventor basics. Entry test available.',
    exampleProjects: ['Climate dashboard', 'Survey analyser', 'Sensor data visualiser'],
    location: 'Online / In Person / Colombo 06',
    registerLink: 'https://forms.gle/6sMCTHnULp7g84v18',
    recommendedCourses: ['se', 'ds', 'kx', 'robotics-iot', 'digital-media']
  },
  {
    slug: 'robotics-iot',
    title: 'Robotics and IoT',
    internalName: 'Product Design',
    subtitle: 'Robotics and IoT',
    keywords: ['Fusion 360', 'Arduino', 'Woodworking', 'EasyEDA', '3D Printing', 'CNC', 'Laser Cutting', 'PCB Design', 'Prototyping', 'Product Pitching'],
    pathwayStage: 'Learning Path',
    descriptor: 'Students reverse engineer, prototype, fabricate and pitch physical products using CAD, electronics, IoT and manufacturing tools.',
    ageRange: '10 - 14',
    duration: '6 months',
    format: '1 x 3hr/week',
    focusAreas: ['Reverse Engineering', 'Rapid Prototyping', 'Electronics & IoT & PCB', '3D CAD', 'Manufacturing & Branding & Pitching'],
    learningOutcomes: ['Design 3D parts and prototypes for real users.', 'Build Arduino-based electronics and connected devices.', 'Use safe fabrication workflows for making and testing.', 'Pitch a product with clear design reasoning.'],
    courseStructure: 'Studio-based build sessions with design reviews, tool practice, prototyping and final presentation.',
    toolsUsed: ['Fusion 360', 'Arduino', 'Magicbit', 'EasyEDA', '3D Printers', 'CNC', 'Laser Cutters', 'Hand & Power Tools', 'Google Workspace'],
    prerequisites: 'Foundation level or basic Arduino experience such as blink/sensor projects. Entry test available.',
    exampleProjects: ['Smart planter', 'Assistive device prototype', 'Laser-cut product enclosure'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://forms.gle/ku4g46KqGRfdP9Fi8',
    recommendedCourses: ['es', 'kx', 'coding-software', 'digital-media']
  },
  {
    slug: 'digital-media',
    title: 'Digital Media',
    internalName: 'Creative Expression',
    subtitle: 'Digital Media',
    keywords: ['Story Writing', 'Script Writing', 'Digital Drawing', 'Video Production', 'Acting', 'Photography', 'Videography', 'Post Production', 'Public Speaking'],
    pathwayStage: 'Learning Path',
    descriptor: 'A creative production pathway where students write, shoot, draw, edit and present stories using modern media tools.',
    ageRange: '10 - 14',
    duration: '6 months',
    format: '1 x 2hr/week',
    focusAreas: ['Story Writing & Script Development', 'Sketching & Mood Boards', 'Photography & Videography', 'Digital Drawing', 'Acting & Public Speaking', 'Video Editing & Post Production'],
    learningOutcomes: ['Develop story ideas into scripts and production plans.', 'Capture and edit video, audio and visual assets.', 'Present confidently on camera and in front of peers.', 'Create a polished media portfolio piece.'],
    courseStructure: 'Creative studio sessions covering planning, production, editing and showcase.',
    toolsUsed: ['Canva', 'Google Workspace', 'Camera/Mobile', 'Krita', 'BandLab', 'Pencil2D', 'CapCut'],
    prerequisites: 'Foundation level or basic video/animation experience with tools such as ClipChamp. Entry test available.',
    exampleProjects: ['Short film', 'Animated explainer', 'Photo essay'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://forms.gle/jrRfKHsMNYiiH1ou8',
    recommendedCourses: ['kx', 'coding-software', 'robotics-iot']
  },
  {
    slug: 'se',
    title: 'Software Engineering',
    internalName: 'Software Engineering',
    subtitle: 'Full Stack Web Development',
    keywords: ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'APIs', 'Databases', 'GitHub', 'Figma', 'Postman', 'Full-Stack Development'],
    pathwayStage: 'Specialisation',
    descriptor: 'An advanced software pathway where students build full-stack web applications from idea and interface to backend and deployment.',
    ageRange: '12 - 16',
    duration: '8 months',
    format: '1 x 2hr/week',
    focusAreas: ['Programming Fundamentals', 'Frontend Dev & UI/UX', 'Backend & Databases', 'Software Project Management', 'Full-Stack & Capstone'],
    learningOutcomes: ['Build responsive web interfaces with HTML, CSS, JavaScript and React.', 'Create backend APIs and database-backed features.', 'Use GitHub and project planning habits.', 'Ship a full-stack capstone project.'],
    courseStructure: 'Engineering workshops, code reviews, sprint milestones and a final capstone build.',
    toolsUsed: ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'SQLite', 'Firebase', 'GitHub', 'Figma', 'Canva', 'Postman'],
    prerequisites: 'Strong Python, independent debugging ability and Coding and Software recommended. Entry test for other students.',
    exampleProjects: ['Student portal', 'Inventory app', 'Community service platform'],
    location: 'Online / In Person / Colombo 06',
    registerLink: 'https://forms.gle/NnzmhgsxgLVxVmwY6',
    recommendedCourses: ['ds', 'coding-software', 'robotics-iot', 'digital-media']
  },
  {
    slug: 'ds',
    title: 'Data Science and AI',
    internalName: 'Data Science and AI',
    subtitle: 'Data Science, Machine Learning and AI',
    keywords: ['Python', 'Google Colab', 'Jupyter', 'SQL', 'Power BI', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI', 'Kaggle', 'AI Ethics'],
    pathwayStage: 'Specialisation',
    descriptor: 'An advanced AI pathway where students learn data science foundations, machine learning, responsible AI and modern generative AI workflows.',
    ageRange: '12 - 16',
    duration: '8 months',
    format: '1 x 2hr/week',
    focusAreas: ['Foundations of Data Science', 'Data Engineering & Visualisation', 'ML Fundamentals', 'Responsible AI', 'Deep Learning & Computer Vision', 'Generative AI & LLMs', 'Capstone'],
    learningOutcomes: ['Analyse datasets with Python and notebooks.', 'Train and evaluate machine learning models.', 'Use AI tools responsibly and explain limitations.', 'Build a data or AI capstone with clear documentation.'],
    courseStructure: 'Notebook labs, model-building workshops, ethics discussions and capstone coaching.',
    toolsUsed: ['Python', 'Google Colab', 'Jupyter', 'SQL Databases', 'Power BI', 'Scikit-learn', 'TensorFlow', 'Kaggle', 'Generative AI APIs'],
    prerequisites: 'Strong Python and Coding and Software recommended. Entry test for other students.',
    exampleProjects: ['Image classifier', 'AI research assistant', 'Power BI insight dashboard'],
    location: 'Online / In Person / Colombo 06',
    registerLink: 'https://forms.gle/ku4g46KqGRfdP9Fi8',
    recommendedCourses: ['se', 'coding-software', 'robotics-iot', 'digital-media']
  },
  {
    slug: 'gd',
    title: 'Game Development',
    internalName: 'Game Development',
    subtitle: 'Interactive game design and development',
    keywords: ['Coming Soon'],
    pathwayStage: 'Specialisation',
    descriptor: detailsPending,
    ageRange: '12 - 16',
    duration: tbc,
    format: tbc,
    focusAreas: ['To be confirmed'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: waitlistRegister(),
    recommendedCourses: ['coding-software', 'se', 'digital-media'],
    comingSoon: true
  },
  {
    slug: 'cs',
    title: 'Cyber Security',
    internalName: 'Cyber Security',
    subtitle: 'Security foundations and ethical hacking',
    keywords: ['Coming Soon'],
    pathwayStage: 'Specialisation',
    descriptor: detailsPending,
    ageRange: '12 - 16',
    duration: tbc,
    format: tbc,
    focusAreas: ['To be confirmed'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: waitlistRegister(),
    recommendedCourses: ['coding-software', 'se', 'ds'],
    comingSoon: true
  },
  {
    slug: 'es',
    title: 'Embedded Systems and IoT',
    internalName: 'Embedded Systems & IoT',
    subtitle: 'Firmware, Edge Computing and Connected Devices',
    keywords: ['ESP32', 'STM32', 'Raspberry Pi', 'IoT', 'TinyML', 'Edge AI', 'Sensors', 'MQTT', 'PlatformIO', 'CubeIDE', 'NodeRED', 'Firmware'],
    pathwayStage: 'Specialisation',
    descriptor: 'A deep technical pathway for students building connected hardware, firmware, edge AI and integrated IoT systems.',
    ageRange: '12 - 16',
    duration: '8 months',
    format: '1 x 3hr/week',
    focusAreas: ['ESP32 & Wireless', 'STM32 & Precision Control', 'Raspberry Pi & Edge Computing', 'Edge AI & TinyML', 'System Integration & Capstone'],
    learningOutcomes: ['Program microcontrollers for sensor and wireless systems.', 'Build IoT flows with messaging and dashboards.', 'Prototype edge AI and TinyML use cases.', 'Integrate hardware, firmware and software into a capstone.'],
    courseStructure: 'Advanced lab sessions with firmware tasks, hardware debugging, integration milestones and capstone reviews.',
    toolsUsed: ['ESP32', 'PlatformIO', 'STM32', 'STM32CubeIDE', 'Raspberry Pi', 'Linux', 'Python', 'Edge Impulse', 'NodeRED', 'MQTT Broker', 'Git', 'Logic Analyzer', 'Oscilloscope'],
    prerequisites: 'Prior ESP32/Arduino experience, strong MCU coding and basic electronics required. Robotics and IoT recommended. Entry test available.',
    exampleProjects: ['Smart energy node', 'MQTT sensor network', 'TinyML gesture device'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://forms.gle/KzahsCn95rH1azhe8',
    recommendedCourses: ['eee', 'robotics-iot', 'digital-media', 'coding-software']
  },
  {
    slug: 'eee',
    title: 'Electrical and Electronics Engineering',
    internalName: 'Electrical and Electronics Engineering',
    subtitle: 'Circuits, Power and Hardware Systems',
    keywords: ['Circuits', "Ohm's Law", 'Multimeter', 'Oscilloscope', 'Power Electronics', 'Sensors', 'Op-Amps', 'Batteries', 'Motors', 'PCB Design', 'Electrical Safety'],
    pathwayStage: 'Specialisation',
    descriptor: 'A hardware engineering specialisation for students ready to understand circuits, measurement, power, sensors and capstone electronics.',
    ageRange: '12 - 16',
    duration: '8 months',
    format: '1 x 3hr/week',
    focusAreas: ['Circuit Fundamentals', 'Analog Electronics', 'Power Electronics', 'Sensors & Instrumentation', 'Motors & Safety', 'Capstone Hardware'],
    learningOutcomes: ['Measure and reason about real circuits safely.', 'Prototype analog, sensor and power systems.', 'Use lab instruments for testing and debugging.', 'Design and present a hardware capstone.'],
    courseStructure: 'Lab-based electronics sessions with measurement, circuit builds, safety checks and capstone work.',
    toolsUsed: ['Multimeter', 'Oscilloscope', 'Breadboard', 'Circuit Simulation', 'Arduino', 'Op-Amps', 'Sensors', 'MOSFETs', '555 Timer', 'EasyEDA', 'PCB Tools', 'Google Workspace'],
    prerequisites: 'Robotics and IoT, ES or equivalent; basic MCU coding mandatory. Entry test available.',
    exampleProjects: ['Battery monitor', 'Motor controller', 'Sensor test rig'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfFX-Ws2_OnCQYmxGJl2y2KRjegyZf1ggDgqep_8Zj1XDwDaA/viewform',
    recommendedCourses: ['es', 'robotics-iot', 'digital-media', 'coding-software']
  },
  {
    slug: 'mr',
    title: 'Manufacturing and Robotics',
    internalName: 'Manufacturing & Robotics',
    subtitle: 'Advanced making and automation',
    keywords: ['Coming Soon'],
    pathwayStage: 'Specialisation',
    descriptor: detailsPending,
    ageRange: '12 - 16',
    duration: tbc,
    format: tbc,
    focusAreas: ['To be confirmed'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: waitlistRegister(),
    recommendedCourses: ['robotics-iot', 'es', 'eee'],
    comingSoon: true
  },
  {
    slug: 'dm',
    title: 'Digital Marketing',
    internalName: 'Digital Marketing',
    subtitle: 'Creative campaigns and growth',
    keywords: ['Coming Soon'],
    pathwayStage: 'Specialisation',
    descriptor: detailsPending,
    ageRange: '12 - 16',
    duration: tbc,
    format: tbc,
    focusAreas: ['To be confirmed'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: waitlistRegister(),
    recommendedCourses: ['digital-media', 'coding-software', 'fs'],
    comingSoon: true
  },
  {
    slug: 'va',
    title: 'Video Animation',
    internalName: 'Animation & Post Production',
    subtitle: 'Motion, editing and visual storytelling',
    keywords: ['Animation', 'Editing', 'Storytelling', 'Motion Graphics', 'Production'],
    pathwayStage: 'Specialisation',
    descriptor: detailsPending,
    ageRange: '12 - 16',
    duration: tbc,
    format: tbc,
    focusAreas: ['Animation', 'Editing', 'Motion Graphics', 'Storytelling'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: waitlistRegister(),
    recommendedCourses: ['digital-media', 'dm', 'gd']
  },
  {
    slug: 'ua',
    title: 'University Access',
    internalName: 'University Access',
    subtitle: 'Portfolio and application readiness',
    keywords: ['Portfolio', 'Applications', 'Admissions', 'Presentation', 'Planning'],
    pathwayStage: 'Launch Pad',
    descriptor: detailsPending,
    ageRange: '16+',
    duration: tbc,
    format: tbc,
    focusAreas: ['Portfolio', 'Applications', 'Interview Readiness', 'Pathway Planning'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: waitlistRegister(),
    recommendedCourses: ['ig', 'fs', 'se'],
    comingSoon: true
  },
  {
    slug: 'ig',
    title: 'Industry Gateway',
    internalName: 'Industry Gateway',
    subtitle: 'Industry projects and career readiness',
    keywords: ['Industry Projects', 'Career Readiness', 'Mentorship', 'Portfolio', 'Communication'],
    pathwayStage: 'Launch Pad',
    descriptor: detailsPending,
    ageRange: '16+',
    duration: tbc,
    format: tbc,
    focusAreas: ['Industry Projects', 'Mentorship', 'Portfolio', 'Professional Communication'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: 'https://forms.gle/Bb7BzUqo4YxoZhtM8',
    recommendedCourses: ['ua', 'fs', 'se']
  },
  {
    slug: 'fs',
    title: 'Founder Studio',
    internalName: 'Founder Studio',
    subtitle: 'Build and pitch a venture',
    keywords: ['Startup', 'Pitching', 'Product', 'Business Model', 'Leadership'],
    pathwayStage: 'Launch Pad',
    descriptor: detailsPending,
    ageRange: '16+',
    duration: tbc,
    format: tbc,
    focusAreas: ['Venture Building', 'Pitching', 'Product Strategy', 'Leadership'],
    learningOutcomes: ['To be confirmed'],
    courseStructure: tbc,
    toolsUsed: ['To be confirmed'],
    prerequisites: tbc,
    exampleProjects: [],
    location: 'Colombo 06',
    registerLink: placeholderRegister,
    recommendedCourses: ['ua', 'ig', 'dm']
  }
];

export const allCourses = courses.map((course) => ({
  ...course,
  ...courseSpecificUpdates[course.slug]
}));

export function getCourse(slug: string) {
  const canonicalSlug = courseAliases[slug] ?? slug;
  return allCourses.find((course) => course.slug === canonicalSlug);
}
