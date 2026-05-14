// "Scenarios": typical client outcomes by industry. Patterns, not specific clients.
// slug is set only for scenarios that have a corresponding Field notes post.
export const CASE_STUDIES = [
  {
    slug: "/blog/home-services-scenario",
    sector: "Home services",
    headcount: "A typical home services company",
    region: "United States",
    duration: "Engagement-length",
    metric: "22%",
    metricLabel: "lift in booked jobs from inbound leads",
    metricSecondary: [
      { v: "60s", l: "response time, 24/7" },
      { v: "After-hours", l: "leads no longer lost overnight" },
    ],
    headline:
      "Their phone got answered. Their website forms and after-hours leads didn’t.",
    detail:
      "Form submissions sat for hours before anyone responded. Nights and weekends, leads went straight to the next morning. We built an AI lead response system that texts and calls every new lead within 60 seconds, 24/7. The competitor who used to win every after-hours job started losing them.",
  },
  {
    slug: "/blog/agency-scenario",
    sector: "Agency",
    headcount: "A typical agency",
    region: "United States",
    duration: "Engagement-length",
    metric: "28 hrs/week",
    metricLabel: "of senior team time reclaimed",
    metricSecondary: [
      { v: "1 stack", l: "tied to existing tools" },
      { v: "Strategy", l: "instead of status emails" },
    ],
    headline:
      "The team was buried in client work that didn’t need humans. Reporting, drafting, intake, status updates.",
    detail:
      "We built a custom AI workflow stack tied to the tools they already used. The senior team got back nearly a full week per month to focus on strategy and growth, not status emails.",
  },
  {
    slug: "/blog/ecommerce-scenario",
    sector: "Mid-market ecommerce",
    headcount: "A typical mid-market ecommerce brand",
    region: "United States",
    duration: "Quarter-one window",
    metric: "70% of tickets",
    metricLabel: "handled without a human",
    metricSecondary: [
      { v: "3x", l: "ticket volume, same headcount" },
      { v: "Live data", l: "not weekly spreadsheets" },
    ],
    headline:
      "Their CS team was drowning in tickets, their ops team was firefighting inventory, and the founder had no real-time visibility.",
    detail:
      "An AI customer service co-pilot, an internal inventory intelligence agent, and a real-time founder dashboard. The CS team handles 3x the ticket volume with the same headcount. The founder finally runs the business off live data instead of weekly spreadsheets.",
  },
];
