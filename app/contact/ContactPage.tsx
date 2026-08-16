'use client';

import { useT } from '@/lib/i18n';
import { CheckCircle2, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useT();

  const email = 'dokani.sup@gmail.com';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const company_name = formData.get('company_name')?.toString().trim();
    const details = formData.get('details')?.toString().trim();

    try {
      const response = await fetch(
        'https://erm-server.m360ict.com/api/v1/public/common/service-request',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_name: 'Dokani',
            name,
            email,
            phone,
            ...(company_name && { company_name }),
            ...(details && { details }),
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to submit service request');
      }

      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='mx-auto max-w-4xl px-5 pb-12 pt-20 text-center md:px-8 md:pt-28'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('contact.eyebrow')}
        </p>

        <h1 className='mt-3 font-display text-4xl font-bold text-ink md:text-6xl'>
          {t('contact.titleA')} <span className='text-gradient-brand'>{t('contact.titleB')}</span>
        </h1>

        <p className='mx-auto mt-5 max-w-xl text-muted-foreground'>{t('contact.sub')}</p>
      </section>

      <section className='mx-auto grid max-w-6xl gap-8 px-5 pb-20 md:grid-cols-5 md:px-8'>
        <div className='space-y-4 md:col-span-2'>
          {/* Phone */}
          <div className='relative overflow-hidden rounded-2xl border-2 border-primary bg-linear-to-br from-primary-soft via-card to-card p-5 shadow-glow'>
            <span className='absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground'>
              <Sparkles className='h-3 w-3' /> {t('contact.recommended')}
            </span>

            <div className='flex items-start gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft'>
                <Phone className='h-5 w-5' />
              </div>

              <div>
                <p className='text-xs font-semibold uppercase tracking-wider text-primary'>
                  {t('contact.phone')}
                </p>

                <a
                  href='tel:09638336699'
                  className='mt-1 block font-display text-xl font-bold text-ink hover:text-primary'
                >
                  09638-336699
                </a>

                <p className='mt-1 text-xs text-muted-foreground'>Sun–Thu · 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-start gap-4 rounded-2xl border border-border bg-card p-5'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary'>
              <Mail className='h-5 w-5' />
            </div>

            <div>
              <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                {t('contact.email')}
              </p>

              <a
                href={`mailto:${email}`}
                className='mt-1 block text-sm font-medium text-ink hover:text-primary'
              >
                {email}
              </a>
            </div>
          </div>

          {/* Office */}
          <div className='flex items-start gap-4 rounded-2xl border border-border bg-card p-5'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary'>
              <MapPin className='h-5 w-5' />
            </div>

            <div>
              <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                {t('contact.office')}
              </p>

              <p className='mt-1 text-sm font-medium leading-relaxed text-ink'>
                House# 74, Road# 7, Block# H,
                <br />
                Banani, Dhaka-1213
              </p>
            </div>
          </div>

          {/* Demo */}
          <div className='rounded-2xl border border-border bg-ink p-6 text-background'>
            <p className='font-display text-lg font-semibold'>{t('contact.bookDemoT')}</p>

            <p className='mt-2 text-sm text-background/70'>{t('contact.bookDemoD')}</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className='space-y-4 rounded-3xl border border-border bg-card p-7 md:col-span-3 md:p-9'
        >
          {sent ? (
            <div className='flex flex-col items-center justify-center py-16 text-center'>
              <CheckCircle2 className='h-12 w-12 text-primary' />

              <h3 className='mt-4 font-display text-2xl font-bold text-ink'>{t('contact.sent')}</h3>

              <p className='mt-2 max-w-sm text-sm text-muted-foreground'>{t('contact.sentD')}</p>

              <button
                onClick={() => {
                  setSent(false);
                  setError('');
                }}
                type='button'
                className='mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow sm:w-auto'
              >
                {t('contact.tryAgain')} <Send className='h-4 w-4' />
              </button>
            </div>
          ) : (
            <>
              <div className='grid gap-4 sm:grid-cols-2'>
                <Field
                  label={t('contact.fName')}
                  name='name'
                  placeholder='Imran Hossain'
                  required
                />

                <Field
                  label={t('contact.wEmail')}
                  name='email'
                  type='email'
                  placeholder='you@company.com'
                  required
                />
              </div>

              <div className='grid gap-4 sm:grid-cols-2'>
                <Field label={t('contact.fPhone')} name='phone' placeholder='+880 17...' required />
                <Field
                  label={t('contact.company')}
                  name='company_name'
                  placeholder='Buy Point'
                  required={false}
                />
              </div>

              <div>
                <label htmlFor='details' className='mb-1.5 block text-xs font-semibold text-ink'>
                  {t('contact.help')}
                </label>

                <textarea
                  id='details'
                  rows={5}
                  name='details'
                  placeholder={t('contact.helpPh')}
                  className='w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'
                />
              </div>

              {error && <p className='text-sm font-medium text-red-500'>{error}</p>}

              <button
                type='submit'
                disabled={loading}
                className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto'
              >
                {loading ? 'Sending...' : t('contact.send')}
                {!loading && <Send className='h-4 w-4' />}
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className='mb-1.5 block text-xs font-semibold text-ink'>
        {label}

        {required && <span className='ml-1 text-red-500'>*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className='w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'
      />
    </div>
  );
}
