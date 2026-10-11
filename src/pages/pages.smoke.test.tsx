import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Person } from './Person';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { ProjectDetail } from './ProjectDetail';
import { BookDetail } from './BookDetail';
import { NotFound } from './NotFound';

afterEach(cleanup);

function renderAt(path: string, element: React.ReactNode, pattern = '/*') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={pattern} element={element} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('pages render without crashing', () => {
  it('Home leads with the profession', () => {
    renderAt('/', <Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /behind payments/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^my work$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /ai projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /deep learning specialization/i })).toBeInTheDocument();
    // Person is present but secondary (a teaser link), not the hero
    expect(screen.getByRole('heading', { name: /person behind the engineer/i })).toBeInTheDocument();
  });

  it('Person', () => {
    renderAt('/person', <Person />);
    expect(screen.getByText(/lose an hour to/i)).toBeInTheDocument();
  });

  it('Projects', () => {
    renderAt('/profession/projects', <Projects />);
    expect(screen.getByRole('heading', { level: 1, name: /projects/i })).toBeInTheDocument();
  });

  it('Experience', () => {
    renderAt('/profession/experience', <Experience />);
    expect(screen.getByText('Morgan Stanley')).toBeInTheDocument();
  });

  it('ProjectDetail (valid id)', () => {
    renderAt('/profession/projects/client-reporting', <ProjectDetail />, '/profession/projects/:projectId');
    expect(screen.getByRole('heading', { level: 1, name: /Client Reporting/i })).toBeInTheDocument();
  });

  it('BookDetail (valid id) shows empty editable fields', () => {
    renderAt('/person/library/the-namesake', <BookDetail />, '/person/library/:bookId');
    expect(screen.getByText(/Personal notes/i)).toBeInTheDocument();
    expect(screen.getAllByText(/not set/i).length).toBeGreaterThan(0);
  });

  it('NotFound', () => {
    renderAt('/nope', <NotFound />);
    expect(screen.getByText(/lost the thread/i)).toBeInTheDocument();
  });
});
