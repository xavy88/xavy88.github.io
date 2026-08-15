import { SearchCheck, BrainCircuit, Gauge, Workflow } from "lucide-react";

const highlights = [
  {
    icon: SearchCheck,
    title: "SEO Strategy",
    description:
      "Driving sustainable organic growth through data-led SEO strategies, technical optimization, and search intelligence.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Leveraging AI and automation to accelerate research, content optimization, audits, and digital workflows.",
  },
  {
    icon: Gauge,
    title: "Web Performance",
    description: "Building fast, scalable, conversion-focused websites with performance and technical SEO at the core.",
  },
  {
    icon: Workflow,
    title: "Growth & Leadership",
    description:
      "Leading teams and aligning SEO, development, and strategy to turn digital initiatives into measurable growth.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
             EXPERTISE 
              <span className="font-serif italic font-normal text-white">
                {" "}
                 & IMPACT ·
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
               I currently lead both SEO and Web Development departments, aligning strategy, execution,
                and automation to deliver search-optimized, fast, and conversion-focused websites for 
                businesses ranging from startups to enterprise-level organizations.
              </p>
              <p>
              My expertise sits at the intersection of SEO, WordPress development, and AI implementation,
               leveraging data, automation, and machine learning tools to improve keyword research, content 
               optimization, technical audits, and overall service quality.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I’m passionate about building intelligent, future-ready SEO and web solutions, leading teams,
                 and helping businesses grow through performance-focused digital strategies."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
