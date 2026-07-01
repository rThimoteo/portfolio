import resumePdf from '../../cv_rodrigo_thimoteo.pdf';
import type { Profile, Project } from '../types';

export const profile: Profile = {
  name: 'Rodrigo Gomes Thimoteo',
  role: 'Desenvolvedor Full Stack',
  location: 'São Caetano do Sul - SP, Brasil',
  email: 'rodrigomoteo@gmail.com',
  resumeUrl: resumePdf,
  githubUrl: 'https://github.com/rThimoteo',
  linkedinUrl: 'https://www.linkedin.com/in/rodrigo-thimoteo/',
  summary:
    'Sou desenvolvedor Full Stack com experiência em aplicações web, atuando principalmente com PHP, Laravel, JavaScript e React. Tenho experiência com desenvolvimento de sistemas, APIs, interfaces administrativas e integrações entre serviços.',
  impact:
    'Busco construir soluções funcionais, organizadas e fáceis de manter, com atenção à estrutura do código e ao impacto prático no produto.',
};

export const technologies: string[] = [
  'PHP',
  'Laravel',
  'JavaScript',
  'React',
  'Vite',
  'MySQL',
  'Docker',
  'Nginx',
  'Git',
  'WebSockets',
  'Laravel Echo',
  'Reverb',
];

export const differentiators: string[] = [
  'Desenvolvimento full stack com foco em aplicações web reais',
  'Organização de código e manutenção de sistemas existentes',
  'Integração entre front-end, back-end e serviços externos',
  'APIs bem estruturadas e fluxos administrativos',
  'Docker em ambiente de desenvolvimento',
  'Manutenção e evolução de aplicações web existentes',
];

export const projects: Project[] = [
  {
    title: 'Sistema Administrativo',
    type: 'Placeholder',
    description:
      'Substitua por um projeto real envolvendo dashboards, cadastros, permissões, relatórios ou rotinas internas.',
    stack: ['Laravel', 'React', 'MySQL'],
    href: '#substituir-projeto-1',
  },
  {
    title: 'API de Integração',
    type: 'Placeholder',
    description:
      'Use este card para destacar uma API, integração entre serviços, autenticação, webhooks ou processamento assíncrono.',
    stack: ['PHP', 'Laravel', 'Docker'],
    href: '#substituir-projeto-2',
  },
  {
    title: 'Interface Web Responsiva',
    type: 'Placeholder',
    description:
      'Espaço para apresentar uma interface, painel operacional, portal de cliente ou experiência front-end relevante.',
    stack: ['React', 'Vite', 'JavaScript'],
    href: '#substituir-projeto-3',
  },
];
