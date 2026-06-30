'use client';
import { Logo } from './Logo';
import { useT } from '@/lib/i18n';
import Link from 'next/link';

export function Footer() {
  const { t, lang } = useT();
  return (
    <footer className='mt-24 border-t border-border bg-surface'>
      <div className='mx-auto max-w-7xl px-5 py-16 md:px-8'>
        <div className='grid gap-12 md:grid-cols-5'>
          <div className='md:col-span-2'>
            <Link href='/' className='flex items-center' aria-label='Dokani — home'>
              <Logo showTagline />
            </Link>
            <p className='mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground'>
              {t('footer.desc')}
            </p>
            {/* <div className='mt-5 flex gap-2'>
              {[Mail].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary'
                >
                  <Icon className='h-4 w-4' />
                </a>
              ))}
            </div> */}
          </div>

          <FooterCol
            title={t('footer.product')}
            links={[
              { to: '/features', label: t('nav.features') },
              { to: '/modules', label: t('nav.modules') },
              { to: '/pricing', label: t('nav.pricing') },
            ]}
          />
          <FooterCol
            title={t('footer.company')}
            links={[
              { to: '/about', label: t('nav.about') },
              { to: '/contact', label: t('nav.contact') },
            ]}
          />
          <FooterCol
            title={t('footer.getStarted')}
            links={[
              { to: '/pricing', label: t('nav.startTrial') },
              { to: '/contact', label: t('footer.bookDemo') },
              { to: '/contact', label: t('footer.contactSales') },
            ]}
          />
        </div>

        <div className='mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center'>
          <p>
            © {new Date().getFullYear()} Dokani. {t('footer.rights')}
          </p>
          <p>
            {lang === 'en' ? t('footer.tagline') : ''}{' '}
            <Link
              href='https://m360ict.com'
              target='_blank'
              className='font-semibold text-ink transition hover:text-primary'
            >
              M360ICT LTD
            </Link>{' '}
            {lang === 'bn' ? t('footer.tagline') : ''}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: '/features' | '/modules' | '/pricing' | '/about' | '/contact'; label: string }[];
}) {
  return (
    <div>
      <h4 className='text-sm font-semibold text-ink'>{title}</h4>
      <ul className='mt-4 space-y-2.5'>
        {links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.to}
              className='text-sm text-muted-foreground transition hover:text-primary'
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
