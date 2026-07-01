import { motion } from 'motion/react';
import { Typewriter } from './Typewriter';
import { Terminal } from './Terminal';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function Sections() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText('gauravjoshiaa1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    // Try to open the mail client directly in the current window to avoid blank tabs.
    // If blocked by iframe sandbox, the user still has the email copied to clipboard!
    window.location.href = 'mailto:gauravjoshiaa1@gmail.com';
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-sky-glow font-mono text-sm tracking-widest uppercase mb-4">Initializing profile sequence...</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-text-main tracking-tighter mb-2">
              Gaurav Joshi.
            </h1>
            <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-muted to-text-main/50 mb-6">
              I architect digital experiences.
            </h3>
            <div className="text-xl md:text-2xl pt-2 h-10">
              <Typewriter words={[
                "Full-Stack Developer", 
                "Salesforce Developer", 
                "Problem Solver"
              ]} />
            </div>
            <p className="max-w-xl text-text-muted leading-relaxed pt-6 text-lg">
              Final-year B.Tech CSE student specializing in building high-performance, scalable web applications and accessible, human-centered products. Bridging the gap between design and robust engineering.
            </p>
            <div className="flex gap-4 pt-10">
              <a href="#projects" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full font-mono text-sm uppercase tracking-widest text-sky-glow border border-sky-glow/50 hover:border-sky-glow transition-all duration-300">
                <div className="absolute inset-0 w-0 bg-sky-glow/10 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative">Execute Projects</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'GitHub Commits', value: '500+' },
              { label: 'Discord Members', value: '350+' },
              { label: 'Current GPA', value: '8.2' },
              { label: 'Projects Completed', value: '8+' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl text-center flex flex-col gap-2 relative group overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-glow/10 to-cerulean/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-4xl md:text-5xl font-bold text-gradient mb-2 relative z-10">{stat.value}</span>
                <span className="text-xs md:text-sm text-text-muted font-mono uppercase tracking-widest relative z-10">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-text-main mb-8 flex items-center gap-4">
              <span className="text-sky-glow font-mono text-xl">01.</span> About Me
              <div className="h-px bg-white/10 flex-1"></div>
            </h2>
            <div className="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                Hello! My name is Gaurav Joshi and I enjoy creating things that live on the internet. 
                My interest in web development started back in high school when I decided to try editing 
                custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, I am a final-year Computer Science engineering student at 
                <span className="text-sky-glow"> Graphic Era University</span>. I've had the privilege of 
                working on a diverse set of projects, from AI-powered PR validators to full-stack containerized 
                applications deployed on Azure.
              </p>
              <p>
                Outside of building software, I manage an active Discord community of 350+ members 
                focused on collaborative academic learning and sharing knowledge about tech.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-text-main mb-12 flex items-center gap-4">
              <span className="text-sky-glow font-mono text-xl">02.</span> Core Skills
              <div className="h-px bg-white/10 flex-1"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Programming Languages', skills: ['C', 'C++', 'Python', 'TypeScript', 'JavaScript (ES6)'] },
                { title: 'Web Development', skills: ['FastAPI', 'React', 'Next.js', 'Node.js', 'Socket.io', 'Express', 'Salesforce', 'LWC'] },
                { title: 'Databases & ORMs', skills: ['PostgreSQL', 'SQLAlchemy', 'Prisma', 'MongoDB', 'Redis', 'MySQL'] },
                { title: 'DevOps & Tools', skills: ['Docker', 'Azure', 'Git/GitHub', 'Postman', 'CI/CD (Actions)'] }
              ].map((category, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cerulean/5 to-sky-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-xl font-semibold text-text-main mb-6 relative z-10">{category.title}</h3>
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {category.skills.map((skill, j) => (
                      <span key={j} className="px-4 py-2 bg-slate-black/50 text-sky-glow rounded-full text-sm font-mono border border-sky-glow/20 hover:border-sky-glow/80 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-text-main mb-12 flex items-center gap-4">
              <span className="text-sky-glow font-mono text-xl">03.</span> Featured Projects
              <div className="h-px bg-white/10 flex-1"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'YouTube Channel Manager',
                  desc: 'Multi-channel comment distribution with 1-click functionality and an automated subscribe/like system.',
                  tech: ['Node.js', 'YouTube API', 'OAuth'],
                  links: { external: 'https://youtube-channel-manager-2.onrender.com/' }
                },
                {
                  title: 'AI-Powered PR Validator',
                  desc: 'Gemini API webhook for automated quality checks of GitHub pull requests with detailed reasoning and auto-closing.',
                  tech: ['Node.js', 'Express', 'Gemini API', 'GitHub Webhooks'],
                  links: { github: 'https://github.com/Techbridplus/AI-Powered-GitHub-Pull-Request-Validator' }
                },
                {
                  title: 'FastAPI Backend (Azure)',
                  desc: 'Containerized TODO REST API deployed to Azure VM via GitHub Actions CI/CD with Nginx, Docker, and JWT Auth.',
                  tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Azure'],
                  links: { github: 'https://github.com/Techbridplus/fast-api' }
                },
                {
                  title: 'Notes-App',
                  desc: 'Modern feature-rich application with real-time rich text editing capabilities, note pinning, and advanced search.',
                  tech: ['Next.js', 'React', 'Tailwind', 'Prisma', 'MongoDB'],
                  links: { github: 'https://github.com/Techbridplus/Note-App' }
                }
              ].map((project, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl flex flex-col h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-glow/5 via-transparent to-cerulean/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-slate-black border border-white/10 flex items-center justify-center group-hover:border-sky-glow/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                      <ExternalLink className="text-sky-glow" size={24} />
                    </div>
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-sky-glow transition-colors">
                          <Github size={22} />
                        </a>
                      )}
                      {project.links.external && (
                        <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-sky-glow transition-colors">
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-glow group-hover:to-cerulean transition-all relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-8 flex-1 leading-relaxed relative z-10">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs font-mono text-cerulean tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience / Internship */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-text-main mb-12 flex items-center gap-4">
              <span className="text-sky-glow font-mono text-xl">04.</span> Experience
              <div className="h-px bg-white/10 flex-1"></div>
            </h2>
            
            <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden border-l-4 border-l-cerulean">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cerulean/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl md:text-2xl font-bold text-text-main relative z-10">
                Salesforce Developer Virtual Internship
              </h3>
              <div className="text-sky-glow font-mono mt-2 mb-6 relative z-10 tracking-wide text-sm">
                Agentblazer Champion Program (AICTE & SmartBridge)
              </div>
              <ul className="space-y-4 text-text-muted list-disc pl-5 relative z-10 leading-relaxed">
                <li>Completed an intensive 8-week virtual internship program focused on Salesforce development.</li>
                <li>Demonstrated proficiency by completing complex Salesforce Trailhead modules.</li>
                <li>Gained practical skills in Data Management, Security Management, and Process Automation.</li>
                <li>Earned Superbadges in Apex, Object Relationships, and Lightning Web Components (LWC).</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-sky-glow font-mono text-lg mb-4">05. What's Next?</h2>
            <h2 className="text-5xl font-bold text-text-main mb-6">Get In Touch</h2>
            <p className="text-text-muted text-lg mb-12">
              Although I'm currently looking for new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a 
              href="mailto:gauravjoshiaa1@gmail.com"
              onClick={handleEmailClick}
              className="inline-block px-10 py-5 rounded-full bg-slate-black text-sky-glow border border-sky-glow/50 hover:border-sky-glow hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 font-mono tracking-widest uppercase text-sm mb-24 relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-0 bg-sky-glow/10 transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative">{copied ? 'Email Copied!' : 'Initiate Sequence'}</span>
            </a>

            <div className="flex justify-center gap-8 text-text-muted">
              <a href="https://github.com/Techbridplus" target="_blank" rel="noopener noreferrer" className="hover:text-sky-glow transition-colors hover:-translate-y-1 transform duration-200">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/techbridplus" target="_blank" rel="noopener noreferrer" className="hover:text-sky-glow transition-colors hover:-translate-y-1 transform duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:gauravjoshiaa1@gmail.com" onClick={handleEmailClick} className="hover:text-sky-glow transition-colors hover:-translate-y-1 transform duration-200 relative group">
                <Mail size={24} />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-sky-glow bg-slate-black/80 px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <footer className="text-center py-6 text-text-muted font-mono text-sm border-t border-white/5">
        <p>Built with React & Tailwind CSS by Gaurav Joshi.</p>
      </footer>
    </div>
  );
}
