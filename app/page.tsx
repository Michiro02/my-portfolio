"use client";

import { useState, useRef } from "react";

import { motion } from "framer-motion";

import {
  Mail,
  Gamepad2,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";

import {
  FaGithub,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";


export default function Home() {
const [selectedProject, setSelectedProject] = useState<any>(null); 
const [darkMode, setDarkMode] = useState(false);
const aboutRef = useRef<HTMLElement>(null);

  return (
    <main
  className={`min-h-screen overflow-hidden transition-all duration-500 ${
    darkMode
      ? "bg-[#020617] text-white"
      : "bg-gradient-to-b from-sky-200 via-cyan-100 to-blue-300 text-slate-900"
  }`}
>
      {/* HEADER */}
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center gap-8 text-white font-medium">

        <a href="#about" className="hover:text-cyan-300 transition">
          About
        </a>

        <a href="#experience" className="hover:text-cyan-300 transition">
          Experience
        </a>

        <a href="#projects" className="hover:text-cyan-300 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-300 transition">
          Contact
        </a>

        {/* DARK MODE BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>

    </nav>

     {/* HERO */}
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            className={`backdrop-blur-lg p-6 rounded-full shadow-xl border-4 ${
              darkMode ? "bg-white/10 border-cyan-400" : "bg-white/40 border-cyan-500"
            }`}
          >
            <Gamepad2
              size={70}
              className={darkMode ? "text-cyan-400" : "text-cyan-700"}
            />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Milan M. Mababangloob Jr.
        </h1>

        <p className={`mt-6 text-xl md:text-3xl font-medium transition-colors duration-500`}>
          <span className={`${darkMode ? "text-cyan-400" : "text-cyan-700"}`}>
            Game Developer
          </span>{" "}
          & <span className={`${darkMode ? "text-slate-200" : "text-slate-900"}`}>
            Quality Assurance
          </span>
        </p>

       {/* Scroll Prompt */}
        <div className="mt-30 flex flex-col items-center gap-2 animate-bounce">
          <motion.p
            className={`font-bold text-lg transition-colors duration-500 cursor-pointer ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ color: darkMode ? "#22d3ee" : "#0ea5e9", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more about me
          </motion.p>

          <motion.div
            className={`text-3xl transition-colors duration-500 cursor-pointer ${
              darkMode ? "text-cyan-400" : "text-cyan-700"
            }`}
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ y: 8, scale: 1.2, color: darkMode ? "#22d3ee" : "#0ea5e9" }}
            whileTap={{ scale: 0.95 }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>

      {/* ABOUT */}
    <section ref={aboutRef} id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-black mb-10 flex items-center gap-3">
          <Sparkles className="text-cyan-600" />
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/projects/profile.jpg"
              alt="Milan M. Mababangloob Jr."
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-xl border-4 border-cyan-500"
            />
          </div>

          {/* About Text */}
          <div className={`backdrop-blur-lg rounded-3xl p-6 shadow-xl flex-1 ${darkMode ? "bg-white/10" : "bg-white/40"}`}>
            <p className={`${darkMode ? "text-slate-200" : "text-slate-900"} text-lg md:text-xl`}>
              I am a 4th-year BSIT student specializing in Game Development at the University of Perpetual Help System Dalta Calamba. 
              I am passionate about creating games and interactive experiences, 
              and I am currently developing my programming and game design skills through personal projects and tutorials. 
              I am eager to contribute to real-world projects and learn from industry professionals.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Experience */}
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-5xl font-black mb-12 flex items-center gap-3">
        <Sparkles className="text-cyan-600" />
        Experience
      </h2>

      <div className="relative border-l-2 border-cyan-500 pl-8 space-y-8">
        {[
          { name: "Hello World", 
            info: "My first line of code.", 
            since: "2017" },

          { name: "BS in Information Technology with Specialization in Game Development", 
            info: "University of Perpetual Help System Dalta Calamba.", since:"2023 - 2027"},

          { name: "First Game Project: World of Fantasy",
            info: "Created a 2D turn-based strategy RPG from scratch by following tutorials, customizing mechanics, and designing unique levels and characters.",
            since:"2025"},

          { name: "Second Game Project: Outbreak Extraction",
            info: "Created a 3D third-person survival horror game from scratch, implementing AI zombies, gameplay systems, and interactive environments, while learning through tutorials.",
            since: "2025"}

        ].map((experience) => (
          <div key={experience.name} className="relative">
            {/* Circle */}
            <div className="absolute -left-5 top-0 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white/20"></div>

            {/* Experience content */}
            <div className={`backdrop-blur-lg p-4 rounded-2xl shadow-md ${darkMode ? "bg-white/10" : "bg-white/40"}`}>
              <h3 className={`font-bold text-xl ${darkMode ? "text-white" : "text-slate-900"}`}>
                {experience.name}
              </h3>
              <p className={`${darkMode ? "text-slate-300" : "text-slate-700"} mt-1`}>
                {experience.info}
              </p>
              <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} text-sm mt-1`}>
                {experience.since}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* PROJECTS */}
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className={`text-5xl font-black mb-12 ${darkMode ? "text-white" : "text-slate-900"}`}>
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            id: 1,
            title: "World of Fantasy",
            image: "/projects/game1.png",
            video: "/projects/game1.mp4",
            desc: "2D turn-based strategy RPG set in the magical city of Eldoria, where an ancient evil has awakened.",
            fulldesc: `
              World of Fantasy is a turn-based strategy game set in the city of Eldoria, which faces a looming threat as an ancient evil resurfaces. Players take control of five distinct adventurers, each with unique abilities, as they work together to defend their homeland.

              This project is a fan-inspired work influenced by the Final Fantasy series. All sprites and background music used in this game are credited to Square Enix and are not original assets created by me.
            `,
            details: "Features: turn-based combat, magic system, pixel. Built using GameMaker.",
          },
          {
            id: 2,
            title: "Outbreak: Extraction",
            image: "/projects/game2.png",
            video: "/projects/game2.mp4",
            desc: "3D Third person shooter is a fast-paced survival horror/action-adventure game set during a deadly zombie outbreak.",
            fulldesc: `
              Outbreak: Extraction is a fast-paced survival horror and action-adventure game set in the midst of a deadly zombie outbreak.
              Players take on the role of a survivor tasked with rescuing trapped hostages and safely extracting them by locating an escape vehicle, all while navigating city streets overwhelmed by the infected.

              The game is inspired by titles such as Resident Evil, Days Gone, and Left 4 Dead, combining intense combat, strategic decision-making, and high-pressure survival objectives.
            `,
            details: "Features: third-person, AI zombies, survival mechanics. Built using Unity.",
          },
        ].map((project) => (
          <motion.div
            whileHover={{ y: -10 }}
            key={project.id}
            className={`rounded-3xl overflow-hidden shadow-xl ${darkMode ? "bg-white/10" : "bg-white/40"}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className={`text-2xl font-black mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                {project.title}
              </h3>

              <p className={`mb-6 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                {project.desc}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl text-white font-bold cursor-pointer"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

      {/* CONTACT */}
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-5xl font-black mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
          Contact
        </h2>

        <div className="flex justify-center flex-wrap gap-6 mt-10">

          <a
            href="https://github.com/Michiro02"
            target="_blank"
            className={`p-5 rounded-2xl shadow-lg hover:scale-110 transition ${
              darkMode ? "bg-white/10 text-white" : "bg-white/50 text-slate-900"
            }`}
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            className={`p-5 rounded-2xl shadow-lg hover:scale-110 transition ${
              darkMode ? "bg-white/10 text-white" : "bg-white/50 text-slate-900"
            }`}
          >
            <FaFacebook size={32} />
          </a>

          <a
            href="mailto:YOUR@email.com"
            className={`p-5 rounded-2xl shadow-lg hover:scale-110 transition ${
              darkMode ? "bg-white/10 text-white" : "bg-white/50 text-slate-900"
            }`}
          >
            <Mail size={32} />
          </a>

          <div
            className={`p-5 rounded-2xl shadow-lg flex items-center gap-3 ${
              darkMode ? "bg-white/10 text-white" : "bg-white/50 text-slate-900"
            }`}
          >
            <FaDiscord size={32} />
            karino.shuka.
          </div>

        </div>
      </div>
    </section>

     {/*View Details Button Click*/}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`rounded-3xl max-w-lg w-full p-6 relative shadow-2xl transition-all ${
              darkMode
                ? "bg-[#1e293b] text-white border border-white/20"
                : "bg-white text-slate-900 border border-white/40"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-1 right-3 text-3xl font-bold cursor-pointer"
            >
              ×
            </button>

            {/* Video Preview */}
            <div className="w-full aspect-video bg-black rounded-2xl mb-4 overflow-hidden">
              <video
                src={selectedProject.video}
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* TITLE */}
            <h2 className="text-3xl font-black mb-2">
              {selectedProject.title}
            </h2>

            {/* SHORT DESC */}
            <p className={`${darkMode ? "text-slate-200" : "text-slate-700"} mb-4 whitespace-pre-line`}>
              {selectedProject.fulldesc}
            </p>

            {/* EXTRA DETAILS */}
            <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} text-sm`}>
              {selectedProject.details}
            </p>
          </div>
        </div>
      )}
      <hr></hr>

      {/* FOOTER */}
    <footer
      className={`py-5 text-center transition-colors duration-500 ${
        darkMode
          ? "bg-[#020617] text-white border-t border-white/20"
          : "bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-300 text-slate-900 border-t border-slate-200"
      }`}
    >
      © 2026 Milan M. Mababangloob Jr.
    </footer>

    </main>
  );
}