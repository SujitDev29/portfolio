export type PersonalInfo = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  specializations: string[];
};

export type SkillLevel = "expert" | "proficient" | "learning";

export type SkillItem = {
  name: string;
  level: SkillLevel;
  years?: number;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export type ExperienceProject = {
  name: string;
  description: string;
};

export type ExperienceAchievement = {
  metric: string;
  value: string;
};

export type ExperienceJob = {
  title: string;
  company: string;
  location: string;
  period: string;
  scope: string;
  teamSize?: number;
  keyAchievements?: ExperienceAchievement[];
  projects: ExperienceProject[];
  tech: string[];
};

export const personalInfo: PersonalInfo = {
  name: "Sujit Gaikwad",
  title: "React Native & Full Stack Developer",
  location: "Pune, India",
  email: "sujit.g@octogle.com",
  phone: "+91 9699378637",
  linkedin: "https://linkedin.com/in/sujit-gaikwad",
  github: "https://github.com/SujitDev29",
  specializations: [
    "Real-time UX",
    "Offline-first systems",
    "Mobile-first UX",
    "Cross-platform parity",
  ],
};

export const summary =
  "I build cross-platform mobile and web products for teams that need their internal tools and customer apps to feel like one product, not three. Over the last 4+ years I've shipped Workchat-class real-time messaging, Thermal Hub's hands-free voice UX for floor operators, and Chitale Connect's offline-first order sync — work where reconnect logic, perceived latency, and entry-level Android performance decide whether a feature lands. I care about the unglamorous middle layer: state machines, sync engines, and component vocabularies that hold up across iOS, Android, and the web from a single codebase posture.";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", level: "expert", years: 4 },
      { name: "TypeScript", level: "proficient", years: 3 },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", level: "expert", years: 4 },
      { name: "Redux", level: "proficient", years: 4 },
      { name: "Redux Toolkit", level: "expert", years: 3 },
      { name: "Context API", level: "proficient", years: 3 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", level: "expert", years: 3 },
      { name: "Next.js", level: "proficient", years: 1 },
    ],
  },
  {
    category: "Backend & Integration",
    items: [
      { name: "REST APIs", level: "expert", years: 4 },
      { name: "Firebase", level: "proficient", years: 3 },
      { name: "Google Maps API", level: "proficient", years: 2 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "expert", years: 4 },
      { name: "GitHub", level: "expert", years: 4 },
      { name: "Postman", level: "proficient", years: 4 },
      { name: "VS Code", level: "expert", years: 4 },
      { name: "Claude", level: "proficient", years: 1 },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "Full Stack Development", level: "proficient", years: 3 },
      { name: "Cross-Platform Development", level: "expert", years: 4 },
      { name: "Mobile UI/UX", level: "expert", years: 4 },
      { name: "Agile/Scrum", level: "proficient", years: 4 },
    ],
  },
];

export const experience: ExperienceJob[] = [
  {
    title: "Full Stack Developer",
    company: "Octogle Technologies",
    location: "Pune",
    period: "Sep 2025 – Present",
    scope:
      "Owning the React Native client and shared React.js web app for Workchat and Artista from a single component vocabulary, plus AI-assisted iteration on copy and edge cases.",
    teamSize: 6,
    keyAchievements: [
      { metric: "Platforms shipped", value: "3" },
      { metric: "Tools replaced", value: "2" },
      { metric: "Msg latency", value: "<250ms" },
    ],
    projects: [
      {
        name: "Artista",
        description:
          "Travel platform enabling users to create accounts, explore destinations, and book customized tours.",
      },
      {
        name: "Workchat",
        description:
          "Professional communication application featuring real-time chat, voice/video calls, and secure data uploads.",
      },
    ],
    tech: ["React Native", "React.js", "Claude"],
  },
  {
    title: "Software Developer",
    company: "Stepron Technologies Pvt. Ltd.",
    location: "Pune",
    period: "Nov 2022 – Sep 2025",
    scope:
      "Lead React Native + React.js engineer on Thermal Hub and Build ID — owning Redux Toolkit state, Firebase listeners, and the audio-response system that cut floor task time by 30%.",
    teamSize: 8,
    keyAchievements: [
      { metric: "Task time", value: "−30%" },
      { metric: "Best Employee", value: "2023" },
      { metric: "Products", value: "2" },
    ],
    projects: [
      {
        name: "Build ID",
        description:
          "React.js solution for the construction industry with timesheet tracking, expense management, and Google Maps API integration.",
      },
      {
        name: "Thermal Hub",
        description:
          "Web and mobile apps for internal operations, including an audio response system that reduced task time by 30%.",
      },
    ],
    tech: ["React Native", "Redux Toolkit", "Firebase", "React.js", "Postman"],
  },
  {
    title: "React Native Developer",
    company: "Sutradhar Project Consultancy Pvt. Ltd.",
    location: "Pune",
    period: "Oct 2021 – Nov 2022",
    scope:
      "Shipped React Native clients for Dairy Point of View and Chitale Connect with a focus on low-literacy UX, entry-level Android performance, and an offline-first sync engine that reconciles local storage with the server.",
    teamSize: 5,
    keyAchievements: [
      { metric: "Order duplicates", value: "≈0" },
      { metric: "Apps shipped", value: "2" },
    ],
    projects: [
      {
        name: "Dairy Point of View",
        description:
          "Mobile app to streamline milk collection workflows and veterinary task assignments.",
      },
      {
        name: "Chitale Connect",
        description:
          "State management with React hooks to synchronize local storage data to the server for online orders.",
      },
    ],
    tech: ["React Native", "Redux Toolkit", "Postman"],
  },
];

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type BeforeAfterRow = {
  metric: string;
  before: string;
  after: string;
};

export type CaseStudyTimelinePhase = {
  phase: string;
  period: string;
  summary: string;
};

export type TechnicalChallenge = {
  problem: string;
  solution: string;
  codeSnippet?: { language: string; code: string };
};

export type ArchitectureDiagram = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type RelatedContentItem = {
  title: string;
  url: string;
  type: "blog" | "talk" | "oss";
};

export type CaseStudy = {
  status: "Live" | "In Production" | "Internal" | "Archived";
  period: string;
  role: string;
  teamSize?: number;
  yourScope?: string;
  summary: string;
  problem: string;
  responsibilities: string[];
  features: CaseStudyFeature[];
  outcome: string;
  metrics?: CaseStudyMetric[];
  beforeAfter?: BeforeAfterRow[];
  timeline?: CaseStudyTimelinePhase[];
  technicalChallenge?: TechnicalChallenge;
  architectureDiagram?: ArchitectureDiagram;
  relatedContent?: RelatedContentItem[];
  takeaways: string[];
};

export type Project = {
  slug: string;
  name: string;
  company: string;
  type: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "artista",
    name: "Artista",
    company: "Octogle Technologies",
    type: "Mobile + Web",
    description:
      "Travel platform enabling users to create accounts, explore destinations, and book customized tours.",
    tech: ["React Native", "React.js", "Claude"],
    caseStudy: {
      status: "In Production",
      period: "Sep 2025 – Present",
      role: "Full Stack Developer",
      teamSize: 4,
      yourScope:
        "Owned the React Native client + the shared React.js web surface; drove Claude-assisted iteration on copy and layout.",
      summary:
        "Cross-platform travel platform spanning iOS, Android, and web that lets travellers discover destinations, build itineraries, and book customised tours end-to-end.",
      problem:
        "Existing tour-booking flows on the market force travellers between marketing sites and disconnected vendor portals. Artista needed a single, branded surface where discovery, customisation, and checkout happen in one continuous flow on whichever device the user prefers.",
      responsibilities: [
        "Owned the React Native client architecture and the shared web experience built in React.js.",
        "Designed the destination-browsing and itinerary-customisation UX with Claude-assisted iteration on copy and layouts.",
        "Integrated REST APIs for catalog, pricing, and bookings with optimistic UI patterns.",
        "Tuned navigation, image loading, and list virtualisation so that destination feeds remain smooth on mid-tier Android devices.",
      ],
      features: [
        {
          title: "Account & itinerary system",
          description:
            "Account creation, saved trips, and customisable tours that persist across mobile and web sessions.",
        },
        {
          title: "Destination discovery",
          description:
            "Curated destination feeds with rich media, filters, and shareable trip plans.",
        },
        {
          title: "Booking flow",
          description:
            "Multi-step booking with payment hand-off, confirmation states, and graceful failure recovery.",
        },
      ],
      outcome:
        "Shipped a unified experience where the same user can switch between phone and desktop without losing state, with Claude-assisted iteration cutting prototyping turnaround dramatically.",
      beforeAfter: [
        {
          metric: "Booking surface",
          before: "Marketing site + vendor portal",
          after: "Single branded app on phone + web",
        },
        {
          metric: "Cross-device state",
          before: "Lost between sessions",
          after: "Persists across phone and desktop",
        },
        {
          metric: "Prototype turnaround",
          before: "Multi-day design rounds",
          after: "Same-day Claude-assisted iteration",
        },
      ],
      timeline: [
        {
          phase: "Discovery",
          period: "Sep 2025",
          summary:
            "Mapped tour-booking flows, audited competing surfaces, agreed on a single shared component vocabulary.",
        },
        {
          phase: "Cross-platform shell",
          period: "Sep – Oct 2025",
          summary:
            "Built the React Native client and React.js web app on a shared design language; wired account + itinerary persistence.",
        },
        {
          phase: "Booking flow",
          period: "Oct – Nov 2025",
          summary:
            "Multi-step booking with payment hand-off, optimistic UI, and graceful failure recovery on flaky connections.",
        },
        {
          phase: "Polish & launch",
          period: "Nov 2025 – Present",
          summary:
            "List virtualisation, image-loading tuning, and Claude-assisted copy passes on edge cases.",
        },
      ],
      technicalChallenge: {
        problem:
          "A single user starts an itinerary on the phone in transit and finishes it on a desktop at home. Losing the in-progress trip across devices kills the booking before it converts.",
        solution:
          "Treat the itinerary as the canonical document, server-owned and pulled on each session start, with optimistic local edits that reconcile on save. The same hook drives the React Native screen and the React.js page so behaviour can't drift between platforms.",
        codeSnippet: {
          language: "ts",
          code: `export function useItinerary(id: string) {
  const [draft, setDraft] = useState<Itinerary | null>(null);
  const [serverVersion, setServerVersion] = useState(0);

  // Pull the canonical doc on session start; never trust local cache alone.
  useEffect(() => {
    let cancelled = false;
    fetchItinerary(id).then((doc) => {
      if (cancelled) return;
      setDraft(doc);
      setServerVersion(doc.version);
    });
    return () => { cancelled = true; };
  }, [id]);

  const update = useCallback(async (patch: Partial<Itinerary>) => {
    setDraft((d) => (d ? { ...d, ...patch } : d)); // optimistic
    const next = await saveItinerary(id, patch, serverVersion);
    setServerVersion(next.version);
  }, [id, serverVersion]);

  return { draft, update };
}`,
        },
      },
      takeaways: [
        "A shared design language across React Native and React.js compresses the surface area you have to maintain.",
        "AI-assisted iteration is most useful at the edges — copy, polish, and edge cases — not at the architectural core.",
      ],
    },
  },
  {
    slug: "workchat",
    name: "Workchat",
    company: "Octogle Technologies",
    type: "Mobile + Web",
    description:
      "Professional communication app with real-time chat, voice/video calls, and secure data uploads.",
    tech: ["React Native", "React.js", "WebRTC", "REST APIs"],
    caseStudy: {
      status: "In Production",
      period: "Sep 2025 – Present",
      role: "Full Stack Developer",
      teamSize: 6,
      yourScope:
        "Architected the React Native client and the parallel React.js web app from a shared component vocabulary; owned real-time messaging, calling UX, and Android crash/ANR triage.",
      summary:
        "Workchat is a workplace communication suite that brings real-time messaging, voice and video calling, and secure document sharing into one cross-platform product running on iOS, Android, and the web.",
      problem:
        "Teams were stitching together generic chat, video, and file-sharing tools that did not respect company boundaries — credentials were duplicated, upload audit trails were thin, and switching between apps killed flow. Workchat needed to collapse those tools into a single product that IT could trust and end users would actually open.",
      responsibilities: [
        "Architected the React Native client and the parallel React.js web app from a shared component vocabulary.",
        "Built the real-time messaging layer with optimistic updates, retry on reconnect, and read-receipts that survive network blips.",
        "Implemented voice and video calling flows including device permission UX, call state machines, and graceful degradation when bandwidth drops.",
        "Hardened the file-upload pipeline with chunked uploads, server-side validation hooks, and progress UI that doesn't lie when retries are happening underneath.",
        "Owned crash and ANR triage on Android, where the bulk of users sit on memory-constrained devices.",
      ],
      features: [
        {
          title: "Real-time chat",
          description:
            "1:1 and group conversations with typing indicators, reactions, and message status that reconciles correctly after offline periods.",
        },
        {
          title: "Voice & video calls",
          description:
            "In-app calling with permission flows, call quality indicators, and handoff between devices on the same account.",
        },
        {
          title: "Secure data uploads",
          description:
            "Chunked file uploads with resume-on-failure, virus-scan hooks, and per-conversation retention controls.",
        },
        {
          title: "Cross-platform parity",
          description:
            "A single feature set that behaves the same on iOS, Android, and web, so support never has to qualify answers by platform.",
        },
      ],
      outcome:
        "Workchat replaced two third-party tools internally and is rolling out to client teams. Median message latency stays under 250 ms on broadband, and the same release branch ships across all three platforms each cycle.",
      metrics: [
        { label: "Platforms shipped", value: "3" },
        { label: "Tools replaced", value: "2" },
        { label: "Median message latency", value: "<250ms" },
      ],
      beforeAfter: [
        {
          metric: "Tools per team",
          before: "3+ third-party apps",
          after: "1 unified product",
        },
        {
          metric: "Median message latency",
          before: "Variable, 500ms – 1.5s",
          after: "<250ms on broadband",
        },
        {
          metric: "Platform parity",
          before: "Web-first, mobile lagging",
          after: "Same release across iOS/Android/web",
        },
        {
          metric: "First-call success",
          before: "Permission failures silent",
          after: "Explicit permission UX, retried on reconnect",
        },
      ],
      timeline: [
        {
          phase: "Foundations",
          period: "Sep 2025",
          summary:
            "Defined the shared component vocabulary used by React Native and React.js; locked the messaging contract with backend.",
        },
        {
          phase: "Real-time messaging",
          period: "Oct 2025",
          summary:
            "Optimistic state, retry-on-reconnect, read-receipts that survive network blips, ordered delivery on reconnect.",
        },
        {
          phase: "Calling",
          period: "Nov 2025",
          summary:
            "WebRTC-backed voice and video with permission flows, call state machine, bandwidth degradation handling.",
        },
        {
          phase: "Hardening",
          period: "Dec 2025 – Present",
          summary:
            "Chunked file uploads, Android crash/ANR triage on memory-constrained devices, audit hooks for IT.",
        },
      ],
      technicalChallenge: {
        problem:
          "Optimistic message state is easy when the network is healthy. The hard cases are mid-send disconnects, message ordering after reconnect, and not lying to the user with read-receipts that flip back.",
        solution:
          "Each outbound message is a state machine — pending → sending → sent → delivered → read — with a client-generated id used as the idempotency key so retries can't duplicate. On reconnect we re-send anything still in 'sending' and reconcile receipts against the server's authoritative timeline. The UI only shows transitions that move forward.",
        codeSnippet: {
          language: "ts",
          code: `type Status = "pending" | "sending" | "sent" | "delivered" | "read" | "failed";

const ORDER: Record<Status, number> = {
  pending: 0, sending: 1, sent: 2, delivered: 3, read: 4, failed: -1,
};

// Never let a message slide backwards in the UI — receipts can race.
function reconcile(local: Status, incoming: Status): Status {
  if (incoming === "failed" && local !== "read") return "failed";
  return ORDER[incoming] > ORDER[local] ? incoming : local;
}

export function applyReceipt(messages: Msg[], id: string, status: Status) {
  return messages.map((m) =>
    m.id === id ? { ...m, status: reconcile(m.status, status) } : m
  );
}`,
        },
      },
      takeaways: [
        "Real-time UX lives or dies on reconnect logic — get optimistic state and retry semantics right before you decorate the UI.",
        "WebRTC permission UX is its own product surface; treating it as plumbing leads to silent first-call failures that you only catch in support tickets.",
        "Sharing one component vocabulary between React Native and React saved more engineering time than any individual feature.",
      ],
    },
  },
  {
    slug: "build-id",
    name: "Build ID",
    company: "Stepron Technologies",
    type: "Web",
    description:
      "Construction industry solution with timesheet tracking, expense management, and Google Maps integration.",
    tech: ["React.js", "Google Maps API", "REST APIs"],
    caseStudy: {
      status: "In Production",
      period: "Nov 2022 – Sep 2025",
      role: "Software Developer",
      teamSize: 5,
      yourScope:
        "Built the React.js front end end-to-end — timesheet capture, expense flows, and Google Maps overlay — and tightened it for one-handed mobile-browser use.",
      summary:
        "A web platform built for construction crews to capture timesheets, manage on-site expenses, and surface job-site locations on a live map — replacing paper logs and scattered spreadsheets.",
      problem:
        "Construction operations were running on Excel and group chats. Hours were logged after the fact, expenses got lost, and managers had no real-time view of which crew was where. The team needed a single tool that field workers would actually use on a phone browser without training.",
      responsibilities: [
        "Built the React.js front end including timesheet capture, expense submission, and approval workflows.",
        "Integrated Google Maps API for site visualisation, geofencing, and route playback for crew check-ins.",
        "Worked with the API team via Postman to iterate on shared contracts before front-end implementation.",
        "Tightened the data-entry forms for one-handed mobile-browser use, since most crews submit time from the truck.",
      ],
      features: [
        {
          title: "Timesheet tracking",
          description:
            "Daily and weekly entry with project codes, supervisor approvals, and edit history.",
        },
        {
          title: "Expense management",
          description:
            "Receipt uploads, category tagging, and reimbursement state visible to both worker and approver.",
        },
        {
          title: "Site map integration",
          description:
            "Google Maps overlay of job sites, crew check-ins, and route playback for compliance audits.",
        },
      ],
      outcome:
        "Operations moved off spreadsheets onto a system the crews actually use, with managers getting real-time visibility into hours and spend that previously surfaced only at month-end.",
      beforeAfter: [
        {
          metric: "Time logging",
          before: "Excel + group chats",
          after: "Web app, daily entry with approvals",
        },
        {
          metric: "Manager visibility",
          before: "Month-end only",
          after: "Real-time hours and spend",
        },
        {
          metric: "Crew location",
          before: "Phone calls",
          after: "Live map with check-ins and route playback",
        },
      ],
      timeline: [
        {
          phase: "Forms first",
          period: "Nov 2022 – Feb 2023",
          summary:
            "Timesheet and expense forms tuned for mobile-browser use from the truck — minimal taps, large hit targets, offline-tolerant submit.",
        },
        {
          phase: "Maps integration",
          period: "Feb – Jun 2023",
          summary:
            "Google Maps API for geofenced check-ins, route playback for compliance audits, and per-site overlays.",
        },
        {
          phase: "Approval workflows",
          period: "Jul 2023 – Sep 2025",
          summary:
            "Supervisor approvals, edit history, and reimbursement state visible to both worker and approver.",
        },
      ],
      technicalChallenge: {
        problem:
          "Geofence accuracy on consumer Android browsers is wildly inconsistent — battery-saver modes throttle GPS, and false negatives mean crews can't check in. We had to make the map useful without trusting any single fix.",
        solution:
          "Sample location across a short window, drop outliers by accuracy radius, and accept the median fix as the check-in point. The UI shows a confidence pill so supervisors know when a check-in was estimated vs. precise.",
        codeSnippet: {
          language: "ts",
          code: `async function getStableFix(opts = { samples: 5, timeoutMs: 8000 }) {
  const fixes: GeolocationPosition[] = [];
  const start = Date.now();
  while (fixes.length < opts.samples && Date.now() - start < opts.timeoutMs) {
    try {
      fixes.push(await getCurrentPosition({ enableHighAccuracy: true, maximumAge: 0 }));
    } catch { break; }
  }
  if (fixes.length === 0) throw new Error("no_fix");
  // Drop the worst third by accuracy, then take the median lat/lng of the rest.
  fixes.sort((a, b) => a.coords.accuracy - b.coords.accuracy);
  const kept = fixes.slice(0, Math.ceil(fixes.length * 2 / 3));
  return medianLatLng(kept);
}`,
        },
      },
      takeaways: [
        "Tools for non-desktop users have to win on mobile-browser ergonomics first; everything else is secondary.",
        "Map integrations are easy to demo and hard to ship — geofence accuracy and battery cost are the real engineering problem.",
      ],
    },
  },
  {
    slug: "thermal-hub",
    name: "Thermal Hub",
    company: "Stepron Technologies",
    type: "Mobile + Web",
    description:
      "Internal operations platform with an audio response system that reduced task time by 30%.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "React.js"],
    caseStudy: {
      status: "In Production",
      period: "Nov 2022 – Sep 2025",
      role: "Software Developer",
      teamSize: 5,
      yourScope:
        "Designed and shipped the audio-response system; owned Redux Toolkit slices for tasks/audio/offline queue and tuned Firebase listeners for the supervisor dashboard.",
      summary:
        "Thermal Hub is an internal operations platform spanning mobile and web, used by field teams to triage tasks. Its audio-response system lets operators acknowledge and update jobs hands-free, which cut task completion time by 30%.",
      problem:
        "Operators on the floor were toggling between gloves, equipment, and a phone screen to update job status. Every tap was a context switch, and tasks piled up because the UI assumed both hands were free. The team wanted to keep the same workflow but eliminate the friction of touch input where possible.",
      responsibilities: [
        "Built the React Native client and synchronised it with the React.js web counterpart used by supervisors.",
        "Designed and shipped the audio-response system that listens for short voice acknowledgements and updates Firebase task state in near-real time.",
        "Owned Redux Toolkit slices for tasks, audio state, and offline queueing so updates survive flaky warehouse Wi-Fi.",
        "Tuned Firebase listeners and pagination so the supervisor dashboard stayed responsive as historical data grew.",
      ],
      features: [
        {
          title: "Audio response system",
          description:
            "Hands-free voice acknowledgements that move tasks through state without taking gloves off or unlocking the phone.",
        },
        {
          title: "Real-time task sync",
          description:
            "Firebase-backed task feed shared between operators on mobile and supervisors on web.",
        },
        {
          title: "Offline-tolerant updates",
          description:
            "Queued mutations that replay correctly when connectivity returns, with a visible queue state so users trust it.",
        },
      ],
      outcome:
        "Task completion time dropped by 30% after the audio-response system rolled out, and supervisors got a live operations view that previously required calls and spreadsheets.",
      metrics: [
        { label: "Task time reduction", value: "30%" },
        { label: "Platforms", value: "Mobile + Web" },
      ],
      beforeAfter: [
        {
          metric: "Task completion time",
          before: "Baseline",
          after: "−30%",
        },
        {
          metric: "Hands required",
          before: "Two (gloves off)",
          after: "Zero (voice ack)",
        },
        {
          metric: "Supervisor view",
          before: "Calls + spreadsheets",
          after: "Live dashboard",
        },
        {
          metric: "Offline updates",
          before: "Lost or duplicated",
          after: "Queued, replayed, idempotent",
        },
      ],
      timeline: [
        {
          phase: "Workflow analysis",
          period: "Nov 2022 – Jan 2023",
          summary:
            "Shadowed operators on the floor; mapped every tap that happened with gloves on or hands full.",
        },
        {
          phase: "Voice prototype",
          period: "Feb – May 2023",
          summary:
            "Built the audio-response loop: short utterance recognition, a forgiving state machine, Firebase task updates.",
        },
        {
          phase: "Offline queue",
          period: "Jun – Oct 2023",
          summary:
            "Redux Toolkit slices for queued mutations, retry-on-reconnect, and a visible queue UI so users trust it.",
        },
        {
          phase: "Scale-out",
          period: "Nov 2023 – Sep 2025",
          summary:
            "Tuned Firebase listener footprint and pagination so supervisor dashboards stayed responsive as history grew.",
        },
      ],
      technicalChallenge: {
        problem:
          "Voice input is only useful if the state machine behind it tolerates partial matches. A perfect transcription model that fails on 'ack' vs. 'acknowledge' breaks the workflow worse than tapping would.",
        solution:
          "Map a small whitelist of utterances to task transitions, accept fuzzy matches above a confidence threshold, and always show the recognised text + the action it triggered so the operator can correct in flight. Updates flow through the offline queue so a missed Wi-Fi packet never costs the user the action.",
        codeSnippet: {
          language: "ts",
          code: `const ACK_WORDS = ["ack", "acknowledge", "got it", "okay", "yes"];
const DONE_WORDS = ["done", "complete", "finished", "closed"];

function classify(utterance: string, confidence: number) {
  if (confidence < 0.55) return null;
  const u = utterance.toLowerCase().trim();
  if (ACK_WORDS.some((w) => u.includes(w)))  return "ack" as const;
  if (DONE_WORDS.some((w) => u.includes(w))) return "done" as const;
  return null;
}

export function dispatchVoice(utterance: string, confidence: number, taskId: string) {
  const action = classify(utterance, confidence);
  if (!action) return { ok: false as const, reason: "low_confidence" };
  // Always go through the offline queue; never call Firebase directly from the recogniser.
  enqueue({ type: action === "ack" ? "TASK_ACK" : "TASK_DONE", taskId });
  return { ok: true as const, action };
}`,
        },
      },
      takeaways: [
        "Voice as an input is only useful when the recognition model and the state machine behind it are both forgiving — partial matches matter more than perfect transcription.",
        "Offline-first state is non-negotiable for floor-ops apps; treat connectivity loss as the default, not the exception.",
        "Firebase scales fine for these workloads if you discipline your listener footprint early.",
      ],
    },
  },
  {
    slug: "dairy-point-of-view",
    name: "Dairy Point of View",
    company: "Sutradhar Project Consultancy",
    type: "Mobile",
    description:
      "Mobile app to streamline milk collection workflows and veterinary task assignments.",
    tech: ["React Native", "Redux Toolkit", "REST APIs"],
    caseStudy: {
      status: "In Production",
      period: "Oct 2021 – Nov 2022",
      role: "React Native Developer",
      teamSize: 4,
      yourScope:
        "Built the React Native collection workflow and veterinary task screens for low-literacy users on entry-level Android hardware.",
      summary:
        "A React Native app for dairy field operations that streamlines daily milk collection workflows and routes veterinary tasks to the right specialist.",
      problem:
        "Daily milk collection was tracked on paper and routed by phone calls. Veterinary issues fell through the cracks because there was no shared system between collectors and field vets. The app had to work for low-literacy users on entry-level Android phones with intermittent connectivity.",
      responsibilities: [
        "Built the collection-workflow screens in React Native with iconographic UI suited to low-literacy use.",
        "Implemented Redux Toolkit slices for collection sessions, animal records, and task assignments.",
        "Worked with the API team via Postman to align mobile contracts with the back-office system.",
        "Tested on entry-level Android hardware to make sure the app stayed usable on 1 GB RAM devices.",
      ],
      features: [
        {
          title: "Milk collection workflows",
          description:
            "Per-session capture of quantity, fat, and SNF readings tied to individual suppliers.",
        },
        {
          title: "Veterinary task assignments",
          description:
            "Issue reporting from the field that routes automatically to the assigned veterinarian.",
        },
      ],
      outcome:
        "The app replaced paper logs across collection routes and gave veterinary teams a single inbox for field-reported issues.",
      beforeAfter: [
        {
          metric: "Daily logs",
          before: "Paper",
          after: "Per-session app capture",
        },
        {
          metric: "Vet routing",
          before: "Phone calls",
          after: "Auto-routed task inbox",
        },
        {
          metric: "Min device RAM",
          before: "Untested",
          after: "Validated on 1GB devices",
        },
      ],
      timeline: [
        {
          phase: "Field research",
          period: "Oct – Dec 2021",
          summary:
            "Visited collection routes; co-designed iconographic UI with collectors who don't read fluently.",
        },
        {
          phase: "Collection app",
          period: "Jan – Jun 2022",
          summary:
            "React Native screens for per-session capture (quantity, fat, SNF) tied to suppliers; Redux Toolkit for session state.",
        },
        {
          phase: "Vet routing",
          period: "Jul – Nov 2022",
          summary:
            "Field-reported veterinary issues that route automatically to the assigned vet's inbox; Postman-driven contract iteration with the API team.",
        },
      ],
      technicalChallenge: {
        problem:
          "On 1GB-RAM Android phones the default FlatList for hundreds of suppliers stalls scrolling and chokes on image thumbnails. Field workers can't wait through a 200ms hitch on every scroll.",
        solution:
          "Strict virtualisation budget — fixed item heights, removeClippedSubviews, lazy thumbnail loading via expo-image cache, and a windowed list size tuned for the slowest device in QA. Bundle size came down by deferring map and chart screens behind dynamic imports.",
        codeSnippet: {
          language: "tsx",
          code: `<FlatList
  data={suppliers}
  keyExtractor={(s) => s.id}
  renderItem={renderRow}
  // Tuned on a 1GB Android target — anything larger drops frames during fling.
  initialNumToRender={8}
  maxToRenderPerBatch={6}
  windowSize={5}
  removeClippedSubviews
  getItemLayout={(_, i) => ({ length: ROW_H, offset: ROW_H * i, index: i })}
/>`,
        },
      },
      takeaways: [
        "Designing for low-literacy users forces clarity that benefits every other user too.",
        "On entry-level Android hardware, list virtualisation and bundle size dominate the user experience — features come second.",
      ],
    },
  },
  {
    slug: "chitale-connect",
    name: "Chitale Connect",
    company: "Sutradhar Project Consultancy",
    type: "Mobile",
    description:
      "Synchronized local storage data to the server for seamless online order management.",
    tech: ["React Native", "Redux Toolkit", "AsyncStorage"],
    caseStudy: {
      status: "In Production",
      period: "Oct 2021 – Nov 2022",
      role: "React Native Developer",
      teamSize: 3,
      yourScope:
        "Designed the local-first state model with React hooks + AsyncStorage and built the sync engine that reconciles to the server with idempotency keys.",
      summary:
        "A React Native order-management app where users place and manage online orders that stay consistent between local device storage and the server, even across spotty connectivity.",
      problem:
        "Order placement was failing or duplicating whenever the network blipped. The team needed a sync model where local state was always trustworthy on the device and the server eventually caught up without losing or duplicating orders.",
      responsibilities: [
        "Implemented the local-first state model with React hooks and AsyncStorage as the durable layer.",
        "Built the sync engine that reconciles local and server state, with idempotency keys to prevent duplicate orders.",
        "Designed the order-placement UX so users always see immediate feedback even when the network is in the middle of a retry.",
      ],
      features: [
        {
          title: "Local-first orders",
          description:
            "Orders are written to device storage first and confirmed to the user before any network call resolves.",
        },
        {
          title: "Sync engine",
          description:
            "Background reconciliation with the server using idempotency keys so retries never produce duplicate orders.",
        },
      ],
      outcome:
        "Order failures and duplicates dropped to near zero on flaky networks, and the local-first model became a reusable pattern for later projects.",
      beforeAfter: [
        {
          metric: "Order duplicates on retry",
          before: "Frequent",
          after: "≈0",
        },
        {
          metric: "Perceived placement time",
          before: "Tied to network",
          after: "Instant (local-first)",
        },
        {
          metric: "Failed orders on flaky Wi-Fi",
          before: "Common",
          after: "Replayed on reconnect",
        },
      ],
      timeline: [
        {
          phase: "Local-first model",
          period: "Oct – Dec 2021",
          summary:
            "AsyncStorage as the durable layer, React hooks driving the UI; orders confirmed to the user before any network call resolves.",
        },
        {
          phase: "Sync engine",
          period: "Jan – Jun 2022",
          summary:
            "Background reconciliation with idempotency keys so retries never produce duplicate orders; conflict resolution prefers the server's view of accepted-but-unacked orders.",
        },
        {
          phase: "Hardening",
          period: "Jul – Nov 2022",
          summary:
            "Clearer queue states in the UI, timed retry backoff, and instrumentation around the failure modes that previously caused duplicates.",
        },
      ],
      technicalChallenge: {
        problem:
          "Naive 'retry on failure' produces duplicate orders the moment the server accepts a request but the response is lost on the way back. The user sees a failure, taps retry, and gets charged twice.",
        solution:
          "Generate an idempotency key on the device when the user confirms — not when the network call starts — and send it on every retry of that specific order. The server treats repeated keys as the same order and returns the original receipt. Locally the order is in 'pending-sync' until acknowledged, and the UI never lets the user 'place' the same draft twice.",
        codeSnippet: {
          language: "ts",
          code: `type LocalOrder = { id: string; idemKey: string; payload: OrderPayload; state: "draft" | "pending-sync" | "synced" };

export async function placeOrder(draft: OrderPayload) {
  const idemKey = uuid();      // generated at user-confirm, not at request time
  const local: LocalOrder = { id: idemKey, idemKey, payload: draft, state: "pending-sync" };
  await persistLocal(local);   // user sees confirmation immediately
  scheduleSync(local);
  return local;
}

async function scheduleSync(o: LocalOrder) {
  for (let attempt = 0; ; attempt++) {
    try {
      await api.placeOrder(o.payload, { idempotencyKey: o.idemKey });
      await markSynced(o.id);
      return;
    } catch (e) {
      if (!isRetriable(e)) { await markFailed(o.id, e); return; }
      await sleep(backoff(attempt));
    }
  }
}`,
        },
      },
      takeaways: [
        "Idempotency keys are the cheapest insurance you can buy against network-induced duplicates.",
        "Local-first UX feels faster even when the underlying network is the same — the perception is the product.",
      ],
    },
  },
];

export const education = [
  {
    degree: "Master of Computer Application",
    institution: "Savitribai Phule Pune University",
    year: "2023",
    cgpa: "8.9",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Savitribai Phule Pune University",
    year: "2021",
    cgpa: "6.92",
  },
];

export const achievements = [
  'Awarded "Best Employee of the Year" for outstanding performance — Stepron Technologies, 2023',
];
