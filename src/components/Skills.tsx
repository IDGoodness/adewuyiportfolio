import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Skills() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
      color: "bg-blue-500"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "API Development", "RESTful Services", "Database Design", "Authentication"],
      color: "bg-green-500"
    },
    {
      title: "Cloud & Database",
      skills: ["Supabase", "Firebase", "PostgreSQL", "MongoDB", "Vercel", "Netlify", "AWS"],
      color: "bg-purple-500"
    },
    {
      title: "Modern Technologies",
      skills: ["Web3", "AI Integration", "Blockchain", "Smart Contracts", "Machine Learning APIs", "OpenAI"],
      color: "bg-orange-500"
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "CI/CD", "Testing", "Debugging"],
      color: "bg-gray-500"
    },
    {
      title: "Soft Skills",
      skills: ["Public Speaking", "Technical Training", "Leadership", "Team Collaboration", "Problem Solving", "Mentoring"],
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            A comprehensive toolkit for modern web development and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full border-2 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span style={{ fontSize: '1.25rem' }}>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 hover:bg-accent transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages Section */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle style={{ fontSize: '1.5rem' }}>
                Languages & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL",
                  "React", "Next.js", "Node.js", "Express", "Tailwind", "Firebase"
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-primary/10 to-accent p-4 rounded-lg hover:shadow-md transition-all duration-300 border">
                      <p className="font-medium text-sm">{tech}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}