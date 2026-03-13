import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Love & Joy",
      category: "Full Stack App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      link: "https://loveandjoy.vercel.app/",
    },
    {
      id: 2,
      title: "SK Fashion Store",
      category: "Premium E-Commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      link: "https://dev-sk-fashion-store.pantheonsite.io/",
    },
    {
      id: 3,
      title: "SK Modern Blog",
      category: "Next.js Fullstack",
      image: "/blog.png",
      link: "https://sk-blog-nextjs-8fw1.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="flex flex-col pt-12">
      <h2 className="text-[3rem] lg:text-[4rem] font-black font-sora leading-none uppercase mb-12">
        <span className="block text-white">Recent</span>
        <span className="block text-[#333333]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#111111] border border-[#222222]">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div>
                <p className="text-secondary text-sm font-bold tracking-wider uppercase mb-1">{project.category}</p>
                <h3 className="text-2xl font-bold text-white font-sora">{project.title}</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
