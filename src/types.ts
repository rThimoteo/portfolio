export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  summary: string;
  impact: string;
};

export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
};

export type ContactLink = {
  label: string;
  href: string;
  detail: string;
  download?: string;
};

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Theme = 'light' | 'dark';
