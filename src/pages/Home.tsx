import React from 'react';
import { Award, Bot, Layers } from 'lucide-react'; 
// import { experiences } from '../data/experienceData';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="pt-20 pb-2 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Joe Kovach
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-6xl mx-auto leading-relaxed">
          I'm a customer obsessed product leader with 10+ years of experience building B2B SaaS products. Currently at <a href='https://www.samsara.com' target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition-colors">Samsara</a> building products used millions of times a day to keep people safe.
        </p>
        <p className="text-xl text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed">
          Prior to Samsara, I built products at <a href='https://www.asana.com' target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition-colors">Asana</a>, <a href='https://www.lob.com' target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition-colors">Lob</a> and <a href='https://www.clearslide.com' target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition-colors">ClearSlide</a>. Former product leader at a few<a href='https://www.ycdb.co/company/public-recreation' target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition-colors"> startups</a>.
        </p>
        <p className="text-xl text-gray-600 mb-10 max-w-6xl mx-auto leading-relaxed">
          I also love playing golf, long distance running, reading good novels, and hiking with my family.
        </p>
        <p className="text-xl text-gray-600 mb-10 max-w-6xl mx-auto leading-relaxed">
          You can contact me at <a href="mailto:hello@joekova.ch" className="text-blue-600 hover:text-blue-900 transition-colors">hello@joekova.ch</a>, or on <a href="https://linkedin.com/in/josephkovach" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition-colors">LinkedIn</a>.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="py-2 border- border-gray-100">
      <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Specializations</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center mb-10">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Readiness</h3>
            <p className="text-gray-600 text-sm">
              Upleveling B2B SaaS products to serve Fortune 500 companies and enterprise clients.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bot className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI/ML Powered Products</h3>
            <p className="text-gray-600 text-sm">
              Leading cross-functional teams to launch innovative AI experiences and new product bets.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Layers className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Platforms (PaP)</h3>
            <p className="text-gray-600 text-sm">
              Building and scaling platforms that power products used by millions of users.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience 
      <section className="py-2">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-px h-full bg-gray-200"></div>
              )}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {exp.company.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700 mb-3">
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Home;