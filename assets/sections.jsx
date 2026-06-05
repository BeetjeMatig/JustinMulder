/* sections.jsx — page sections for the portfolio. Exports to window. */
const { useState, useEffect, useRef } = React;

/* ---- tiny icon set ---- */
function Icon({ name, size = 20, stroke = 2.2 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
    sliders: <><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    arrowUR: <><path d="M7 17 17 7M9 7h8v8" /></>,
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 19 7.5 4.3 4.3 0 0 0 18.9 4S17.7 3.6 15 5.3a13 13 0 0 0-6 0C6.3 3.6 5.1 4 5.1 4A4.3 4.3 0 0 0 5 7.5 4.6 4.6 0 0 0 4 11c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />,
    linkedin: <><rect x="2" y="9" width="5" height="12" /><circle cx="4.5" cy="4.5" r="1.5" /><path d="M9 9h4.5v2a3.5 3.5 0 0 1 3-2c2.5 0 4.5 1.5 4.5 5v7H16v-6c0-1.5-.5-2.5-2-2.5S11.5 14 11.5 15.5V21H9z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pen: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />,
    heart: <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.8a5 5 0 0 0 0-6.6z" />,
  };
  return <svg {...p}>{paths[name]}</svg>;
}
function CoverPattern({ kind, color }) {
  // playful, no-gradient geometric fills
  const common = { width: "100%", height: "100%", style: { position: "absolute", inset: 0 } };
  if (kind === "code") return (
    <svg {...common}><rect width="100%" height="100%" fill={color} />
      <g stroke="rgba(255,255,255,.28)" strokeWidth="14">
        {Array.from({ length: 8 }, (_, i) => <line key={i} x1={-40 + i * 70} y1="200" x2={120 + i * 70} y2="-40" />)}
      </g></svg>
  );
  if (kind === "design") return (
    <svg {...common}><rect width="100%" height="100%" fill={color} />
      <g fill="rgba(255,255,255,.26)">
        {Array.from({ length: 5 }, (_, r) => Array.from({ length: 9 }, (_, c) => <circle key={r + "-" + c} cx={c * 60} cy={r * 50} r="9" />))}
      </g></svg>
  );
  return (
    <svg {...common}><rect width="100%" height="100%" fill={color} />
      <g fill="none" stroke="rgba(255,255,255,.26)" strokeWidth="12">
        {Array.from({ length: 5 }, (_, i) => <circle key={i} cx="50%" cy="50%" r={26 + i * 34} />)}
      </g></svg>
  );
}

/* ================= HERO ================= */
function Hero({ data, go }) {
  return (
    <section className="screen hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hero-kicker"><span className="live"></span> Available for new projects</span>
            <h1>
              <span className="ln"><span>Hi, I'm Justin —</span></span>
              <span className="ln"><span>I make data <span className="hl">talk</span>.</span></span>
            </h1>
            <p className="hero-lead">
              <b>Data Science</b> graduate turned <b>Conversation Designer</b>. I live where numbers meet language —
              building models that predict, and dialogues that actually sound human.
            </p>
            <div className="chips">
              {data.chips.map((c, i) => (
                <span className="chip" key={i} style={{ "--chip-c": c.c }}>{c.t}</span>
              ))}
            </div>
            <div className="hero-cta">
              <button className="btn primary" onClick={() => go("projects")}>
                See my work <span className="arrow"><Icon name="arrow" size={18} /></span>
              </button>
              <button className="btn" onClick={() => go("blog")}>Read the blog</button>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-block"></div>
            <div className="portrait-block two"></div>
            <div className="portrait">
              <div className="portrait-placeholder">
                <span className="portrait-initials">JM</span>
              </div>
              <span className="portrait-tag">📍 based in your city</span>
            </div>
          </div>
        </div>

        <div className="stats">
          {data.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...data.marquee, ...data.marquee].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </section>
  );
}

/* ================= PROJECTS ================= */
function Projects({ data }) {
  const cats = ["All", ...Array.from(new Set(data.projects.map((p) => p.cat)))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? data.projects : data.projects.filter((p) => p.cat === active);
  return (
    <section className="screen">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Selected work · code & beyond</span>
          <h2>Projects</h2>
          <p className="sub">A mix of data science builds, conversation design work, and the odd creative experiment I couldn't help making.</p>
        </div>
        <div className="filters">
          {cats.map((c) => (
            <button key={c} className="filter" aria-pressed={active === c} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="proj-grid">
          {list.map((p, i) => (
            <article className="proj" key={p.title} style={{ animationDelay: i * 0.06 + "s" }}>
              <div className="proj-go"><Icon name="arrowUR" size={18} /></div>
              <div className="proj-cover">
                <div className="pattern"><CoverPattern kind={p.kind} color={p.color} /></div>
                <span className="proj-emoji">{p.emoji}</span>
              </div>
              <div className="proj-body">
                <span className="proj-cat">{p.cat}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => <span className="proj-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= EXPERIENCE ================= */
function Experience({ data }) {
  const [view, setView] = useState("all"); // all / work / edu
  const [animKey, setAnimKey] = useState(0);
  const tlRef = useRef(null);
  const items = data.experience.filter((e) => view === "all" || e.type === view);

  useEffect(() => {
    const el = tlRef.current;
    if (!el) return;
    el.classList.remove("in");
    el.style.setProperty("--line-h", "0%");
    const t = setTimeout(() => {
      el.classList.add("in");
      el.style.setProperty("--line-h", "100%");
    }, 60);
    return () => clearTimeout(t);
  }, [view, animKey]);

  return (
    <section className="screen">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The path so far</span>
          <h2>Experience</h2>
          <p className="sub">Roles and degrees that shaped how I think — equal parts rigorous data work and human-centered design.</p>
        </div>
        <div className="exp-switch">
          {[["all", "Everything"], ["work", "Work"], ["edu", "Education"]].map(([k, lbl]) => (
            <button key={k} className="filter" aria-pressed={view === k}
              onClick={() => { setView(k); setAnimKey((n) => n + 1); }}>{lbl}</button>
          ))}
        </div>
        <div className="timeline" ref={tlRef} key={view}>
          {items.map((e, i) => {
            const nodeC = e.type === "work" ? "var(--blue)" : "var(--green)";
            return (
              <div className="tl-item" key={e.role + i}>
                <span className="tl-node" style={{ "--node-c": nodeC }}></span>
                <div className="tl-card">
                  <div className="tl-when">
                    {e.when} <span className="badge">{e.badge}</span>
                  </div>
                  <h3>{e.role}</h3>
                  <div className="tl-org" style={{ "--node-c": nodeC }}>{e.org}</div>
                  <p>{e.desc}</p>
                  <div className="tl-skills">
                    {e.skills.map((s) => <span className="tl-skill" key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= BLOG ================= */
function Blog({ data }) {
  const [livePosts, setLivePosts] = useState(null);
  const [active, setActive] = useState("All");

  useEffect(() => {
    fetch("assets/posts.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((items) => {
        if (!Array.isArray(items) || items.length === 0) return;
        setLivePosts(
          items.map((p) => ({
            date: new Date(p.post_date).toLocaleDateString("en-US", {
              month: "short", day: "numeric", year: "numeric",
            }),
            title: p.title,
            excerpt: p.subtitle || "",
            read: p.reading_time ? `${p.reading_time} min read` : "",
            likes: p.reactions?.["❤"] ?? 0,
            url: p.canonical_url,
            slug: p.slug,
            tags: data.postTags?.[p.slug] || [],
          }))
        );
      })
      .catch(() => {});
  }, []);

  // Fall back to static sample posts (with tags applied if slugs happen to match)
  const posts = (livePosts ?? data.posts).map((p) => ({
    ...p,
    tags: p.tags ?? data.postTags?.[p.slug] ?? [],
  }));

  const allTags = ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags)))];
  const filtered = active === "All" ? posts : posts.filter((p) => p.tags.includes(active));

  return (
    <section className="screen">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Words · published irregularly</span>
          <h2>Blog</h2>
          <p className="sub">Essays and notes on data, design, and the messy space between them.</p>
        </div>

        <div className="blog-head">
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div className="bh-icon"><Icon name="pen" size={24} /></div>
            <div>
              <h3>Justin's Notebook</h3>
              <p>A newsletter about data, conversation & curiosity</p>
            </div>
          </div>
          <a className="btn primary" href={`${data.substackUrl}/subscribe`} target="_blank" rel="noopener noreferrer">
            Subscribe on Substack
          </a>
        </div>

        {allTags.length > 1 && (
          <div className="filters" style={{ marginBottom: 24 }}>
            {allTags.map((tag) => (
              <button key={tag} className="filter" aria-pressed={active === tag}
                onClick={() => setActive(tag)}>{tag}</button>
            ))}
          </div>
        )}

        <div className="post-list">
          {filtered.map((p) => (
            <article className="post" key={p.title}
              onClick={() => p.url && window.open(p.url, "_blank", "noopener")}>
              <div className="post-date">{p.date}</div>
              <div className="post-main">
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="post-meta">
                  {p.tags.map((tag) => (
                    <span className="post-cat" key={tag}>{tag}</span>
                  ))}
                  {p.read && <span>{p.read}</span>}
                  {p.likes > 0 && <>
                    <span className="dot"></span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                      <Icon name="heart" size={14} /> {p.likes}
                    </span>
                  </>}
                </div>
              </div>
              <div className="post-arrow"><Icon name="arrow" size={18} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <small>© 2026 Justin Mulder · Designed & built with care.</small>
        <div className="socials">
          <a className="icon-btn" href="#" aria-label="GitHub"><Icon name="github" /></a>
          <a className="icon-btn" href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a className="icon-btn" href="#" aria-label="Email"><Icon name="mail" /></a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Hero, Projects, Experience, Blog, Footer });
