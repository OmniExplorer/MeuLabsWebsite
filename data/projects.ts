export interface Project {
  title: string;
  description: string;
  skills: string[];
  courseSlug: string;
  courseLabel: string;
  image: string;
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Smart City Traffic Lights',
    description: 'Students modelled an automated junction with sensors, timing logic and a presentation board.',
    skills: ['Arduino', 'Electronics', 'Logic'],
    courseSlug: 'kx',
    courseLabel: 'Knowledge Explorers',
    image: '/assets/images/project-traffic.jpg',
    link: '/courses/kx',
    featured: true
  },
  {
    title: 'Climate Data Dashboard',
    description: 'A Python dashboard that turns climate data into visual insights for young researchers.',
    skills: ['Python', 'Data', 'Dashboards'],
    courseSlug: 'an',
    courseLabel: 'Analytics',
    image: '/assets/images/project-dashboard.jpg',
    link: '/courses/an',
    featured: true
  },
  {
    title: 'Assistive Product Prototype',
    description: 'A student-built prototype designed, fabricated and pitched for a real user need.',
    skills: ['CAD', 'Prototyping', 'Pitching'],
    courseSlug: 'pd',
    courseLabel: 'Product Design',
    image: '/assets/images/project-prototype.jpg',
    link: '/courses/pd',
    featured: true
  },
  {
    title: 'AI Image Classifier',
    description: 'Students trained and tested a model, then explained accuracy, bias and limitations.',
    skills: ['AI', 'Python', 'Ethics'],
    courseSlug: 'ds',
    courseLabel: 'Data Science and AI',
    image: '/assets/images/project-ai.jpg',
    link: '/courses/ds',
    featured: true
  },
  {
    title: 'Short Film Showcase',
    description: 'A creative production from concept and script to filming, editing and premiere.',
    skills: ['Video', 'Story', 'Editing'],
    courseSlug: 'cx',
    courseLabel: 'Creative Expression',
    image: '/assets/images/project-film.jpg',
    link: '/courses/cx'
  },
  {
    title: 'Connected Sensor Network',
    description: 'An IoT system that collects sensor readings and publishes them to a live dashboard.',
    skills: ['ESP32', 'MQTT', 'IoT'],
    courseSlug: 'es',
    courseLabel: 'Embedded Systems & IoT',
    image: '/assets/images/electronics-board.jpg',
    link: '/courses/es'
  },
  {
    title: 'Game World Prototype',
    description: 'A playable scene where students practice logic, interaction and visual storytelling.',
    skills: ['Game Dev', 'Logic', 'Design'],
    courseSlug: 'se',
    courseLabel: 'Software Engineering',
    image: '/assets/images/project-game.jpg',
    link: '/courses/se'
  },
  {
    title: '3D Printed Rover Part',
    description: 'A designed and fabricated part tested against constraints for a robotics challenge.',
    skills: ['CAD', '3D Printing', 'Testing'],
    courseSlug: 'pd',
    courseLabel: 'Product Design',
    image: '/assets/images/project-3d-print.jpg',
    link: '/courses/pd'
  },
  {
    title: 'Video Story Studio',
    description: 'A student-led media project planned, filmed and edited into a final showcase.',
    skills: ['Story', 'Video', 'Editing'],
    courseSlug: 'cx',
    courseLabel: 'Creative Expression',
    image: '/assets/images/project-video.jpg',
    link: '/courses/cx'
  },
  {
    title: 'Electronics Lab Build',
    description: 'Circuit experiments using sensors, measurement tools and safe lab habits.',
    skills: ['Circuits', 'Sensors', 'Testing'],
    courseSlug: 'eee',
    courseLabel: 'Electrical and Electronics Engineering',
    image: '/assets/images/project-electronics-lab.jpg',
    link: '/courses/eee'
  }
];
