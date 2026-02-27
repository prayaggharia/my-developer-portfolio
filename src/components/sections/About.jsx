import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { HiCpuChip, HiUserGroup, HiRocketLaunch, HiAcademicCap } from 'react-icons/hi2';
import Tilt from 'react-parallax-tilt';
import '../../css/About.css';

const values = [
  { icon: HiCpuChip, title: 'Clean Architecture', desc: 'Maintainable, scalable code' },
  { icon: HiUserGroup, title: 'Team Leadership', desc: 'Leading squads & agile processes' },
  { icon: HiRocketLaunch, title: 'Performance First', desc: 'Optimized queries & load times' },
  { icon: HiAcademicCap, title: 'Always Learning', desc: 'Backend → fullstack growth' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="about" ref={ref}>
      <motion.div className="about__header" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <span className="about__label">// about</span>
        <h2 className="about__title">Building Software That Ships</h2>
      </motion.div>

      <div className="about__grid">
        <motion.div className="about__text" initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <p>I'm a Full Stack Developer out of <strong>Thunder Bay, Ontario</strong> with 3+ years of experience building enterprise-grade applications. Started at <strong>Tata Consultancy Services</strong> in India working on production analytics systems.</p>
          <p>After completing my <strong>Master's in Computer Science</strong> in Canada, I led a development squad at <strong>Vosyn</strong> and now architect full-stack applications at <strong>Sencia Canada</strong>.</p>
          <p>My zone is the intersection of <strong>backend reliability</strong> and <strong>frontend experience</strong>. Optimized SQL, scalable .NET backends, and clean React interfaces, always with performance and the end user in mind.</p>
        </motion.div>

        <motion.div className="about__values" initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          {values.map(({ icon: Icon, title, desc }, i) => (
            <Tilt key={title} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={400}>
              <motion.div className="about__value-card" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}>
                <div className="about__value-icon"><Icon size={18} /></div>
                <h4 className="about__value-title">{title}</h4>
                <p className="about__value-desc">{desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
