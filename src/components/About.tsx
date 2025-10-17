import { motion } from 'motion/react';
import { Code, GraduationCap, Heart, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto capitalize" style={{ fontSize: '1.125rem', textTransform: 'capitalize' }}>
            A journey from pandemic curiosity to fullStack mastery
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="leading-relaxed" style={{ fontSize: '1.125rem' }}>
                My coding journey began during the pandemic when curiosity led me to explore Python, HTML, CSS, and JavaScript. What started as a way to pass time quickly became 
                a passion that transformed my career path entirely.
              </p>
              
              <p className="leading-relaxed" style={{ fontSize: '1.125rem' }}>
                Today, I'm a FullStack Software Engineer specializing in React, TypeScript, 
                Node.js, and modern web technologies. I've built everything from certificate 
                generation platforms to AI tutoring systems, always pushing the boundaries 
                of what's possible with code.
              </p>

              <p className="leading-relaxed" style={{ fontSize: '1.125rem' }}>
                Beyond coding, I'm passionate about education and community building. I've 
                hosted numerous web development trainings and free webinars like "Breaking 
                Into Tech," helping others start their own tech journeys.
              </p>

              <p className="leading-relaxed" style={{ fontSize: '1.125rem' }}>
                My next chapter involves pursuing opportunities in Japan, where I'm learning 
                the language and culture while working toward my goal of earning a Master's 
                degree on scholarship.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    Technical Excellence
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Fullstack development with React, TypeScript, Node.js, Supabase, 
                  Firebase, Web3, and AI integrations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-green-500 mr-4" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    Education & Training
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Conducting web development bootcamps and public speaking 
                  engagements on tech education and career transition.
                </p>
              </CardContent>
            </Card>

            {/* <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-red-500 mr-4" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    Japan Aspirations
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  120+ days of Japanese language learning, aiming for a Master's 
                  degree in Japan and contributing to the tech ecosystem there.
                </p>
              </CardContent>
            </Card> */}

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-purple-500 mr-4" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    Leadership & Community
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Passionate about leadership development, public speaking, 
                  and building inclusive tech communities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}