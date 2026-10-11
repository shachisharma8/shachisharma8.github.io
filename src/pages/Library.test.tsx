import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Library } from './Library';

afterEach(cleanup);

function renderLibrary() {
  return render(
    <MemoryRouter>
      <Library />
    </MemoryRouter>,
  );
}

describe('The Library', () => {
  it('filters books by a title search query', async () => {
    const user = userEvent.setup();
    renderLibrary();
    const search = screen.getByLabelText(/search the library/i);
    await user.type(search, 'namesake');
    expect(await screen.findByText('1 book match your filters.')).toBeInTheDocument();
    // The matching title appears (as a link)
    expect(screen.getAllByText('The Namesake').length).toBeGreaterThan(0);
  });

  it('switches to catalogue (list) view and shows status badges', async () => {
    const user = userEvent.setup();
    renderLibrary();
    await user.click(screen.getByRole('button', { name: /list/i }));
    // Default status label should be present in catalogue cards
    expect(screen.getAllByText('To read').length).toBeGreaterThan(0);
  });

  it('shows an empty state when nothing matches', async () => {
    const user = userEvent.setup();
    renderLibrary();
    await user.type(screen.getByLabelText(/search the library/i), 'zzzznotabook');
    expect(await screen.findByText(/no books on this shelf/i)).toBeInTheDocument();
  });

  it('reports the full catalogue count initially', () => {
    renderLibrary();
    const el = screen.getByText(
      (_, node) => node?.textContent === '25 books on the shelves.',
    );
    expect(el).toBeInTheDocument();
  });
});
