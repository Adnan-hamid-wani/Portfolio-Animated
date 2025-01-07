import { motion } from 'framer-motion';

interface EducationCardProps {
  year: string;
  degree: string;
  institution: string;
  CGPA: number;
}

export function EducationCard({ year, degree, institution, CGPA }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
    >
      <div className="text-sm text-blue-300 mb-2">{year}</div>
      <h3 className="text-xl font-bold text-white mb-2">{degree}</h3>
      <div className="text-lg text-white/80 mb-3">{institution}</div>
      <p className="text-white/60">Percentage: {CGPA}</p>
    </motion.div>
  );
}