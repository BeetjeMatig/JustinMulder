/* app.jsx — shell: nav, animated tab pill, dark mode, tweaks. */
const { useState, useEffect, useRef, useLayoutEffect } = React;

function useLastfm(user, apiKey) {
  const [track, setTrack] = useState(null);
  useEffect(() => {
    if (!user || !apiKey || apiKey === "YOUR_API_KEY_HERE") return;
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(user)}&api_key=${encodeURIComponent(apiKey)}&format=json&limit=1`)
      .then(r => r.json())
      .then(d => {
        const items = d.recenttracks?.track;
        const item = Array.isArray(items) ? items[0] : items;
        if (!item) return;
        const art = item.image?.find(i => i.size === "extralarge")?.["#text"] || "";
        setTrack({
          name: item.name,
          artist: item.artist["#text"],
          nowPlaying: !!item["@attr"]?.nowplaying,
          url: item.url || null,
          // Last.fm returns a generic grey placeholder for tracks without art — filter it out
          art: art && !art.includes("2a96cbd8b46e442fc41c2b86b821562f") ? art : null,
        });
      })
      .catch(() => {});
  }, [user, apiKey]);
  return track;
}

function NavTooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const timer = useRef(null);

  const show = () => {
    setVisible(true);
    setDisplayed("");
    let i = 0;
    timer.current = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer.current);
    }, 28);
  };

  const hide = () => {
    clearInterval(timer.current);
    setVisible(false);
    setDisplayed("");
  };

  return (
    <div className="nav-tip-wrap" onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {visible && (
        <div className="nav-tip">
          <span className="nav-tip-arrow" />
          {displayed}
          {displayed.length < text.length && <span className="nav-tip-cursor">▌</span>}
        </div>
      )}
    </div>
  );
}

const TABS = [
  ["home", "Home"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["blog", "Blog"],
  ["elsewhere", "Elsewhere"],
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#06D6A0",
  "corners": "soft",
  "boldness": "balanced",
  "fontPair": "playful",
  "dark": false
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  playful:   { display: '"Gabarito", system-ui, sans-serif',           body: '"Plus Jakarta Sans", system-ui, sans-serif' },
  clean:     { display: '"Plus Jakarta Sans", system-ui, sans-serif',  body: '"Plus Jakarta Sans", system-ui, sans-serif' },
  technical: { display: '"Space Grotesk", system-ui, sans-serif',      body: '"Space Grotesk", system-ui, sans-serif' },
};
const RADII = { sharp: ["4px", "3px"], soft: ["16px", "10px"], round: ["28px", "18px"] };
const BOLD = { subtle: "0.45", balanced: "1", loud: "1" };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [tab, setTab] = useState("home");
  const [projectPage, setProjectPage] = useState(null);
  const tabRefs = useRef({});
  const [pill, setPill] = useState({ left: 5, width: 0, opacity: 0 });

  // apply tweaks to :root
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    const [rad, radsm] = RADII[t.corners] || RADII.soft;
    r.style.setProperty("--r", rad);
    r.style.setProperty("--r-sm", radsm);
    r.style.setProperty("--bold", BOLD[t.boldness] || "1");
    const fp = FONT_PAIRS[t.fontPair] || FONT_PAIRS.playful;
    r.style.setProperty("--font-display", fp.display);
    r.style.setProperty("--font-body", fp.body);
    r.setAttribute("data-theme", t.dark ? "dark" : "light");
  }, [t.accent, t.corners, t.boldness, t.fontPair, t.dark]);

  // move the active-tab pill
  useLayoutEffect(() => {
    const el = tabRefs.current[tab];
    if (!el) return;
    const move = () => setPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    move();
    window.addEventListener("resize", move);
    return () => window.removeEventListener("resize", move);
  }, [tab]);

  const go = (next) => {
    setProjectPage(null);
    setTab(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const data = window.PORTFOLIO;
  const lastfm = useLastfm(data.lastfmUser, data.lastfmApiKey);

  return (
    <div className="app">
      <nav className="nav">
        <div className="wrap nav-inner">
          <button className="brand" onClick={() => go("home")}>
            <span className="brand-mark">J</span>
            Justin Mulder
          </button>

          <div className="tabs" role="tablist">
            <span className="tab-pill" style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}></span>
            {TABS.map(([k, lbl]) => (
              <button key={k} role="tab" className="tab" aria-selected={tab === k}
                ref={(el) => (tabRefs.current[k] = el)} onClick={() => go(k)}>
                <span className="tab-dot"></span>{lbl}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <NavTooltip text="If you think I am a bad designer">
              <button className="icon-btn" aria-label="Customize" onClick={() => window.postMessage({ type: "__activate_edit_mode" }, "*")}>
                <Icon name="sliders" />
              </button>
            </NavTooltip>
            <NavTooltip text="If you looked at screens enough today">
              <button className="icon-btn" aria-label="Toggle theme" onClick={() => setTweak("dark", !t.dark)}>
                <Icon name={t.dark ? "sun" : "moon"} />
              </button>
            </NavTooltip>
          </div>
        </div>
      </nav>

      <div className="mtabs" role="tablist">
        {TABS.map(([k, lbl]) => (
          <button key={k} className="mtab" role="tab" aria-selected={tab === k} onClick={() => go(k)}>{lbl}</button>
        ))}
      </div>

      <main key={projectPage ? projectPage.title : tab}>
        {projectPage
          ? <ProjectDetail project={projectPage} onBack={() => { setProjectPage(null); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
          : <>
              {tab === "home" && <Hero data={data} go={go} lastfm={lastfm} />}
              {tab === "projects" && <Projects data={data} setProjectPage={(p) => { setProjectPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} />}
              {tab === "experience" && <Experience data={data} />}
              {tab === "blog" && <Blog data={data} />}
              {tab === "elsewhere" && <Elsewhere data={data} lastfm={lastfm} />}
            </>
        }
      </main>

      <Footer />

      <TweaksPanel>
        <TweakSection label="Color" />
        <TweakColor label="Accent" value={t.accent}
          options={["#06D6A0", "#118AB2", "#FDCA40", "#E85D75", "#31393C"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakRadio label="Color blocks" value={t.boldness}
          options={["subtle", "balanced", "loud"]}
          onChange={(v) => setTweak("boldness", v)} />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)} />

        <TweakSection label="Shape & Type" />
        <TweakRadio label="Corners" value={t.corners}
          options={["sharp", "soft", "round"]}
          onChange={(v) => setTweak("corners", v)} />
        <TweakRadio label="Font" value={t.fontPair}
          options={["playful", "clean", "technical"]}
          onChange={(v) => setTweak("fontPair", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
