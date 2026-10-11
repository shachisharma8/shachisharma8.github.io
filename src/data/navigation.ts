export interface NavItem {
  label: string;
  to: string;
  /** Visual "world" a route belongs to, used for subtle theme shifts */
  world?: 'person' | 'profession' | 'neutral';
}

export const primaryNav: NavItem[] = [
  { label: 'Work', to: '/profession/projects', world: 'profession' },
  { label: 'Experience', to: '/profession/experience', world: 'profession' },
  { label: 'Person', to: '/person', world: 'person' },
];

export const personSubNav: NavItem[] = [
  { label: 'The Library', to: '/person/library', world: 'person' },
  { label: 'Cooking', to: '/person/cooking', world: 'person' },
  { label: 'Everyday', to: '/person/everyday', world: 'person' },
];

export const professionSubNav: NavItem[] = [
  { label: 'Overview', to: '/profession', world: 'profession' },
  { label: 'Projects', to: '/profession/projects', world: 'profession' },
  { label: 'Experience', to: '/profession/experience', world: 'profession' },
];
