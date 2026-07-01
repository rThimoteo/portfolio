import { useEffect, useState, type ReactElement } from 'react';
import { Header } from './components/Header';
import { SectionHeading } from './components/SectionHeading';
import { differentiators, profile, projects, technologies } from './data/profile';
import type { ContactLink, Theme } from './types';

const contactLinks: ContactLink[] = [
  { label: 'GitHub', href: profile.githubUrl, detail: 'github.com/rThimoteo' },
  { label: 'LinkedIn', href: profile.linkedinUrl, detail: 'linkedin.com/in/rodrigo-thimoteo' },
  { label: 'Email', href: `mailto:${profile.email}`, detail: profile.email },
  { label: 'Currículo', href: profile.resumeUrl, detail: 'Baixar currículo em PDF', download: 'cv_rodrigo_thimoteo.pdf' },
];

const getInitialTheme = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

function App(): ReactElement {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.classList.toggle('dark', isDark);
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#0c1217' : '#101820');
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-body text-graphite">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="inicio">
        <section className="relative isolate border-b border-ink/10 px-5 py-16 md:px-8 md:py-24">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(20,184,166,0.16),transparent_34%),linear-gradient(300deg,rgba(194,90,63,0.14),transparent_32%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-gradient(#101820_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="animate-reveal">
              <p className="mb-5 inline-flex rounded-sm border border-ink/15 bg-paper/80 px-3 py-2 text-sm font-bold text-ink shadow-line">
                {profile.location} · 5 anos de experiência
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.98] text-ink md:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-5 font-display text-2xl font-semibold text-rust md:text-3xl">{profile.role}</p>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-graphite/82">{profile.summary}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    download={link.download}
                    className="rounded-sm border border-ink/15 bg-ink px-5 py-3 text-sm font-bold text-paper shadow-soft transition hover:-translate-y-1 hover:bg-mint hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative animate-float" aria-label="Resumo visual de stack e foco profissional">
              <div className="absolute -left-4 top-8 h-24 w-16 bg-lime/50 blur-2xl" />
              <div className="absolute -right-6 bottom-8 h-32 w-20 bg-mint/30 blur-2xl" />
              <div className="relative border border-ink/35 bg-code p-4 text-codeText shadow-soft">
                <div className="mb-4 flex items-center justify-between border-b border-codeText/10 pb-3">
                  <div className="flex gap-2" aria-hidden="true">
                    <span className="size-3 rounded-full bg-rust" />
                    <span className="size-3 rounded-full bg-lime" />
                    <span className="size-3 rounded-full bg-mint" />
                  </div>
                  <span className="font-display text-xs font-bold uppercase text-codeText/55">
                    portfolio.tsx
                  </span>
                </div>
                <div className="space-y-4 font-mono text-sm leading-7 text-codeText">
                  <p>
                    <span className="text-mint">const</span> developer ={' '}
                    <span className="text-lime">"Full Stack"</span>;
                  </p>
                  <p>
                    stack.map(<span className="text-rust">PHP</span>, <span className="text-rust">Laravel</span>,{' '}
                    <span className="text-rust">React</span>);
                  </p>
                  <p>
                    build(<span className="text-lime">"APIs"</span>, <span className="text-lime">"interfaces"</span>,{' '}
                    <span className="text-lime">"integrações"</span>);
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {['APIs', 'UI Admin', 'Multi-tenant'].map((item) => (
                    <span key={item} className="border border-codeText/15 px-3 py-4 text-center text-xs font-bold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Sobre mim"
              title="Código organizado para produtos que precisam evoluir."
              description={profile.impact}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <article key={item} className="border border-ink/12 bg-surface/55 p-6 shadow-line">
                  <span className="mb-5 block h-1 w-12 bg-mint" />
                  <p className="font-semibold leading-7 text-graphite">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tecnologias" className="border-y border-ink/10 bg-ink px-5 py-20 text-paper md:px-8">
          <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Tecnologias"
                title="Stack prática para aplicações web modernas."
                description="Ferramentas usadas para entregar back-end, front-end, infraestrutura local e comunicação em tempo real."
                tone="dark"
              />
            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-paper/15 bg-paper/8 px-4 py-3 text-sm font-bold text-paper transition hover:border-mint hover:text-lime"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Projetos em destaque"
                title="Cards temporários, prontos para receber trabalhos reais."
                description="Os textos abaixo são placeholders e foram escritos para serem substituídos por projetos, repositórios ou estudos de caso."
              />
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex min-h-[330px] flex-col justify-between border border-ink/12 bg-surface/60 p-6 shadow-line transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div>
                    <div className="mb-7 flex items-center justify-between">
                      <span className="rounded-sm bg-lime px-3 py-1 text-xs font-bold uppercase text-ink">
                        {project.type}
                      </span>
                      <span className="font-display text-2xl text-ink/35 transition group-hover:text-rust">↗</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
                    <p className="mt-4 leading-7 text-graphite/78">{project.description}</p>
                  </div>
                  <div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="border border-ink/10 px-2.5 py-1.5 text-xs font-bold text-ink/70">
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      className="mt-7 inline-flex font-bold text-ink underline decoration-mint decoration-2 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                    >
                      Substituir link
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trajetoria" className="border-y border-ink/10 bg-surface/42 px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Trajetória"
              title="5 anos construindo e mantendo aplicações full stack."
              description="Experiência aplicada em sistemas web, APIs, interfaces administrativas e integrações entre serviços."
            />
            <div className="space-y-5">
              {[
                'Desenvolvimento de funcionalidades em aplicações web com PHP, Laravel, JavaScript e React.',
                'Construção e manutenção de APIs, integrações, fluxos administrativos e rotinas de sistema.',
                'Atuação com Docker, Nginx, MySQL, Git e comunicação em tempo real com WebSockets e Laravel Echo/Reverb.',
              ].map((item, index) => (
                <article key={item} className="grid gap-4 border-l-4 border-mint bg-paper p-6 shadow-line sm:grid-cols-[80px_1fr]">
                  <span className="font-display text-3xl font-bold text-rust">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-lg font-semibold leading-8 text-graphite">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 border border-ink bg-ink p-7 text-paper shadow-soft md:grid-cols-[1fr_0.9fr] md:p-10">
            <div>
              <p className="font-display text-xs font-bold uppercase text-lime">Contato</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                Vamos conversar sobre produto, código e integração.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-paper/72">
                Para propostas, networking ou troca técnica, use qualquer um dos canais abaixo.
              </p>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  download={link.download}
                  className="border border-paper/15 bg-paper/6 p-4 transition hover:border-mint hover:bg-paper/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                >
                  <span className="block font-display text-lg font-bold text-paper">{link.label}</span>
                  <span className="mt-1 block break-words text-sm text-paper/62">{link.detail}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-graphite/72 md:flex-row md:items-center">
          <p>© 2026 {profile.name}. Desenvolvedor Full Stack.</p>
          <div className="flex gap-5 font-bold">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-ink">
              GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
