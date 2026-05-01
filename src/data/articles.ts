import dataBreach from "@/assets/article-data-breach.jpg";
import phishing from "@/assets/article-phishing.jpg";
import classroom from "@/assets/article-classroom.jpg";
import exam from "@/assets/article-exam.jpg";

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  cover: string;
  heroImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "cyber-threats-and-awareness",
    title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
    subtitle:
      "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
    excerpt:
      "Cyber attacks doubled in 2025, but the most persistent vulnerability isn't technical — it's human. Why public awareness must become essential infrastructure.",
    cover: dataBreach,
    heroImage: phishing,
    category: "Cybersecurity",
    author: "Muhammad Raza",
    date: "March 12, 2026",
    readTime: "8 min read",
    body: [
      "In the race to digitise modern life, convenience has become the defining principle. From children navigating smartphones before they can write, to transport networks and public infrastructure running on interconnected systems, technology is no longer simply a tool—it is the environment in which we live. Yet as this environment expands, so too does its exposure to risk. The unsettling reality is that while cyber threats are accelerating, human awareness is not evolving alongside them.",
      "Recent figures from the National Cyber Security Centre illustrate the scale of the challenge. In 2025, the UK experienced 204 nationally significant cyber attacks—more than double the 89 recorded the previous year. Government data further indicates that nearly 43% of businesses identified breaches or attacks, with around one in five experiencing cyber crime directly. Globally, the trajectory is similarly concerning: thousands of breaches occur annually, while more than 30,000 new vulnerabilities were identified in 2024 alone.",
      "Cyber attacks are becoming more frequent, more sophisticated, and more deeply embedded in everyday systems. But the most persistent vulnerability is not technical—it is human.",
      "## The easiest system to breach",
      "Despite continuous investment in advanced security technologies, human behaviour remains central to the majority of cyber incidents. Research suggests that up to 88% of breaches involve some form of human error. This is not simply carelessness; it reflects a broader culture of passive interaction with technology.",
      "Social engineering has become the dominant method of attack. Rather than attempting to break through hardened systems, attackers target individuals directly—exploiting trust, urgency, and routine behaviour. Phishing alone accounts for approximately 93% of UK cyber crimes, increasingly enhanced by AI-generated messages and deepfake impersonations that are difficult to distinguish from legitimate communication.",
      "In this landscape, the user is no longer just a participant in the system, but its most accessible entry point. A reused password, a clicked link, or a hastily granted permission can bypass even the most sophisticated defences. Credential theft remains a leading cause of breaches, while email-based attacks continue to serve as a primary infection vector.",
      "## When breaches go unnoticed",
      "If human vulnerability enables attacks, delayed detection allows them to flourish. On average, organisations take 181 days to identify a breach, followed by an additional 60 days to contain it—an eight-month window in which attackers can operate largely undetected.",
      "During this period, attackers are not idle. They move through systems, escalate privileges, and extract sensitive data, often without triggering immediate alarms. By the time a breach is identified, the damage is not only complete but amplified. According to IBM, the global average cost of a data breach has reached approximately $4.44 million.",
      "## The quiet erosion of privacy",
      "Every breach carries a longer-term consequence: the gradual erosion of personal privacy. Unlike physical assets, stolen data does not disappear—it multiplies. Once compromised, it is copied, traded, and redistributed across digital networks, often resurfacing months or years later.",
      "## A failure of public awareness",
      "Cybersecurity knowledge is often treated as a specialist skill, rather than a basic life competency. During the Covid-19 pandemic, public health messaging successfully embedded simple protective behaviours into daily life. No equivalent effort exists for cybersecurity.",
      "Until awareness is treated as essential infrastructure—something to be built, maintained, and shared—cybersecurity will remain fundamentally incomplete. And in a world defined by digital dependence, that may prove to be the most critical weakness of all.",
    ],
  },
  {
    slug: "corporal-punishment-pakistan",
    title: "A Generation Under Fear: How Corporal Punishment Is Quietly Damaging Pakistan's Youth",
    subtitle: "When the future of a nation is shaped not by curiosity, but by fear.",
    excerpt:
      "Studies show over 90% of boys experience corporal punishment in school within a four-week period. The long-term psychological cost is reshaping a generation.",
    cover: classroom,
    heroImage: classroom,
    category: "Society",
    author: "Muhammad Raza",
    date: "February 28, 2026",
    readTime: "9 min read",
    body: [
      "Every generation is told it is the future of the nation. In Pakistan, that idea is repeated often—by policymakers, by educators, and by parents. But what happens when that future is shaped not by curiosity and confidence, but by fear?",
      "Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline. For countless children, the school day does not begin with learning, but with anxiety: the anticipation of humiliation, the threat of violence, and the quiet erosion of self-worth.",
      "The scale of the issue is significant. A 2018 peer-reviewed study found that more than 90% of boys and over 60% of girls experienced corporal punishment within a four-week period in school. More recent research from 2023 in Khyber Pakhtunkhwa reported that approximately 83% of students in schools and madrassas had been subjected to physical punishment.",
      "## Pressure, not cruelty",
      "For many teachers, this reality is not always rooted in cruelty, but in pressure. Overcrowded classrooms, rigid academic expectations, and a lack of training in behavioural management often leave educators with few tools. In such environments, physical punishment becomes a shortcut—an immediate way to assert control.",
      "## What the science says",
      "Studies from the CDC and World Health Organization show that adverse childhood experiences—including physical abuse, humiliation, and chronic fear—are strongly associated with mental health problems later in life. A child repeatedly exposed to punishment may begin to internalise damaging beliefs: that they are inadequate, that mistakes deserve pain, that authority must be feared rather than respected.",
      "Research highlighted by the Harvard Center on the Developing Child explains how prolonged exposure to stress in childhood—often referred to as 'toxic stress'—can affect brain development, particularly in areas related to learning, memory, and emotional control.",
      "## The legal landscape",
      "Laws such as the Islamabad Capital Territory Prohibition of Corporal Punishment Act 2021 and provincial measures in Sindh represent important progress. They signal a growing recognition that physical punishment has no place in education. However, enforcement remains uneven.",
      "If Pakistan is serious about investing in its future, the conversation around education must go beyond access and curriculum. It must include the psychological safety of students. Because the question is no longer whether corporal punishment exists. It is whether a nation can afford the long-term cost of ignoring its impact.",
    ],
  },
  {
    slug: "9am-exams-failing-students",
    title: "9AM Exams Are Failing Students — And We Know It",
    subtitle: "What appears to be a neutral testing environment is, in reality, a deeply uneven one.",
    excerpt:
      "Circadian science is clear: a 9AM exam is a biological barrier, not a level playing field. So why do we keep clinging to the fiction that it's fair?",
    cover: exam,
    heroImage: exam,
    category: "Education",
    author: "Muhammad Raza",
    date: "February 14, 2026",
    readTime: "10 min read",
    body: [
      "At 9:00 a.m. sharp, millions of students sit in a heavy, collective silence, staring at exam papers that will shape the trajectory of their adult lives. We are told this system represents fairness at its highest level—a standardised, meritocratic 'level playing field' where effort and ability determine outcomes.",
      "But the science tells a very different story.",
      "At that exact moment, a significant portion of those students are not fully awake. Not mentally, not biologically, and certainly not cognitively. What appears to be a neutral testing environment is, in reality, a deeply uneven one—tilted not by intelligence or preparation, but by biology.",
      "## A barrier of biology",
      "Human performance is governed by circadian rhythms—the internal biological clocks that regulate sleep, alertness and cognitive efficiency. A landmark study of more than 700 students in the Netherlands found that 'night owls' performed significantly worse in 9:00 a.m. exams than their 'morning-type' peers. Crucially, by early afternoon, this performance gap vanished entirely.",
      "What we often label as 'underperformance' in the morning is, in many cases, simply mistimed performance.",
      "## The teenage clock",
      "For teenagers, this misalignment is even more pronounced. Sleep researcher Mary Carskadon has described the impact in stark terms: asking a teenager to perform at high capacity at 8:00 or 9:00 a.m. is equivalent to asking an adult to function at around 4:00 a.m.",
      "## A 19th-century timetable",
      "Modern school timetables are, in many ways, a legacy of the Industrial Revolution. As Paul Kelley has pointed out, we are still attempting to run a 21st-century education system on a timetable designed for a 19th-century industrial society.",
      "## The simple solution",
      "The solution does not require sweeping reform or technological innovation. It is, in principle, remarkably simple: schedule exams at a time when students are actually awake. The science is clear. The evidence is consistent. The benefits are measurable.",
      "Until then, every 9:00 a.m. exam carries the same fundamental flaw. It is not a pure test of knowledge or ability. It is a test of how well a student can perform while half-asleep. And that is not education. It is bias, dressed up as fairness.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
