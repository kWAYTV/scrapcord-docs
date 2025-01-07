"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function AnimatedTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight"
    >
      scrap
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
      >
        cord
      </motion.span>
    </motion.h1>
  );
}

export function AnimatedDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      className="text-fd-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 md:mb-10"
    >
      The ultimate Discord bot for managing your Rust servers
    </motion.p>
  );
}

export function AnimatedButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
    >
      <Link
        href="/docs"
        className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white font-medium hover:scale-105 transition-all duration-300 backdrop-blur-sm"
      >
        Get Started
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="text-lg"
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}
