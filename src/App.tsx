import { motion } from "framer-motion";
import Header from "./components/Header";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import AboutSection from "./components/AboutSection";
import { skills, projects, aboutSections } from "./data";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div className="min-h-screen bg-black font-mono relative">
      <CursorGlow />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="home" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-green-500 mb-6"
            >
              Hello World!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-xl max-w-2xl mx-auto"
            >
              I am Nolann Adrian, a starting full-stack developer that expertise
              in MongoDB, Express, React, and Node.js.
            </motion.p>
          </motion.div>
        </section>

        <section id="about" className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-green-500 mb-8"
          >
            ./about_me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutSections.map((section, index) => (
              <AboutSection
                key={section.title}
                section={section}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="skills" className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-green-500 mb-8"
          >
            ./technical_skills
          </motion.h2>

          <div className="mb-12">
            <h3 className="text-2xl text-green-400 mb-6">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl text-green-400 mb-6">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.backend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold text-green-500 mb-8"
            >
              ./development_tools
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.tools.map((tool, index) => (
                <SkillCard skill={tool} key={tool.name} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-green-500 mb-8"
          >
            ./projects
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black text-green-500 py-8 mt-16 border-t border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono">© 2025 SNolannAP. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
