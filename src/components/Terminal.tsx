import { useState, useRef, useEffect } from 'react';

export function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    { command: '', output: 'Welcome to Gaurav Joshi\'s terminal. Type "help" to start.' }
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <ul className="text-gray-300 space-y-1">
            <li><span className="text-sky-glow w-20 inline-block">about</span> - Prints Gaurav's background and summary.</li>
            <li><span className="text-sky-glow w-20 inline-block">skills</span> - Displays core technical skills categorized.</li>
            <li><span className="text-sky-glow w-20 inline-block">projects</span> - Lists featured projects.</li>
            <li><span className="text-sky-glow w-20 inline-block">stats</span> - Shows key stats.</li>
            <li><span className="text-sky-glow w-20 inline-block">contact</span> - Prints direct contact details.</li>
            <li><span className="text-sky-glow w-20 inline-block">clear</span> - Clears the terminal screen.</li>
          </ul>
        );
        break;
      case 'about':
        output = "Hi, I'm Gaurav Joshi, a final-year B.Tech CSE student at Graphic Era University. I have a strong foundation in data structures & algorithms and am skilled in building scalable applications, problem-solving, and quickly adapting to new technologies.";
        break;
      case 'skills':
        output = (
          <div className="space-y-2">
            <div><span className="text-sky-glow">Languages:</span> C, C++, Python, TypeScript, JavaScript (ES6)</div>
            <div><span className="text-sky-glow">Web Dev:</span> FastAPI, React, Next.js, Node.js, Socket.io, Express, Salesforce, LWC</div>
            <div><span className="text-sky-glow">Databases:</span> PostgreSQL, SQLAlchemy, Prisma, MongoDB, Redis, MySQL</div>
            <div><span className="text-sky-glow">DevOps/Tools:</span> Docker, Docker Compose, Azure, Git-GitHub, Postman, CI/CD</div>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-2">
            <div><span className="text-sky-glow">1. YouTube Channel Manager:</span> Multi-channel comment distribution & automated systems.</div>
            <div><span className="text-sky-glow">2. AI-Powered PR Validator:</span> Gemini API webhook for automated PR quality checks.</div>
            <div><span className="text-sky-glow">3. FastAPI Backend (Azure):</span> Containerized API deployed via GitHub Actions.</div>
            <div><span className="text-sky-glow">4. Notes-App:</span> Real-time rich text editor, note pinning, JWT auth.</div>
          </div>
        );
        break;
      case 'stats':
        output = (
          <ul className="list-disc list-inside">
            <li>500+ GitHub Commits</li>
            <li>350+ Discord Members</li>
            <li>8.2 GPA</li>
            <li>8+ Projects</li>
          </ul>
        );
        break;
      case 'contact':
        output = (
          <div>
            Email: gauravjoshiaa1@gmail.com<br />
            GitHub: <a href="https://github.com/Techbridplus" target="_blank" className="hover:underline">github.com/Techbridplus</a><br />
            LinkedIn: <a href="https://linkedin.com/in/techbridplus" target="_blank" className="hover:underline">linkedin.com/in/techbridplus</a>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        output = '';
        break;
      default:
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory([...history, { command: input, output }]);
    setInput('');
  };

  return (
    <div ref={containerRef} className="glass-card rounded-2xl p-4 font-mono text-sm w-full h-[350px] overflow-y-auto shadow-2xl flex flex-col transition-all duration-300 relative group border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-glow/5 to-cerulean/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3 sticky top-0 bg-transparent backdrop-blur-md z-10">
        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
        <span className="ml-3 text-text-muted text-xs tracking-wider uppercase font-semibold">guest@gaurav-joshi ~ bash</span>
      </div>
      <div className="flex flex-col gap-3 flex-1 relative z-10">
        {history.map((item, i) => (
          <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {item.command && (
              <div className="flex gap-2 text-sky-glow font-bold tracking-wide">
                <span>guest@gaurav:~$</span>
                <span className="text-cerulean">{item.command}</span>
              </div>
            )}
            <div className="text-text-muted whitespace-pre-wrap mt-1 text-[13px] leading-relaxed">{item.output}</div>
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2 text-sky-glow font-bold tracking-wide mt-1">
          <span>guest@gaurav:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-text-main font-normal"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
