import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Speaking() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const events = [
    {
      title: "Breaking Into Tech: A Complete Guide",
      type: "Webinar",
      description: "A comprehensive webinar covering essential strategies for transitioning into the tech industry, including skill development, portfolio building, and job search techniques.",
      date: "September 2024",
      location: "Virtual",
      attendees: "500+",
      topics: ["Career Transition", "Portfolio Building", "Job Search", "Skills Development"],
      imageUrl: "https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHNwZWFraW5nfGVufDF8fHx8MTc1OTU4NTU2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      recordingUrl: "https://youtube.com/watch?v=example"
    },
    {
      title: "Modern React Development Workshop",
      type: "Training Bootcamp",
      description: "Intensive hands-on training covering React fundamentals, hooks, state management, and modern development practices. Participants built real-world applications.",
      date: "August 2024",
      location: "Lagos, Nigeria",
      attendees: "150+",
      topics: ["React", "TypeScript", "State Management", "Best Practices"],
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHdvcmtzaG9wfGVufDF8fHx8MTc1OTU4NTU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      recordingUrl: ""
    },
    {
      title: "JavaScript Fundamentals for Beginners",
      type: "Training Course",
      description: "A beginner-friendly course introducing JavaScript concepts, DOM manipulation, and modern ES6+ features. Designed for complete programming newcomers.",
      date: "July 2024",
      location: "Virtual",
      attendees: "300+",
      topics: ["JavaScript", "DOM Manipulation", "ES6+", "Web APIs"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzU5NTg1NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      recordingUrl: "https://youtube.com/watch?v=example2"
    },
    {
      title: "Building Your First Web Application",
      type: "Workshop",
      description: "Practical workshop guiding participants through building a complete web application from scratch using HTML, CSS, and JavaScript.",
      date: "June 2024",
      location: "Abuja, Nigeria",
      attendees: "100+",
      topics: ["HTML", "CSS", "JavaScript", "Project Development"],
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc1OTU4NTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      recordingUrl: ""
    },
    {
      title: "Tech Leadership in the Digital Age",
      type: "Conference Talk",
      description: "Keynote presentation on leadership principles in tech, building inclusive teams, and fostering innovation in digital-first organizations.",
      date: "May 2024",
      location: "Virtual Conference",
      attendees: "1000+",
      topics: ["Leadership", "Team Building", "Innovation", "Digital Transformation"],
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbGVhZGVyc2hpcHxlbnwxfHx8fDE3NTk1ODU1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      recordingUrl: "https://youtube.com/watch?v=example3"
    },
    {
      title: "Web Development Career Paths",
      type: "Panel Discussion",
      description: "Panel discussion exploring different career paths in web development, from frontend to fullstack to specialized roles.",
      date: "April 2024",
      location: "Virtual",
      attendees: "250+",
      topics: ["Career Development", "Specialization", "Industry Trends", "Job Market"],
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lbCUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzU5NTg1NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      recordingUrl: ""
    }
  ];

  return (
    <section id="speaking" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Speaking & Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Sharing knowledge and empowering the next generation of developers
          </p>
        </motion.div>

        <div className="grid gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-2 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <ImageWithFallback
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover min-h-[200px] lg:min-h-[250px]"
                    />
                  </div>
                  
                  <div className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary">
                          {event.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees} attendees
                        </div>
                      </div>
                      
                      <CardTitle style={{ fontSize: '1.5rem' }}>
                        {event.title}
                      </CardTitle>
                      
                      <CardDescription className="leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-2" style={{ fontSize: '1rem', fontWeight: '600' }}>
                            Topics Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {event.topics.map((topic) => (
                              <Badge key={topic} variant="secondary">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {event.recordingUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="hover:bg-accent transition-colors"
                          >
                            <a
                              href={event.recordingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Watch Recording
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="border-2 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle style={{ fontSize: '1.5rem' }}>
                Interested in Having Me Speak?
              </CardTitle>
              <CardDescription>
                I'm always excited to share knowledge and connect with tech communities. 
                Let's discuss how I can contribute to your next event or training program.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 px-8 py-3"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}