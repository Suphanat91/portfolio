export type Category = 'product' | 'field' | 'talks' | 'schematic';

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'product', label: 'Product' },
  { id: 'field', label: 'Field work' },
  { id: 'talks', label: 'Talks' },
  { id: 'schematic', label: 'Schematic' },
];

export interface GalleryItem {
  /** File name without extension in public/work/<category>/. A "-sm" copy is used for the grid. */
  file: string;
  category: Category;
  title: string;
  caption: string;
  width: number;
  height: number;
  /** Shown as the large card above the grid in the "All" view. */
  featured?: boolean;
}

export const gallery: GalleryItem[] = [
  {
    file: 'product-01',
    category: 'product',
    title: 'Drone scanner app',
    caption:
      'The React Native scanner app picking up a GISTDA Remote ID module and placing it on the map, ' +
      'with the drone ID, signal strength and last-seen time.',
    width: 1108,
    height: 1477,
    featured: true,
  },
  {
    file: 'product-02',
    category: 'product',
    title: 'Board with battery pack',
    caption: 'Assembled board powered by a Li-Po battery pack.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'product-03',
    category: 'product',
    title: 'Board with GPS antenna',
    caption: 'Board with battery, GPS antenna and wireless module.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'product-04',
    category: 'product',
    title: 'Production batch',
    caption: 'A batch of assembled boards with GPS antennas, ready for testing.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'schematic-01',
    category: 'schematic',
    title: 'Remote ID board schematic',
    caption: 'Schematic for the Remote ID board: microcontroller, battery charging, power regulation and sensors.',
    width: 1200,
    height: 1600,
  },
  {
    file: 'field-03',
    category: 'field',
    title: 'Field test setup',
    caption: 'Drones, controllers and a laptop set up for an outdoor test.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'field-09',
    category: 'field',
    title: 'Fitting a module to a drone',
    caption: 'Mounting a device onto a drone with partner agencies before a flight.',
    width: 1567,
    height: 1045,
  },
  {
    file: 'field-08',
    category: 'field',
    title: 'Checking results with the team',
    caption: 'Reviewing scan results on phones and tablets during a field test.',
    width: 1566,
    height: 1046,
  },
  {
    file: 'field-06',
    category: 'field',
    title: 'Devices ready for testing',
    caption: 'Two devices with antennas prepared for a test run.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'field-02',
    category: 'field',
    title: 'Demonstrating a device',
    caption: 'Showing a Remote ID device to attendees during a meeting.',
    width: 1280,
    height: 960,
  },
  {
    file: 'field-01',
    category: 'field',
    title: 'Presenting imagery results',
    caption: 'Walking a meeting through satellite imagery results.',
    width: 1280,
    height: 960,
  },
  {
    file: 'field-04',
    category: 'field',
    title: 'Hardware on the test bench',
    caption: 'Hardware wired up for testing in the lab.',
    width: 1477,
    height: 1108,
  },
  {
    file: 'field-05',
    category: 'field',
    title: 'In the lab',
    caption: 'Working on hardware in the lab.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'field-10',
    category: 'field',
    title: 'On-site installation',
    caption: 'Field work with the GISTDA team.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'talks-05',
    category: 'talks',
    title: 'Speaking at an open house',
    caption: 'Talking about soft skills for the professional world at an open house event.',
    width: 900,
    height: 1600,
  },
  {
    file: 'talks-04',
    category: 'talks',
    title: 'Presenting at GISTDA',
    caption: 'Giving a talk to visiting students at GISTDA.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'talks-01',
    category: 'talks',
    title: 'Talk for students',
    caption: 'Presenting GISTDA work to a student audience.',
    width: 1108,
    height: 1477,
  },
  {
    file: 'talks-03',
    category: 'talks',
    title: 'Study visit',
    caption: 'Hosting a study visit from Rajamangala University of Technology Isan.',
    width: 1477,
    height: 1108,
  },
  {
    file: 'talks-02',
    category: 'talks',
    title: 'Group photo after a talk',
    caption: 'With participants after a session.',
    width: 1477,
    height: 1108,
  },
];
