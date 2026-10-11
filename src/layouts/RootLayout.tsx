import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StatusBar } from '@/components/StatusBar';
import { ScrollToTop } from '@/components/ScrollToTop';

export function RootLayout() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-walnut focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <StatusBar />
      <Navbar />
      <motion.main
        id="main"
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
