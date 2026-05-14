"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow, SectionHeader, HairlineDivider } from "../_shared/ui";

const STEPS = [
  {
    n: "01",
    name: "Find",
    title: "We figure out what's worth building.",
    body:
      "Every business is different. Before we build anything, we go deep into yours. We talk to your team, map your operations, and identify the AI opportunities that will actually move the needle for your specific situation. No generic playbooks. No copy-paste solutions.",
    diagram: <DiagnoseDiagram />,
  },
  {
    n: "02",
    name: "Build",
    title: "We build it.",
    body:
      "We design, build, and deploy the AI systems we identified. Voice agents, automations, custom AI tools, internal copilots, integrations into the software you already use. Built by us, owned by you.",
    diagram: <EmbedDiagram />,
  },
  {
    n: "03",
    name: "Stay",
    title: "We train your team and stay involved.",
    body:
      "The reason most AI projects fail is because the team never adopts them. We don't just hand you a tool and walk away. We train your team, monitor what's running, and keep improving the systems as your business changes.",
    diagram: <SustainDiagram />,
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          index={1}
          title="Find. Build. Adopt."
          lede="Three steps. Same engagement loop every time. Named, scoped, and accountable."
        />

        <div className="mt-12 sm:mt-16">
          {STEPS.map((s, i) => (
            <Step key={s.n} step={s} index={i} last={i === STEPS.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Step({ step, index, last }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="grid grid-cols-1 gap-x-12 gap-y-10 py-8 lg:grid-cols-12 lg:py-10"
    >
      <div className="lg:col-span-8">
        <p className="label-mono text-saffron">
          {step.n} · {step.name}
        </p>
        <h3 className="heading-3 mt-5 max-w-2xl text-4xl text-ink-50 sm:text-5xl md:text-6xl">
          {step.title}
        </h3>
        <p className="body-lead mt-8 max-w-xl text-lg text-ink-100 md:text-xl">{step.body}</p>
      </div>

      <div className="relative lg:col-span-4 lg:flex lg:items-start lg:justify-end">
        <div className="hairline aspect-square w-full max-w-[18rem] rounded-sm bg-ink-900/40 p-5">
          {step.diagram}
        </div>
      </div>

      {!last && (
        <div className="lg:col-span-12">
          <HairlineDivider className="mt-4" />
        </div>
      )}
    </motion.div>
  );
}

/* ── Diagrams ─────────────────────────────────────────────────────────── */

// FIND: a 4×3 grid of candidate AI opportunities. Most are dim possibilities.
// Three are chosen (saffron, with focus brackets): the ones worth building.
function DiagnoseDiagram() {
  const winners = new Set(["1-0", "3-1", "1-2"]);
  const tile = 36;
  const gap = 12;
  const startX = 30;
  const startY = 30;
  const cells = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      cells.push({ c, r, key: `${c}-${r}` });
    }
  }
  return (
    <svg
      viewBox="0 0 240 240"
      className="size-full"
      role="img"
      aria-label="Find: identifying opportunities worth building"
    >
      {cells.map(({ c, r, key }) => {
        const x = startX + c * (tile + gap);
        const y = startY + r * (tile + gap);
        const win = winners.has(key);
        return (
          <g key={key}>
            {win ? (
              <>
                {/* focus brackets, four corner ticks */}
                <path
                  d={`M ${x - 4} ${y + 6} L ${x - 4} ${y - 4} L ${x + 6} ${y - 4}
                      M ${x + tile - 6} ${y - 4} L ${x + tile + 4} ${y - 4} L ${x + tile + 4} ${y + 6}
                      M ${x + tile + 4} ${y + tile - 6} L ${x + tile + 4} ${y + tile + 4} L ${x + tile - 6} ${y + tile + 4}
                      M ${x + 6} ${y + tile + 4} L ${x - 4} ${y + tile + 4} L ${x - 4} ${y + tile - 6}`}
                  fill="none"
                  stroke="#F5C518"
                  strokeWidth="1"
                />
                <rect x={x} y={y} width={tile} height={tile} fill="#F5C518" />
                <circle cx={x + tile / 2} cy={y + tile / 2} r="2.5" fill="#0A0A0B" />
              </>
            ) : (
              <rect
                x={x}
                y={y}
                width={tile}
                height={tile}
                fill="none"
                stroke="#F4F5F4"
                strokeOpacity="0.15"
                strokeWidth="0.8"
              />
            )}
          </g>
        );
      })}
      <text
        x="120"
        y="220"
        textAnchor="middle"
        fontSize="8"
        fontFamily="var(--font-geist-mono)"
        fill="#7E8089"
        letterSpacing="0.22em"
      >
        WORTH BUILDING
      </text>
    </svg>
  );
}

// FIND v2: an organic operational network. Each dim node is one of the many things
// a business runs. The saffron nodes (with focus rings) are the operations worth
// building first. Reads as "we look across your business and surface the few that matter."
function DiagnoseDiagramNetwork() {
  const nodes = [
    { x: 45, y: 55 },
    { x: 115, y: 40 },
    { x: 185, y: 55 },
    { x: 200, y: 115 },
    { x: 85, y: 100, win: true },
    { x: 155, y: 130, win: true },
    { x: 50, y: 170 },
    { x: 125, y: 195, win: true },
  ];
  const edges = [
    [0, 1], [1, 2],
    [0, 4], [2, 3],
    [1, 5], [4, 5],
    [3, 5], [4, 6],
    [5, 7], [3, 7], [6, 7],
  ];

  return (
    <svg
      viewBox="0 0 240 240"
      className="size-full"
      role="img"
      aria-label="Find: surfacing the operations worth building from across the business"
    >
      {edges.map(([a, b], i) => (
        <line
          key={`e-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#F4F5F4"
          strokeOpacity="0.18"
          strokeWidth="0.8"
        />
      ))}

      {nodes.map((n, i) =>
        n.win ? (
          <g key={`n-${i}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r="14"
              fill="none"
              stroke="#F5C518"
              strokeOpacity="0.3"
              strokeWidth="0.8"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="9"
              fill="none"
              stroke="#F5C518"
              strokeOpacity="0.6"
              strokeWidth="0.8"
            />
            <circle cx={n.x} cy={n.y} r="4.5" fill="#F5C518" />
          </g>
        ) : (
          <circle
            key={`n-${i}`}
            cx={n.x}
            cy={n.y}
            r="3.5"
            fill="#0A0A0B"
            stroke="#F4F5F4"
            strokeOpacity="0.4"
            strokeWidth="0.8"
          />
        )
      )}

      <text
        x="120"
        y="225"
        textAnchor="middle"
        fontSize="8"
        fontFamily="var(--font-geist-mono)"
        fill="#7E8089"
        letterSpacing="0.22em"
      >
        WORTH BUILDING
      </text>
    </svg>
  );
}

// BUILD: four component modules (Voice, Auto, Copilot, API) wired
// into a central saffron "System" core. Reads as a system being assembled.
function EmbedDiagram() {
  const center = { x: 80, y: 105, w: 80, h: 30 };
  const cx = center.x + center.w / 2;
  const modules = [
    { x: 25, y: 30, w: 60, h: 26, label: "VOICE", corner: "tl" },
    { x: 155, y: 30, w: 60, h: 26, label: "AUTO", corner: "tr" },
    { x: 25, y: 184, w: 60, h: 26, label: "COPILOT", corner: "bl" },
    { x: 155, y: 184, w: 60, h: 26, label: "API", corner: "br" },
  ];
  return (
    <svg
      viewBox="0 0 240 240"
      className="size-full"
      role="img"
      aria-label="Build: components assembled into a system"
    >
      {/* L-shaped wires from each module to the central system */}
      {modules.map((m) => {
        const mxRight = m.x + m.w;
        const mxLeft = m.x;
        const myCenter = m.y + m.h / 2;
        const isLeft = m.corner === "tl" || m.corner === "bl";
        const isTop = m.corner === "tl" || m.corner === "tr";
        const elbow = cx;
        const targetY = isTop ? center.y : center.y + center.h;
        const startX = isLeft ? mxRight : mxLeft;
        return (
          <path
            key={m.label}
            d={`M ${startX} ${myCenter} L ${elbow} ${myCenter} L ${elbow} ${targetY}`}
            fill="none"
            stroke="#F5C518"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
        );
      })}
      {/* module boxes */}
      {modules.map((m) => (
        <g key={m.label}>
          <rect
            x={m.x}
            y={m.y}
            width={m.w}
            height={m.h}
            fill="#0A0A0B"
            stroke="#F4F5F4"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <text
            x={m.x + m.w / 2}
            y={m.y + m.h / 2 + 3}
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-geist-mono)"
            fill="#F4F5F4"
            letterSpacing="0.12em"
          >
            {m.label}
          </text>
        </g>
      ))}
      {/* central system core */}
      <rect x={center.x} y={center.y} width={center.w} height={center.h} fill="#F5C518" />
      <text
        x={cx}
        y={center.y + center.h / 2 + 3.5}
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--font-geist-mono)"
        fill="#0A0A0B"
        letterSpacing="0.16em"
        fontWeight="600"
      >
        SYSTEM
      </text>
      <text
        x="120"
        y="232"
        textAnchor="middle"
        fontSize="8"
        fontFamily="var(--font-geist-mono)"
        fill="#7E8089"
        letterSpacing="0.22em"
      >
        BUILT BY US
      </text>
    </svg>
  );
}

// STAY: continuous improvement loop. Four labels at compass positions
// (TRAIN, MONITOR, IMPROVE, ADAPT) with saffron arrows showing a cycle
// that never ends. Reads as ongoing involvement.
function SustainDiagram() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="size-full"
      role="img"
      aria-label="Stay: continuous train, monitor, improve, adapt loop"
    >
      <defs>
        <marker
          id="stay-arrow"
          markerWidth="6"
          markerHeight="6"
          refX="4"
          refY="3"
          orient="auto"
        >
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#F5C518" />
        </marker>
      </defs>

      {/* four curved arrow segments forming a closed loop */}
      <path
        d="M 138 66 Q 174 78 175 110"
        fill="none"
        stroke="#F5C518"
        strokeWidth="1.4"
        markerEnd="url(#stay-arrow)"
      />
      <path
        d="M 175 130 Q 174 162 138 174"
        fill="none"
        stroke="#F5C518"
        strokeWidth="1.4"
        markerEnd="url(#stay-arrow)"
      />
      <path
        d="M 102 174 Q 66 162 65 130"
        fill="none"
        stroke="#F5C518"
        strokeWidth="1.4"
        markerEnd="url(#stay-arrow)"
      />
      <path
        d="M 65 110 Q 66 78 102 66"
        fill="none"
        stroke="#F5C518"
        strokeWidth="1.4"
        markerEnd="url(#stay-arrow)"
      />

      {/* compass labels */}
      <text
        x="120"
        y="44"
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--font-geist-mono)"
        fill="#F4F5F4"
        letterSpacing="0.18em"
      >
        TRAIN
      </text>
      <text
        x="120"
        y="208"
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--font-geist-mono)"
        fill="#F4F5F4"
        letterSpacing="0.18em"
      >
        IMPROVE
      </text>
      <text
        x="226"
        y="124"
        textAnchor="end"
        fontSize="10"
        fontFamily="var(--font-geist-mono)"
        fill="#F4F5F4"
        letterSpacing="0.18em"
      >
        MONITOR
      </text>
      <text
        x="14"
        y="124"
        fontSize="10"
        fontFamily="var(--font-geist-mono)"
        fill="#F4F5F4"
        letterSpacing="0.18em"
      >
        ADAPT
      </text>

      {/* center */}
      <text
        x="120"
        y="118"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-geist-mono)"
        fill="#7E8089"
        letterSpacing="0.22em"
      >
        ONGOING
      </text>
      <text
        x="120"
        y="132"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-geist-mono)"
        fill="#7E8089"
        letterSpacing="0.22em"
      >
        LOOP
      </text>
      <circle cx="120" cy="139" r="1.5" fill="#F5C518" />
    </svg>
  );
}
