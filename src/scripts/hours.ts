import type { Slot, Store } from '../data/site';

const DAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

/** `opensIn`: minutos hasta la próxima apertura (0 si está abierto). */
export type Status = { open: boolean; label: string; opensIn: number };

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number);
  return m === 0 ? `${h}` : `${h}:${String(m).padStart(2, '0')}`;
}

/** Día (0–6) y minutos desde medianoche en la zona horaria indicada. */
export function zonedNow(timeZone: string, date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

function slotsFor(slots: Slot[], day: number) {
  return slots
    .filter((s) => s.days.includes(day))
    .sort((a, b) => toMinutes(a.open) - toMinutes(b.open));
}

export function storeStatus(store: Store, now: { day: number; minutes: number }): Status {
  const today = slotsFor(store.slots, now.day);

  const current = today.find((s) => now.minutes >= toMinutes(s.open) && now.minutes < toMinutes(s.close));
  if (current) {
    return { open: true, label: `Abierto · cierra a las ${formatTime(current.close)}`, opensIn: 0 };
  }

  const laterToday = today.find((s) => toMinutes(s.open) > now.minutes);
  if (laterToday) {
    return {
      open: false,
      label: `Cerrado · abre hoy a las ${formatTime(laterToday.open)}`,
      opensIn: toMinutes(laterToday.open) - now.minutes,
    };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const day = (now.day + offset) % 7;
    const next = slotsFor(store.slots, day)[0];
    if (next) {
      const when = offset === 1 ? 'mañana' : `el ${DAY_NAMES[day]}`;
      return {
        open: false,
        label: `Cerrado · abre ${when} a las ${formatTime(next.open)}`,
        opensIn: offset * 1440 + toMinutes(next.open) - now.minutes,
      };
    }
  }

  return { open: false, label: 'Cerrado', opensIn: Infinity };
}
