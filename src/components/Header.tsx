'use client';

import { m as motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="flex items-center justify-between p-4 bg-gray-900/50 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 text-purple-500">
            <SparklesIcon />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Delphiy
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between p-4 bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="flex items-center space-x-2">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SparklesIcon className="h-8 w-8 text-purple-500" />
        </motion.div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Delphiy
        </h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
          About
        </a>
        <a href="#features" className="text-gray-300 hover:text-white transition-colors">
          Features
        </a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
          Contact
        </a>
      </nav>
    </motion.header>
  );
} 