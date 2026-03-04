import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Testimonials',
    hash: '#testimonials',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    key: 'posSaaS',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop', // POS theme
    title: 'Multi-Tenant POS SaaS Platform',
    description:
      'Built a multi-tenant platform for POS systems with separate data for each client. Developed 60+ REST APIs using Spring Boot and Hibernate for various business operations. Optimized database queries to improve performance by 30%. Added Redis caching for faster response times. Implemented logging and monitoring to track system health and fix issues quickly.',
    technologies: [
      'Java 8+',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'MySQL',
      'JWT',
      'React',
      'Microservices',
      'Redis',
      'Hibernate'
    ],
    links: {
      preview: 'https://github.com/sauravsirsat',
      github: 'https://github.com/sauravsirsat',
      githubApi: '',
    },
  },
  {
    key: 'financialInsights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Data/Finance theme
    title: 'Financial Insights Platform',
    description:
      'Developed backend services for processing and analyzing financial datasets. Created data pipelines to handle data validation and transformation. Built REST APIs for data delivery and integrated machine learning models for financial analysis. Used Docker for containerization and implemented monitoring to ensure system reliability.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Docker',
      'Machine Learning',
      'SQL',
      'ETL Pipelines'
    ],
    links: {
      preview: 'https://github.com/sauravsirsat',
      github: 'https://github.com/sauravsirsat',
      githubApi: '',
    },
  },
] as const;

export const experiencesData = [
  {
    key: 'abhyaz',
    title: 'Software Developer Intern',
    company: 'Abhyaz Matlab Technology Centre',
    description:
      'Developed and maintained scalable backend services using Java 8+ and Spring Boot for data-driven business workflows. Implemented REST APIs handling structured and semi-structured datasets with validation and error handling. Performed complex SQL transformations and query tuning to support reporting, auditing, and analytics. Introduced Redis-based caching for frequently accessed data, improving system responsiveness under load. Led incident triage and root cause analysis for production issues, reducing average resolution time by 35%.',
    period: 'Feb 2024 - Mar 2024',
    technologies: [
      'Java 8+',
      'Spring Boot',
      'REST APIs',
      'SQL',
      'Redis',
      'Hibernate'
    ],
  },
  {
    key: 'internpixel',
    title: 'Software Developer Intern',
    company: 'Intern Pixel Pvt. Ltd.',
    description:
      'Collaborated with product managers, designers, and engineers to translate business requirements into technical features. Debugged and resolved 15+ frontend and backend issues through structured root cause analysis. Improved platform stability and delivery timelines by proactively identifying bottlenecks. Contributed to documentation and release notes to support smoother cross-team handoffs.',
    period: 'Jul 2024 - Aug 2024',
    technologies: [
      'Java',
      'Spring Boot',
      'Problem Solving',
      'Debugging',
      'Documentation',
      'Agile'
    ],
  },
] as const;

export const skillsData = [
  { name: 'Java 8+', icon: <Icons.java className="size-12" /> },
  { name: 'Spring Boot', icon: <Icons.springboot className="size-12" /> },
  { name: 'Spring Security', icon: <Icons.springsecurity className="size-12" /> },
  { name: 'MySQL', icon: <Icons.mysql className="size-12" /> },
  { name: 'Hibernate', icon: <Icons.hibernate className="size-12" /> },
  { name: 'Redis', icon: <Icons.redis className="size-12" /> },
  { name: 'Microservices', icon: <Icons.microservices className="size-12" /> },
  { name: 'Docker', icon: <Icons.docker className="size-12" /> },
  { name: 'SQL', icon: <Icons.sql className="size-12" /> },
  { name: 'Apache Spark', icon: <Icons.spark className="size-12" /> },
  { name: 'PySpark', icon: <Icons.pyspark className="size-12" /> },
  { name: 'Git', icon: <Icons.git className="size-12" /> },
  { name: 'GitHub', icon: <Icons.github className="size-12" /> },
  { name: 'Maven', icon: <Icons.maven className="size-12" /> },
  { name: 'JUnit', icon: <Icons.junit className="size-12" /> },
  { name: 'C++', icon: <Icons.cpp className="size-12" /> },
] as const;

export const testimonialsData = [
  {
    key: 'mentor1',
    name: 'Project Mentor',
    position: 'Software Architect',
    company: 'Abhyaz Matlab',
    content:
      "Saurav's ability to handle complex SQL transformations and his proactive approach to incident triage significantly improved our system's reliability. He is a dedicated developer with a strong grasp of Spring Boot.",
    rating: 5,
    avatar: null,
  },
] as const;


