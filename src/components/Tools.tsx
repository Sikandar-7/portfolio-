import { Code2, MonitorPlay, Paintbrush, PenTool, Github, Webhook } from "lucide-react";

export default function Tools() {
  const tools = [
    { id: 1, name: "React", category: "JavaScript Library", icon: Code2 },
    { id: 2, name: "Next.js", category: "React Framework", icon: MonitorPlay },
    { id: 3, name: "Tailwind CSS", category: "Styling Framework", icon: Paintbrush },
    { id: 4, name: "Figma", category: "UI/UX Design", icon: PenTool },
    { id: 5, name: "GitHub", category: "Version Control", icon: Github },
    { id: 6, name: "Node.js", category: "Backend Runtime", icon: Webhook },
  ];

  return (
    <section id="tools" className="flex flex-col pt-12 border-t border-border">
      <h2 className="text-[3rem] lg:text-[4rem] font-black font-sora leading-none uppercase mb-12 text-center lg:text-left">
        <span className="block text-white">Premium</span>
        <span className="block text-[#333333]">Tools</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div key={tool.id} className="group flex flex-col items-center text-center p-8 bg-[#111111] hover:bg-[#1A1A1A] border border-[#222222] rounded-3xl transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-sora text-white mb-2">{tool.name}</h3>
              <p className="text-sm font-semibold tracking-wide text-muted uppercase">{tool.category}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
