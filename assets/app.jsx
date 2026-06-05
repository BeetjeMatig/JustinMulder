/* app.jsx — shell: nav, animated tab pill, dark mode, tweaks. */
const { useState, useEffect, useRef, useLayoutEffect } = React;

const TABS = [
  ["home", "Home"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["blog", "Blog"],
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
    setTab(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const data = window.PORTFOLIO;

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
            <button className="icon-btn" aria-label="Customize" onClick={() => window.postMessage({ type: "__activate_edit_mode" }, "*")}>
              <Icon name="sliders" />
            </button>
            <button className="icon-btn" aria-label="Toggle theme" onClick={() => setTweak("dark", !t.dark)}>
              <Icon name={t.dark ? "sun" : "moon"} />
            </button>
          </div>
        </div>
      </nav>

      <div className="mtabs" role="tablist">
        {TABS.map(([k, lbl]) => (
          <button key={k} className="mtab" role="tab" aria-selected={tab === k} onClick={() => go(k)}>{lbl}</button>
        ))}
      </div>

      <main key={tab}>
        {tab === "home" && <Hero data={data} go={go} />}
        {tab === "projects" && <Projects data={data} />}
        {tab === "experience" && <Experience data={data} />}
        {tab === "blog" && <Blog data={data} />}
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
