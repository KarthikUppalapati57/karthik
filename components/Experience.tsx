
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        <span className="text-red-500 font-mono text-2xl">02.</span> Professional Journey
      </h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Mobile) */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-red-500/30 md:hidden"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {/* Date Column */}
              <div className="md:text-right">
                <p className="text-red-500 font-mono text-sm uppercase tracking-wider">{exp.period}</p>
              </div>

              {/* Content Column */}
              <div className="md:col-span-3 border-l-0 md:border-l-2 md:border-red-500/20 md:pl-8 pb-4">
                <h3 className="text-xl font-bold text-gray-100 mb-1">
                  {exp.role} <span className="text-red-500">@ {exp.company}</span>
                </h3>
                <p className="text-gray-400 text-sm mb-4 italic">{exp.location}</p>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                      <span className="text-red-500 mr-2 mt-1.5 flex-shrink-0">
                        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
