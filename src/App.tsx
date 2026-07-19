import { useState, useEffect, useRef } from 'react';
import { Compass, ArrowDown, ArrowUpRight, Landmark, Palette, Sparkles, CirclePlay } from 'lucide-react';
import { 
  thoughtOfTheWeek, 
  nowSection, 
  manifesto, 
  memories, 
  projects as projectData,
  siteInfo 
} from './data';

// Custom hook for scroll reveal animations
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Reveal wrapper component
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a className="wordmark" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top'); }} aria-label="Dynasty home">
        D<span>Y</span>NASTY
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
        <a href="#archive" onClick={(e) => { e.preventDefault(); scrollTo('archive'); }}>Archive</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
      </nav>
      <a className="header-note" href="#now" onClick={(e) => { e.preventDefault(); scrollTo('now'); }}>
        <span className="status-dot"></span> Now, {siteInfo.currentMonth}
      </a>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-kicker reveal">
        <Compass size={16} />
        <span>{siteInfo.heroSubtitle}</span>
      </div>
      <div className="hero-title-wrap">
        <h1 className="hero-title" aria-label="Dynasty">
          <span className="reveal">DYNA</span>
          <span className="outline-text reveal">STY</span>
        </h1>
        <div className="hero-orbit" aria-hidden="true">
          <span>Est.</span>
          <strong>{siteInfo.establishment}</strong>
        </div>
      </div>
      <div className="hero-footer reveal">
        <p>{siteInfo.heroText}</p>
        <a
          className="round-link"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Explore projects"
        >
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  );
}

// Manifesto Section
function Manifesto() {
  return (
    <section className="manifesto" id="about">
      <Reveal>
        <p className="eyebrow">{manifesto.eyebrow}</p>
      </Reveal>
      <div className="manifesto-copy">
        <Reveal delay={100}>
          <span className="drop-cap">{manifesto.dropCap}</span>
        </Reveal>
        <Reveal delay={200}>
          <p>{manifesto.text}</p>
        </Reveal>
      </div>
      <div className="manifesto-aside">
        <Reveal delay={300}>
          <span>( {manifesto.aside} )</span>
        </Reveal>
        <Reveal delay={400}>
          <div className="seal" aria-hidden="true">
            <Sparkles size={24} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const colorClasses: Record<string, string> = {
  gold: 'project-art-gold',
  rose: 'project-art-rose',
  green: 'project-art-green',
  blue: 'project-art-blue',
  clay: 'project-art-clay',
  plum: 'project-art-plum',
};

const iconMap: Record<string, React.ComponentType<{ size: number; strokeWidth: number }>> = {
  Landmark,
  Palette,
  Sparkles,
};

// Projects Section
function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Wealth', 'Art', 'Becoming'];

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">Selected chapters · 2022—2026</p>
          <h2>The work of a lifetime.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="section-intro">
            Money, making, and the slow art of becoming someone I'm proud to know.
          </p>
        </Reveal>
      </div>
      
      <Reveal delay={200}>
        <div className="filter-row" aria-label="Filter projects">
          {categories.map((cat) => (
            <button
              key={cat}
              className={filter === cat ? 'active' : ''}
              onClick={() => setFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="project-list">
        {filteredProjects.map((project, index) => {
          const IconComponent = iconMap[project.color === 'gold' || project.color === 'clay' ? 'Landmark' : 'Palette'];
          return (
            <Reveal key={project.number} delay={300 + index * 100}>
              <article className="project-row">
                <span className="project-number">{project.number}</span>
                <div className={`project-art ${colorClasses[project.color]}`}>
                  <IconComponent size={38} strokeWidth={1.25} />
                </div>
                <div className="project-copy">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <span>{project.meta}</span>
                  <a href="#archive" aria-label={`See memories related to ${project.title}`}>
                    <ArrowUpRight size={21} />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// Archive Section
function Archive() {
  return (
    <section className="archive-section" id="archive">
      <div className="archive-heading">
        <Reveal>
          <p className="eyebrow">The camera roll</p>
          <h2>Proof I was here.</h2>
          <p>Pictures, moving moments, and the beautiful ordinary.</p>
        </Reveal>
      </div>
      
      <div className="memory-grid">
        {memories.map((memory, index) => {
          if (memory.type === 'quote') {
            return (
              <Reveal key={index} delay={300 + index * 100}>
                <div className="memory-quote" style={{ gridColumn: `span ${memory.span || 1}` }}>
                  <p>"{memory.quote || thoughtOfTheWeek.text}"</p>
                  <span>{memory.quoteSource || thoughtOfTheWeek.date}</span>
                </div>
              </Reveal>
            );
          }
          
          if (memory.type === 'video') {
            return (
              <Reveal key={index} delay={300 + index * 100}>
                <div 
                  className={`memory memory-video ${index === 1 ? 'memory-two' : ''}`}
                  style={{ background: memory.background }}
                >
                  <button type="button" aria-label="Play summer film" aria-pressed="false">
                    <CirclePlay size={44} strokeWidth={1.25} />
                  </button>
                  <span>{memory.caption}</span>
                </div>
              </Reveal>
            );
          }
          
          return (
            <Reveal key={index} delay={300 + index * 100}>
              <div 
                className={`memory ${memory.span === 'tall' ? 'memory-tall' : ''}`}
                style={{ background: memory.background }}
              >
                <span>{memory.caption}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={600}>
        <a
          className="archive-button"
          href="#now"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('now')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Continue to the present <ArrowUpRight size={18} />
        </a>
      </Reveal>
    </section>
  );
}

// Now Section
function Now() {
  return (
    <section className="now-section" id="now">
      <Reveal>
        <p className="eyebrow">{nowSection.eyebrow}</p>
        <h2>{nowSection.heading}</h2>
      </Reveal>
      <div className="now-list">
        {nowSection.items.map((item, index) => (
          <Reveal key={item.label} delay={100 + index * 100}>
            <p>
              <span>{item.label}</span> {item.content}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer>
      <div className="footer-mark">{siteInfo.wordmark}</div>
      <div className="footer-bottom">
        <p>{siteInfo.footerTagline}</p>
        <p>{siteInfo.copyright}</p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

// Main App
function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initial reveal animation
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 100 + index * 150);
    });
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Manifesto />
      <Projects />
      <Archive />
      <Now />
      <Footer />
    </main>
  );
}

export default App;
