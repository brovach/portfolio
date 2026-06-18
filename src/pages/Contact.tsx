import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import PixelPanel from '../components/ui/PixelPanel';

const Contact: React.FC = () => {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-28 pt-16 sm:pt-24">
      <h1 className="pixel-hero reveal mb-10 text-center">Get In Touch</h1>

      <PixelPanel className="p-6 sm:p-8" revealDelay={140}>
        <ul className="space-y-6">
          <li className="flex items-center gap-5">
            <span className="pixel-icon h-14 w-14 shrink-0">
              <Mail className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="pixel-subheading mb-1">Email</h2>
              <a href="mailto:hello@joekova.ch" className="link-pixel prose-pixel">
                hello@joekova.ch
              </a>
            </div>
          </li>

          <li className="flex items-center gap-5">
            <span className="pixel-icon h-14 w-14 shrink-0">
              <Linkedin className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="pixel-subheading mb-1">LinkedIn</h2>
              <a
                href="https://linkedin.com/in/josephkovach"
                target="_blank"
                rel="noopener noreferrer"
                className="link-pixel prose-pixel"
              >
                linkedin.com/in/josephkovach
              </a>
            </div>
          </li>

          <li className="flex items-center gap-5">
            <span className="pixel-icon h-14 w-14 shrink-0">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="pixel-subheading mb-1">Location</h2>
              <p className="prose-pixel">San Francisco Bay Area</p>
            </div>
          </li>
        </ul>
      </PixelPanel>
    </div>
  );
};

export default Contact;
