import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Award, MapPin, Calendar } from 'lucide-react';
import { experiences, projects } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Joe Kovach
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Passionate product leader with 10+ years of experience and a success record of managing the full product life cycle for enterprise B2B SaaS platforms.
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">$5M+</div>
            <div className="text-sm text-gray-600">Revenue Impact</div>
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Get In Touch
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </section>

      {/* Key Highlights */}
      <section className="py-16 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Leadership</h3>
            <p className="text-gray-600 text-sm">
              Led cross-functional teams of 12+ engineers and designers across multiple product initiatives.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Impact</h3>
            <p className="text-gray-600 text-sm">
              Drove measurable business results with 45% engagement increases and $2.5M ARR growth.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Focus</h3>
            <p className="text-gray-600 text-sm">
              Specialized in B2B SaaS platforms serving Fortune 500 companies and enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 border-t border-gray-100">
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
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  {/* Key Metrics */}
                  {exp.metrics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-16 border-t border-gray-100">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Key Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.company}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-sm font-medium text-gray-900">Impact:</p>
                <p className="text-sm text-gray-700">{project.impact}</p>
              </div>
              {project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;