import { Navigate } from 'react-router-dom';

/**
 * The Profession overview now *is* the home page. This keeps the old
 * `/profession` URL (and any existing links/bookmarks) working by redirecting
 * to the landing page.
 */
export function Profession() {
  return <Navigate to="/" replace />;
}
