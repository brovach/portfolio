import React from 'react';
import { Award, Bot, Layers } from 'lucide-react';
import PixelPanel from '../components/ui/PixelPanel';

const specializations = [
  {
    icon: Award,
    title: 'Enterprise Readiness',
    body: 'Upleveling B2B SaaS products to serve Fortune 500 companies and enterprise clients.',
  },
  {
    icon: Bot,
    title: 'AI/ML Powered Products',
    body: 'Leading cross-functional teams to launch innovative AI experiences and new product bets.',
  },
  {
    icon: Layers,
    title: 'Platforms (PaaP)',
    body: 'Building and scaling platforms that power products used by millions of users.',
  },
];

const Home: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-28 pt-16 sm:pt-24">
      {/* Hero */}
      <section className="text-center">
        <p className="pixel-eyebrow reveal mb-5">Product Leader · Est. 2014</p>
        <h1 className="pixel-hero reveal mb-10" style={{ animationDelay: '80ms' }}>
          Joe Kovach
        </h1>
      </section>

      {/* Bio */}
      <PixelPanel className="mx-auto max-w-readable p-6 text-left sm:p-8" revealDelay={160}>
        <p className="prose-pixel mb-5">
          I'm a customer obsessed product leader with 10+ years of experience building B2B SaaS products. Currently a
          Product Lead at{' '}
          <a href="https://www.nash.ai" target="_blank" rel="noopener noreferrer" className="link-pixel">
            Nash
          </a>{' '}
          building AI Infrastructure for the logistics industry.
        </p>
        <p className="prose-pixel mb-5">
          Previously at{' '}
          <a href="https://www.samsara.com" target="_blank" rel="noopener noreferrer" className="link-pixel">
            Samsara
          </a>
          ,{' '}
          <a href="https://www.asana.com" target="_blank" rel="noopener noreferrer" className="link-pixel">
            Asana
          </a>
          ,{' '}
          <a href="https://www.lob.com" target="_blank" rel="noopener noreferrer" className="link-pixel">
            Lob
          </a>{' '}
          and{' '}
          <a href="https://www.clearslide.com" target="_blank" rel="noopener noreferrer" className="link-pixel">
            ClearSlide
          </a>
          . Former product leader at a few{' '}
          <a
            href="https://www.ycdb.co/company/public-recreation"
            target="_blank"
            rel="noopener noreferrer"
            className="link-pixel"
          >
            startups
          </a>
          .
        </p>
        <p className="prose-pixel mb-5">
          I also love playing golf, long distance running, reading good novels, and hiking with my family.
        </p>
        <p className="prose-pixel">
          You can contact me at{' '}
          <a href="mailto:hello@joekova.ch" className="link-pixel">
            hello@joekova.ch
          </a>
          , or on{' '}
          <a href="https://linkedin.com/in/josephkovach" target="_blank" rel="noopener noreferrer" className="link-pixel">
            LinkedIn
          </a>
          .
        </p>
      </PixelPanel>

      {/* Specializations */}
      <section className="mt-16">
        <h2 className="pixel-heading reveal mb-10 text-center" style={{ animationDelay: '240ms' }}>
          Specializations
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {specializations.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <article
                key={spec.title}
                className="pixel-card reveal p-6 text-center"
                style={{ animationDelay: `${300 + i * 90}ms` }}
              >
                <span className="pixel-icon mx-auto mb-5 h-14 w-14">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="pixel-subheading mb-3">{spec.title}</h3>
                <p className="prose-pixel">{spec.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
