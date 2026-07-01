import type { ReactElement } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
};

export function SectionHeading({ eyebrow, title, description, tone = 'light' }: SectionHeadingProps): ReactElement {
  const isDark = tone === 'dark';
  const eyebrowClassName = isDark ? 'text-lime dark:text-rust' : 'text-rust dark:text-lime';
  const titleClassName = isDark ? 'text-onDark dark:text-onLight' : 'text-onLight dark:text-onDark';
  const descriptionClassName = isDark
    ? 'text-onDarkMuted/72 dark:text-onLightMuted/78'
    : 'text-onLightMuted/78 dark:text-onDarkMuted/72';

  return (
    <div className="max-w-3xl">
      <p className={`mb-3 font-display text-xs font-bold uppercase ${eyebrowClassName}`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl font-bold leading-tight md:text-5xl ${titleClassName}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${descriptionClassName}`}>{description}</p>
      ) : null}
    </div>
  );
}
