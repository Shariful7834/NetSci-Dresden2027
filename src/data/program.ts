// ─────────────────────────────────────────────
//  Program data — daily schedule overview & committee
// ─────────────────────────────────────────────

export interface ScheduleSlot {
  time: string;
  title: string;
  kind: 'keynote' | 'session' | 'break' | 'social' | 'satellite';
  room?: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  slots: ScheduleSlot[];
}

export const schedule: ScheduleDay[] = [
  {
    day: 'Monday',
    date: '17 May 2027',
    slots: [
      { time: '09:00', title: 'Satellite symposia (full day)', kind: 'satellite', room: 'HSZ' },
      { time: '18:00', title: 'Welcome reception', kind: 'social', room: 'Zwinger' },
    ],
  },
  {
    day: 'Tuesday',
    date: '18 May 2027',
    slots: [
      { time: '09:00', title: 'Opening & keynote — Alessandro Vespignani', kind: 'keynote', room: 'Audimax' },
      { time: '10:30', title: 'Coffee break', kind: 'break' },
      { time: '11:00', title: 'Contributed sessions I', kind: 'session', room: 'HSZ' },
      { time: '14:00', title: 'Lightning talks', kind: 'session', room: 'Audimax' },
      { time: '16:00', title: 'Poster session A', kind: 'session', room: 'SLUB' },
    ],
  },
  {
    day: 'Wednesday',
    date: '19 May 2027',
    slots: [
      { time: '09:00', title: 'Keynote — Tiago P. Peixoto', kind: 'keynote', room: 'Audimax' },
      { time: '11:00', title: 'Contributed sessions II', kind: 'session', room: 'HSZ' },
      { time: '14:00', title: 'Excursion: Saxon Switzerland', kind: 'social' },
    ],
  },
  {
    day: 'Thursday',
    date: '20 May 2027',
    slots: [
      { time: '09:00', title: 'Keynote — Renaud Lambiotte', kind: 'keynote', room: 'Audimax' },
      { time: '11:00', title: 'Contributed sessions III', kind: 'session', room: 'HSZ' },
      { time: '16:00', title: 'Poster session B', kind: 'session', room: 'SLUB' },
      { time: '19:30', title: 'Conference dinner', kind: 'social', room: 'Albrechtsberg' },
    ],
  },
  {
    day: 'Friday',
    date: '21 May 2027',
    slots: [
      { time: '09:00', title: 'Keynote — Yamir Moreno', kind: 'keynote', room: 'Audimax' },
      { time: '11:00', title: 'Awards & closing', kind: 'session', room: 'Audimax' },
    ],
  },
];

export interface CommitteeMember {
  name: string;
  role: string;
  affiliation: string;
}

export const committee: CommitteeMember[] = [
  { name: 'Conference Chair', role: 'General Chair', affiliation: 'TU Dresden' },
  { name: 'Program Chair', role: 'Program Committee', affiliation: 'TU Dresden' },
  { name: 'Satellites Chair', role: 'Satellites', affiliation: 'Network Science Society' },
  { name: 'Local Organisation', role: 'Local Chair', affiliation: 'TU Dresden' },
];
