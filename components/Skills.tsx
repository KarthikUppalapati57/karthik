
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        <span className="text-red-500 font-mono text-2xl">04.</span> Core Competencies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category} className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-md border border-gray-700/30 flex flex-col">
            <h3 className="text-sm font-bold text-red-500 mb-4 uppercase tracking-widest border-b border-red-500/20 pb-2">{category}</h3>
            <ul className="space-y-2 flex-grow">
              {SKILLS.filter((skill) => skill.category === category).map((skill) => (
                <li key={skill.name} className="text-gray-400 flex items-center text-sm">
                  <span className="text-red-500 mr-2">▹</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
