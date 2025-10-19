import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import certPlat from '../../assets/imgs/certPlat.png';
import aiApp from '../../assets/imgs/aiApp.png';
import compound from '../../assets/imgs/compound.png';
import calculator from '../../assets/imgs/calculator.png';

export function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const projects = [
    {
      title: "Certificate Generation Platform",
      description:
        "A comprehensive platform for automated certificate generation and distribution. Built for educational institutions and training organizations to streamline their certification process.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Supabase",
        "PDF Generation",
      ],
      image: certPlat,
      githubUrl: "https://github.com/IDGoodness/genomac-certificate-generator",
      liveUrl: "https://genomac-certificate-generator.vercel.app",
      featured: true,
    },
    {
      title: "AI Tutoring Platform",
      description:
        "An intelligent tutoring system that provides personalized learning experiences. Features AI-powered content generation, progress tracking, and adaptive learning paths.",
      technologies: [
        "Next.js",
        "OpenAI API",
        "Firebase",
        "TailwindCSS",
        "Machine Learning",
      ],
      image: aiApp,
      githubUrl: "https://github.com/IDGoodness/Konoha-App",
      liveUrl: "https://konoha-app.vercel.app/",
      featured: true,
    },
    {
      title: "NFT Mint Bot",
      description:
        "An automated NFT minting bot with advanced features like rarity detection, gas optimization, and real-time market analysis. Built for the Web3 ecosystem.",
      technologies: [
        "JavaScript",
        "Smart Contracts",
        "Ethereum",
        "Python",
        "Web3.py",
        "APIs",
      ],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZnQlMjBtaW50fGVufDF8fHx8MTc1OTU4NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      githubUrl: "https://github.com/IDGoodness/mintBot",
      liveUrl: "",
      featured: false,
    },
    {
      title: "Compound Interest Calculator",
      description:
        "A simple and intuitive web application for calculating compound interest. Users can input their principal amount, interest rate, and duration to see the potential returns on their investment.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
      image: compound,
      githubUrl:
        "https://github.com/IDGoodness/React-Compound-Interest-Calculator",
      liveUrl: "https://react-compound-interest-calculator-delta.vercel.app/",
      featured: false,
    },
    {
      title: "JavaScript Calculator",
      description:
        "A sleek and responsive calculator application built with vanilla JavaScript. Features basic arithmetic operations, a clean user interface, and smooth animations.",
      technologies: ["JavaScript", "HTML", "CSS", "SCSS", "Less"],
      image: calculator,
      githubUrl: "https://github.com/IDGoodness/JavaScriptProject-E-Commerce",
      liveUrl: "https://javascript-calculator-opal-alpha.vercel.app/",
      featured: false,
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A comprehensive personal finance management application with budget tracking, expense categorization, and financial goal setting. Built with modern web technologies.",
      technologies: [
        "React Native",
        "Supabase",
        "Chart.js",
        "Expo",
        "TypeScript",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdHJhY2tlcnxlbnwxfHx8fDE3NTk1ODU1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      githubUrl: "https://github.com/goodnessadewuyi/finance-tracker",
      liveUrl: "",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2
            className="mb-4"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Featured Projects
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.125rem" }}
          >
            A showcase of my technical expertise and problem-solving
            capabilities
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-2 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle style={{ fontSize: "1.25rem" }}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-accent transition-colors"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary hover:bg-primary/90"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.6 }}>
          <h3
            className="mb-8 text-center"
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full border hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle style={{ fontSize: "1.125rem" }}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-accent transition-colors"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-primary hover:bg-primary/90"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}