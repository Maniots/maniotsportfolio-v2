import type { Capability, LocalizedText } from '@/types/content'

const text = (en: string, it: string): LocalizedText => ({ en, it })

export const profile = {
  name: 'Manuel Rizzo',
  alias: 'Maniots',
  email: 'manuelrizzo2006@gmail.com',
  social: {
    github: 'https://github.com/Maniots',
    linkedin: 'https://www.linkedin.com/in/manuel-rizzo/',
  },
  availability: text('Open to selected collaborations and junior opportunities.', 'Disponibile per collaborazioni selezionate e opportunità junior.'),
  capabilities: [
    {
      title: text('Game development', 'Game development'),
      items: ['Unity', 'C#', 'Gameplay systems', '2D prototyping'],
    },
    {
      title: text('Product software', 'Software di prodotto'),
      items: ['Python', 'PySide6', '.NET MAUI', 'Desktop UX'],
    },
    {
      title: text('Web & data', 'Web e dati'),
      items: ['TypeScript', 'Vue', 'Node.js', 'PostgreSQL'],
    },
    {
      title: text('Delivery', 'Delivery'),
      items: ['GitHub Actions', 'Docker', 'Testing', 'Release automation'],
    },
  ] satisfies Capability[],
}
