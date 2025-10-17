import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Download,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import pdf from '../../assets/CV.pdf'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:goodness@example.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink);
    toast.success("Email client opened! Thank you for reaching out.");

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const downloadResume = () => {
    // In a real application, this would download the actual resume file
    toast.info("Resume download feature coming soon!");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2
            className="mb-4"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Let's Connect
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.125rem" }}
          >
            Ready to collaborate, discuss opportunities, or just have a
            conversation about tech and innovation?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle style={{ fontSize: "1.5rem" }}>
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  I'm always open to discussing new opportunities,
                  collaborations, or simply connecting with fellow developers
                  and tech enthusiasts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Email</p>
                    <a
                      href="mailto:goodness@example.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      adewuyigoodness1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Location</p>
                    <p className="text-muted-foreground">Ogbomoso, Nigeria</p>
                    <p className="text-sm text-muted-foreground">
                      Open to remote opportunities worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Availability</p>
                    <p className="text-muted-foreground">
                      Available for full-time opportunities
                    </p>
                    {/* <p className="text-sm text-muted-foreground">
                      Especially interested in Japan-based roles
                    </p> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle style={{ fontSize: "1.25rem" }}>
                  Connect on Social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/IDGoodness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors group"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                    <span className="text-sm">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/goodnessadewuyi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                    <span className="text-sm">LinkedIn</span>
                  </a>

                  <a
                    href="https://twitter.com/goodnessadewuyi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors group"
                  >
                    <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                    <span className="text-sm">Twitter</span>
                  </a>

                  <a
                    href={pdf}
                    download
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors group"
                  >
                    <Download className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                    <span className="text-sm">Resume</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="border-2">
              <CardHeader>
                <CardTitle style={{ fontSize: "1.5rem" }}>
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 py-6"
                    style={{ fontSize: "1.125rem" }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Japan Interest Section */}
        {/* <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="border-2 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
            <CardHeader className="text-center">
              <CardTitle
                className="flex items-center justify-center gap-3"
                style={{ fontSize: "1.5rem" }}
              >
                <span>🇯🇵</span>
                Japan Opportunities
              </CardTitle>
              <CardDescription>
                Actively seeking frontend, backend, or fullstack developer roles
                in Japan. Committed to contributing to Japan's tech ecosystem
                while pursuing my Master's degree.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p style={{ fontWeight: "600" }}>Language Learning</p>
                  <p className="text-sm text-muted-foreground">
                    120+ days of Japanese study
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "600" }}>Career Goal</p>
                  <p className="text-sm text-muted-foreground">
                    Master's degree in Japan
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "600" }}>Work Status</p>
                  <p className="text-sm text-muted-foreground">
                    Ready to relocate
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                If you're a recruiter or company looking for dedicated talent in
                Japan, I'd love to discuss how I can contribute to your team.
              </p>
              <Button
                onClick={() => {
                  const subject = encodeURIComponent(
                    "Japan Opportunity Inquiry"
                  );
                  const body = encodeURIComponent(
                    "Hi Goodness,\n\nI saw your portfolio and I'm interested in discussing opportunities in Japan.\n\n"
                  );
                  window.open(
                    `mailto:goodness@example.com?subject=${subject}&body=${body}`
                  );
                }}
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/20"
              >
                Discuss Japan Opportunities
              </Button>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}
