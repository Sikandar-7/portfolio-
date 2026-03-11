export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Freelance",
      date: "2024 — Present",
      description: "Building custom full-stack web applications, e-commerce platforms, and dashboards for various clients using Next.js, React, and modern backend architectures.",
    },
    {
      id: 2,
      role: "Software Engineering Intern",
      company: "xNerds Solutions",
      date: "2023 — 2024",
      description: "Collaborated with senior engineers to develop scalable web solutions. Assisted in frontend development, debugging, and integrating RESTful APIs to improve application performance.",
    },
  ];

  return (
    <section id="experience" className="flex flex-col pt-12 border-t border-border">
      <h2 className="text-[3rem] lg:text-[4rem] font-black font-sora leading-none uppercase mb-16">
        <span className="block text-white">02 Years Of</span>
        <span className="block text-[#333333]">Experience</span>
      </h2>

      <div className="flex flex-col">
        {experiences.map((exp) => (
          <div key={exp.id} className="group relative border-b border-[#222222] py-8 last:border-b-0 hover:bg-[#111111] -mx-6 px-6 lg:-mx-12 lg:px-12 rounded-3xl transition-colors cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold font-sora text-white">
                {exp.role} <span className="text-muted font-normal text-xl">— {exp.company}</span>
              </h3>
              <span className="text-sm font-bold tracking-widest text-muted uppercase shrink-0">
                {exp.date}
              </span>
            </div>
            <p className="text-muted leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
