'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Check,
  Boxes,
  ShoppingCart,
  Wallet,
  BarChart3,
  Users,
  ShieldCheck,
  Zap,
  Quote,
  Star,
} from 'lucide-react';
import { CTASection } from '@/components/site/CTASection';
import { modules } from '@/lib/modules';
import { useT } from '@/lib/i18n';
import dashboardImg from '@/assets/dokani-dashboard.png';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeatureGrid />
      <ModulesPreview />
      <Benefits />
      <Testimonials />
      <PricingPreview />
      <CTASection />
    </>
  );
}

function Hero() {
  const { t } = useT();
  return (
    <section className='relative overflow-hidden'>
      <div className='bg-grid absolute inset-0 opacity-40 mask-[radial-gradient(ellipse_at_top,black_30%,transparent_70%)]' />
      <div className='bg-radial-glow absolute inset-0' />
      <div className='relative mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24'>
        <motion.div {...fadeUp} className='mx-auto max-w-3xl text-center'>
          <div className='mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur'>
            <Sparkles className='h-3.5 w-3.5 text-primary' />
            {t('hero.badge')}
          </div>
          <h1 className='mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl'>
            {t('hero.titleA')} <br className='hidden md:block' />
            <span className='text-gradient-brand'>{t('hero.titleB')}</span>
          </h1>
          <p className='mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg'>
            {t('hero.sub')}
          </p>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <Link
              href='/pricing'
              className='inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow hover:scale-[1.02]'
            >
              {t('hero.cta1')} <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-ink hover:border-primary hover:text-primary'
            >
              {t('hero.cta2')}
            </Link>
          </div>
          <p className='mt-4 text-xs text-muted-foreground'>{t('hero.note')}</p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className='relative mx-auto mt-16 max-w-6xl'
        >
          <div className='absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-primary/30 via-primary-glow/20 to-transparent blur-2xl' />
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className='overflow-hidden rounded-2xl border border-border bg-card shadow-card'>
      <div className='flex items-center gap-2 border-b border-border bg-surface px-4 py-3'>
        <div className='flex gap-1.5'>
          <span className='h-2.5 w-2.5 rounded-full bg-destructive/70' />
          <span className='h-2.5 w-2.5 rounded-full bg-primary/70' />
          <span className='h-2.5 w-2.5 rounded-full bg-muted-foreground/30' />
        </div>
        <div className='ml-3 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground'>
          app.dokani360.com / dashboard
        </div>
      </div>
      <Image
        src={dashboardImg}
        alt='Dokani dashboard showing sales overview, purchase overview, top selling products and customer dues'
        className='block w-full'
        width={1840}
        height={780}
      />
    </div>
  );
}

function LogoStrip() {
  const { t } = useT();
  const names = [
    'Generation 21',
    'Shuponno',
    'Master Corporation',
    'Buy Point',
    'ALMAS Denim Fashion',
    'Amex Trade',
  ];
  return (
    <section className='border-y border-border bg-surface py-10'>
      <div className='mx-auto max-w-7xl px-5 md:px-8'>
        <p className='text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
          {t('trusted.label')}
        </p>
        <div className='mt-6 grid grid-cols-2 gap-6 md:grid-cols-6'>
          {names.map((n) => (
            <div
              key={n}
              className='text-center font-display text-base font-semibold text-muted-foreground/70 md:text-lg'
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const { t } = useT();
  const features = [
    { icon: Boxes, title: t('features.items.inventoryT'), desc: t('features.items.inventoryD') },
    { icon: ShoppingCart, title: t('features.items.salesT'), desc: t('features.items.salesD') },
    { icon: Wallet, title: t('features.items.accountsT'), desc: t('features.items.accountsD') },
    { icon: BarChart3, title: t('features.items.reportsT'), desc: t('features.items.reportsD') },
    { icon: Users, title: t('features.items.teamsT'), desc: t('features.items.teamsD') },
    {
      icon: ShieldCheck,
      title: t('features.items.securityT'),
      desc: t('features.items.securityD'),
    },
  ];
  return (
    <section className='mx-auto max-w-7xl px-5 py-24 md:px-8'>
      <motion.div {...fadeUp} className='mx-auto max-w-2xl text-center'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('features.eyebrow')}
        </p>
        <h2 className='mt-3 font-display text-3xl font-bold text-ink md:text-5xl'>
          {t('features.title')}
        </h2>
        <p className='mt-4 text-muted-foreground'>{t('features.sub')}</p>
      </motion.div>

      <div className='mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className='group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft'
          >
            <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground'>
              <f.icon className='h-5 w-5' />
            </div>
            <h3 className='mt-5 font-display text-lg font-semibold text-ink'>{f.title}</h3>
            <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ModulesPreview() {
  const { t } = useT();
  const preview = modules.slice(0, 8);
  return (
    <section className='bg-surface py-24'>
      <div className='mx-auto max-w-7xl px-5 md:px-8'>
        <div className='flex flex-col items-end justify-between gap-6 md:flex-row'>
          <motion.div {...fadeUp} className='max-w-xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
              {t('modulesPreview.eyebrow')}
            </p>
            <h2 className='mt-3 font-display text-3xl font-bold text-ink md:text-5xl'>
              {t('modulesPreview.title')}
            </h2>
          </motion.div>
          <Link
            href='/modules'
            className='inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline'
          >
            {t('modulesPreview.explore')} <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-2 gap-3 md:grid-cols-4'>
          {preview.map((m, i) => (
            <motion.div
              key={m.slug}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className='rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40'
            >
              <m.icon className='h-6 w-6 text-primary' />
              <p className='mt-4 font-display text-sm font-semibold text-ink'>
                {t(`modules.${m.slug}.name`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const { t } = useT();
  const benefits = [
    t('benefits.items.setup'),
    t('benefits.items.migration'),
    t('benefits.items.cloud'),
    t('benefits.items.lang'),
    t('benefits.items.print'),
    t('benefits.items.support'),
  ];
  return (
    <section className='mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8'>
      <motion.div {...fadeUp}>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('benefits.eyebrow')}
        </p>
        <h2 className='mt-3 font-display text-3xl font-bold text-ink md:text-5xl'>
          {t('benefits.title')}
        </h2>
        <p className='mt-4 max-w-md text-muted-foreground'>{t('benefits.sub')}</p>
        <ul className='mt-8 grid gap-3 sm:grid-cols-2'>
          {benefits.map((b) => (
            <li key={b} className='flex items-start gap-2 text-sm text-foreground'>
              <span className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary'>
                <Check className='h-3 w-3' strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div {...fadeUp} className='relative'>
        <div className='absolute -inset-6 -z-10 rounded-3xl bg-linear-to-br from-primary/25 to-primary-glow/10 blur-2xl' />
        <div className='grid gap-4 sm:grid-cols-2'>
          {[
            {
              icon: Zap,
              t: '10× faster',
              s: 'POS-style invoicing built for speed at the counter.',
            },
            {
              icon: ShieldCheck,
              t: 'Audit-ready',
              s: 'Every action logged. Every number reconciled.',
            },
            {
              icon: BarChart3,
              t: 'Decisions, not data',
              s: 'Reports that tell you what to do next.',
            },
            { icon: Users, t: 'Team-friendly', s: 'Roles for cashiers, accountants and owners.' },
          ].map((c) => (
            <div key={c.t} className='rounded-2xl border border-border bg-card p-5 shadow-card'>
              <c.icon className='h-5 w-5 text-primary' />
              <p className='mt-4 font-display text-lg font-semibold text-ink'>{c.t}</p>
              <p className='mt-1 text-sm text-muted-foreground'>{c.s}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Testimonials() {
  const { t } = useT();
  const items = [
    {
      q: 'We replaced four tools with Dokani. Stock errors basically vanished.',
      n: 'Imran Hossain',
      r: 'Owner, Generation 21',
    },
    {
      q: "Closing the day used to take an hour. Now it's two clicks.",
      n: 'Nusrat Jahan',
      r: 'Accountant, Buy Point',
    },
    {
      q: 'The reports actually answer the questions we have as owners.',
      n: 'Tariq Ahmed',
      r: 'MD, ALMAS Denim Fashion',
    },
  ];
  return (
    <section className='bg-ink py-24 text-background'>
      <div className='mx-auto max-w-7xl px-5 md:px-8'>
        <motion.div {...fadeUp} className='mx-auto max-w-2xl text-center'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow'>
            {t('testimonials.eyebrow')}
          </p>
          <h2 className='mt-3 font-display text-3xl font-bold md:text-5xl'>
            {t('testimonials.title')}
          </h2>
        </motion.div>
        <div className='mt-14 grid gap-5 md:grid-cols-3'>
          {items.map((it, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className='rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur'
            >
              <Quote className='h-6 w-6 text-primary-glow' />
              <p className='mt-4 text-base leading-relaxed text-background/90'>
                &quot;{it.q}&quot;
              </p>
              <div className='mt-6 flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground'>
                  {it.n[0]}
                </div>
                <div>
                  <p className='text-sm font-semibold'>{it.n}</p>
                  <p className='text-xs text-background/60'>{it.r}</p>
                </div>
              </div>
              <div className='mt-4 flex gap-0.5 text-primary-glow'>
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className='h-3.5 w-3.5 fill-current' />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const { t } = useT();

  const features = [
    t('pricing.feat1'),
    t('pricing.feat2'),
    t('pricing.feat3'),
    t('pricing.feat4'),
    t('pricing.feat5'),
    t('pricing.feat6'),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className='mx-auto max-w-7xl px-5 py-24 md:px-8'>
      <motion.div {...fadeUp} className='mx-auto max-w-2xl text-center'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('pricing.eyebrow')}
        </p>
        <h2 className='mt-3 font-display text-3xl font-bold text-ink md:text-5xl'>
          {t('pricing.title')}
        </h2>
        <p className='mt-4 text-muted-foreground'>{t('pricing.pageSub')}</p>
      </motion.div>

      {/* Pricing Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-100px' }}
        className='grid grid-cols-1 gap-8 md:grid-cols-2 mt-16 max-w-5xl mx-auto md:max-w-3xl'
      >
        {/* Starter Plan Card */}
        <motion.div
          variants={cardVariants}
          className='flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:scale-[1.01]'
        >
          <div>
            <div className='mb-4'>
              <h3 className='font-display text-2xl font-bold text-ink'>
                {t('pricing.starterName')}
              </h3>
              <p className='mt-2 min-h-[40px] text-sm text-muted-foreground'>
                {t('pricing.starterDesc')}
              </p>
            </div>

            <div className='my-6 min-h-[85px]'>
              <p className='font-display text-4xl font-bold text-ink md:text-5xl'>
                ৳{t('pricing.starterPrice')}
                <span className='text-sm font-medium text-muted-foreground ml-1'>
                  {t('pricing.perMo')}
                </span>
              </p>
              <p className='mt-2 text-xs text-muted-foreground uppercase tracking-wider font-bold'>
                {t('pricing.starterBilled')}
              </p>
            </div>

            <Link
              href='/contact'
              className='mt-2 flex w-full items-center justify-center rounded-full border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary-soft hover:scale-[1.02]'
            >
              {t('pricing.starterChoose')}
            </Link>

            <hr className='my-8 border-border' />

            <div>
              <p className='text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4'>
                {t('pricing.includes')}
              </p>
              <ul className='space-y-3.5 text-sm'>
                {features.map((f) => (
                  <li key={f} className='flex items-start gap-3 text-foreground'>
                    <Check className='mt-0.5 h-4.5 w-4.5 shrink-0 text-primary' />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Pro Plan Card (Highlighted) */}
        <motion.div
          variants={cardVariants}
          className='relative flex flex-col justify-between rounded-3xl border-2 border-primary bg-card p-8 shadow-glow transition-all duration-300 hover:scale-[1.01]'
        >
          <span className='absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow'>
            {t('pricing.mostPopular')}
          </span>

          <div>
            <div className='mb-4'>
              <h3 className='font-display text-2xl font-bold text-ink'>{t('pricing.proName')}</h3>
              <p className='mt-2 min-h-[40px] text-sm text-muted-foreground'>
                {t('pricing.proDesc')}
              </p>
            </div>

            <div className='my-6 min-h-[85px]'>
              <p className='font-display text-4xl font-bold text-ink md:text-5xl'>
                ৳{t('pricing.proPrice')}
                <span className='text-sm font-medium text-muted-foreground ml-1'>
                  {t('pricing.perYr')}
                </span>
              </p>
              <p className='mt-2 text-xs text-primary uppercase tracking-wider font-bold'>
                {t('pricing.proBilled')}
              </p>
            </div>

            <Link
              href='/contact'
              className='mt-2 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-200 hover:bg-primary-glow hover:scale-[1.02]'
            >
              {t('pricing.proChoose')}
            </Link>

            <hr className='my-8 border-border' />

            <div>
              <p className='text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4'>
                {t('pricing.includes')}
              </p>
              <ul className='space-y-3.5 text-sm'>
                {features.map((f) => (
                  <li key={f} className='flex items-start gap-3 text-foreground'>
                    <Check className='mt-0.5 h-4.5 w-4.5 shrink-0 text-primary' />
                    <span className='font-medium'>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
