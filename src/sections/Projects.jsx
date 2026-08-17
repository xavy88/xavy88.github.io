import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useEffect } from "react";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const projects = [
  {
    title: "SEO Data Dashboard",
    description:
      "",
    image: "/projects/SEOProject-1.jpeg",
    tags: ["SEO", "GSC", "Ahref"],
    link: "#",
    github: "#",
  },
  {
    title: "SEO Data Dashboard",
    description:
      "",
    image: "/projects/SEOProject-2.jpeg",
    tags: ["SEO", "GSC", "Ahref"],
    link: "#",
    github: "#",
  },
  {
    title: "SEO Data Dashboard",
    description:
      "",
    image: "/projects/SEOProject-5.jpeg",
    tags: ["SEO", "GSC", "Ahref"],
    link: "#",
    github: "#",
  },
  {
    title: "SEO Data Dashboard",
    description:
      "",
    image: "/projects/SEOProject-6.jpeg",
    tags: ["SEO", "GSC", "Ahref"],
    link: "#",
    github: "#",
  },
];

const weprojects = [
  {
    title: "Concrete & Demolition Website",
    description:
      "",
    image: "/projects/WebProject-1.jpeg",
    tags: ["Wordpress", "Divi", "UI/UX"],
    link: "#",
    github: "#",
  },
  {
    title: "General Construction Website",
    description: "",
    image: "/projects/WebProject-2.jpeg",
    tags: ["Wordpress", "Divi", "UI/UX", "Performance"],
    link: "#",
    github: "#",
  },
  {
    title: "Construction Website",
    description:
      "",
    image: "/projects/WebProject-3.jpeg",
    tags: ["Wordpress", "Divi", "UI/UX", "Performance"],
    link: "#",
    github: "#",
  },
  {
    title: "Nail Salon Website",
    description:
      "",
    image: "/projects/WebProject-4.jpeg",
    tags: ["Wordpress", "Divi", "UI/UX", "Performance"],
    link: "#",
    github: "#",
  },
  {
    title: "General Contracting Website",
    description:
      "",
    image: "/projects/WebProject-5.jpeg",
    tags: ["Wordpress", "Divi", "UI/UX", "Performance"],
    link: "#",
    github: "#",
  },
  {
    title: "Painting Website",
    description:
      "",
      image: "/projects/WebProject-6.jpeg",
    tags: ["Wordpress", "Divi", "UI/UX", "Performance"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".project-lightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header SEO */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            SEO WORK
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              Results, built to perform.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of SEO growth metrics and websites I’ve built,
            optimized, and improved — combining technical execution with
            data-driven search strategy.
          </p>
        </div>

        {/* Projects Grid SEO */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <a
                  href={project.image}
                  className="project-lightbox block w-full h-full cursor-zoom-in"
                  data-gallery="seo-projects"
                  data-title={project.title}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                  />
                </a>

                {/* Gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t from-card via-card/50 to-transparent
                    opacity-60
                    pointer-events-none
                  "
                />

                {/* Overlay Links */}
                {/* <div
                  className="
                    absolute inset-0
                    flex items-center justify-center gap-4
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none
                  "
                >
                  <a
                    href={project.link}
                    className="
                      p-3 rounded-full glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                      pointer-events-auto
                    "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="
                      p-3 rounded-full glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                      pointer-events-auto
                    "
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="
                      w-5 h-5
                      text-muted-foreground
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header Web */}
        <div className="text-center mx-auto max-w-3xl mb-16 mt-32">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            WORDPRESS WEB DESIGN
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Websites built to rank,
            <span className="font-serif italic font-normal text-white">
              {" "}
              perform, and convert.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of WordPress websites I’ve designed, built, and
            optimized with Elementor and Divi — combining SEO best practices,
            technical performance, user experience, and conversion-focused
            design to turn organic traffic into results.
          </p>
        </div>

        {/* Projects Grid Web */}
        <div className="grid md:grid-cols-2 gap-8">
          {weprojects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <a
                  href={project.image}
                  className="project-lightbox block w-full h-full cursor-zoom-in"
                  data-gallery="web-projects"
                  data-title={project.title}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-scale-down transition-transform duration-700 group-hover:scale-110"
                  />
                </a>

                {/* Gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t from-card via-card/50 to-transparent
                    opacity-60
                    pointer-events-none
                  "
                />

                {/* Overlay Links */}
                {/* <div
                  className="
                    absolute inset-0
                    flex items-center justify-center gap-4
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none
                  "
                >
                  <a
                    href={project.link}
                    className="
                      p-3 rounded-full glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                      pointer-events-auto
                    "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="
                      p-3 rounded-full glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                      pointer-events-auto
                    "
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="
                      w-5 h-5
                      text-muted-foreground
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="/#contact">
          <AnimatedBorderButton>
            Contact me
            <ArrowDown className="w-5 h-5" />
          </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};