'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import profileImg from './WhatsApp Image 2026-02-09 at 5.20.53 PM.jpeg';

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations('intro');

  // TODO: Consider adding more tech icons based on project stack
  const techIcons = [
    { icon: Icons.java, color: 'text-orange-500', top: '-10%', left: '-20%', delay: 0 },
    { icon: Icons.springboot, color: 'text-green-500', top: '20%', right: '-25%', delay: 1 },
    { icon: Icons.sql, color: 'text-blue-500', bottom: '0%', left: '-25%', delay: 0.5 },
    { icon: Icons.docker, color: 'text-sky-500', bottom: '-15%', right: '10%', delay: 1.5 },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[90vh] scroll-mt-96 flex-col items-center justify-center gap-12 overflow-hidden py-20 text-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Moving blobs for visual effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 right-1/4 h-[350px] w-[350px] rounded-full bg-rose-500/10 blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Available badge */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="#contact"
          className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 backdrop-blur-md transition-all hover:border-violet-500/50 hover:bg-violet-500/10"
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-muted-foreground font-mono text-xs font-semibold tracking-wide transition-colors group-hover:text-foreground">
            {t('available').toUpperCase()}
          </span>
        </Link>
      </motion.div>

      {/* Profile section with floating tech icons */}
      <div className="relative">
        {/* Floating tech icons around profile */}
        {techIcons.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              opacity: { duration: 1 },
              y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
              delay: tech.delay
            }}
            style={{ position: 'absolute', ...tech, zIndex: 10 }}
            className={`hidden cursor-pointer rounded-xl border border-white/10 bg-white/5 p-2 shadow-xl backdrop-blur-sm sm:block ${tech.color}`}
          >
            <tech.icon className="size-6" />
          </motion.div>
        ))}

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotate: -10, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          className="relative z-0"
        >
          <div className="absolute -inset-4 animate-spin-slow rounded-full bg-gradient-to-tr from-violet-500 via-transparent to-rose-500 opacity-20 blur-xl" />
          <Image
            src={profileImg}
            alt="Saurav Sirsat Profile"
            width={180}
            height={180}
            priority
            className="size-36 rounded-[2.5rem] object-cover shadow-2xl ring-8 ring-black bg-black transition-all duration-700 hover:rounded-3xl sm:size-44"
          />
        </motion.div>
      </div>

      <div className="z-10 max-w-4xl space-y-8">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-muted-foreground font-mono text-sm uppercase tracking-[0.3em]">
              {t('greeting')}
            </span>
            <h1 className="relative mt-2 font-heading text-6xl font-black leading-none tracking-tighter sm:text-8xl">
              <span className="relative inline-block bg-gradient-to-r from-violet-600 via-fuchsia-400 to-violet-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-slow">
                {t('name')}
              </span>
            </h1>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-medium text-foreground/80 sm:text-2xl"
          >
            Design. <span className="italic text-violet-500">Build.</span> Optimize.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mx-auto max-w-2xl text-lg font-light leading-relaxed sm:text-xl"
          >
            {t('description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-sm font-medium text-muted-foreground/40"
        >
          <div className="h-px w-8 bg-border" />
          <span className="uppercase tracking-widest">{t('location')}</span>
          <div className="h-px w-8 bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-2xl bg-violet-600 px-10 text-lg font-semibold shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] transition-all hover:bg-violet-700 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.6)] active:scale-95"
            >
              <Link href="#contact">
                {t('getInTouch')}
                <Icons.arrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 rounded-2xl border-2 px-10 text-lg font-semibold transition-all hover:bg-violet-500/10 active:scale-95"
            >
              <Link href="#projects">{t('viewProjects')}</Link>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/saurav-sirsat-136848227"
              target="_blank"
              className="group transition-transform hover:-translate-y-1"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/50 backdrop-blur-sm transition-colors group-hover:bg-violet-500/10 group-hover:text-violet-500">
                <Icons.linkedin className="size-6" />
              </div>
            </Link>
            <Link
              href="https://github.com/saurav-sirsat"
              target="_blank"
              className="group transition-transform hover:-translate-y-1"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/50 backdrop-blur-sm transition-colors group-hover:bg-violet-500/10 group-hover:text-violet-500">
                <Icons.github className="size-6" />
              </div>
            </Link>
            <div className="h-10 w-px bg-border/50" />
            <a
              href="/resume_saurav.pdf"
              target="_blank"
              className="text-muted-foreground hover:text-foreground group flex items-center gap-2 font-mono text-sm transition-colors"
            >
              <Icons.download className="size-4 group-hover:animate-bounce" />
              {t('downloadCV')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
