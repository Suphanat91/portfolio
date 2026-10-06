import { L } from '../i18n';

export type Category = 'product' | 'field' | 'talks' | 'schematic';

export const CATEGORIES: { id: Category; label: L }[] = [
  { id: 'product', label: { en: 'Product', th: 'ผลิตภัณฑ์' } },
  { id: 'field', label: { en: 'Field work', th: 'งานภาคสนาม' } },
  { id: 'talks', label: { en: 'Talks', th: 'งานบรรยาย' } },
  { id: 'schematic', label: { en: 'Schematic', th: 'แบบวงจร' } },
];

export interface GalleryItem {
  /** File name without extension in public/work/<category>/. A "-sm" copy is used for the grid. */
  file: string;
  category: Category;
  title: L;
  caption: L;
  width: number;
  height: number;
  /** Shown as the large card above the grid in the "All" view. */
  featured?: boolean;
}

export const gallery: GalleryItem[] = [
  {
    file: 'product-01',
    category: 'product',
    title: { en: 'Drone scanner app', th: 'แอปสแกนโดรน' },
    caption: {
      en:
        'The React Native scanner app picking up a GISTDA Remote ID module and placing it on the map, ' +
        'with the drone ID, signal strength and last-seen time.',
      th:
        'แอปสแกนที่เขียนด้วย React Native ตรวจพบโมดูล Remote ID ของ GISTDA และแสดงตำแหน่งบนแผนที่ ' +
        'พร้อมรหัสโดรน ความแรงสัญญาณ และเวลาที่ตรวจพบล่าสุด',
    },
    width: 1108,
    height: 1477,
    featured: true,
  },
  {
    file: 'product-02',
    category: 'product',
    title: { en: 'Board with battery pack', th: 'บอร์ดพร้อมแบตเตอรี่' },
    caption: { en: 'Assembled board powered by a Li-Po battery pack.', th: 'บอร์ดที่ประกอบเสร็จแล้ว ใช้ไฟจากแบตเตอรี่ Li-Po' },
    width: 1108,
    height: 1477,
  },
  {
    file: 'product-03',
    category: 'product',
    title: { en: 'Board with GPS antenna', th: 'บอร์ดพร้อมเสาอากาศ GPS' },
    caption: {
      en: 'Board with battery, GPS antenna and wireless module.',
      th: 'บอร์ดพร้อมแบตเตอรี่ เสาอากาศ GPS และโมดูลสื่อสารไร้สาย',
    },
    width: 1108,
    height: 1477,
  },
  {
    file: 'product-04',
    category: 'product',
    title: { en: 'Production batch', th: 'บอร์ดชุดผลิต' },
    caption: {
      en: 'A batch of assembled boards with GPS antennas, ready for testing.',
      th: 'บอร์ดที่ประกอบพร้อมเสาอากาศ GPS ทั้งชุด รอการทดสอบ',
    },
    width: 1108,
    height: 1477,
  },
  {
    file: 'schematic-01',
    category: 'schematic',
    title: { en: 'Remote ID board schematic', th: 'แบบวงจรบอร์ด Remote ID' },
    caption: {
      en: 'Schematic for the Remote ID board: microcontroller, battery charging, power regulation and sensors.',
      th: 'แบบวงจรของบอร์ด Remote ID ประกอบด้วยไมโครคอนโทรลเลอร์ วงจรชาร์จแบตเตอรี่ วงจรจ่ายไฟ และเซนเซอร์',
    },
    width: 1200,
    height: 1600,
  },
  {
    file: 'field-03',
    category: 'field',
    title: { en: 'Field test setup', th: 'เตรียมทดสอบภาคสนาม' },
    caption: {
      en: 'Drones, controllers and a laptop set up for an outdoor test.',
      th: 'เตรียมโดรน รีโมต และโน้ตบุ๊กสำหรับทดสอบกลางแจ้ง',
    },
    width: 1108,
    height: 1477,
  },
  {
    file: 'field-09',
    category: 'field',
    title: { en: 'Fitting a module to a drone', th: 'ติดตั้งโมดูลบนโดรน' },
    caption: {
      en: 'Mounting a device onto a drone with partner agencies before a flight.',
      th: 'ติดตั้งอุปกรณ์บนโดรนร่วมกับหน่วยงานพันธมิตรก่อนขึ้นบิน',
    },
    width: 1567,
    height: 1045,
  },
  {
    file: 'field-08',
    category: 'field',
    title: { en: 'Checking results with the team', th: 'ตรวจผลกับทีม' },
    caption: {
      en: 'Reviewing scan results on phones and tablets during a field test.',
      th: 'ดูผลการสแกนบนมือถือและแท็บเล็ตระหว่างทดสอบภาคสนาม',
    },
    width: 1566,
    height: 1046,
  },
  {
    file: 'field-06',
    category: 'field',
    title: { en: 'Devices ready for testing', th: 'อุปกรณ์พร้อมทดสอบ' },
    caption: { en: 'Two devices with antennas prepared for a test run.', th: 'อุปกรณ์สองตัวพร้อมเสาอากาศ เตรียมไว้สำหรับทดสอบ' },
    width: 1108,
    height: 1477,
  },
  {
    file: 'field-02',
    category: 'field',
    title: { en: 'Demonstrating a device', th: 'สาธิตอุปกรณ์' },
    caption: {
      en: 'Showing a Remote ID device to attendees during a meeting.',
      th: 'สาธิตอุปกรณ์ Remote ID ให้ผู้เข้าร่วมประชุมดู',
    },
    width: 1280,
    height: 960,
  },
  {
    file: 'field-01',
    category: 'field',
    title: { en: 'Presenting imagery results', th: 'นำเสนอผลภาพถ่ายดาวเทียม' },
    caption: { en: 'Walking a meeting through satellite imagery results.', th: 'อธิบายผลจากภาพถ่ายดาวเทียมในที่ประชุม' },
    width: 1280,
    height: 960,
  },
  {
    file: 'field-04',
    category: 'field',
    title: { en: 'Hardware on the test bench', th: 'ฮาร์ดแวร์บนโต๊ะทดสอบ' },
    caption: { en: 'Hardware wired up for testing in the lab.', th: 'ต่อฮาร์ดแวร์เพื่อทดสอบในห้องแล็บ' },
    width: 1477,
    height: 1108,
  },
  {
    file: 'field-05',
    category: 'field',
    title: { en: 'In the lab', th: 'ทำงานในแล็บ' },
    caption: { en: 'Working on hardware in the lab.', th: 'ทำงานกับฮาร์ดแวร์ในห้องแล็บ' },
    width: 1108,
    height: 1477,
  },
  {
    file: 'field-10',
    category: 'field',
    title: { en: 'On-site installation', th: 'ติดตั้งหน้างาน' },
    caption: { en: 'Field work with the GISTDA team.', th: 'ลงพื้นที่ทำงานกับทีม GISTDA' },
    width: 1108,
    height: 1477,
  },
  {
    file: 'talks-05',
    category: 'talks',
    title: { en: 'Speaking at an open house', th: 'บรรยายในงาน Open House' },
    caption: {
      en: 'Talking about soft skills for the professional world at an open house event.',
      th: 'บรรยายเรื่อง soft skills สำหรับการทำงานในงาน Open House',
    },
    width: 900,
    height: 1600,
  },
  {
    file: 'talks-04',
    category: 'talks',
    title: { en: 'Presenting at GISTDA', th: 'บรรยายที่ GISTDA' },
    caption: { en: 'Giving a talk to visiting students at GISTDA.', th: 'บรรยายให้นักศึกษาที่มาเยี่ยมชม GISTDA' },
    width: 1108,
    height: 1477,
  },
  {
    file: 'talks-01',
    category: 'talks',
    title: { en: 'Talk for students', th: 'บรรยายให้นักศึกษา' },
    caption: { en: 'Presenting GISTDA work to a student audience.', th: 'นำเสนองานของ GISTDA ให้นักศึกษาฟัง' },
    width: 1108,
    height: 1477,
  },
  {
    file: 'talks-03',
    category: 'talks',
    title: { en: 'Study visit', th: 'ต้อนรับคณะศึกษาดูงาน' },
    caption: {
      en: 'Hosting a study visit from Rajamangala University of Technology Isan.',
      th: 'ต้อนรับคณะศึกษาดูงานจากมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน',
    },
    width: 1477,
    height: 1108,
  },
  {
    file: 'talks-02',
    category: 'talks',
    title: { en: 'Group photo after a talk', th: 'ถ่ายรูปร่วมกันหลังบรรยาย' },
    caption: { en: 'With participants after a session.', th: 'ถ่ายรูปกับผู้เข้าร่วมหลังจบการบรรยาย' },
    width: 1477,
    height: 1108,
  },
];
