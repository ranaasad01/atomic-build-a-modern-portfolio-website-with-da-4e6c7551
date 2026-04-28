"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Code2, Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const highlights = [
  { icon: Calendar, label: "Experience", value: "5+ Years" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Coffee, label: "Projects Done", value: "40+ Projects" },
  { icon: Code2, label: "Status", value: "Open to Work" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image side */}
          <motion.div variants={fadeUp} className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-700/50 shadow-2xl shadow-indigo-500/10">
                {/* Profile placeholder with gradient */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                      AM
                    </div>
                    <p className="text-white/80 text-sm font-medium">Alex Morgan</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-xl px-4 py-2.5 shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="space-y-6">
            <motion.div variants={fadeUp}>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase">
                About Me
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Passionate about building{" "}
                <span className="text-gradient">great software</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
            >
              I&apos;m a full-stack developer with over 5 years of experience building scalable web
              applications. I specialize in the JavaScript ecosystem — from crafting pixel-perfect
              UIs with React and Next.js to designing robust backend systems with Node.js and
              PostgreSQL.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
            >
              I care deeply about developer experience, performance, and accessibility. When I&apos;m
              not coding, you&apos;ll find me contributing to open-source projects, writing technical
              articles, or exploring the latest in web technology.
            </motion.p>

            {/* Highlights grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-3 pt-2"
            >
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3 pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
