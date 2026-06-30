'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useT } from '@/lib/i18n';
import Link from 'next/link';
import { CTASection } from '@/components/site/CTASection';

export default function PricingPage() {
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
    <>
      {/* Header Section */}
      <section className='mx-auto max-w-4xl px-5 pb-10 pt-20 text-center md:px-8 md:pt-28'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('pricing.eyebrow')}
        </p>
        <h1 className='mt-3 font-display text-4xl font-bold text-ink md:text-6xl'>
          {t('pricing.pageTitle')}{' '}
          <span className='text-gradient-brand'>{t('pricing.pageTitleB')}</span>
        </h1>
        <p className='mx-auto mt-5 max-w-xl text-muted-foreground'>{t('pricing.pageSub')}</p>
      </section>

      {/* Pricing Cards Grid */}
      <section className='mx-auto max-w-4xl px-5 pb-24 md:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='show'
          className='grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl mx-auto'
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
                href='/contact?plan=starter'
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
                href='/contact?plan=pro'
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

      <CTASection />
    </>
  );
}
