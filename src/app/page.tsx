// Navbar removed as requested
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 relative flex flex-col lg:flex-row gap-12 lg:gap-20">
      
      {/* Left Sticky Column */}
      <ProfileCard />
      
      {/* Right Scrollable Content */}
      <div className="flex-1 flex flex-col gap-32 pb-32">
        <Hero />
        <Projects />
        <Experience />
        <Tools />
        <Contact />
      </div>
    </main>
  );
}
