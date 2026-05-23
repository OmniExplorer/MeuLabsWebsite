export type PathwayStage = 'Foundations' | 'Learning Path' | 'Specialisation' | 'Launch Pad';

export interface Course {
  slug: string;
  title: string;
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

export const courses: Course[] = [
  {
    slug: 'kx',
    title: 'Knowledge Explorers',
    subtitle: 'STEM for Kids',
    keywords: ['Scratch', 'Arduino', 'TinkerCAD', 'Animation', '21st Century Skills'],
    pathwayStage: 'Foundations',
    descriptor: 'A hands-on foundation course where younger learners explore coding, electronics, design, animation and teamwork through guided projects.',
    ageRange: '8-12',
    duration: '4 months',
    format: '1 x 2hr/week',
    focusAreas: ['Robotics & Electronics', 'Coding & Game Programming', '3D Design', 'Creative Storytelling', 'Strategy & Teamwork'],
    learningOutcomes: ['Build simple robots and electronic circuits with confidence.', 'Create games, animations and interactive stories.', 'Design 3D objects and explain how their ideas work.', 'Collaborate, present and improve projects through feedback.'],
    courseStructure: 'Weekly guided sessions with short concept demos, project build time, instructor support and student sharing.',
    toolsUsed: ['Scratch', 'TinkerCAD', 'Arduino', 'ChatGPT', 'ClipChamp', 'Google Workspace'],
    prerequisites: 'Can read and write, use a computer at a basic level, and enjoys hands-on activities.',
    exampleProjects: ['Mars rover challenge', 'Animated story game', 'Smart traffic light'],
    location: 'Online / In Person / Colombo 06',
    registerLink: placeholderRegister,
    recommendedCourses: ['an', 'pd', 'cx']
  },
  {
    slug: 'an',
    title: 'Analytics',
    subtitle: 'Programming for Kids',
    keywords: ['Python', 'Colab', 'Web Dev', 'Streamlit', 'Excel', 'APIs', 'Data Analysis', 'AI', 'Research'],
    pathwayStage: 'Learning Path',
    descriptor: 'A practical programming and analytics pathway where students learn Python, data thinking, dashboards, APIs and AI-assisted research.',
    ageRange: '10-14',
    duration: '6 months',
    format: '1 x 2hr/week',
    focusAreas: ['Data Analysis & Dashboards', 'Programming & APIs', 'AI & ML Tools', 'Electronics & Sensors', 'Research & Communication'],
    learningOutcomes: ['Write Python programs and debug independently.', 'Collect, clean and visualise data from real sources.', 'Build simple dashboards and web tools.', 'Explain findings clearly using evidence.'],
    courseStructure: 'Concept labs, code-along practice, weekly builds and portfolio-ready mini projects.',
    toolsUsed: ['Python', 'Google Colab', 'Streamlit', 'Excel', 'Our World in Data', 'ML for Kids', 'GitHub', 'Google Workspace'],
    prerequisites: 'Foundation level or Scratch/MIT App Inventor basics. Entry test available.',
    exampleProjects: ['Climate dashboard', 'Survey analyser', 'Sensor data visualiser'],
    location: 'Online / In Person / Colombo 06',
    registerLink: placeholderRegister,
    recommendedCourses: ['se', 'ds', 'kx', 'pd', 'cx']
  },
  {
    slug: 'pd',
    title: 'Product Design',
    subtitle: 'Robotics and IoT',
    keywords: ['Fusion 360', 'Arduino', 'Woodworking', 'EasyEDA', '3D Printing', 'CNC', 'Laser Cutting', 'PCB Design', 'Prototyping', 'Product Pitching'],
    pathwayStage: 'Learning Path',
    descriptor: 'Students reverse engineer, prototype, fabricate and pitch physical products using CAD, electronics, IoT and manufacturing tools.',
    ageRange: '10-14',
    duration: '6 months',
    format: '1 x 3hr/week',
    focusAreas: ['Reverse Engineering', 'Rapid Prototyping', 'Electronics & IoT & PCB', '3D CAD', 'Manufacturing & Branding & Pitching'],
    learningOutcomes: ['Design 3D parts and prototypes for real users.', 'Build Arduino-based electronics and connected devices.', 'Use safe fabrication workflows for making and testing.', 'Pitch a product with clear design reasoning.'],
    courseStructure: 'Studio-based build sessions with design reviews, tool practice, prototyping and final presentation.',
    toolsUsed: ['Fusion 360', 'Arduino', 'Magicbit', 'EasyEDA', '3D Printers', 'CNC', 'Laser Cutters', 'Hand & Power Tools', 'Google Workspace'],
    prerequisites: 'Foundation level or basic Arduino experience such as blink/sensor projects. Entry test available.',
    exampleProjects: ['Smart planter', 'Assistive device prototype', 'Laser-cut product enclosure'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSepU0SFzbk-OkCmXBVt27Mar8xBcxOpyW9fRKVKuZt-qfQjyw/viewform?usp=dialog',
    recommendedCourses: ['es', 'kx', 'an', 'cx']
  },
  {
    slug: 'cx',
    title: 'Creative Expression',
    subtitle: 'Digital Media Production',
    keywords: ['Story Writing', 'Script Writing', 'Digital Drawing', 'Video Production', 'Acting', 'Photography', 'Videography', 'Post Production', 'Public Speaking'],
    pathwayStage: 'Learning Path',
    descriptor: 'A creative production pathway where students write, shoot, draw, edit and present stories using modern media tools.',
    ageRange: '10-14',
    duration: '6 months',
    format: '1 x 2hr/week',
    focusAreas: ['Story Writing & Script Development', 'Sketching & Mood Boards', 'Photography & Videography', 'Digital Drawing', 'Acting & Public Speaking', 'Video Editing & Post Production'],
    learningOutcomes: ['Develop story ideas into scripts and production plans.', 'Capture and edit video, audio and visual assets.', 'Present confidently on camera and in front of peers.', 'Create a polished media portfolio piece.'],
    courseStructure: 'Creative studio sessions covering planning, production, editing and showcase.',
    toolsUsed: ['Canva', 'Google Workspace', 'Camera/Mobile', 'Krita', 'BandLab', 'Pencil2D', 'CapCut'],
    prerequisites: 'Foundation level or basic video/animation experience with tools such as ClipChamp. Entry test available.',
    exampleProjects: ['Short film', 'Animated explainer', 'Photo essay'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeBIqnOl9mOB8ijcX7OzsYL1lqzvmMxWOhLZpjoJrjMXklgng/viewform?usp=dialog',
    recommendedCourses: ['kx', 'an', 'pd']
  },
  {
    slug: 'se',
    title: 'Software Engineering',
    subtitle: 'Full Stack Web Development',
    keywords: ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'APIs', 'Databases', 'GitHub', 'Figma', 'Postman', 'Full-Stack Development'],
    pathwayStage: 'Specialisation',
    descriptor: 'An advanced software pathway where students build full-stack web applications from idea and interface to backend and deployment.',
    ageRange: '12-16',
    duration: '8 months',
    format: '1 x 2hr/week',
    focusAreas: ['Programming Fundamentals', 'Frontend Dev & UI/UX', 'Backend & Databases', 'Software Project Management', 'Full-Stack & Capstone'],
    learningOutcomes: ['Build responsive web interfaces with HTML, CSS, JavaScript and React.', 'Create backend APIs and database-backed features.', 'Use GitHub and project planning habits.', 'Ship a full-stack capstone project.'],
    courseStructure: 'Engineering workshops, code reviews, sprint milestones and a final capstone build.',
    toolsUsed: ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'SQLite', 'Firebase', 'GitHub', 'Figma', 'Canva', 'Postman'],
    prerequisites: 'Strong Python, independent debugging ability and Analytics LP recommended. Entry test for other students.',
    exampleProjects: ['Student portal', 'Inventory app', 'Community service platform'],
    location: 'Online / In Person / Colombo 06',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdZw5sTmNXKakcBcEKl0vS6-HuJFOouq40fiFipgSpCzZ0lxA/viewform?usp=dialog',
    recommendedCourses: ['ds', 'an', 'pd', 'cx']
  },
  {
    slug: 'ds',
    title: 'Data Science and AI',
    subtitle: 'Data Science, Machine Learning and AI',
    keywords: ['Python', 'Google Colab', 'Jupyter', 'SQL', 'Power BI', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI', 'Kaggle', 'AI Ethics'],
    pathwayStage: 'Specialisation',
    descriptor: 'An advanced AI pathway where students learn data science foundations, machine learning, responsible AI and modern generative AI workflows.',
    ageRange: '12-16',
    duration: '8 months',
    format: '1 x 2hr/week',
    focusAreas: ['Foundations of Data Science', 'Data Engineering & Visualisation', 'ML Fundamentals', 'Responsible AI', 'Deep Learning & Computer Vision', 'Generative AI & LLMs', 'Capstone'],
    learningOutcomes: ['Analyse datasets with Python and notebooks.', 'Train and evaluate machine learning models.', 'Use AI tools responsibly and explain limitations.', 'Build a data or AI capstone with clear documentation.'],
    courseStructure: 'Notebook labs, model-building workshops, ethics discussions and capstone coaching.',
    toolsUsed: ['Python', 'Google Colab', 'Jupyter', 'SQL Databases', 'Power BI', 'Scikit-learn', 'TensorFlow', 'Kaggle', 'Generative AI APIs'],
    prerequisites: 'Strong Python and Analytics LP recommended. Entry test for other students.',
    exampleProjects: ['Image classifier', 'AI research assistant', 'Power BI insight dashboard'],
    location: 'Online / In Person / Colombo 06',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeo1dTM6x9Yjsfjjcftjq_s5rQ0VrtQrvOKc2Hsv6SGz-57eQ/viewform?usp=dialog',
    recommendedCourses: ['se', 'an', 'pd', 'cx']
  },
  {
    slug: 'eee',
    title: 'Electrical and Electronics Engineering',
    subtitle: 'Circuits, Power and Hardware Systems',
    keywords: ['Circuits', "Ohm's Law", 'Multimeter', 'Oscilloscope', 'Power Electronics', 'Sensors', 'Op-Amps', 'Batteries', 'Motors', 'PCB Design', 'Electrical Safety'],
    pathwayStage: 'Specialisation',
    descriptor: 'A hardware engineering specialisation for students ready to understand circuits, measurement, power, sensors and capstone electronics.',
    ageRange: '12-16',
    duration: '8 months',
    format: '1 x 3hr/week',
    focusAreas: ['Circuit Fundamentals', 'Analog Electronics', 'Power Electronics', 'Sensors & Instrumentation', 'Motors & Safety', 'Capstone Hardware'],
    learningOutcomes: ['Measure and reason about real circuits safely.', 'Prototype analog, sensor and power systems.', 'Use lab instruments for testing and debugging.', 'Design and present a hardware capstone.'],
    courseStructure: 'Lab-based electronics sessions with measurement, circuit builds, safety checks and capstone work.',
    toolsUsed: ['Multimeter', 'Oscilloscope', 'Breadboard', 'Circuit Simulation', 'Arduino', 'Op-Amps', 'Sensors', 'MOSFETs', '555 Timer', 'EasyEDA', 'PCB Tools', 'Google Workspace'],
    prerequisites: 'Product Design, ES or equivalent; basic MCU coding mandatory. Entry test available.',
    exampleProjects: ['Battery monitor', 'Motor controller', 'Sensor test rig'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfFX-Ws2_OnCQYmxGJl2y2KRjegyZf1ggDgqep_8Zj1XDwDaA/viewform?usp=dialog',
    recommendedCourses: ['es', 'pd', 'cx', 'an']
  },
  {
    slug: 'es',
    title: 'Embedded Systems & IoT',
    subtitle: 'Firmware, Edge Computing and Connected Devices',
    keywords: ['ESP32', 'STM32', 'Raspberry Pi', 'IoT', 'TinyML', 'Edge AI', 'Sensors', 'MQTT', 'PlatformIO', 'CubeIDE', 'NodeRED', 'Firmware'],
    pathwayStage: 'Specialisation',
    descriptor: 'A deep technical pathway for students building connected hardware, firmware, edge AI and integrated IoT systems.',
    ageRange: '12-16',
    duration: '8 months',
    format: '1 x 3hr/week',
    focusAreas: ['ESP32 & Wireless', 'STM32 & Precision Control', 'Raspberry Pi & Edge Computing', 'Edge AI & TinyML', 'System Integration & Capstone'],
    learningOutcomes: ['Program microcontrollers for sensor and wireless systems.', 'Build IoT flows with messaging and dashboards.', 'Prototype edge AI and TinyML use cases.', 'Integrate hardware, firmware and software into a capstone.'],
    courseStructure: 'Advanced lab sessions with firmware tasks, hardware debugging, integration milestones and capstone reviews.',
    toolsUsed: ['ESP32', 'PlatformIO', 'STM32', 'STM32CubeIDE', 'Raspberry Pi', 'Linux', 'Python', 'Edge Impulse', 'NodeRED', 'MQTT Broker', 'Git', 'Logic Analyzer', 'Oscilloscope'],
    prerequisites: 'Prior ESP32/Arduino experience, strong MCU coding and basic electronics required. Product Design recommended. Entry test available.',
    exampleProjects: ['Smart energy node', 'MQTT sensor network', 'TinyML gesture device'],
    location: 'In Person Only / Colombo 06',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfPmUDhS8KX0LHkNNt6qefKPaMEKrgcGCMOa-PyKJy644xWBg/viewform?usp=dialog',
    recommendedCourses: ['eee', 'pd', 'cx', 'an']
  }
];

export const comingSoonCourses: Course[] = [
  ['mr', 'Manufacturing & Robotics', 'Advanced making and automation'],
  ['cs', 'Cyber Security', 'Security foundations and ethical hacking'],
  ['gd', 'Game Development', 'Interactive game design and development'],
  ['dm', 'Digital Marketing', 'Creative campaigns and growth'],
  ['va', 'Animation & Post Production', 'Motion, editing and visual storytelling'],
  ['ua', 'University Access', 'Portfolio and application readiness'],
  ['ig', 'Industry Gateway', 'Industry projects and career readiness'],
  ['fs', 'Founder Studio', 'Build and pitch a venture'],
  ['kx-j', 'Knowledge Explorers Junior', 'Early STEM discovery']
].map(([slug, title, subtitle]) => ({
  slug,
  title,
  subtitle,
  keywords: ['Coming Soon'],
  pathwayStage: slug === 'ua' || slug === 'ig' || slug === 'fs' ? 'Launch Pad' : 'Specialisation',
  descriptor: 'Details for this course are being finalised for the next Meu Labs pathway update.',
  ageRange: slug === 'kx-j' ? '6-8' : slug === 'ua' || slug === 'ig' || slug === 'fs' ? '16+' : '12-16',
  duration: 'To be confirmed',
  format: 'To be confirmed',
  focusAreas: ['To be confirmed'],
  learningOutcomes: ['To be confirmed'],
  courseStructure: 'To be confirmed',
  toolsUsed: ['To be confirmed'],
  prerequisites: 'To be confirmed',
  exampleProjects: [],
  location: 'Colombo 06',
  registerLink: '#',
  recommendedCourses: ['kx', 'an', 'pd'],
  comingSoon: true
}));

export const allCourses = [...courses, ...comingSoonCourses];

export function getCourse(slug: string) {
  return allCourses.find((course) => course.slug === slug);
}
