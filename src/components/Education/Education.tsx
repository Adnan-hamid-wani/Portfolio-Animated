import { motion } from 'framer-motion';
import { EducationCard } from './EducationCard';

const educationData = [
  {
    year: '2020 - 2024',
    degree: 'Bachelors of Technology in Computer Science Engineering Hons.',
    institution: 'Lovely Professional University',
    CGPA: '77%.'
  },
  {
    year: '2018 - 2019',
    degree: '12th Grade',
    institution: 'Govt. Higher Secondary School Kashmir',
    CGPA: '71%'
  },
  {
    year: '2016 - 2017',
    degree: 'SRM Welkin School',
    institution: 'Community College of Technology',
    CGPA: '89%'
  }
];

export function Education() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-12 "
      >
        Educational Background
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            {...education}
          />
        ))}
      </div>
    </div>
  );
}