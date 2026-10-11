import { useMemo } from 'react';
import { rngFrom } from '@/utils/seed';

export type PlaceholderVariant =
  | 'mountains'
  | 'lake'
  | 'street'
  | 'forest'
  | 'city'
  | 'coffee'
  | 'food'
  | 'book'
  | 'window'
  | 'abstract';

interface Props {
  variant: PlaceholderVariant;
  seed: string;
  /** Primary palette hue for the scene */
  hue?: string;
  className?: string;
  /** Accessible description */
  alt: string;
  /** Show the small "sample" corner tag (default true) */
  sample?: boolean;
  rounded?: boolean;
}

const SKY = '#D8E6EF';
const CREAM = '#F7F2E9';
const PAPER = '#FCFAF5';
const WALNUT = '#795744';
const SAGE = '#A7B5A0';
const DEEP = '#456A83';
const CARAMEL = '#B89578';

/** A warm, editorial placeholder scene drawn as SVG. Deterministic per seed. */
export function PlaceholderImage({
  variant,
  seed,
  hue = DEEP,
  className,
  alt,
  sample = true,
  rounded = false,
}: Props) {
  const scene = useMemo(() => buildScene(variant, seed, hue), [variant, seed, hue]);

  return (
    <div
      className={`relative overflow-hidden ${rounded ? 'rounded-xl' : ''} ${className ?? ''}`}
      role="img"
      aria-label={`${alt} (sample illustration)`}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {scene}
      </svg>
      {sample && (
        <span className="pointer-events-none absolute bottom-1.5 right-1.5 rounded-full bg-paper/85 px-1.5 py-0.5 font-sans text-[9px] font-medium uppercase tracking-wider text-muted">
          Sample
        </span>
      )}
    </div>
  );
}

function buildScene(variant: PlaceholderVariant, seed: string, hue: string) {
  const r = rngFrom(seed + variant);
  const pick = <T,>(arr: T[]): T => arr[Math.floor(r() * arr.length)];

  switch (variant) {
    case 'mountains':
    case 'lake':
      return mountainScene(r, pick, hue, variant === 'lake');
    case 'forest':
      return forestScene(r, hue);
    case 'street':
    case 'city':
      return streetScene(r, pick, hue);
    case 'coffee':
      return coffeeScene(r);
    case 'food':
      return foodScene(r, pick);
    case 'book':
      return bookScene(r, hue);
    case 'window':
      return windowScene(r, hue);
    default:
      return abstractScene(r, pick, hue);
  }
}

/* ---------- scene builders ---------- */

function mountainScene(
  r: () => number,
  pick: <T>(a: T[]) => T,
  hue: string,
  lake: boolean,
) {
  const sun = 60 + r() * 280;
  const ranges = [hue, DEEP, SAGE];
  return (
    <>
      <rect width="400" height="300" fill={SKY} />
      <circle cx={sun} cy={70} r={26} fill={PAPER} opacity={0.9} />
      {[0, 1, 2].map((i) => {
        const base = 120 + i * 24;
        const h = 90 - i * 18;
        const x = -40 + i * 90 + r() * 40;
        return (
          <polygon
            key={i}
            points={`${x},${base} ${x + 120},${base - h} ${x + 170},${base - h * 0.6} ${x + 260},${base} `}
            fill={ranges[i % ranges.length]}
            opacity={0.55 + i * 0.15}
          />
        );
      })}
      {/* snow caps */}
      <polygon points="150,42 170,66 130,66" fill={PAPER} opacity={0.85} />
      {lake ? (
        <>
          <rect y="200" width="400" height="100" fill={DEEP} opacity={0.4} />
          <rect y="200" width="400" height="100" fill={SKY} opacity={0.35} />
        </>
      ) : (
        <rect y="210" width="400" height="90" fill={SAGE} opacity={0.5} />
      )}
      <rect y="200" width="400" height="4" fill={CREAM} opacity={0.6} />
      {pick([0, 1]) === 1 && (
        <circle cx={40 + r() * 320} cy={150 + r() * 20} r={2} fill={PAPER} />
      )}
    </>
  );
}

function forestScene(r: () => number, hue: string) {
  const trees = Array.from({ length: 9 }, (_, i) => i);
  return (
    <>
      <rect width="400" height="300" fill={SKY} />
      <rect y="150" width="400" height="150" fill={CREAM} />
      {trees.map((i) => {
        const x = 20 + i * 44 + r() * 14;
        const top = 90 + r() * 40;
        return (
          <g key={i}>
            <rect x={x - 3} y={top + 70} width={6} height={60} fill={WALNUT} opacity={0.8} />
            <polygon
              points={`${x},${top} ${x + 26},${top + 90} ${x - 26},${top + 90}`}
              fill={i % 2 ? SAGE : hue}
              opacity={0.75}
            />
          </g>
        );
      })}
    </>
  );
}

function streetScene(r: () => number, pick: <T>(a: T[]) => T, hue: string) {
  const buildings = Array.from({ length: 7 }, (_, i) => i);
  const facades = [CARAMEL, WALNUT, hue, SAGE, '#C9B9A3'];
  return (
    <>
      <rect width="400" height="300" fill={SKY} />
      <rect y="250" width="400" height="50" fill={CREAM} />
      {buildings.map((i) => {
        const w = 44 + r() * 18;
        const x = i * 58;
        const h = 150 + r() * 90;
        const fill = facades[i % facades.length];
        return (
          <g key={i}>
            <rect x={x} y={250 - h} width={w} height={h} fill={fill} opacity={0.9} />
            <polygon points={`${x},${250 - h} ${x + w / 2},${250 - h - 22} ${x + w},${250 - h}`} fill={WALNUT} opacity={0.8} />
            {[0, 1, 2].map((row) =>
              [0, 1].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={x + 8 + col * (w / 2 - 2)}
                  y={250 - h + 18 + row * 34}
                  width={12}
                  height={18}
                  fill={pick([SKY, PAPER, '#2E3F4D'])}
                  opacity={0.85}
                />
              )),
            )}
          </g>
        );
      })}
    </>
  );
}

function coffeeScene(r: () => number) {
  return (
    <>
      <rect width="400" height="300" fill={CREAM} />
      <ellipse cx="200" cy="250" rx="150" ry="24" fill={CARAMEL} opacity={0.25} />
      <circle cx="200" cy="170" r="78" fill={PAPER} stroke={WALNUT} strokeWidth="3" />
      <circle cx="200" cy="170" r="58" fill={WALNUT} opacity={0.85} />
      <circle cx="200" cy="170" r="58" fill="#3A2A20" opacity={0.6} />
      <path d="M278 150 q40 20 0 44" fill="none" stroke={WALNUT} strokeWidth="6" />
      {/* steam */}
      {[170, 200, 230].map((x, i) => (
        <path
          key={x}
          d={`M${x} 92 q${i % 2 ? 12 : -12} -18 0 -34`}
          fill="none"
          stroke={SAGE}
          strokeWidth="3"
          opacity={0.5 + r() * 0.2}
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

function foodScene(r: () => number, pick: <T>(a: T[]) => T) {
  const bits = Array.from({ length: 7 }, (_, i) => i);
  return (
    <>
      <rect width="400" height="300" fill={CREAM} />
      <circle cx="200" cy="155" r="120" fill={PAPER} stroke={CARAMEL} strokeWidth="4" />
      <circle cx="200" cy="155" r="88" fill="#EFE6D4" />
      {bits.map((i) => {
        const a = (i / bits.length) * Math.PI * 2 + r();
        const rad = 30 + r() * 45;
        return (
          <circle
            key={i}
            cx={200 + Math.cos(a) * rad}
            cy={155 + Math.sin(a) * rad}
            r={10 + r() * 10}
            fill={pick([SAGE, WALNUT, CARAMEL, DEEP, '#B4553F'])}
            opacity={0.8}
          />
        );
      })}
    </>
  );
}

function bookScene(r: () => number, hue: string) {
  return (
    <>
      <rect width="400" height="300" fill={CREAM} />
      <g transform="rotate(-6 200 150)">
        <rect x="120" y="70" width="160" height="200" rx="6" fill={hue} />
        <rect x="120" y="70" width="20" height="200" rx="4" fill="#2E3F4D" opacity={0.4} />
        <rect x="150" y="100" width="100" height="8" rx="4" fill={PAPER} opacity={0.75} />
        <rect x="150" y="118" width="70" height="8" rx="4" fill={PAPER} opacity={0.55} />
        <rect x="150" y="225" width="60" height="7" rx="3" fill={PAPER} opacity={0.5} />
      </g>
      {r() > 0.5 && <circle cx="300" cy="235" r="30" fill={SAGE} opacity={0.3} />}
    </>
  );
}

function windowScene(r: () => number, hue: string) {
  return (
    <>
      <rect width="400" height="300" fill={hue} opacity={0.35} />
      <rect x="60" y="40" width="280" height="220" rx="6" fill={SKY} />
      <rect x="60" y="40" width="280" height="220" rx="6" fill="none" stroke={WALNUT} strokeWidth="10" />
      <line x1="200" y1="40" x2="200" y2="260" stroke={WALNUT} strokeWidth="8" />
      <line x1="60" y1="150" x2="340" y2="150" stroke={WALNUT} strokeWidth="8" />
      {/* a plant on the sill */}
      <rect x="150" y="250" width="40" height="26" fill={CARAMEL} />
      <path d="M170 250 q-16 -30 -4 -50" fill="none" stroke={SAGE} strokeWidth="5" />
      <path d="M170 250 q16 -26 6 -44" fill="none" stroke={SAGE} strokeWidth="5" />
      {r() > 0.5 && <circle cx="110" cy="95" r="18" fill={PAPER} opacity={0.8} />}
    </>
  );
}

function abstractScene(r: () => number, pick: <T>(a: T[]) => T, hue: string) {
  const shapes = Array.from({ length: 6 }, (_, i) => i);
  return (
    <>
      <rect width="400" height="300" fill={CREAM} />
      {shapes.map((i) => (
        <circle
          key={i}
          cx={r() * 400}
          cy={r() * 300}
          r={30 + r() * 70}
          fill={pick([hue, SAGE, CARAMEL, SKY])}
          opacity={0.25}
        />
      ))}
    </>
  );
}
