import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>

        <div className="space-y-1">
          {/* Email */}
          <div className="flex items-center space-x-4 p-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-gray-700" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Email</h3>
              <a 
                href="mailto:hello@joekova.ch" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                hello@joekova.ch
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4 p-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-gray-700" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/joekovach" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                linkedin.com/in/josephkovach/
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 p-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-gray-700" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p className="text-gray-600">San Francisco Bay Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;