export interface Role {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  period: string;
  summary: string;
  tags: string[];
  badge?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export const profile = {
  name: 'Suphanat Saradee',
  nameTh: 'ศุภณัฐ สารดี',
  role: 'Software Engineer',
  focus: 'Full Stack & Embedded',
  location: 'Chonburi, Thailand',
  email: 'suphanatsaradee@gmail.com',
  intro:
    'I write C and C++ for NASA\'s core Flight System at GISTDA, build drone Remote ID systems, ' +
    'and ship mobile apps in React Native. Before that I built web apps with PHP, JavaScript and MySQL, ' +
    'IoT sensor systems, and a wildfire detector that placed 3rd at the ASEAN Geospatial Challenge 2025.',
  facts: [
    { value: '1 yr', label: 'at GISTDA' },
    { value: '3rd', label: 'ASEAN Geospatial Challenge 2025' },
    { value: 'B.Eng.', label: 'Computer Engineering' },
  ],
};

export const experience: Role[] = [
  {
    title: 'Engineer',
    org: 'GISTDA · Geo-Informatics and Space Technology Development Agency',
    period: '2025 – Present',
    points: [
      'Develop and maintain applications on NASA\'s core Flight System (cFS) framework in C.',
      'Build Remote ID components for identifying and tracking drones.',
      'Develop a React Native app, similar to a drone scanner, that detects and displays nearby drones.',
      'Set up, deploy to and maintain Linux servers as part of daily work.',
      'Use Docker for development and deployment, and Git for version control.',
    ],
  },
  {
    title: 'Intern',
    org: 'GISTDA',
    period: 'May 2024 – May 2025',
    points: ['Built an IoT air quality monitoring system.'],
  },
];

export const projects: Project[] = [
  {
    name: 'Wildfire detection device',
    period: 'Apr 2025',
    summary:
      'A device that detects wildfires and maps the affected area. Entered by team PhoenixReign at the ' +
      'ASEAN Geospatial Challenge 2025, organised by the Singapore Land Authority.',
    tags: ['IoT', 'Geospatial', 'Hardware'],
    badge: '3rd Place',
  },
  {
    name: 'Drone Remote ID scanner',
    period: '2025 – Present',
    summary: 'Mobile app that picks up Remote ID broadcasts and shows nearby drones, built at GISTDA.',
    tags: ['React Native', 'Mobile'],
  },
  {
    name: 'cFS applications',
    period: '2025 – Present',
    summary: 'Flight software apps on NASA\'s core Flight System, written in C.',
    tags: ['C', 'Embedded'],
  },
  {
    name: 'Air quality monitoring',
    period: '2024 – 2025',
    summary: 'IoT system that collects air quality readings from sensors, built during my internship at GISTDA.',
    tags: ['IoT', 'Hardware'],
  },
  {
    name: 'Web applications',
    period: 'University',
    summary: 'Web apps with database design, SQL queries and CRUD interfaces.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Web'],
  },
  {
    name: 'This portfolio',
    period: '2026',
    summary: 'Built with Angular, standalone components and signals.',
    tags: ['Angular', 'TypeScript', 'Web'],
  },
];

export const skills: SkillGroup[] = [
  { name: 'Languages', items: ['C', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'SQL'] },
  { name: 'Frontend & Mobile', items: ['Angular', 'React', 'React Native', 'Next.js', 'Vite', 'HTML', 'CSS'] },
  { name: 'Databases', items: ['MySQL', 'Relational design'] },
  { name: 'Tools & Platforms', items: ['Linux server', 'Docker', 'Git', 'NASA cFS', 'IoT'] },
];
