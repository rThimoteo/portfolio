import type { ReactElement } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
};

export function SectionHeading({ eyebrow, title, description, tone = 'light' }: SectionHeadingProps): ReactElement {
  const isDark = tone === 'dark';

  return (
    <div className="max-w-3xl">
      <p className={`mb-3 font-display text-xs font-bold uppercase ${isDark ? 'text-lime' : 'text-rust'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl font-bold leading-tight md:text-5xl ${isDark ? 'text-paper' : 'text-ink'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${isDark ? 'text-paper/72' : 'text-graphite/78'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
