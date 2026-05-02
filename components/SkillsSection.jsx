"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    description:
      "Building responsive, accessible, and dynamic user interfaces.",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Backend",
    description:
      "Architecting scalable and high-performance server-side systems.",
    items: ["Node.js", "Golang", "Express.js"],
  },
  {
    category: "Database",
    description: "Designing efficient schemas and managing data persistence.",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    description:
      "Deploying and orchestrating resilient containerized applications.",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "Security & Payments",
    description:
      "Implementing secure transactions and robust banking API integrations.",
    items: ["mTLS", "Banking APIs", "Payment Gateways", "Escrow Systems"],
  },
  {
    category: "Tools",
    description: "Utilizing industry-standard tools for reliable development.",
    items: ["Git", "Linux", "Postman"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="mb-20 md:mb-32">
      <div className="mb-12 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50"
        >
          Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-semibold tracking-tight text-white md:text-5xl"
        >
          What I Build With
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-white/60"
        >
          Leveraging a modern technology stack to build scalable, secure, and
          high-performance applications from the ground up.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            variants={cardVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-500 hover:bg-white/[0.04]"
          >
            {/* Subtle glow effect on hover */}
            <div
              className={`absolute -inset-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : ""
              }`}
              style={{ pointerEvents: "none" }}
            />

            <div>
              <h3 className="mb-3 text-xl font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                {skillGroup.category}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/70">
                {skillGroup.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
