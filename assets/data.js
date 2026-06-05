/* Placeholder content for Justin Mulder's portfolio.
   Edit freely — this is just sample data. */
window.PORTFOLIO = {
  substackUrl: "https://justinmulder.substack.com",

  /*
   * postTags — map a Substack post slug to an array of your own tags.
   * The slug is the last part of the post URL:
   *   https://yourname.substack.com/p/THIS-PART
   * Add an entry here whenever you publish. Posts without an entry show
   * untagged (visible under "All" only). Tags can be anything you like.
   */
  postTags: {
    // "designing-conversations-that-dont-sound-like-a-robot": ["Conversation Design", "Essay"],
    // "three-years-of-personal-habit-data":                  ["Data Science", "Personal"],
    // "field-guide-explaining-models":                       ["Data Science", "Study"],
    // "generalist-in-a-world-of-specialists":                ["Essay", "Career"],
    // "i-made-a-tiny-tool-weather-music":                    ["Music", "Side Project"],
  },

  name: "Justin Mulder",
  roles: ["Data Science", "Conversation Design", "Building thoughtful things"],
  chips: [
    { t: "Python", c: "var(--blue)" },
    { t: "Machine Learning", c: "var(--green)" },
    { t: "Conversation Design", c: "var(--pink)" },
    { t: "Data Viz", c: "var(--yellow)" },
    { t: "NLP", c: "var(--blue)" },
    { t: "Prototyping", c: "var(--green)" },
  ],
  stats: [
    { num: "3", lbl: "Degrees earned" },
    { num: "12+", lbl: "Projects shipped" },
    { num: "∞", lbl: "Cups of coffee" },
  ],
  marquee: ["Data Science", "Conversation Design", "Storytelling", "Python", "Machine Learning", "Human-Centered", "Curiosity"],

  projects: [
    {
      cat: "Data Science", kind: "code", emoji: "📊", color: "var(--blue)",
      title: "Churn Prediction Engine",
      desc: "An end-to-end ML pipeline predicting customer churn with explainable feature importance and a live dashboard.",
      tags: ["Python", "scikit-learn", "Streamlit"],
    },
    {
      cat: "Conversation Design", kind: "design", emoji: "💬", color: "var(--pink)",
      title: "Voice Assistant Persona Kit",
      desc: "A reusable persona + dialogue framework for a banking voice assistant, covering tone, error recovery and edge cases.",
      tags: ["Dialogue Flows", "Voice UX", "Figma"],
    },
    {
      cat: "Data Science", kind: "code", emoji: "🗺️", color: "var(--green)",
      title: "City Mobility Atlas",
      desc: "Interactive geospatial analysis of public transit gaps, visualised as an explorable map for city planners.",
      tags: ["GeoPandas", "D3.js", "Mapbox"],
    },
    {
      cat: "Side Project", kind: "other", emoji: "🎹", color: "var(--yellow)",
      title: "Generative Music Sketchbook",
      desc: "A weekend experiment turning weather data into ambient generative music using simple rule-based composition.",
      tags: ["Tone.js", "Creative Coding", "APIs"],
    },
    {
      cat: "Conversation Design", kind: "design", emoji: "🤖", color: "var(--pink)",
      title: "Onboarding Chatbot Rework",
      desc: "Redesigned a SaaS onboarding bot — cut drop-off by reframing the flow around user goals instead of features.",
      tags: ["UX Writing", "Flow Design", "A/B Testing"],
    },
    {
      cat: "Writing", kind: "other", emoji: "✍️", color: "var(--green)",
      title: "The Data Storytelling Zine",
      desc: "A self-published mini-zine on making numbers feel human — part essay, part field guide, fully illustrated.",
      tags: ["Writing", "Editorial", "Print"],
    },
  ],

  experience: [
    {
      type: "work", when: "2024 — Present", badge: "Full-time",
      role: "Conversation Designer", org: "Placeholder Labs",
      desc: "Designing dialogue systems and AI assistants end-to-end — from persona and tone to flows, error handling and evaluation.",
      skills: ["Conversation Design", "LLMs", "Prototyping"],
    },
    {
      type: "work", when: "2023 — 2024", badge: "Contract",
      role: "Data Scientist", org: "Sample Analytics Co.",
      desc: "Built predictive models and self-serve dashboards that helped non-technical teams make data-informed decisions.",
      skills: ["Python", "ML", "Data Viz"],
    },
    {
      type: "work", when: "2022 — 2023", badge: "Internship",
      role: "Data Analyst Intern", org: "Example Group",
      desc: "Cleaned, modeled and visualised messy real-world data; shipped my first production dashboard used company-wide.",
      skills: ["SQL", "Tableau", "Statistics"],
    },
    {
      type: "edu", when: "2022 — 2024", badge: "MSc",
      role: "MSc Data Science", org: "University Placeholder",
      desc: "Specialised in applied machine learning and human-centered AI, with a thesis on explainable conversational models.",
      skills: ["Machine Learning", "NLP", "Research"],
    },
    {
      type: "edu", when: "2019 — 2022", badge: "BSc",
      role: "BSc Artificial Intelligence", org: "University Placeholder",
      desc: "A broad foundation across statistics, cognitive science and programming — where data and language first collided for me.",
      skills: ["Statistics", "Cognitive Science", "Python"],
    },
    {
      type: "edu", when: "2018 — 2019", badge: "Foundation",
      role: "Foundation in Computing", org: "College Placeholder",
      desc: "The pre-university year that turned a hobby of tinkering with code into a deliberate path.",
      skills: ["Programming", "Mathematics"],
    },
  ],

  posts: [
    {
      date: "May 28, 2026", cat: "Essay",
      title: "Designing conversations that don't sound like a robot wrote them",
      excerpt: "Most chatbots fail not because of the model, but because nobody decided who they were supposed to be. A few principles I keep coming back to.",
      read: "6 min read", likes: 142,
    },
    {
      date: "Apr 14, 2026", cat: "Data",
      title: "What three years of personal habit data actually taught me",
      excerpt: "I tracked sleep, mood and focus for 1,000 days. The headline finding is boring, useful, and slightly embarrassing.",
      read: "9 min read", likes: 218,
    },
    {
      date: "Mar 2, 2026", cat: "Notes",
      title: "A field guide to explaining your model to people who hate math",
      excerpt: "Feature importance plots are not an explanation. Here's how I translate models into stories stakeholders can argue with.",
      read: "5 min read", likes: 96,
    },
    {
      date: "Jan 19, 2026", cat: "Essay",
      title: "On being a generalist in a world that rewards specialists",
      excerpt: "Data science and conversation design look unrelated until you realise both are about turning ambiguity into something usable.",
      read: "7 min read", likes: 174,
    },
    {
      date: "Dec 5, 2025", cat: "Build",
      title: "I made a tiny tool that turns weather into music. Here's why.",
      excerpt: "A short story about building useless things on purpose, and what the useless things keep teaching me about the useful ones.",
      read: "4 min read", likes: 88,
    },
  ],
};
