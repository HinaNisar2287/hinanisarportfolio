"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    "MS Excel",
    "MS Word",
    "MS PowerPoint",
    "Presentation Skills",
    "Communication",
    "Statistical Python",
    "HTML",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Canva",
    "Plant Tissue Culture Techniques",
    "Plant Identification",
    "Field Work Techniques",
    "Laboratory Techniques",
    "Research & Observation",
    "Scientific Writing",
    "Teamwork",
    "Time Management",
  ];

  const interests = [
    "Plant Taxonomy",
    "Plant Physiology",
    "Biodiversity",
    "Environmental Botany",
    "Soil Sciences",
    "Plant Ecology",
    "Field & Laboratory Work",
    "Research & Observation",
    "Scientific Writing",
    "Plant Tissue Culture",
  ];

  const projects = [
    {
      number: "01",
      title: "Hina Portfolio",
      category: "Personal Website",
      icon: "💻",
      description:
        "A personal portfolio presenting my academic background, botanical interests, technical skills, and professional development.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "Portfolio Project",
    },
    {
      number: "02",
      title: "Plant Diversity & Taxonomy",
      category: "Academic Botany",
      icon: "🌿",
      description:
        "An academic project concept focused on plant identification, classification, biodiversity, and the study of plant diversity.",
      tags: ["Taxonomy", "Biodiversity", "Observation"],
      status: "Academic Interest",
    },
    {
      number: "03",
      title: "Plant & Environmental Research",
      category: "Environmental Botany",
      icon: "🔬",
      description:
        "A research-focused project concept exploring plant physiology, environmental conditions, soil properties, and sustainable ecosystems.",
      tags: ["Plant Science", "Soil Science", "Research"],
      status: "Research Interest",
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:hinanisar2287@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07130d] text-white selection:bg-emerald-600 selection:text-white">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07130d]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-2xl font-black tracking-tight">
            HN<span className="text-emerald-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-emerald-400">Home</a>
            <a href="#about" className="transition hover:text-emerald-400">About</a>
            <a href="#skills" className="transition hover:text-emerald-400">Skills</a>
            <a href="#interests" className="transition hover:text-emerald-400">Interests</a>
            <a href="#projects" className="transition hover:text-emerald-400">Projects</a>
            <a href="#contact" className="transition hover:text-emerald-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-600 hover:text-white sm:px-5"
          >
            Let's Connect
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-emerald-600/15 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-500/10 blur-[110px]" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            MPhil Botany Student
          </div>

          <p className="mb-3 text-lg text-slate-400">
            Hello, welcome to my portfolio. I'm
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hina
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-green-600 bg-clip-text text-transparent">
              Nisar.
            </span>
          </h1>

          <h2 className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
            Exploring Plant Science,
            <br />
            Discovering Nature's Diversity.
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-slate-400">
            I am an MPhil Botany student at the University of Sargodha,
            passionate about plant taxonomy, physiology, biodiversity,
            and environmental sustainability. I am also learning web
            development and AI to connect scientific knowledge with
            innovative technology.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-600 px-7 py-3.5 font-bold shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-400"
            >
              Explore My Work ↗
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-bold transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400">
            <span>🌿 Botany</span>
            <span>🔬 Research</span>
            <span>💻 Technology</span>
          </div>
        </div>

        {/* PROFILE IMAGE: public/botany.jpeg */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-600/30 to-lime-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#152440] via-[#10291d] to-[#091a10] p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">
                MY PROFILE
              </span>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                HN / 01
              </span>
            </div>

            <div className="relative mx-auto my-8 aspect-square w-full max-w-[270px] overflow-hidden rounded-full border-2 border-emerald-400/50 bg-emerald-900/20 shadow-[0_0_70px_rgba(16,185,129,0.16)]">
              <img
                src="/botany.jpeg"
                alt="Botany profile photograph"
                className="h-full w-full rounded-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-[#07130d]/75 py-3 text-center">
                <p className="px-4 text-xs font-medium tracking-wider text-lime-300">
                  MPhil BOTANY STUDENT
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold">Hina Nisar</h3>
              <p className="mt-2 text-sm text-slate-400">
                University of Sargodha
              </p>
              <p className="mt-2 text-sm text-lime-300">
                Plant Science • Research • Technology
              </p>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
                <div className="text-2xl">🌱</div>
                <p className="mt-2 text-xs text-slate-300">Plants</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
                <div className="text-2xl">🔬</div>
                <p className="mt-2 text-xs text-slate-300">Research</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
                <div className="text-2xl">💻</div>
                <p className="mt-2 text-xs text-slate-300">Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/5 bg-[#0a1b12] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
              About Me
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Science, Nature
              <br />
              & <span className="text-emerald-400">Innovation.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I am an MPhil Botany student at the University of Sargodha.
              My academic interests include plant taxonomy, plant
              physiology, biodiversity, plant ecology, and environmental
              sustainability.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Alongside my botanical studies, I am developing skills in
              web development, data analysis, and artificial intelligence
              to explore how technology can support scientific research.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#10251a] p-6">
              <div className="mb-4 text-3xl">🎓</div>
              <h3 className="text-lg font-bold">Education</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                MPhil Botany
                <br />
                University of Sargodha
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#10251a] p-6">
              <div className="mb-4 text-3xl">🌿</div>
              <h3 className="text-lg font-bold">Plant Science</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Exploring plant diversity, physiology, taxonomy, and
                environmental interactions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#10251a] p-6">
              <div className="mb-4 text-3xl">🔬</div>
              <h3 className="text-lg font-bold">Research</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Interested in scientific observation, laboratory
                techniques, and environmental research.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#10251a] p-6">
              <div className="mb-4 text-3xl">💻</div>
              <h3 className="text-lg font-bold">Technology</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Learning web development, Python, data analysis, and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
            What I Can Do
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            My <span className="text-emerald-400">Skills.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            My skills combine botanical knowledge, research practices,
            communication, and developing digital capabilities.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2.5 text-sm text-slate-200 transition hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS SECTION */}
      <section
        id="interests"
        className="scroll-mt-24 border-y border-white/5 bg-[#0a1b12] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
              Areas I Explore
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Botanical
              <br />
              <span className="text-emerald-400">Interests.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I am interested in understanding plants, their diversity,
              their physiological processes, and their relationships
              with soil and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#10251a] p-4 transition hover:border-emerald-400/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-slate-200">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTANY IMAGE GALLERY */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
            The World of Plants
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Botany <span className="text-emerald-400">Gallery.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Plant science connects us with nature, biodiversity, and
            environmental sustainability.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10251a]">
              <img
                src="/botany.jpeg"
                alt="Botany and plant science"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-bold">Plant Science</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Discovering plant structure, growth, and diversity.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10251a]">
              <img
                src="/botany.jpeg"
                alt="Plant biodiversity"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-bold">Plant Biodiversity</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Exploring the diversity of plant species.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10251a]">
              <img
                src="/botany.jpeg"
                alt="Botanical research"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-bold">Botanical Research</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Connecting laboratory work with environmental research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/5 bg-[#0a1b12] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
                Academic & Digital Work
              </p>

              <h2 className="text-4xl font-black sm:text-5xl">
                My <span className="text-emerald-400">Projects.</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-400">
              A collection of personal development and botanical
              research interests.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-3xl border border-white/10 bg-[#10251a] p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-950/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-emerald-400">
                    PROJECT {project.number}
                  </span>
                  <span className="text-3xl">{project.icon}</span>
                </div>

                <div className="my-7 h-40 overflow-hidden rounded-2xl border border-white/5 bg-[#142b1e]">
                  <img
                    src="/botany.jpeg"
                    alt={`${project.title} - Botany portfolio project`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <p className="text-xs font-semibold uppercase tracking-widest text-lime-300">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold transition group-hover:text-emerald-300">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-emerald-400">
                  {project.status}
                  <span className="float-right transition group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
              Get in Touch
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Let's Connect
              <br />
              & <span className="text-emerald-400">Collaborate.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              I welcome opportunities to connect with students,
              researchers, and professionals interested in Botany,
              biodiversity, environmental sustainability, and technology.
            </p>

            <a
              href="mailto:hinanisar2287@gmail.com"
              className="mt-8 inline-flex max-w-full items-center gap-4 rounded-2xl border border-white/10 bg-[#10251a] p-4 transition hover:border-emerald-400/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600/15 text-xl">
                ✉️
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-slate-400">
                  Email Me
                </span>

                <span className="mt-1 block break-all font-semibold text-emerald-300">
                  hinanisar2287@gmail.com
                </span>
              </span>
            </a>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/HinaNisar2287"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-[#10251a] p-6 shadow-xl sm:p-8"
          >
            <h3 className="text-2xl font-bold">Send a Message</h3>

            <p className="mt-2 text-sm text-slate-400">
              Complete this form to prepare an email.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#07130d] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#07130d] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Write your message here..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#07130d] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-6 py-4 font-bold shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Prepare Email ↗
              </button>

              <p className="text-xs leading-5 text-slate-500">
                This form opens your default email application. It does
                not send messages directly from the website.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="text-xl font-black">
            HN<span className="text-emerald-400">.</span>
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hina Nisar. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            Back to Top ↑
          </a>
        </div>

        <p className="mt-5 text-center text-xs text-slate-600">
          Growing through science, research, and creativity. 🌱
        </p>
      </footer>
    </main>
  );
}