import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { books } from '@/data/books';
import { images, type ImageAsset } from '@/data/assets';
import { SampleImage } from '@/components/SampleImage';
import { SampleNote } from '@/components/Section';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface Area {
  to: string;
  eyebrow: string;
  title: string;
  copy: string;
  meta: string;
  asset: ImageAsset;
}

const areas: Area[] = [
  {
    to: '/person/library',
    eyebrow: 'The Library',
    title: 'A shelf you can actually browse',
    copy: 'Books of every height and colour, lined up the way they’d be in a real room. Search for a title, filter the shelves, or just run your eye along the spines.',
    meta: `${books.length} books`,
    asset: images.library.shelf,
  },
  {
    to: '/person/cooking',
    eyebrow: 'Cooking',
    title: 'Things I make',
    copy: 'Not a recipe site — a notebook. A few dishes, photographed in the good afternoon light, with the honest notes still in the margins.',
    meta: 'Coming next',
    asset: images.food.cooking,
  },
  {
    to: '/person/everyday',
    eyebrow: 'Everyday',
    title: 'The ordinary things',
    copy: 'Coffee going cold beside a book, a plant that somehow survived, the view from a train window. The small, unspectacular things a life is mostly made of.',
    meta: 'Coming next',
    asset: images.everyday.window,
  },
];

export function Person() {
  useDocumentMeta('The Person — Shachi Sharma', 'Books, cooking, and everyday life.');
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] as const },
  });

  return (
    <>
      {/* Intro */}
      <section className="paper-grain">
        <div className="container-editorial py-16 sm:py-20">
          <motion.p {...fade(0)} className="eyebrow mb-5">The Person</motion.p>
          <motion.h1
            {...fade(0.05)}
            className="max-w-4xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight"
          >
            Everything that makes me, <span className="italic text-blue-deep">me.</span>
          </motion.h1>
          <motion.p {...fade(0.12)} className="mt-6 max-w-reading text-lg text-muted">
            Less a blog, more a drawer you open and lose an hour to. There’s no right order here —
            pull out a travel journal, run a finger along the library shelf, or just sit with the
            ordinary things for a while.
          </motion.p>
          <motion.div {...fade(0.16)} className="mt-4">
            <SampleNote>
              Photographs and entries throughout the Person are illustrative samples, not personal
              archives. Swap in real photos any time.
            </SampleNote>
          </motion.div>
        </div>
      </section>

      {/* Areas — alternating editorial rows */}
      <section className="container-editorial space-y-5 pb-10">
        {areas.map((area, i) => (
          <motion.div key={area.to} {...fade(i * 0.05)}>
            <Link
              to={area.to}
              className="group grid items-stretch gap-0 overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-shadow hover:shadow-lift md:grid-cols-2"
            >
              <div className={`relative min-h-[220px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <SampleImage
                  asset={area.asset}
                  sample={false}
                  className="h-full w-full min-h-[220px] transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <p className="eyebrow flex items-center gap-2 text-walnut">
                    <span>0{i + 1}</span>
                    <span className="h-px w-4 bg-ink/20" />
                    {area.eyebrow}
                  </p>
                  <span className="rounded-full bg-cream px-2 py-0.5 font-sans text-[11px] text-muted">{area.meta}</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl leading-snug tracking-tight sm:text-3xl">{area.title}</h2>
                <p className="mt-3 max-w-md text-muted">{area.copy}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm text-blue-deep">
                  Open <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Bridge to Profession */}
      <section className="container-editorial pb-6">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-walnut/[0.06] p-8 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow mb-2">Back to the work</p>
            <p className="font-serif text-2xl tracking-tight">Where the code lives, and the problems I solve with it.</p>
          </div>
          <Link to="/" className="btn btn-primary shrink-0">
            See the work <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
