import { Experience, Project } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechFlow Solutions',
    position: 'Senior Product Manager',
    duration: '2021 - Present',
    location: 'San Francisco, CA',
    description: 'Leading product strategy and development for enterprise B2B SaaS platform serving 500+ companies.',
    achievements: [
      'Increased user engagement by 45% through data-driven feature prioritization',
      'Led cross-functional team of 12 engineers and designers',
      'Launched 3 major product releases with 99.9% uptime'
    ],
    metrics: ['45% engagement increase', '500+ enterprise clients', '99.9% uptime']
  },
  {
    id: '2',
    company: 'DataSync Corp',
    position: 'Product Manager',
    duration: '2019 - 2021',
    location: 'Austin, TX',
    description: 'Managed product roadmap for analytics platform used by Fortune 500 companies.',
    achievements: [
      'Drove $2.5M ARR growth through strategic feature development',
      'Reduced customer churn by 30% with improved onboarding flow',
      'Established product metrics framework adopted company-wide'
    ],
    metrics: ['$2.5M ARR growth', '30% churn reduction', '15+ Fortune 500 clients']
  },
  {
    id: '3',
    company: 'InnovateLabs',
    position: 'Associate Product Manager',
    duration: '2017 - 2019',
    location: 'Seattle, WA',
    description: 'Supported product development for cloud infrastructure tools targeting mid-market businesses.',
    achievements: [
      'Launched mobile app with 50K+ downloads in first quarter',
      'Improved API response times by 60% through optimization initiatives',
      'Conducted 100+ user interviews to inform product decisions'
    ],
    metrics: ['50K+ app downloads', '60% performance improvement', '100+ user interviews']
  },
  {
    id: '4',
    company: 'StartupVenture',
    position: 'Product Analyst',
    duration: '2015 - 2017',
    location: 'New York, NY',
    description: 'Analyzed user behavior and market trends to support product strategy for fintech startup.',
    achievements: [
      'Built analytics dashboard used by entire product team',
      'Identified key user segments leading to 25% conversion increase',
      'Created A/B testing framework for product experiments'
    ],
    metrics: ['25% conversion increase', '10+ A/B tests', '5 user segments identified']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Dashboard Redesign',
    company: 'TechFlow Solutions',
    description: 'Complete UX overhaul of main analytics dashboard used by 500+ enterprise clients.',
    impact: 'Increased daily active users by 35% and reduced support tickets by 40%',
    technologies: ['React', 'D3.js', 'PostgreSQL']
  },
  {
    id: '2',
    title: 'API Integration Platform',
    company: 'DataSync Corp',
    description: 'New self-service API integration tool for enterprise customers.',
    impact: 'Reduced integration time from weeks to hours, driving $1.2M in new revenue',
    technologies: ['Node.js', 'GraphQL', 'Docker']
  },
  {
    id: '3',
    title: 'Mobile-First Onboarding',
    company: 'InnovateLabs',
    description: 'Redesigned user onboarding flow with mobile-first approach.',
    impact: 'Improved completion rate by 55% and reduced time-to-value by 3 days',
    technologies: ['React Native', 'Firebase', 'Analytics']
  }
];