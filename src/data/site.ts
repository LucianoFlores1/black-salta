import type { ImageMetadata } from 'astro';
import smartwatch from '../assets/photos/smartwatch-tile.jpg';
import auriculares from '../assets/photos/auriculares.jpg';
import tvbox from '../assets/photos/tvbox.jpg';
import proyector from '../assets/photos/proyector.jpg';
import parlantes from '../assets/photos/parlantes.jpg';
import lucesLed from '../assets/photos/luces-led.jpg';
import accesorios from '../assets/photos/accesorios.jpg';
import hogar from '../assets/photos/hogar.jpg';

export const SITE = {
  name: 'Black Salta',
  url: 'https://blacksalta.com',
  title: 'Black Salta · Electrónica importada en la peatonal de Salta',
  description:
    'Smartwatch, auriculares, TV Box, proyectores, parlantes y artículos para el hogar. Más de 20 años en el centro de Salta, garantía real con local propio de pos venta y envíos a todo el país.',
  locale: 'es_AR',
  timeZone: 'America/Argentina/Salta',
};

/** Número principal para consultas generales (local La Florida 437). */
export const MAIN_WHATSAPP = '5493874197733';

export function waLink(phone: string, text?: string) {
  const base = `https://wa.me/${phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Día de la semana: 0 = domingo … 6 = sábado. Horas en formato 24 h, hora de Salta. */
export type Slot = { days: number[]; open: string; close: string };

export type Store = {
  id: string;
  number: string;
  street: string;
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  maps: string;
  hoursText: string[];
  slots: Slot[];
  geo?: { lat: number; lng: number };
};

const MON_FRI = [1, 2, 3, 4, 5];
const MON_SAT = [1, 2, 3, 4, 5, 6];

export const STORES: Store[] = [
  {
    id: 'florida-219',
    number: '219',
    street: 'La Florida 219',
    name: 'Peatonal',
    role: 'Venta al público',
    phone: '5493874462316',
    phoneDisplay: '387 446-2316',
    maps: 'https://maps.app.goo.gl/qeG14wq84CiXNjUPA',
    hoursText: ['Lunes a viernes 9 a 14 y 17 a 21:30', 'Sábados 9 a 21'],
    slots: [
      { days: MON_FRI, open: '09:00', close: '14:00' },
      { days: MON_FRI, open: '17:00', close: '21:30' },
      { days: [6], open: '09:00', close: '21:00' },
    ],
  },
  {
    id: 'florida-437',
    number: '437',
    street: 'La Florida 437',
    name: 'La Florida',
    role: 'Venta al público',
    phone: '5493874197733',
    phoneDisplay: '387 419-7733',
    maps: 'https://maps.app.goo.gl/hNF9FAtenN8jfGRc9',
    hoursText: ['Lunes a sábados 9 a 21', 'Domingos 10 a 14'],
    slots: [
      { days: MON_SAT, open: '09:00', close: '21:00' },
      { days: [0], open: '10:00', close: '14:00' },
    ],
    geo: { lat: -24.79502, lng: -65.412681 },
  },
  {
    id: 'mendoza-710',
    number: '710',
    street: 'Mendoza 710',
    name: 'Pos venta',
    role: 'Cambios y garantía',
    phone: '5493874749061',
    phoneDisplay: '387 474-9061',
    maps: 'https://maps.app.goo.gl/WypAQyNQWnqCdt5p9',
    hoursText: ['Lunes a sábados 9 a 21'],
    slots: [{ days: MON_SAT, open: '09:00', close: '21:00' }],
  },
];

export const POSVENTA = STORES[2];

export type Category = {
  id: string;
  name: string;
  blurb: string;
  image: ImageMetadata;
  alt: string;
  badge?: string;
  /** Posición del recorte de la foto dentro del mosaico. */
  focus?: string;
};

export const CATEGORIES: Category[] = [
  {
    id: 'smartwatch',
    name: 'Smartwatch',
    blurb: 'Notificaciones, GPS y monitoreo de salud en la muñeca.',
    image: smartwatch,
    alt: 'Reloj inteligente de malla clara con la hora en pantalla',
    badge: 'Más vendido',
    focus: '50% 50%',
  },
  {
    id: 'auriculares',
    name: 'Auriculares',
    blurb: 'Bluetooth, deportivos, con micrófono y con cable.',
    image: auriculares,
    alt: 'Auriculares inalámbricos negros junto a su estuche de carga',
  },
  {
    id: 'tvbox',
    name: 'TV Box Android',
    blurb: 'Convertí cualquier televisor en Smart TV.',
    image: tvbox,
    alt: 'Televisor en un living a oscuras mostrando aplicaciones de streaming',
    badge: 'Popular',
  },
  {
    id: 'parlantes',
    name: 'Parlantes',
    blurb: 'Portátiles, con batería recargable.',
    image: parlantes,
    alt: 'Parlante de madera oscura sobre un escritorio',
    focus: '60% 50%',
  },
  {
    id: 'proyectores',
    name: 'Proyectores LED',
    blurb: 'El cine en tu pared, sin instalación.',
    image: proyector,
    alt: 'Lente de un proyector iluminada en azul y rojo',
  },
  {
    id: 'luces-led',
    name: 'Luces LED',
    blurb: 'Tiras, focos y lámparas para cada ambiente.',
    image: lucesLed,
    alt: 'Escritorio iluminado por detrás con luz LED de colores',
  },
  {
    id: 'cables',
    name: 'Cables y accesorios',
    blurb: 'HDMI, USB-C y cargadores rápidos.',
    image: accesorios,
    alt: 'Celular, micrófono y joystick sobre una superficie negra',
  },
  {
    id: 'hogar',
    name: 'Artículos para el hogar',
    blurb: 'Importados, con la misma garantía.',
    image: hogar,
    alt: 'Living luminoso con sillón, cuadro y lámpara de pie',
  },
];

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', handle: '@blacksaltaonline', href: 'https://www.instagram.com/blacksaltaonline', note: 'Ofertas y novedades todos los días' },
  { id: 'tiktok', label: 'TikTok', handle: '@blacksalta', href: 'https://www.tiktok.com/@blacksalta', note: 'Productos en uso, sin filtro' },
  { id: 'facebook', label: 'Facebook', handle: '/blacksalta', href: 'https://www.facebook.com/blacksalta/', note: 'Novedades y consultas' },
] as const;

export const NAV = [
  { href: '#productos', label: 'Productos' },
  { href: '#locales', label: 'Locales' },
  { href: '#pos-venta', label: 'Pos venta' },
  { href: '#mayoristas', label: 'Mayoristas' },
];
