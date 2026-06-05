/* Placeholder content for Justin Mulder's portfolio.
   Edit freely — this is just sample data. */
window.PORTFOLIO = {
  substackUrl: "https://justinmulder.substack.com",
  substackWorker: "https://blue-frost-72df.justinmulder0808.workers.dev",

  // Last.fm — free read-only API key from last.fm/api/account/create
  // Safe to put in a public repo for read-only access
  lastfmUser: "BeetjeMatig",
  lastfmApiKey: "6918e957b06513bdaaecd111752075a1",

  /*
   * postTags — map a Substack post slug to an array of your own tags.
   * The slug is the last part of the post URL:
   *   https://yourname.substack.com/p/THIS-PART
   * Add an entry here whenever you publish. Posts without an entry show
   * untagged (visible under "All" only). Tags can be anything you like.
   */
  postTags: {
    "hallo-substack": ["Personal"],
  },

  name: "Justin Mulder",
  roles: ["Data Science", "Conversation Design", "Building thoughtful things"],
  chips: [
    { t: "Python", c: "var(--blue)" },
    { t: "Machine Learning", c: "var(--green)" },
    { t: "Conversation Design", c: "var(--pink)" },
    { t: "Data Visualization", c: "var(--yellow)" },
    { t: "NLP", c: "var(--blue)" },
    { t: "Prototyping", c: "var(--green)" },
  ],
  stats: [
    { num: "3", lbl: "Degrees, somehow" },
    { num: "12+", lbl: "Things I've built" },
    { num: "∞", lbl: "Cups of coffee" },
  ],
  marquee: [
    "Data Science",
    "Conversation Design",
    "Storytelling",
    "Python",
    "Machine Learning",
    "Human-Centered",
    "Curiosity",
  ],

  projects: [
    {
      cat: "Data Science",
      kind: "code",
      emoji: "📊",
      color: "var(--blue)",
      title: "Churn Prediction Engine",
      desc: "An end-to-end ML pipeline predicting customer churn with explainable feature importance and a live dashboard.",
      tags: ["Python", "scikit-learn", "Streamlit"],
      // detail page example — use this for projects worth a longer write-up
      detail: {
        intro:
          "An end-to-end ML pipeline predicting customer churn with explainable feature importance and a live dashboard. Built for a client with 50k+ users.",
        sections: [
          {
            heading: "The problem",
            body: "The client was losing ~8% of subscribers monthly with no visibility into who was at risk or why. Reactive retention was expensive and poorly targeted.",
          },
          {
            heading: "My approach",
            body: "I built a gradient-boosted classifier trained on 18 months of behavioural data. SHAP values made the model explainable to non-technical stakeholders — a requirement from day one.",
          },
          {
            heading: "Outcome",
            body: "The model achieved 84% precision on the holdout set. The Streamlit dashboard let the CRM team act on predictions without touching code.",
          },
        ],
        links: [
          { label: "GitHub", url: "https://github.com", icon: "github" },
          { label: "Live demo", url: "https://github.com", icon: "arrowUR" },
        ],
      },
    },
    {
      cat: "Conversation Design",
      kind: "design",
      emoji: "💬",
      color: "var(--pink)",
      title: "Voice Assistant Persona Kit",
      desc: "A reusable persona + dialogue framework for a banking voice assistant, covering tone, error recovery and edge cases.",
      tags: ["Dialogue Flows", "Voice UX", "Figma"],
      url: "https://github.com", // simple link — card opens this URL in a new tab
    },
    {
      cat: "Data Science",
      kind: "code",
      emoji: "🗺️",
      color: "var(--green)",
      title: "City Mobility Atlas",
      desc: "Interactive geospatial analysis of public transit gaps, visualised as an explorable map for city planners.",
      tags: ["GeoPandas", "D3.js", "Mapbox"],
      url: "https://github.com",
    },
    {
      cat: "Side Project",
      kind: "other",
      emoji: "🎹",
      color: "var(--yellow)",
      title: "Generative Music Sketchbook",
      desc: "A weekend experiment turning weather data into ambient generative music using simple rule-based composition.",
      tags: ["Tone.js", "Creative Coding", "APIs"],
      url: "https://github.com",
    },
    {
      cat: "Conversation Design",
      kind: "design",
      emoji: "🤖",
      color: "var(--pink)",
      title: "Onboarding Chatbot Rework",
      desc: "Redesigned a SaaS onboarding bot — cut drop-off by reframing the flow around user goals instead of features.",
      tags: ["UX Writing", "Flow Design", "A/B Testing"],
      // no url or detail = card is not clickable
    },
    {
      cat: "Writing",
      kind: "other",
      emoji: "✍️",
      color: "var(--green)",
      title: "The Data Storytelling Zine",
      desc: "A self-published mini-zine on making numbers feel human — part essay, part field guide, fully illustrated.",
      tags: ["Writing", "Editorial", "Print"],
      url: "https://github.com",
    },
  ],

  experience: [
    {
      type: "work",
      when: "2024 — Present",
      badge: "Full-time",
      role: "Conversation Designer",
      org: "Placeholder Labs",
      desc: "Designing dialogue systems and AI assistants end-to-end — from persona and tone to flows, error handling and evaluation.",
      skills: ["Conversation Design", "LLMs", "Prototyping"],
    },
    {
      type: "work",
      when: "2023 — 2024",
      badge: "Contract",
      role: "Data Scientist",
      org: "Sample Analytics Co.",
      desc: "Built predictive models and self-serve dashboards that helped non-technical teams make data-informed decisions.",
      skills: ["Python", "ML", "Data Viz"],
    },
    {
      type: "work",
      when: "2022 — 2023",
      badge: "Internship",
      role: "Data Analyst Intern",
      org: "Example Group",
      desc: "Cleaned, modeled and visualised messy real-world data; shipped my first production dashboard used company-wide.",
      skills: ["SQL", "Tableau", "Statistics"],
    },
    {
      type: "edu",
      when: "2022 — 2024",
      badge: "MSc",
      role: "MSc Data Science",
      org: "University Placeholder",
      desc: "Specialised in applied machine learning and human-centered AI, with a thesis on explainable conversational models.",
      skills: ["Machine Learning", "NLP", "Research"],
    },
    {
      type: "edu",
      when: "2019 — 2022",
      badge: "BSc",
      role: "BSc Artificial Intelligence",
      org: "University Placeholder",
      desc: "A broad foundation across statistics, cognitive science and programming — where data and language first collided for me.",
      skills: ["Statistics", "Cognitive Science", "Python"],
    },
    {
      type: "edu",
      when: "2018 — 2019",
      badge: "Foundation",
      role: "Foundation in Computing",
      org: "College Placeholder",
      desc: "The pre-university year that turned a hobby of tinkering with code into a deliberate path.",
      skills: ["Programming", "Mathematics"],
    },
  ],

  elsewhere: [
    {
      platform: "Steam",
      handle: "superspeedkaroo",
      note: "Mostly RPGs that I will never finish, but I will try anyway",
      url: "https://steamcommunity.com/id/superspeedkaroo",
      emoji: "🎮",
      color: "var(--blue)",
    },
    {
      platform: "Album of the Year",
      handle: "SuperSpeedKaroo",
      note: "Listening to a bunch of music, forgetting most of it immediately, but loving the stats page",
      url: "https://www.albumoftheyear.org/user/SuperSpeedKaroo",
      emoji: "💿",
      color: "var(--pink)",
    },
    {
      platform: "Trakt",
      handle: "SuperSpeedKaroo",
      note: "Every show and film I've watched, at least I think so?",
      url: "https://app.trakt.tv/profile/superspeedkaroo?mode=media",
      emoji: "📺",
      color: "var(--green)",
    },
    {
      platform: "LinkedIn",
      handle: "Justin Mulder",
      note: "The 'professional' one, if you want to see a more polished version of this portfolio",
      url: "https://www.linkedin.com/in/justin-mulder-groningen/",
      emoji: "🔗",
      color: "var(--ink)",
    },
    {
      platform: "Last.fm",
      handle: "BeetjeMatig",
      note: "Scrobbling since forever, don't judge the stats",
      url: "https://www.last.fm/user/BeetjeMatig",
      emoji: "🎵",
      color: "var(--yellow)",
    },
    {
      platform: "GitHub",
      handle: "BeetjeMatig",
      note: "Where the actual code lives",
      url: "https://github.com/BeetjeMatig",
      emoji: "🐙",
      color: "var(--ink)",
    },
  ],

  posts: [
    {
      date: "May 28, 2026",
      cat: "Essay",
      title: "Designing conversations that don't sound like a robot wrote them",
      excerpt:
        "Most chatbots fail not because of the model, but because nobody decided who they were supposed to be. A few principles I keep coming back to.",
      read: "6 min read",
      likes: 142,
    },
    {
      date: "Apr 14, 2026",
      cat: "Data",
      title: "What three years of personal habit data actually taught me",
      excerpt:
        "I tracked sleep, mood and focus for 1,000 days. The headline finding is boring, useful, and slightly embarrassing.",
      read: "9 min read",
      likes: 218,
    },
    {
      date: "Mar 2, 2026",
      cat: "Notes",
      title: "A field guide to explaining your model to people who hate math",
      excerpt:
        "Feature importance plots are not an explanation. Here's how I translate models into stories stakeholders can argue with.",
      read: "5 min read",
      likes: 96,
    },
    {
      date: "Jan 19, 2026",
      cat: "Essay",
      title: "On being a generalist in a world that rewards specialists",
      excerpt:
        "Data science and conversation design look unrelated until you realise both are about turning ambiguity into something usable.",
      read: "7 min read",
      likes: 174,
    },
    {
      date: "Dec 5, 2025",
      cat: "Build",
      title: "I made a tiny tool that turns weather into music. Here's why.",
      excerpt:
        "A short story about building useless things on purpose, and what the useless things keep teaching me about the useful ones.",
      read: "4 min read",
      likes: 88,
    },
  ],
};
