import type { ReactElement } from 'react';
import { profile } from '../data/profile';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Contato', href: '#contato' },
];

export function Header(): ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/86 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="group flex items-center gap-3 font-display text-sm font-bold text-ink">
          <span className="grid size-10 place-items-center rounded-sm bg-ink text-paper shadow-line transition group-hover:bg-mint">
            RT
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-graphite/80 transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-sm border border-ink bg-ink px-4 py-2 text-sm font-bold text-paper transition hover:-translate-y-0.5 hover:bg-graphite focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
        >
          Conversar
        </a>
      </nav>
    </header>
  );
}
