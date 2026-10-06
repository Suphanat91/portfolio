import { Injectable, effect, signal } from '@angular/core';

export type Lang = 'en' | 'th';

/** A piece of text in both languages. */
export type L = Record<Lang, string>;

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'th') return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith('th') ? 'th' : 'en';
}

@Injectable({ providedIn: 'root' })
export class I18n {
  readonly lang = signal<Lang>(initialLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang;
      try {
        localStorage.setItem('lang', lang);
      } catch {}
    });
  }

  /** Returns the text for the current language. Plain strings pass through unchanged. */
  readonly t = (text: L | string): string => (typeof text === 'string' ? text : text[this.lang()]);
}

/** Interface text that isn't part of the profile content. */
export const ui = {
  nav: {
    now: { en: 'Now', th: 'ตอนนี้' },
    work: { en: 'Work', th: 'ผลงาน' },
    experience: { en: 'Experience', th: 'ประสบการณ์' },
    projects: { en: 'Projects', th: 'โปรเจกต์' },
    skills: { en: 'Skills', th: 'ทักษะ' },
    contact: { en: 'Contact', th: 'ติดต่อ' },
  },
  hireMe: { en: 'Hire me', th: 'ติดต่อผม' },
  emailMe: { en: 'Email me', th: 'ส่งอีเมล' },
  seeWork: { en: 'See my work', th: 'ดูผลงาน' },
  menu: { en: 'Menu', th: 'เมนู' },
  toLight: { en: 'Switch to light theme', th: 'เปลี่ยนเป็นธีมสว่าง' },
  toDark: { en: 'Switch to dark theme', th: 'เปลี่ยนเป็นธีมมืด' },
  language: { en: 'Language', th: 'ภาษา' },

  nowTitle: { en: 'Finding drones by the signals they broadcast.', th: 'ค้นหาโดรนจากสัญญาณที่โดรนส่งออกมา' },
  nowBody: {
    en:
      'At GISTDA I work on Remote ID, which lets a drone broadcast who it is and where it is flying. ' +
      'I build the components that pick up those broadcasts and a React Native app that shows nearby drones, ' +
      "alongside flight software on NASA's core Flight System.",
    th:
      'ที่ GISTDA ผมทำงานด้าน Remote ID ซึ่งเป็นระบบที่ให้โดรนส่งสัญญาณบอกว่าตัวเองคือใครและกำลังบินอยู่ที่ไหน ' +
      'ผมพัฒนาส่วนที่รับสัญญาณเหล่านั้น และแอป React Native ที่แสดงโดรนที่อยู่ใกล้เคียง ' +
      'ควบคู่กับการพัฒนาซอฟต์แวร์บน core Flight System ของ NASA',
  },
  nowNote: { en: 'The radar is a simulation of what the scanner shows.', th: 'เรดาร์นี้เป็นการจำลองสิ่งที่แอปสแกนแสดง' },

  workLede: {
    en: 'Products, schematics, field tests and talks from my work at GISTDA.',
    th: 'ผลิตภัณฑ์ แบบวงจร งานภาคสนาม และงานบรรยายจากการทำงานที่ GISTDA',
  },

  contactBig: { en: "Let's build software that runs in the real world.", th: 'มาสร้างซอฟต์แวร์ที่ใช้งานได้จริงด้วยกัน' },
  contactBody: {
    en: 'Open to full stack roles in Chonburi and the Eastern Seaboard, including onsite and shift work.',
    th: 'สนใจงานตำแหน่ง Full Stack ในชลบุรีและภาคตะวันออก ทำงาน onsite และเข้ากะได้',
  },
  email: { en: 'Email', th: 'อีเมล' },
  phone: { en: 'Phone', th: 'โทรศัพท์' },
  call: { en: 'Call', th: 'โทร' },
  builtWith: { en: 'Built with Angular', th: 'สร้างด้วย Angular' },

  all: { en: 'All', th: 'ทั้งหมด' },

  galleryHint: { en: 'Click a photo to view it full screen', th: 'คลิกที่รูปเพื่อดูแบบเต็มจอ' },
  featured: { en: 'Featured', th: 'ผลงานเด่น' },
  viewPhoto: { en: 'View photo', th: 'ดูรูป' },
  showAll: { en: 'Show all {n} photos', th: 'ดูทั้งหมด {n} รูป' },
  showLess: { en: 'Show less', th: 'ย่อลง' },
  open: { en: 'Open', th: 'เปิด' },
  close: { en: 'Close', th: 'ปิด' },
  prev: { en: 'Previous photo', th: 'รูปก่อนหน้า' },
  next: { en: 'Next photo', th: 'รูปถัดไป' },
  viewer: { en: 'Photo viewer', th: 'ดูรูปเต็มจอ' },

  radarHead: { en: 'Remote ID scan (demo)', th: 'สแกน Remote ID (จำลอง)' },
  radarContacts: { en: 'contacts', th: 'ลำ' },
  radarIdle: { en: 'Scanning…', th: 'กำลังสแกน…' },
  radarLabel: { en: 'Simulated Remote ID contacts', th: 'โดรนจำลองที่ตรวจพบผ่าน Remote ID' },
} satisfies Record<string, L | Record<string, L>>;
