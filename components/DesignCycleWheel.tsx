/**
 * An original illustration of the MYP Design Cycle: four criteria, sixteen strands,
 * arranged as a wheel. This is Meridian's own artwork, not a reproduction of the
 * IB's design cycle diagram.
 */
export function DesignCycleWheel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-labelledby="design-cycle-wheel-title"
    >
      <title id="design-cycle-wheel-title">
        The MYP Design Cycle as a wheel: Criterion A, Inquiring and analysing; Criterion B,
        Developing ideas; Criterion C, Creating the solution; Criterion D, Evaluating, each
        with its four strands, read clockwise.
      </title>
      <defs>
        <marker id="wheel-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--ink)" opacity={0.55} />
        </marker>
      </defs>

      <path key={0} d="M 300 122 A 178 178 0 0 1 478 300 L 430 300 A 130 130 0 0 0 300 170 Z" fill="#0B5478" stroke="var(--paper)" strokeWidth={3} />
      <text key={1} x={408.89} y={191.11} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">A</text>
      <path key={2} d="M 300 50 A 250 250 0 0 1 395.67 69.03 L 368.12 135.55 A 178 178 0 0 0 300 122 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={3} x={341.55} y={91.09} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={341.55} dy="-0.35em">Explain</tspan><tspan x={341.55} dy="1.1em">need</tspan></text>
      <path key={4} d="M 395.67 69.03 A 250 250 0 0 1 476.78 123.22 L 425.87 174.13 A 178 178 0 0 0 368.12 135.55 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={5} x={418.34} y={122.9} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={418.34} dy="-0.35em">Prioritize</tspan><tspan x={418.34} dy="1.1em">research</tspan></text>
      <path key={6} d="M 476.78 123.22 A 250 250 0 0 1 530.97 204.33 L 464.45 231.88 A 178 178 0 0 0 425.87 174.13 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={7} x={477.1} y={181.66} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={477.1} dy="-0.35em">Analyse</tspan><tspan x={477.1} dy="1.1em">products</tspan></text>
      <path key={8} d="M 530.97 204.33 A 250 250 0 0 1 550 300 L 478 300 A 178 178 0 0 0 464.45 231.88 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={9} x={508.91} y={258.45} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={508.91} dy="-0.35em">Design</tspan><tspan x={508.91} dy="1.1em">brief</tspan></text>

      <path key={10} d="M 478 300 A 178 178 0 0 1 300 478 L 300 430 A 130 130 0 0 0 430 300 Z" fill="#F0782A" stroke="var(--paper)" strokeWidth={3} />
      <text key={11} x={408.89} y={408.89} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">B</text>
      <path key={12} d="M 550 300 A 250 250 0 0 1 530.97 395.67 L 464.45 368.12 A 178 178 0 0 0 478 300 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={13} x={508.91} y={341.55} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={508.91} dy="-0.35em">Design</tspan><tspan x={508.91} dy="1.1em">specification</tspan></text>
      <path key={14} d="M 530.97 395.67 A 250 250 0 0 1 476.78 476.78 L 425.87 425.87 A 178 178 0 0 0 464.45 368.12 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={15} x={477.1} y={418.34} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={477.1} dy="-0.35em">Design</tspan><tspan x={477.1} dy="1.1em">ideas</tspan></text>
      <path key={16} d="M 476.78 476.78 A 250 250 0 0 1 395.67 530.97 L 368.12 464.45 A 178 178 0 0 0 425.87 425.87 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={17} x={418.34} y={477.1} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={418.34} dy="-0.35em">Justify</tspan><tspan x={418.34} dy="1.1em">design</tspan></text>
      <path key={18} d="M 395.67 530.97 A 250 250 0 0 1 300 550 L 300 478 A 178 178 0 0 0 368.12 464.45 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={19} x={341.55} y={508.91} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={341.55} dy="-0.35em">Planning</tspan><tspan x={341.55} dy="1.1em">drawings</tspan></text>

      <path key={20} d="M 300 478 A 178 178 0 0 1 122 300 L 170 300 A 130 130 0 0 0 300 430 Z" fill="#0B7A50" stroke="var(--paper)" strokeWidth={3} />
      <text key={21} x={191.11} y={408.89} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">C</text>
      <path key={22} d="M 300 550 A 250 250 0 0 1 204.33 530.97 L 231.88 464.45 A 178 178 0 0 0 300 478 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={23} x={258.45} y={508.91} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={258.45} dy="-0.35em">Construct</tspan><tspan x={258.45} dy="1.1em">plan</tspan></text>
      <path key={24} d="M 204.33 530.97 A 250 250 0 0 1 123.22 476.78 L 174.13 425.87 A 178 178 0 0 0 231.88 464.45 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={25} x={181.66} y={477.1} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={181.66} dy="-0.35em">Demonstrate</tspan><tspan x={181.66} dy="1.1em">skills</tspan></text>
      <path key={26} d="M 123.22 476.78 A 250 250 0 0 1 69.03 395.67 L 135.55 368.12 A 178 178 0 0 0 174.13 425.87 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={27} x={122.9} y={418.34} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={122.9} dy="-0.35em">Create</tspan><tspan x={122.9} dy="1.1em">solution</tspan></text>
      <path key={28} d="M 69.03 395.67 A 250 250 0 0 1 50 300 L 122 300 A 178 178 0 0 0 135.55 368.12 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={29} x={91.09} y={341.55} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={91.09} dy="-0.35em">Justify</tspan><tspan x={91.09} dy="1.1em">changes</tspan></text>

      <path key={30} d="M 122 300 A 178 178 0 0 1 300 122 L 300 170 A 130 130 0 0 0 170 300 Z" fill="#D9433F" stroke="var(--paper)" strokeWidth={3} />
      <text key={31} x={191.11} y={191.11} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">D</text>
      <path key={32} d="M 50 300 A 250 250 0 0 1 69.03 204.33 L 135.55 231.88 A 178 178 0 0 0 122 300 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={33} x={91.09} y={258.45} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={91.09} dy="-0.35em">Design</tspan><tspan x={91.09} dy="1.1em">testing</tspan></text>
      <path key={34} d="M 69.03 204.33 A 250 250 0 0 1 123.22 123.22 L 174.13 174.13 A 178 178 0 0 0 135.55 231.88 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={35} x={122.9} y={181.66} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={122.9} dy="-0.35em">Evaluate</tspan><tspan x={122.9} dy="1.1em">success</tspan></text>
      <path key={36} d="M 123.22 123.22 A 250 250 0 0 1 204.33 69.03 L 231.88 135.55 A 178 178 0 0 0 174.13 174.13 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={37} x={181.66} y={122.9} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={181.66} dy="-0.35em">Explain</tspan><tspan x={181.66} dy="1.1em">improvement</tspan></text>
      <path key={38} d="M 204.33 69.03 A 250 250 0 0 1 300 50 L 300 122 A 178 178 0 0 0 231.88 135.55 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
      <text key={39} x={258.45} y={91.09} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={258.45} dy="-0.35em">Explain</tspan><tspan x={258.45} dy="1.1em">impact</tspan></text>

      <path key={40} d="M 254.16 40.01 A 264 264 0 0 1 345.84 40.01" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />
      <path key={41} d="M 559.99 254.16 A 264 264 0 0 1 559.99 345.84" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />
      <path key={42} d="M 345.84 559.99 A 264 264 0 0 1 254.16 559.99" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />
      <path key={43} d="M 40.01 345.84 A 264 264 0 0 1 40.01 254.16" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />

      <circle cx={300} cy={300} r={126} fill="var(--paper)" stroke="#e5e5e5" strokeWidth={1} />
      <text x={300} y={292} textAnchor="middle" dominantBaseline="central" fontSize={16} fontWeight={700} fill="var(--ink)">The Design</text>
      <text x={300} y={314} textAnchor="middle" dominantBaseline="central" fontSize={16} fontWeight={700} fill="var(--ink)">Cycle</text>
    </svg>
  );
}
