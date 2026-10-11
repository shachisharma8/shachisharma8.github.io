import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { Home } from '@/pages/Home';
import { Person } from '@/pages/Person';
import { Library } from '@/pages/Library';
import { BookDetail } from '@/pages/BookDetail';
import { Profession } from '@/pages/Profession';
import { Projects } from '@/pages/Projects';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { Experience } from '@/pages/Experience';
import { ComingSoon } from '@/pages/ComingSoon';
import { NotFound } from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <RootLayout />
    ),
    children: [
      { index: true, element: <Home /> },

      // Person
      { path: 'person', element: <Person /> },
      { path: 'person/library', element: <Library /> },
      { path: 'person/library/:bookId', element: <BookDetail /> },
      {
        path: 'person/cooking',
        element: <ComingSoon world="person" eyebrow="Person · Cooking" title="Things I make" blurb="A small cooking journal — warm photos, short notes, and what I'd change next time — is being composed next." />,
      },
      {
        path: 'person/everyday',
        element: <ComingSoon world="person" eyebrow="Person · Everyday" title="The ordinary things" blurb="A visual archive of coffee, reading corners, rainy days, and little moments — with a memory shuffle — is being composed next." />,
      },

      // Profession
      { path: 'profession', element: <Profession /> },
      { path: 'profession/projects', element: <Projects /> },
      { path: 'profession/projects/:projectId', element: <ProjectDetail /> },
      { path: 'profession/experience', element: <Experience /> },

      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
]);
