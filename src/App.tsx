import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Speaking } from './components/Speaking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add meta tags for SEO
    const metaTags = [
      { name: 'description', content: 'Goodness Adewuyi - Software Engineer, Educator, and Public Speaker. Fullstack developer specializing in React, TypeScript, Node.js, and modern web technologies. Available for opportunities in Japan.' },
      { name: 'keywords', content: 'Goodness Adewuyi, Software Engineer, Fullstack Developer, React, TypeScript, Node.js, Web Development, Japan, Public Speaker, Trainer' },
      { name: 'author', content: 'Goodness Adewuyi' },
      { property: 'og:title', content: 'Goodness Adewuyi - Software Engineer & Educator' },
      { property: 'og:description', content: 'Fullstack Software Engineer passionate about React, TypeScript, and modern web technologies. Available for opportunities in Japan.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Goodness Adewuyi - Software Engineer & Educator' },
      { name: 'twitter:description', content: 'Fullstack Software Engineer passionate about React, TypeScript, and modern web technologies. Available for opportunities in Japan.' }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (!existingTag) {
        const metaElement = document.createElement('meta');
        if (tag.name) metaElement.setAttribute('name', tag.name);
        if (tag.property) metaElement.setAttribute('property', tag.property);
        metaElement.setAttribute('content', tag.content);
        document.head.appendChild(metaElement);
      }
    });

    // Set page title
    document.title = 'Goodness Adewuyi - Software Engineer & Educator';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Toast notifications */}
      <Toaster position="top-right" />
      
      {/* Dark mode toggle */}
      <DarkModeToggle />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Speaking />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}