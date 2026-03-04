'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from '@/i18n/routing';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.3);
  const t = useTranslations('projects');
  const prefersReducedMotion = useReducedMotion();
  const headingInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 100 };
  const headingTransition = prefersReducedMotion
    ? { duration: 0 }
    : { delay: 0.175 };
  const ctaInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 20 };
  const ctaTransition = prefersReducedMotion ? { duration: 0 } : { delay: 0.3 };

  // Show only first 4 projects
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <div ref={ref}>
        <motion.div
          initial={headingInitial}
          whileInView={{ opacity: 1, y: 0 }}
          transition={headingTransition}
          viewport={{ once: true }}
        >
          <SectionHeading heading={t('heading')} content={t('content')} />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const projectData = project as typeof projectsData[number];
          const projectKey = 'key' in projectData ? projectData.key : null;
          const translatedTitle = projectKey
            ? t(`items.${projectKey}.title`)
            : 'title' in projectData ? projectData.title : '';
          const translatedDescription = projectKey
            ? t(`items.${projectKey}.description`)
            : 'description' in projectData ? projectData.description : '';

          return (
            <Project
              key={projectData.title}
              project={projectData}
              index={index}
              translatedTitle={translatedTitle}
              translatedDescription={translatedDescription}
            />
          );
        })}
      </div>
      <motion.div
        initial={ctaInitial}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ctaTransition}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <Button variant="outline" asChild>
          <Link href="/projects">
            {t('viewMore')}{' '}
            <Icons.arrowRight aria-hidden="true" className="ml-2 size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
