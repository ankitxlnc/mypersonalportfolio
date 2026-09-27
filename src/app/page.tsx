import { ArrowUpRight, CircleArrowOutUpRight, Menu, ShieldCheck } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getPortfolioContent } from "@/sanity/lib/content";
import Link from "next/link";

export const revalidate = 60;

const aboutTextComponents: PortableTextComponents = {
  block: {
    body: ({ children }) => <p className="about-font-body">{children}</p>,
    display: ({ children }) => <p className="about-font-display">{children}</p>,
  },
};

export default async function Home() {
  const content = await getPortfolioContent();

  return (
    <main>
      <nav className="site-nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Ankit Aggarwal home"><span>AA</span><strong>Ankit Aggarwal</strong></a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#investment">Investment</a>
          <a href="#finance">Finance</a>
          <a href="#contact">Contact</a>
        </div>
        <Link className="nav-admin" href="/admin">Admin <ArrowUpRight size={15} /></Link>
        <button className="menu-button" aria-label="Open navigation"><Menu size={21} /></button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {content.settings.headline}</p>
          <h1>{content.settings.heroStatement}</h1>
          <p className="hero-lede">{content.settings.heroDescription}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#experience">View experience <ArrowUpRight size={17} /></a>
            <a className="text-link" href="https://www.linkedin.com/in/ankitaggarwal05" target="_blank" rel="noreferrer">Let&apos;s connect <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="graph-node node-a">Data</div>
          <div className="graph-node node-b">Context</div>
          <div className="graph-node node-c">Trust</div>
          <div className="hero-aside-label">15+ years<br /><span>making complex data useful.</span></div>
        </div>
      </section>

      <section className="signal-strip">
        <div className="shell signal-grid">
          <div><strong>15+</strong><span>years in data<br />and product</span></div>
          <div><strong>50%</strong><span>fewer audit<br />findings</span></div>
          <div><strong>21d <small>→</small> 6h</strong><span>time to value<br />for new products</span></div>
          <div><strong>250K+</strong><span>users reached<br />through GenAI</span></div>
        </div>
      </section>

      <section className="intro shell" id="about">
        <div className="section-kicker">{content.settings.pointOfViewKicker}</div>
        <div className="intro-content"><PortableText value={content.settings.about} components={aboutTextComponents} /></div>
      </section>

      <section className="capabilities shell" id="capabilities">
        {content.capabilities.map((capability) => <article className="capability" key={capability.number}><span>{capability.number}</span><h3>{capability.title}</h3><p>{capability.text}</p></article>)}
      </section>

      <section className="work-section" id="work">
        <div className="shell">
          <div className="section-heading"><div><div className="section-kicker">02 / Selected work</div><h2>Ideas, shipped.</h2></div><p>Some of the platforms and systems I&apos;ve helped bring into the world.</p></div>
          <div className="work-list">
            {content.projects.map((item) => <article className={`work-card ${item.accent}`} key={item.index}><div className="work-card-top"><span>{item.index}</span><span>{item.type}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{item.url && <a href={item.url} target="_blank" rel="noreferrer" aria-label={`View ${item.title}`}><CircleArrowOutUpRight size={23} /></a>}</article>)}
          </div>
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="section-kicker">03 / Experience</div>
        <div className="experience-heading"><h2>A career in <em>useful</em> complexity.</h2><a className="text-link" href={content.settings.resumeUrl} target="_blank" rel="noreferrer">View Details <ArrowUpRight size={16} /></a></div>
        <div className="timeline">{content.experience.map((item) => <article className="timeline-row" key={item.company}><div className="timeline-years">{item.years}</div><div className="timeline-main"><h3>{item.company}</h3><p>{item.role}</p></div><div className="timeline-note">{item.note}</div></article>)}</div>
      </section>

      <section className="writing shell">
        <div className="section-kicker">04 / Writing</div>
        <div className="writing-row"><h2>Thinking in public<br /><span>about data.</span></h2><div><p>Notes on data products, context, governance, and what it takes to make complex systems useful.</p><a className="button button-outline" href="https://substack.com/@ankitxlnc5" target="_blank" rel="noreferrer">Read on Substack <ArrowUpRight size={17} /></a></div></div>
      </section>

      <section className="education-section" id="education">
        <div className="shell">
          <div className="section-kicker">05 / Education</div>
          <h2>Education</h2>
          <div className="education-list">{content.settings.education.map((item) => <article className="education-row" key={item.institution}><h3>{item.institution}</h3><p>{item.credential}</p></article>)}</div>
        </div>
      </section>

      <section className="investment-section" id="investment">
        <div className="shell investment-inner">
          <div className="section-kicker">06 / Investment</div>
          <h2>Investing in what&apos;s next.</h2>
          {content.settings.ventures.map((venture) => <article className="venture-item" key={venture.company}><h3>{venture.company}</h3><p>{venture.description}</p></article>)}
        </div>
      </section>

      <section className="finance-section" id="finance">
        <div className="shell finance-inner">
          <div className="section-kicker">07 / Personal finance</div>
          <h2>{content.settings.personalFinanceTitle}</h2>
          <p>{content.settings.personalFinanceSummary}</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner"><div className="section-kicker">08 / Start a conversation</div><h2>Have a data problem<br />worth <em>untangling?</em></h2><div className="contact-bottom"><p>Whether you&apos;re building a platform, navigating regulation, or looking for a clearer way through complexity, I&apos;d like to hear from you.</p><div className="contact-links"><a href="mailto:aggarwal.ankit5@gmail.com">aggarwal.ankit5@gmail.com <ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/ankitaggarwal05" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a></div></div></div>
      </section>

      <footer className="site-footer shell"><span>© {new Date().getFullYear()} Ankit Aggarwal</span><span><ShieldCheck size={14} /> Built around trust</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
