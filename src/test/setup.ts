import '@testing-library/jest-dom';
import { vi } from 'vitest';

// jsdom lacks these browser APIs that framer-motion / responsive hooks use.
class IO {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
// @ts-expect-error — minimal mock for tests
globalThis.IntersectionObserver = IO;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
