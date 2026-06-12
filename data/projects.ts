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

export interface VideoProject {
  title: string;
  description: string;
  link: string;
  videoId: string;
  courseLabel?: string;
  courseLink?: string;
}

export interface NewsItem {
  title: string;
  description: string;
  link: string;
  label: string;
  image: string;
  timeAgo: string;
}

export const projectNews: NewsItem[] = [
  {
    title: 'Student projects in the spotlight',
    description: 'A Meu Labs community update featuring student work, milestones, and project-led learning beyond the classroom.',
    link: 'https://www.facebook.com/share/p/1AuioXRpqt/',
    label: 'Community update',
    image: '/assets/images/StudentProjectsHighlightArticle.png',
    timeAgo: 'Project story'
  },
  {
    title: 'Young builders sharing what they made',
    description: 'A project showcase moment where students demonstrate practical skills, creative thinking, and technical confidence.',
    link: 'https://www.facebook.com/share/p/1Cbvewmr7V/',
    label: 'Project showcase',
    image: '/assets/images/YoungBUilders.png',
    timeAgo: 'Showcase'
  },
  {
    title: 'Learning moments captured on video',
    description: 'A behind-the-scenes look at students building, testing, explaining, and improving their ideas at Meu Labs.',
    link: 'https://www.facebook.com/share/v/1DsELrXLbx/',
    label: 'Video story',
    image: '/assets/images/Learning-Moments.png',
    timeAgo: 'Video'
  },
  {
    title: 'Hands-on STEM in action',
    description: 'Students take concepts from class and turn them into visible, working outcomes through guided project work.',
    link: 'https://www.facebook.com/share/v/1HtZaMc1mP/',
    label: 'STEM moment',
    image: '/assets/images/electronics-board.jpg',
    timeAgo: 'STEM'
  },
  {
    title: 'Achievements from the Meu Labs community',
    description: 'A parent-friendly milestone update showing the growth, confidence, and creativity behind student achievements.',
    link: 'https://www.facebook.com/share/p/1E1tTZiP4V/',
    label: 'Achievement',
    image: '/assets/images/Achievements from the Meu Labs community.png',
    timeAgo: 'Achievement'
  },
  {
    title: 'Creative builds and classroom wins',
    description: 'A celebration of students applying coding, design, electronics, and teamwork to real project challenges.',
    link: 'https://www.facebook.com/share/p/17eo24XzN9/',
    label: 'Student win',
    image: '/assets/images/CreativeBuild.png',
    timeAgo: 'Student work'
  },
  {
    title: 'Project-based learning updates',
    description: 'A glimpse into how students move from curiosity to working prototypes with instructor support and reflection.',
    link: 'https://www.facebook.com/share/p/1CTDdv6uXL/',
    label: 'Learning update',
    image: '/assets/images/ProjectLearningUpdates.png',
    timeAgo: 'Learning'
  },
  {
    title: 'Student creativity on display',
    description: 'A short reel showing the energy, experimentation, and imagination behind student-built work at Meu Labs.',
    link: 'https://www.facebook.com/share/r/18eS4NhCHF/',
    label: 'Student reel',
    image: '/assets/images/project-film.jpg',
    timeAgo: 'Reel'
  }
];

export const featuredVideoProjects: VideoProject[] = [
  {
    title: 'Rain Sensor',
    description: 'A young Meu Labs student built a rainfall detection system using a water sensor, buzzer, LEDs, LCD display, and Arduino board. When the sensor detects rain, the system alerts users with a blinking red LED and buzzer. When the surface becomes dry again, the alert turns off and a white LED indicates normal conditions. This project shows how simple electronics and sensors can be used to create practical weather-monitoring tools.',
    link: 'https://youtu.be/kq_oZhAgNT4',
    videoId: 'kq_oZhAgNT4',
    courseLabel: 'Robotics and IoT',
    courseLink: '/courses/robotics-iot'
  },
  {
    title: 'Dragon Ball Z Game',
    description: 'A Meu Labs learner created a Scratch game inspired by a favourite animated series. Through this project, the student explored game design, character control, animation, and block-based programming. The project reflects both creativity and growing confidence in turning personal interests into interactive digital experiences.',
    link: 'https://youtu.be/jNGwXJ68ofI',
    videoId: 'jNGwXJ68ofI',
    courseLabel: 'Coding and Software',
    courseLink: '/courses/coding-software'
  },
  {
    title: 'Home Automation System',
    description: 'A Meu Labs student developed a smart home automation system that can be controlled through Bluetooth and Wi-Fi. The project includes a relay system, LED lights, and a mobile application built using MIT App Inventor. By combining electronics, app development, and wireless control, the student created a practical IoT system that demonstrates how technology can make everyday spaces smarter.',
    link: 'https://www.youtube.com/watch?v=Wuo9nqrSFM8',
    videoId: 'Wuo9nqrSFM8',
    courseLabel: 'Robotics and IoT',
    courseLink: '/courses/robotics-iot'
  },
  {
    title: 'DIY Power Generator',
    description: 'A Meu Labs learner built a DIY power generator using rotating DC motors to produce electricity through electromagnetic induction. This project helped the student explore how motion can be converted into electrical energy, connecting physics concepts with a working hands-on prototype. It is a strong example of learning engineering through experimentation and making.',
    link: 'https://youtu.be/1hEFNYY8peE',
    videoId: '1hEFNYY8peE',
    courseLabel: 'Electrical and Electronics Engineering',
    courseLink: '/courses/eee'
  },
  {
    title: 'Voice Controlled Rover',
    description: 'A Meu Labs student built a rover that can be controlled using voice commands. The project uses an Arduino board and Bluetooth module to receive commands and control movement wirelessly. By combining robotics, electronics, programming, and communication systems, the student created an interactive robot that responds to human input in real time.',
    link: 'https://www.youtube.com/watch?v=99eoCu-d6z0',
    videoId: '99eoCu-d6z0',
    courseLabel: 'Robotics and IoT',
    courseLink: '/courses/robotics-iot'
  }
];

export const studentCreations: VideoProject[] = [
  {
    title: 'Character Animation on Scratch',
    description: 'A creative Scratch animation where a student brought original characters and imagination to life.',
    link: 'https://www.youtube.com/watch?v=OwFiDiJEGCo',
    videoId: 'OwFiDiJEGCo'
  },
  {
    title: 'Superhero Promotional Video',
    description: 'A team-created animated promo using storytelling, character design, and video editing.',
    link: 'https://youtu.be/ZVs_dX7dEAs',
    videoId: 'ZVs_dX7dEAs'
  },
  {
    title: 'Plotagon Animation',
    description: 'Students worked together to create a short animated story using digital production tools.',
    link: 'https://youtu.be/vy1l7n0PSCg',
    videoId: 'vy1l7n0PSCg'
  },
  {
    title: 'Superhero Vessel Design',
    description: 'A 3D design project where students modelled an imaginative superhero-inspired vehicle.',
    link: 'https://www.youtube.com/watch?v=Ynrzna6bJh4',
    videoId: 'Ynrzna6bJh4'
  },
  {
    title: 'Crew Selection Simulation',
    description: 'A decision-making challenge where students selected the best team for a mission.',
    link: 'https://youtu.be/-BZt2Yb2CiI',
    videoId: '-BZt2Yb2CiI'
  },
  {
    title: 'Product Design Build',
    description: 'Students explored how everyday products can be taken apart, improved, and rebuilt.',
    link: 'https://youtu.be/Xg80lzFcxnA',
    videoId: 'Xg80lzFcxnA'
  },
  {
    title: 'Robotics Showcase',
    description: 'A hands-on robotics project combining electronics, programming, and problem-solving.',
    link: 'https://youtu.be/zr1ygTZb3eA',
    videoId: 'zr1ygTZb3eA'
  },
  {
    title: 'Radar System',
    description: 'A sensor-based radar project using Arduino, a servo motor, and ultrasonic sensing.',
    link: 'https://youtu.be/AV38MIf89k8',
    videoId: 'AV38MIf89k8'
  },
  {
    title: 'Python Statistics Project',
    description: 'Students explored real-world data while building early Python and analysis skills.',
    link: 'https://www.youtube.com/watch?v=Rca7MabcBaI',
    videoId: 'Rca7MabcBaI'
  },
  {
    title: 'Mars Advertisement',
    description: 'A creative animated advertisement built through storytelling, animation, and editing.',
    link: 'https://www.youtube.com/watch?v=zJad6DNxMi4',
    videoId: 'zJad6DNxMi4'
  },
  {
    title: 'Awareness Video Project',
    description: 'Students used video editing to communicate an important real-world message.',
    link: 'https://youtu.be/JwyQzYerro0',
    videoId: 'JwyQzYerro0'
  },
  {
    title: 'Rover Build',
    description: 'A student-built rover using motors, electronics, coding, and hands-on assembly.',
    link: 'https://youtu.be/xa3J7tl4rF8',
    videoId: 'xa3J7tl4rF8'
  },
  {
    title: 'Autopilot Game Controls',
    description: 'Students programmed automated game controls using logic, sequencing, and Scratch.',
    link: 'https://www.youtube.com/watch?v=YAovgSpVFkk',
    videoId: 'YAovgSpVFkk'
  },
  {
    title: 'Minecraft Designer',
    description: 'A block-coding project where students completed challenges and created their own game.',
    link: 'https://www.youtube.com/watch?v=oF_7jVwy7HA',
    videoId: 'oF_7jVwy7HA'
  },
  {
    title: 'Rocket Autopilot Controls',
    description: 'Students coded automated controls to navigate obstacles and respond to game events.',
    link: 'https://youtu.be/IpPJNvM-uOA',
    videoId: 'IpPJNvM-uOA'
  },
  {
    title: 'Dance Party on Code.org',
    description: 'A fun coding project where students created an interactive music and animation experience.',
    link: 'https://youtu.be/9j0DwTvcrB0',
    videoId: '9j0DwTvcrB0'
  },
  {
    title: 'Turret Robot',
    description: 'A robotics build using sensors, motors, and control logic to create a working turret.',
    link: 'https://www.youtube.com/watch?v=_OVK-qS8hlg',
    videoId: '_OVK-qS8hlg'
  },
  {
    title: 'Wi-Fi Controlled Turret',
    description: 'A sensor-based robotic system controlled through Wi-Fi using motors and electronics.',
    link: 'https://www.youtube.com/watch?v=Oy7rVEmzSdU',
    videoId: 'Oy7rVEmzSdU'
  },
  {
    title: 'Student Rover Project',
    description: 'A team robotics project where students built, tested, and improved a moving rover.',
    link: 'https://www.youtube.com/watch?v=nUQWVDTSdIg',
    videoId: 'nUQWVDTSdIg'
  }
];

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
    courseSlug: 'coding-software',
    courseLabel: 'Coding and Software',
    image: '/assets/images/project-dashboard.jpg',
    link: '/courses/coding-software',
    featured: true
  },
  {
    title: 'Assistive Product Prototype',
    description: 'A student-built prototype designed, fabricated and pitched for a real user need.',
    skills: ['CAD', 'Prototyping', 'Pitching'],
    courseSlug: 'robotics-iot',
    courseLabel: 'Robotics and IoT',
    image: '/assets/images/project-prototype.jpg',
    link: '/courses/robotics-iot',
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
    courseSlug: 'digital-media',
    courseLabel: 'Digital Media',
    image: '/assets/images/project-film.jpg',
    link: '/courses/digital-media'
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
    courseSlug: 'robotics-iot',
    courseLabel: 'Robotics and IoT',
    image: '/assets/images/project-3d-print.jpg',
    link: '/courses/robotics-iot'
  },
  {
    title: 'Video Story Studio',
    description: 'A student-led media project planned, filmed and edited into a final showcase.',
    skills: ['Story', 'Video', 'Editing'],
    courseSlug: 'digital-media',
    courseLabel: 'Digital Media',
    image: '/assets/images/project-video.jpg',
    link: '/courses/digital-media'
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
