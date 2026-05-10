"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  Mail,
  Gamepad2,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";


export default function Home() {
const [selectedProject, setSelectedProject] = useState<any>(null); 
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-100 to-blue-300 text-slate-900 overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/40 backdrop-blur-lg p-6 rounded-full shadow-xl">
              <Gamepad2 size={60} className="text-cyan-700" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black">
            My Portfolio
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-slate-700">
            Milan M Mababangloob Jr.
          </p>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#projects"
            className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-full text-white font-bold shadow-lg"
          >
            View Projects
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-10 flex items-center gap-3">
            <Sparkles className="text-cyan-600" />
            About Me
          </h2>

          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            I am a 4th-year BSIT student specializing in Game Development at University Perpetual Help System Dalta Calamba. 
            I am passionate about creating games and interactive experiences, and I am currently developing my skills 
            in programming and game design as I complete my degree.

          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Unity",
              "GameMaker",
              "C#",
              "Game Design",
              "Level Design",
              "Story Writing",
            ].map((skill) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={skill}
                className="bg-white/50 backdrop-blur-md rounded-2xl p-6 text-center font-bold shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* PROJECTS */}
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-black mb-12">
        Projects
      </h2>

      {/* Project Data */}
      {(() => {
        const projects = [
          {
            id: 1,
            title: "World of Fantasy",
            image: "/projects/game1.png",
            video: "/projects/game1.mp4",
            desc: "2D turn-based strategy RPG set in the magical city of Eldoria, where an ancient evil has awakened.",
            fulldesc: `
            World of Fantasy is a turn-based strategy game set in the city of Eldoria, which faces a looming threat as an ancient evil resurfaces. Players take control of five distinct adventurers, each with unique abilities, as they work together to defend their homeland.

            This project is a fan-inspired work influenced by the Final Fantasy series. All sprites and background music used in this game are credited to Square Enix and are not original assets created by me.`,
            
            details:
            "Features: turn-based combat, magic system, pixel. Built using GameMaker.",
          },
          {
            id: 2,
            title: "Outbreak: Extraction",
            image: "/projects/game2.png",
            video: "/projects/game2.mp4",
            desc: "3D Third person shooter is a fast-paced survival horror/action-adventure game set during a deadly zombie outbreak.",
            fulldesc: 
            `Outbreak: Extraction is a fast-paced survival horror and action-adventure game set in the midst of a deadly zombie outbreak.
             Players take on the role of a survivor tasked with rescuing trapped hostages and safely extracting them by locating an escape vehicle, all while navigating city streets overwhelmed by the infected.

             The game is inspired by titles such as Resident Evil, Days Gone, and Left 4 Dead, combining intense combat, strategic decision-making, and high-pressure survival objectives.`,
            details:
            "Features: third-person, AI zombies, survival mechanics. Built using Unity.",
          },
        ];

        return (
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={project.id}
                className="bg-white/40 rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-black mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-700 mb-6">
                    {project.desc}
                  </p>

                 <button onClick={() => setSelectedProject(project)}
                  className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl text-white font-bold cursor-pointer">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        );
      })()}
    </section>

      {/* CONTACT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">
            Contact
          </h2>

          <div className="flex justify-center flex-wrap gap-6 mt-10">

            <a
              href="https://github.com/Michiro02"
              target="_blank"
              className="bg-white/50 p-5 rounded-2xl shadow-lg hover:scale-110 transition"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://www.facebook.com/toshiro.hitzugaya.1"
              target="_blank"
              className="bg-white/50 p-5 rounded-2xl shadow-lg hover:scale-110 transition"
            >
              <FaFacebook size={32} />
            </a>

            <a
              href="mailto:YOUR@email.com"
              className="bg-white/50 p-5 rounded-2xl shadow-lg hover:scale-110 transition"
            >
              <Mail size={32} />
            </a>

            <div className="bg-white/50 p-5 rounded-2xl shadow-lg flex items-center gap-3">
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
          className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl"
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
         <p className="text-slate-700 mb-4 whitespace-pre-line">
          {selectedProject.fulldesc}
        </p>

          {/* EXTRA DETAILS */}
          <p className="text-slate-600 text-sm">
            {selectedProject.details}
          </p>
        </div>
      </div>
    )}

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-700">
        © 2026 Milan
      </footer>

    </main>
  );
}