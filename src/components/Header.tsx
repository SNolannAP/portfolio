import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Home,
  Folder,
  BriefcaseBusiness,
} from "lucide-react";

const Header: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "snolannap";
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6 px-4 sm:px-6 lg:px-8 bg-black border-b border-green-500 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold text-green-500 font-mono cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("home")}
        >
          {text}
          <span className="animate-pulse">_</span>
        </motion.h1>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6 mr-8">
            {[
              { id: "home", icon: Home, label: "Home" },
              { id: "about", icon: User, label: "About" },
              { id: "skills", icon: Code, label: "Skills" },
              { id: "projects", icon: Folder, label: "Projects" },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 text-sm ${
                  activeSection === item.id ? "text-green-400" : "text-gray-400"
                } hover:text-green-500 transition-colors`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>

          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/snolannap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-green-500 hover:text-green-400 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/snolannap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-green-500 hover:text-green-400 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:nolannadrian@gmail.com"
            >
              <Mail className="w-6 h-6 text-green-500 hover:text-green-400 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BriefcaseBusiness className="w-6 h-6 text-green-500 hover:text-green-400 transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
