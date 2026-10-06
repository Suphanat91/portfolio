import { L } from '../i18n';

export interface Role {
  title: L;
  org: L;
  period: L;
  points: L[];
}

export interface Project {
  name: L;
  period: L;
  summary: L;
  tags: string[];
  badge?: L;
}

export interface SkillGroup {
  name: L;
  items: string[];
}

export const profile = {
  name: 'Suphanat Saradee',
  nameTh: 'ศุภณัฐ สารดี',
  role: 'Software Engineer',
  focus: 'Full Stack & Embedded',
  location: { en: 'Chonburi, Thailand', th: 'ชลบุรี' },
  email: 'suphanatsaradee@gmail.com',
  phone: '095-431-6921',
  phoneIntl: '+66954316921',
  intro: {
    en:
      "I write C and C++ for NASA's core Flight System at GISTDA, build drone Remote ID systems, " +
      'and ship mobile apps in React Native. Before that I built web apps with PHP, JavaScript and MySQL, ' +
      'IoT sensor systems, and a wildfire detector that placed 3rd at the ASEAN Geospatial Challenge 2025.',
    th:
      'ผมเขียน C และ C++ บน core Flight System ของ NASA ที่ GISTDA พัฒนาระบบ Remote ID สำหรับโดรน ' +
      'และทำแอปมือถือด้วย React Native ก่อนหน้านี้เคยพัฒนาเว็บด้วย PHP, JavaScript และ MySQL ' +
      'ทำระบบเซนเซอร์ IoT และสร้างเครื่องตรวจจับไฟป่าที่ได้รางวัลที่ 3 จาก ASEAN Geospatial Challenge 2025',
  },
  facts: [
    { value: { en: '1 yr', th: '1 ปี' }, label: { en: 'at GISTDA', th: 'ที่ GISTDA' } },
    {
      value: { en: '3rd', th: 'ที่ 3' },
      label: { en: 'ASEAN Geospatial Challenge 2025', th: 'ASEAN Geospatial Challenge 2025' },
    },
    {
      value: { en: '3.84', th: '3.84' },
      label: {
        en: 'GPA · First-class honours, Computer Engineering',
        th: 'เกรดเฉลี่ย · เกียรตินิยมอันดับหนึ่ง วิศวกรรมคอมพิวเตอร์',
      },
    },
  ],
};

export const experience: Role[] = [
  {
    title: { en: 'Engineer', th: 'วิศวกร' },
    org: {
      en: 'GISTDA · Geo-Informatics and Space Technology Development Agency',
      th: 'GISTDA · สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ',
    },
    period: { en: '2025 – Present', th: '2568 – ปัจจุบัน' },
    points: [
      {
        en: "Develop and maintain applications on NASA's core Flight System (cFS) framework in C.",
        th: 'พัฒนาและดูแลแอปพลิเคชันบนเฟรมเวิร์ก core Flight System (cFS) ของ NASA ด้วยภาษา C',
      },
      {
        en: 'Build Remote ID components for identifying and tracking drones.',
        th: 'พัฒนาระบบ Remote ID สำหรับระบุตัวตนและติดตามโดรน',
      },
      {
        en: 'Develop a React Native app, similar to a drone scanner, that detects and displays nearby drones.',
        th: 'พัฒนาแอปมือถือด้วย React Native ลักษณะคล้าย drone scanner สำหรับตรวจจับและแสดงโดรนที่อยู่ใกล้เคียง',
      },
      {
        en: 'Set up, deploy to and maintain Linux servers as part of daily work.',
        th: 'ติดตั้ง deploy และดูแล Linux server เป็นงานประจำ',
      },
      {
        en: 'Use Docker for development and deployment, and Git for version control.',
        th: 'ใช้ Docker สำหรับการพัฒนาและ deploy และใช้ Git ในการจัดการโค้ด',
      },
    ],
  },
  {
    title: { en: 'Intern', th: 'นักศึกษาฝึกงาน' },
    org: { en: 'GISTDA', th: 'GISTDA' },
    period: { en: 'May 2024 – May 2025', th: 'พ.ค. 2567 – พ.ค. 2568' },
    points: [{ en: 'Built an IoT air quality monitoring system.', th: 'พัฒนาระบบ IoT ตรวจวัดคุณภาพอากาศ' }],
  },
];

export const projects: Project[] = [
  {
    name: { en: 'Wildfire detection device', th: 'เครื่องตรวจจับไฟป่า' },
    period: { en: 'Apr 2025', th: 'เม.ย. 2568' },
    summary: {
      en:
        'A device that detects wildfires and maps the affected area. Entered by team PhoenixReign at the ' +
        'ASEAN Geospatial Challenge 2025, organised by the Singapore Land Authority.',
      th:
        'อุปกรณ์ตรวจจับไฟป่าและระบุพื้นที่ที่เกิดไฟ ส่งแข่งในนามทีม PhoenixReign ' +
        'ในงาน ASEAN Geospatial Challenge 2025 จัดโดย Singapore Land Authority',
    },
    tags: ['IoT', 'Geospatial', 'Hardware'],
    badge: { en: '3rd Place', th: 'รางวัลที่ 3' },
  },
  {
    name: { en: 'Drone Remote ID scanner', th: 'แอปสแกน Drone Remote ID' },
    period: { en: '2025 – Present', th: '2568 – ปัจจุบัน' },
    summary: {
      en: 'Mobile app that picks up Remote ID broadcasts and shows nearby drones, built at GISTDA.',
      th: 'แอปมือถือที่รับสัญญาณ Remote ID และแสดงโดรนที่อยู่ใกล้เคียง พัฒนาที่ GISTDA',
    },
    tags: ['React Native', 'Mobile'],
  },
  {
    name: { en: 'cFS applications', th: 'แอปพลิเคชันบน cFS' },
    period: { en: '2025 – Present', th: '2568 – ปัจจุบัน' },
    summary: {
      en: "Flight software apps on NASA's core Flight System, written in C.",
      th: 'ซอฟต์แวร์การบินบน core Flight System ของ NASA เขียนด้วยภาษา C',
    },
    tags: ['C', 'Embedded'],
  },
  {
    name: { en: 'Air quality monitoring', th: 'ระบบตรวจวัดคุณภาพอากาศ' },
    period: { en: '2024 – 2025', th: '2567 – 2568' },
    summary: {
      en: 'IoT system that collects air quality readings from sensors, built during my internship at GISTDA.',
      th: 'ระบบ IoT เก็บค่าคุณภาพอากาศจากเซนเซอร์ พัฒนาระหว่างฝึกงานที่ GISTDA',
    },
    tags: ['IoT', 'Hardware'],
  },
  {
    name: { en: 'Web applications', th: 'เว็บแอปพลิเคชัน' },
    period: { en: 'University', th: 'ระหว่างเรียน' },
    summary: {
      en: 'Web apps with database design, SQL queries and CRUD interfaces.',
      th: 'เว็บแอปพร้อมการออกแบบฐานข้อมูล การเขียน SQL และระบบ CRUD',
    },
    tags: ['PHP', 'JavaScript', 'MySQL', 'Web'],
  },
  {
    name: { en: 'This portfolio', th: 'เว็บ Portfolio นี้' },
    period: { en: '2026', th: '2569' },
    summary: {
      en: 'Built with Angular, standalone components and signals, in English and Thai.',
      th: 'สร้างด้วย Angular ใช้ standalone components และ signals รองรับภาษาไทยและอังกฤษ',
    },
    tags: ['Angular', 'TypeScript', 'Web'],
  },
];

export const skills: SkillGroup[] = [
  { name: { en: 'Languages', th: 'ภาษาโปรแกรม' }, items: ['C', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'SQL'] },
  {
    name: { en: 'Frontend & Mobile', th: 'Frontend และ Mobile' },
    items: ['Angular', 'React', 'React Native', 'Next.js', 'Vite', 'HTML', 'CSS'],
  },
  { name: { en: 'Databases', th: 'ฐานข้อมูล' }, items: ['MySQL', 'Relational design'] },
  {
    name: { en: 'Tools & Platforms', th: 'เครื่องมือและแพลตฟอร์ม' },
    items: ['Linux server', 'Docker', 'Git', 'NASA cFS', 'IoT'],
  },
];
